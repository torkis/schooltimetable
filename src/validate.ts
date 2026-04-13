import {
  ALL_DAYS,
  CardConfig,
  DEFAULT_DAYS,
  DayKey,
  NormalizedCell,
  Period,
  ScheduleCell,
  SubjectMeta,
} from './types.js';

const TIME_RE = /^([01]\d|2[0-3]):[0-5]\d$/;

function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}

function isDayKey(value: string): value is DayKey {
  return (ALL_DAYS as readonly string[]).includes(value);
}

export interface NormalizedConfig {
  type: string;
  title?: string;
  days: DayKey[];
  showTimes: boolean;
  /** Perc éjféltől. Ha van értéke, ettől kezdve a mai nap kiemelése átvált a következő iskolai napra. */
  nextDayAfterMinutes?: number;
  periods: Period[];
  subjects: Record<string, SubjectMeta>;
  /** Minden nap pontosan `periods.length` hosszú; a hiányzókat üres cellával töltjük ki. */
  schedule: Partial<Record<DayKey, NormalizedCell[]>>;
}

function normalizeCell(raw: ScheduleCell, location: string): NormalizedCell {
  if (raw === null || raw === undefined || raw === '') {
    return { subject: null };
  }
  if (typeof raw === 'string') {
    return { subject: raw };
  }
  if (typeof raw === 'object') {
    if (typeof raw.subject !== 'string' || raw.subject.length === 0) {
      throw new Error(`${location}: a \`subject\` mező kötelező és nem üres szöveg.`);
    }
    if (raw.time !== undefined && typeof raw.time !== 'string') {
      throw new Error(`${location}: a \`time\` mező szöveg kell hogy legyen.`);
    }
    return { subject: raw.subject, time: raw.time };
  }
  throw new Error(`${location}: érvénytelen cella (sem string, sem objektum, sem null).`);
}

/**
 * Validálja a nyers YAML configot és visszaad egy normalizált másolatot.
 * Hiba esetén magyar nyelvű Error-t dob, amit a HA UI megjelenít.
 */
export function validateConfig(raw: unknown): NormalizedConfig {
  if (!raw || typeof raw !== 'object') {
    throw new Error('Érvénytelen konfiguráció: üres vagy nem objektum.');
  }
  const cfg = raw as Partial<CardConfig>;

  if (!Array.isArray(cfg.periods) || cfg.periods.length === 0) {
    throw new Error('`periods` mező kötelező, és legalább egy órát kell tartalmaznia.');
  }

  const periods: Period[] = cfg.periods.map((p, i) => {
    if (!p || typeof p !== 'object') {
      throw new Error(`periods[${i}] nem érvényes objektum.`);
    }
    const { start, end, label } = p as Period;
    const hasStart = start !== undefined;
    const hasEnd = end !== undefined;
    if (hasStart !== hasEnd) {
      throw new Error(
        `periods[${i}]: a \`start\` és \`end\` mezők együtt megadandók vagy együtt elhagyandók.`,
      );
    }
    if (hasStart) {
      if (typeof start !== 'string' || !TIME_RE.test(start)) {
        throw new Error(`periods[${i}].start érvénytelen (HH:MM formátum kell, pl. "08:00").`);
      }
      if (typeof end !== 'string' || !TIME_RE.test(end)) {
        throw new Error(`periods[${i}].end érvénytelen (HH:MM formátum kell).`);
      }
      if (toMinutes(start) >= toMinutes(end)) {
        throw new Error(
          `periods[${i}]: a kezdő időpont (${start}) nem lehet későbbi a végénél (${end}).`,
        );
      }
    }
    return {
      label: typeof label === 'string' ? label : '',
      ...(hasStart ? { start, end } : {}),
    };
  });

  const days: DayKey[] = Array.isArray(cfg.days)
    ? cfg.days.map((d, i) => {
        if (typeof d !== 'string' || !isDayKey(d)) {
          throw new Error(
            `days[${i}] ismeretlen nap: "${String(d)}". Megengedett: ${ALL_DAYS.join(', ')}.`,
          );
        }
        return d;
      })
    : [...DEFAULT_DAYS];

  if (!cfg.schedule || typeof cfg.schedule !== 'object') {
    throw new Error('`schedule` mező kötelező.');
  }

  const schedule: Partial<Record<DayKey, NormalizedCell[]>> = {};
  for (const [key, value] of Object.entries(cfg.schedule)) {
    if (!isDayKey(key)) {
      throw new Error(`schedule: ismeretlen nap "${key}". Megengedett: ${ALL_DAYS.join(', ')}.`);
    }
    if (!Array.isArray(value)) {
      throw new Error(`schedule.${key} listának kell lennie.`);
    }
    if (value.length > periods.length) {
      throw new Error(
        `schedule.${key} hossza (${value.length}) nagyobb, mint a periods hossza (${periods.length}).`,
      );
    }
    const normalized: NormalizedCell[] = value.map((v, i) =>
      normalizeCell(v as ScheduleCell, `schedule.${key}[${i}]`),
    );
    // Feltöltjük a végéig üres cellákkal, hogy a render egyszerű legyen.
    while (normalized.length < periods.length) {
      normalized.push({ subject: null });
    }
    schedule[key] = normalized;
  }

  if (cfg.show_times !== undefined && typeof cfg.show_times !== 'boolean') {
    throw new Error('`show_times` mezőnek boolean-nak kell lennie (true / false).');
  }

  let nextDayAfterMinutes: number | undefined;
  if (cfg.next_day_after !== undefined) {
    if (typeof cfg.next_day_after !== 'string' || !TIME_RE.test(cfg.next_day_after)) {
      throw new Error(
        '`next_day_after` érvénytelen (HH:MM formátum kell, pl. "20:00").',
      );
    }
    nextDayAfterMinutes = toMinutes(cfg.next_day_after);
  }

  return {
    type: typeof cfg.type === 'string' ? cfg.type : 'custom:school-timetable-card',
    title: typeof cfg.title === 'string' ? cfg.title : undefined,
    days,
    showTimes: cfg.show_times !== false,
    nextDayAfterMinutes,
    periods,
    subjects: cfg.subjects && typeof cfg.subjects === 'object' ? cfg.subjects : {},
    schedule,
  };
}
