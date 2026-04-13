import { css } from 'lit';

export const cardStyles = css`
  :host {
    display: block;
  }

  ha-card {
    padding: 12px 12px 16px 12px;
    overflow: hidden;
  }

  .title {
    font-size: var(--ha-card-header-font-size, 1.4em);
    font-weight: 500;
    padding: 4px 4px 12px 4px;
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
    padding: 8px 10px;
    vertical-align: middle;
    border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
    font-size: 0.95em;
    color: var(--primary-text-color);
  }

  thead th {
    font-weight: 600;
    text-align: center;
    padding-top: 4px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--divider-color, rgba(0, 0, 0, 0.15));
    color: var(--secondary-text-color);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-size: 0.8em;
  }

  /* Időpont oszlop */
  .time-col {
    width: 96px;
    text-align: left;
    color: var(--secondary-text-color);
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }
  .time-col .period-label {
    font-weight: 600;
    color: var(--primary-text-color);
    margin-right: 6px;
  }
  .time-col .period-time {
    font-size: 0.85em;
    opacity: 0.85;
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

  /* Szünet sor */
  tr.break-row td {
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 6px,
      var(--divider-color, rgba(0, 0, 0, 0.06)) 6px,
      var(--divider-color, rgba(0, 0, 0, 0.06)) 12px
    );
    color: var(--secondary-text-color);
    font-style: italic;
    font-size: 0.85em;
    padding-top: 4px;
    padding-bottom: 4px;
  }
  tr.break-row td.today {
    /* a szünet-háttérre rakjunk egy halvány primary tintet */
    background:
      color-mix(in srgb, var(--primary-color) 10%, transparent),
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 6px,
        var(--divider-color, rgba(0, 0, 0, 0.06)) 6px,
        var(--divider-color, rgba(0, 0, 0, 0.06)) 12px
      );
  }

  /* Tantárgy cella */
  .lesson {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 8px;
    border-radius: 6px;
    border-left: 4px solid transparent;
    min-height: 24px;
  }
  .lesson ha-icon {
    --mdc-icon-size: 20px;
    color: var(--secondary-text-color);
    flex-shrink: 0;
  }
  .lesson .subject-name {
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .empty {
    color: var(--disabled-text-color, rgba(0, 0, 0, 0.3));
    text-align: center;
    font-size: 1.2em;
  }

  /* Kisebb kijelzők: kompaktabb nézet */
  @media (max-width: 720px) {
    th,
    td {
      padding: 6px 6px;
      font-size: 0.85em;
    }
    .time-col {
      width: 64px;
    }
    .time-col .period-time {
      display: block;
      font-size: 0.75em;
    }
    .lesson {
      padding: 4px 6px;
      gap: 4px;
    }
  }
`;
