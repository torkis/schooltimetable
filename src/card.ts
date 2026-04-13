import { LitElement, html, nothing, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { cardStyles } from './styles.js';
import {
  CardConfig,
  DAY_FROM_JS_INDEX,
  DAY_LABELS,
  DayKey,
  Period,
  SubjectMeta,
} from './types.js';
import { validateConfig } from './validate.js';

const CARD_TAG = 'school-timetable-card';
const REFRESH_INTERVAL_MS = 5 * 60 * 1000; // 5 perc — éjfél körül biztos napot vált

interface NormalizedConfig extends CardConfig {
  days: DayKey[];
  subjects: Record<string, SubjectMeta>;
}

@customElement(CARD_TAG)
export class SchoolTimetableCard extends LitElement {
  static override styles = cardStyles;

  @state() private _config?: NormalizedConfig;
  @state() private _todayKey: DayKey = DAY_FROM_JS_INDEX[new Date().getDay()];

  private _refreshTimer?: number;

  public setConfig(config: unknown): void {
    this._config = validateConfig(config) as NormalizedConfig;
  }

  public getCardSize(): number {
    return (this._config?.periods.length ?? 0) + 1;
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this._updateToday();
    this._refreshTimer = window.setInterval(() => this._updateToday(), REFRESH_INTERVAL_MS);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._refreshTimer !== undefined) {
      window.clearInterval(this._refreshTimer);
      this._refreshTimer = undefined;
    }
  }

  private _updateToday(): void {
    const current = DAY_FROM_JS_INDEX[new Date().getDay()];
    if (current !== this._todayKey) {
      this._todayKey = current;
    }
  }

  override render(): TemplateResult {
    if (!this._config) return html``;
    const cfg = this._config;
    const todayVisible = cfg.days.includes(this._todayKey);

    return html`
      <ha-card>
        ${cfg.title ? html`<div class="title">${cfg.title}</div>` : nothing}
        <table>
          <thead>
            <tr>
              <th class="time-col"></th>
              ${cfg.days.map(
                (day) => html`
                  <th
                    class=${todayVisible && day === this._todayKey ? 'today-head' : ''}
                  >
                    ${DAY_LABELS[day]}
                  </th>
                `,
              )}
            </tr>
          </thead>
          <tbody>
            ${cfg.periods.map((period, rowIdx) => this._renderRow(period, rowIdx, todayVisible))}
          </tbody>
        </table>
      </ha-card>
    `;
  }

  private _renderRow(period: Period, rowIdx: number, todayVisible: boolean): TemplateResult {
    const cfg = this._config!;
    const isBreak = period.break === true;

    return html`
      <tr class=${isBreak ? 'break-row' : ''}>
        <td class="time-col">
          ${period.label
            ? html`<span class="period-label">${period.label}</span>`
            : nothing}
          <span class="period-time">${period.start}–${period.end}</span>
        </td>
        ${cfg.days.map((day) => {
          const isToday = todayVisible && day === this._todayKey;
          const cellClass = isToday ? 'today' : '';
          if (isBreak) {
            return html`<td class=${cellClass}>szünet</td>`;
          }
          const lessons = cfg.schedule[day] ?? [];
          const subject = lessons[rowIdx] ?? null;
          return html`<td class=${cellClass}>${this._renderLesson(subject)}</td>`;
        })}
      </tr>
    `;
  }

  private _renderLesson(subject: string | null): TemplateResult {
    if (!subject) {
      return html`<div class="empty">—</div>`;
    }
    const meta = this._config?.subjects[subject] ?? {};
    const style: string[] = [];
    if (meta.color) {
      style.push(`border-left-color: ${meta.color}`);
      style.push(`background: color-mix(in srgb, ${meta.color} 18%, transparent)`);
    }
    return html`
      <div class="lesson" style=${style.join(';')}>
        ${meta.icon ? html`<ha-icon icon=${meta.icon}></ha-icon>` : nothing}
        <span class="subject-name">${subject}</span>
      </div>
    `;
  }
}

// Kártya regisztrálása a HA kártyaválasztóban.
declare global {
  interface Window {
    customCards?: Array<{
      type: string;
      name: string;
      description: string;
      preview?: boolean;
    }>;
  }
}
window.customCards = window.customCards ?? [];
window.customCards.push({
  type: CARD_TAG,
  name: 'School Timetable',
  description: 'Iskolai órarend két (vagy több) gyereknek, YAML konfigurációval.',
  preview: false,
});

// eslint-disable-next-line no-console
console.info(
  `%c SCHOOL-TIMETABLE-CARD %c v${'0.1.0'} `,
  'color:white;background:#3f51b5;padding:2px 6px;border-radius:3px 0 0 3px',
  'color:#3f51b5;background:#eee;padding:2px 6px;border-radius:0 3px 3px 0',
);
