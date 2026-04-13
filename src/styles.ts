import { css } from 'lit';

export const cardStyles = css`
  :host {
    display: block;
  }

  ha-card {
    padding: 6px 4px 8px 4px;
    overflow: hidden;
  }

  .title {
    font-size: var(--ha-card-header-font-size, 1.2em);
    font-weight: 500;
    padding: 2px 4px 6px 4px;
    color: var(--primary-text-color);
  }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    table-layout: fixed;
  }

  th,
  td {
    padding: 2px 2px;
    vertical-align: middle;
    border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
    font-size: 0.85em;
    color: var(--primary-text-color);
    box-sizing: border-box;
  }

  thead th {
    font-weight: 600;
    text-align: center;
    padding-top: 2px;
    padding-bottom: 4px;
    border-bottom: 2px solid var(--divider-color, rgba(0, 0, 0, 0.15));
    color: var(--secondary-text-color);
    text-transform: uppercase;
    letter-spacing: 0.02em;
    font-size: 0.7em;
  }

  /* Időpont oszlop a bal szélen — csak annyi szélességet foglal, hogy a
     „1. óra" + opcionális „08:00–08:45" elférjen. */
  .time-col {
    width: 44px;
    text-align: left;
    padding-left: 4px;
    color: var(--secondary-text-color);
    font-variant-numeric: tabular-nums;
  }
  /* show_times: false — keskenyebb bal oszlop, csak a „1. óra" label fér el benne */
  table.no-times .time-col {
    width: 34px;
  }
  .time-col .period-label {
    font-weight: 600;
    color: var(--primary-text-color);
    display: block;
  }
  .time-col .period-time {
    font-size: 0.72em;
    opacity: 0.85;
    display: block;
    margin-top: 1px;
  }

  /* Mai nap oszlop kiemelése */
  .today-head {
    color: var(--primary-color);
  }
  td.today {
    background: color-mix(in srgb, var(--primary-color) 12%, transparent);
  }
  th.today-head,
  td.today {
    border-left: 2px solid var(--primary-color);
    border-right: 2px solid var(--primary-color);
  }
  tbody tr:last-child td.today {
    border-bottom: 2px solid var(--primary-color);
  }
  thead tr th.today-head {
    border-top: 2px solid var(--primary-color);
  }

  /* Tantárgy cella — ikon a szöveg fölött, hogy keskeny oszlopban se tördelődjön betűnként */
  .lesson {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1px;
    padding: 2px 3px;
    border-radius: 4px;
    border-left: 3px solid transparent;
    min-height: 20px;
    text-align: center;
  }
  .lesson ha-icon {
    --mdc-icon-size: 16px;
    color: var(--secondary-text-color);
    flex-shrink: 0;
  }
  .lesson .text {
    display: flex;
    flex-direction: column;
    min-width: 0;
    width: 100%;
    line-height: 1.15;
  }
  .lesson .subject-name {
    font-weight: 500;
    /* Csak szóhatáron törjön, ne betűnként. Hosszú szó túllóghat — cellán belül
       a border-radius miatt elegánsabb, mint a függőleges „M/a/g/y/a/r" tördelés. */
    overflow-wrap: break-word;
    hyphens: auto;
  }
  .lesson .cell-time {
    font-size: 0.75em;
    color: var(--secondary-text-color);
    font-variant-numeric: tabular-nums;
    margin-top: 1px;
  }
  .empty {
    color: var(--disabled-text-color, rgba(0, 0, 0, 0.3));
    text-align: center;
    font-size: 1.1em;
  }

  /* Nagyobb kijelzőn (egyetlen kártya, széles oszlop) férőhely van vízszintes
     ikon + szöveg elrendezésre — ott visszaváltunk sorra. */
  @media (min-width: 900px) {
    .lesson {
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 6px;
      padding: 5px 8px;
      border-left-width: 4px;
      text-align: left;
    }
    .lesson ha-icon {
      --mdc-icon-size: 20px;
    }
    .lesson .text {
      flex: 1 1 auto;
      width: auto;
    }
    th,
    td {
      padding: 6px 8px;
      font-size: 0.95em;
    }
    .time-col {
      width: 84px;
    }
  }
`;
