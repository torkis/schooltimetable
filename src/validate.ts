import { ALL_DAYS, CardConfig, DEFAULT_DAYS, DayKey, Period } from './types.js';

const TIME_RE = /^([01]\d|2[0-3]):[0-5]\d$/;

function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}

function isDayKey(value: string): value is DayKey {
  return (ALL_DAYS as readonly string[]).includes(value);
}

/**
 * Validálja a nyers YAML configot és visszaad egy normalizált másolatot.
 * Hiba esetén magyar nyelvű Error-t dob, amit a HA UI megjelenít.
 */
export function validateConfig(raw: unknown): Required<Pick<CardConfig, 'periods' | 'schedule'>> & CardConfig {
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
    const { start, end, label, break: isBreak } = p as Period;
    if (typeof start !== 'string' || !TIME_RE.test(start)) {
      throw new Error(`periods[${i}].start érvénytelen (HH:MM formátum kell, pl. "08:00").`);
    }
    if (typeof end !== 'string' || !TIME_RE.test(end)) {
      throw new Error(`periods[${i}].end érvénytelen (HH:MM formátum kell).`);
    }
    if (toMinutes(start) >= toMinutes(end)) {
      throw new Error(`periods[${i}]: a kezdő időpont (${start}) nem lehet későbbi a végénél (${end}).`);
    }
    return {
      label: typeof label === 'string' ? label : '',
      start,
      end,
      break: isBreak === true,
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

  const schedule: Partial<Record<DayKey, (string | null)[]>> = {};
  for (const [key, value] of Object.entries(cfg.schedule)) {
    if (!isDayKey(key)) {
      throw new Error(`schedule: ismeretlen nap "${key}". Megengedett: ${ALL_DAYS.join(', ')}.`);
    }
    if (!Array.isArray(value)) {
      throw new Error(`schedule.${key} listának kell lennie (tantárgynevek vagy null).`);
    }
    if (value.length > periods.length) {
      throw new Error(
        `schedule.${key} hossza (${value.length}) nagyobb, mint a periods hossza (${periods.length}).`,
      );
    }
    schedule[key] = value.map((v) => {
      if (v === null || v === undefined || v === '') return null;
      if (typeof v !== 'string') {
        throw new Error(`schedule.${key}: a tantárgy neve string vagy null kell legyen.`);
      }
      return v;
    });
  }

  return {
    type: typeof cfg.type === 'string' ? cfg.type : 'custom:school-timetable-card',
    title: typeof cfg.title === 'string' ? cfg.title : undefined,
    days,
    periods,
    subjects: cfg.subjects && typeof cfg.subjects === 'object' ? cfg.subjects : {},
    schedule,
  };
}
