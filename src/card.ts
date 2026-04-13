import { LitElement, html, nothing, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { cardStyles } from './styles.js';
import {
  DAY_FROM_JS_INDEX,
  DAY_LABELS,
  DayKey,
  NormalizedCell,
  Period,
} from './types.js';
import { NormalizedConfig, validateConfig } from './validate.js';

const CARD_TAG = 'school-timetable-card';
const VERSION = '0.1.0';
const REFRESH_INTERVAL_MS = 5 * 60 * 1000; // 5 perc — éjfél körül biztos napot vált

@customElement(CARD_TAG)
export class SchoolTimetableCard extends LitElement {
  static override styles = cardStyles;

  @state() private _config?: NormalizedConfig;
  @state() private _todayKey: DayKey = DAY_FROM_JS_INDEX[new Date().getDay()];

  private _refreshTimer?: number;

  public setConfig(config: unknown): void {
    this._config = validateConfig(config);
    // Újrakalkuláljuk a „mai nap"-ot, mert a next_day_after vagy a days változhatott.
    this._updateToday();
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
    const now = new Date();
    let jsIdx = now.getDay();

    // Ha a config `next_day_after` küszöböt ad, és már túl vagyunk rajta, a mai nap
    // kiemelése átlép a következő napra — és onnan továbbgörgetjük az első olyanra,
    // ami szerepel a `days` listában (hogy péntek 20:00-kor ne Szombat, hanem Hétfő
    // legyen kijelölve). Ha `days` nincs (elvileg sosem), a bump-nál megállunk.
    const cfg = this._config;
    if (cfg?.nextDayAfterMinutes !== undefined) {
      const nowMinutes = now.getHours() * 60 + now.getMinutes();
      if (nowMinutes >= cfg.nextDayAfterMinutes) {
        jsIdx = (jsIdx + 1) % 7;
        if (cfg.days.length > 0) {
          for (let i = 0; i < 7 && !cfg.days.includes(DAY_FROM_JS_INDEX[jsIdx]); i++) {
            jsIdx = (jsIdx + 1) % 7;
          }
        }
      }
    }

    const current = DAY_FROM_JS_INDEX[jsIdx];
    if (current !== this._todayKey) {
      this._todayKey = current;
    }
  }

  override render(): TemplateResult {
    if (!this._config) return html``;
    const cfg = this._config;
    const todayVisible = cfg.days.includes(this._todayKey);

    // Ha nincs idő-kiírás, a bal oszlopot keskenyítjük (a CSS a .no-times osztályra reagál).
    const hasAnyRowTime =
      cfg.showTimes && cfg.periods.some((p) => p.start !== undefined && p.end !== undefined);
    const tableClass = hasAnyRowTime ? '' : 'no-times';

    // Az első olyan sor indexe, aminek nincs start/end-je — „délutáni / adhoc" blokk
    // eleje. Ezzel a CSS felső elválasztót tud tenni, és a sorok halvány háttért kapnak.
    const firstAfternoonIdx = cfg.periods.findIndex(
      (p) => p.start === undefined || p.end === undefined,
    );

    return html`
      <ha-card>
        ${cfg.title ? html`<div class="title">${cfg.title}</div>` : nothing}
        <table class=${tableClass}>
          <thead>
            <tr>
              <th class="time-col"></th>
              ${cfg.days.map(
                (day) => html`
                  <th class=${todayVisible && day === this._todayKey ? 'today-head' : ''}>
                    ${DAY_LABELS[day]}
                  </th>
                `,
              )}
            </tr>
          </thead>
          <tbody>
            ${cfg.periods.map((period, rowIdx) =>
              this._renderRow(period, rowIdx, todayVisible, firstAfternoonIdx),
            )}
          </tbody>
        </table>
      </ha-card>
    `;
  }

  private _renderRow(
    period: Period,
    rowIdx: number,
    todayVisible: boolean,
    firstAfternoonIdx: number,
  ): TemplateResult {
    const cfg = this._config!;
    const showTime =
      cfg.showTimes && period.start !== undefined && period.end !== undefined;
    const isAfternoon = period.start === undefined || period.end === undefined;
    const isFirstAfternoon = rowIdx === firstAfternoonIdx && firstAfternoonIdx >= 0;
    const trClasses = [
      isAfternoon ? 'afternoon' : '',
      isFirstAfternoon ? 'afternoon-start' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return html`
      <tr class=${trClasses}>
        <td class="time-col">
          ${period.label
            ? html`<span class="period-label">${period.label}</span>`
            : nothing}
          ${showTime
            ? html`<span class="period-time">${period.start}–${period.end}</span>`
            : nothing}
        </td>
        ${cfg.days.map((day) => {
          const isToday = todayVisible && day === this._todayKey;
          const cell = cfg.schedule[day]?.[rowIdx] ?? { subject: null };
          return html`<td class=${isToday ? 'today' : ''}>${this._renderLesson(cell)}</td>`;
        })}
      </tr>
    `;
  }

  private _renderLesson(cell: NormalizedCell): TemplateResult {
    if (!cell.subject) {
      return html`<div class="empty">—</div>`;
    }
    const meta = this._config?.subjects[cell.subject] ?? {};
    const style: string[] = [];
    if (meta.color) {
      // A tantárgyszínt egyetlen custom prop-ba tesszük; a CSS innen húzza ki
      // a hátteret, bal szegélyt és az ikon színét is (kontrasztosítva).
      style.push(`--subject-color: ${meta.color}`);
    }
    return html`
      <div class="lesson" style=${style.join(';')}>
        ${meta.icon ? html`<ha-icon icon=${meta.icon}></ha-icon>` : nothing}
        <div class="text">
          <span class="subject-name">${cell.subject}</span>
          ${cell.time
            ? html`<span class="cell-time">${cell.time}</span>`
            : nothing}
        </div>
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
  `%c SCHOOL-TIMETABLE-CARD %c v${VERSION} `,
  'color:white;background:#3f51b5;padding:2px 6px;border-radius:3px 0 0 3px',
  'color:#3f51b5;background:#eee;padding:2px 6px;border-radius:0 3px 3px 0',
);
