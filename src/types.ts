export type DayKey =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

export const ALL_DAYS: readonly DayKey[] = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
] as const;

export const DEFAULT_DAYS: readonly DayKey[] = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
] as const;

/** Magyar napnevek a fejlécben. */
export const DAY_LABELS: Record<DayKey, string> = {
  monday: 'Hétfő',
  tuesday: 'Kedd',
  wednesday: 'Szerda',
  thursday: 'Csütörtök',
  friday: 'Péntek',
  saturday: 'Szombat',
  sunday: 'Vasárnap',
};

/** Date.getDay() (0=vasárnap) → DayKey. */
export const DAY_FROM_JS_INDEX: readonly DayKey[] = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
] as const;

/**
 * Egy sor az órarendben. `start`/`end` opcionálisak: ha megvannak, a bal oldali
 * idő-oszlopban megjelennek; ha nincsenek (pl. délutáni adhoc sor), csak a label.
 */
export interface Period {
  label: string;
  start?: string;
  end?: string;
}

export interface SubjectMeta {
  color?: string;
  icon?: string;
}

/**
 * Egy cella a schedule-ban. Lehet:
 *  - `null` / üres string: nincs óra.
 *  - egyszerű string: tantárgynév (metaadatokat a `subjects` map-ből húzzuk).
 *  - objektum: tantárgynév + per-cella időpont (délutáni / adhoc foglalkozás).
 */
export type ScheduleCell =
  | string
  | null
  | {
      subject: string;
      /** Szöveges időpont, pl. "15:00" vagy "15:00–16:00". Szabadon formázható. */
      time?: string;
    };

export interface CardConfig {
  type: string;
  title?: string;
  days?: DayKey[];
  /**
   * Ha `false`, a fix órák `start`/`end` időpontja nem jelenik meg a bal oszlopban
   * — csak a `label` (pl. „1. óra"). A cellán belüli `time` mezőt nem érinti.
   * Alapértelmezés: `true`.
   */
  show_times?: boolean;
  periods: Period[];
  subjects?: Record<string, SubjectMeta>;
  schedule: Partial<Record<DayKey, ScheduleCell[]>>;
}

/** Normalizált (belső) cella, amit a render már közvetlenül használ. */
export interface NormalizedCell {
  subject: string | null;
  time?: string;
}
