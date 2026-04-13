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

  /* Időpont oszlop a bal szélen */
  .time-col {
    width: 84px;
    text-align: left;
    color: var(--secondary-text-color);
    font-variant-numeric: tabular-nums;
  }
  .time-col .period-label {
    font-weight: 600;
    color: var(--primary-text-color);
    display: block;
  }
  .time-col .period-time {
    font-size: 0.8em;
    opacity: 0.85;
    display: block;
    margin-top: 2px;
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

  /* Tantárgy cella */
  .lesson {
    display: flex;
    align-items: flex-start;
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
    margin-top: 1px;
  }
  .lesson .text {
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1 1 auto;
    line-height: 1.2;
  }
  .lesson .subject-name {
    font-weight: 500;
    overflow-wrap: anywhere;
    word-break: break-word;
  }
  .lesson .cell-time {
    font-size: 0.78em;
    color: var(--secondary-text-color);
    font-variant-numeric: tabular-nums;
    margin-top: 2px;
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
      width: 60px;
    }
    .lesson {
      padding: 4px 6px;
      gap: 4px;
    }
    .lesson ha-icon {
      --mdc-icon-size: 16px;
    }
  }
`;
