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

export interface Period {
  /** Pl. "1."; break slotnál lehet üres. */
  label: string;
  /** "HH:MM" */
  start: string;
  /** "HH:MM" */
  end: string;
  /** Ha true, ez egy szünet-sor, a schedule cellát figyelmen kívül hagyjuk. */
  break?: boolean;
}

export interface SubjectMeta {
  /** CSS szín, pl. "#ffb347" vagy "tomato". */
  color?: string;
  /** Material Design ikon, pl. "mdi:calculator-variant". */
  icon?: string;
}

export interface CardConfig {
  type: string;
  title?: string;
  days?: DayKey[];
  periods: Period[];
  subjects?: Record<string, SubjectMeta>;
  schedule: Partial<Record<DayKey, (string | null)[]>>;
}
