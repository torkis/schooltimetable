# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A Home Assistant custom Lovelace card (`custom:school-timetable-card`) that renders a weekly school timetable for one or more children, configured entirely in YAML. Distributed via HACS; the built bundle is a single ES module consumed by Home Assistant's frontend.

User-facing strings (day labels, validation error messages, card description) are in **Hungarian** — keep that language when adding or changing any text the HA UI displays.

## Build / develop

```bash
npm install
npm run build     # → dist/school-timetable-card.js (single bundled, minified ES module)
npm run watch     # rebuild on change
```

There is no test runner, linter, or typecheck script — only the Rollup build. TypeScript's strict settings (`strict`, `noUnusedLocals`, `noUnusedParameters`, `noImplicitOverride`) run as part of the Rollup build via `@rollup/plugin-typescript`, so a clean `npm run build` is the de-facto check.

**`dist/` is committed** — HACS serves the prebuilt file directly from the repo. Rebuild and commit `dist/school-timetable-card.js` whenever source changes ship.

## Architecture

Entry point is `src/card.ts`. The bundle is one Rollup input → one output file (`rollup.config.mjs`).

Three-layer split inside `src/`:

- **`types.ts`** — public config shape (`CardConfig`, `Period`, `ScheduleCell`, `SubjectMeta`), the `DayKey` union, day-label tables, and the JS-weekday → `DayKey` map used for "today" detection. `ScheduleCell` is the key polymorphic type: a cell may be a string (subject name), `null`/empty (no lesson), or `{ subject, time }` (ad-hoc afternoon lesson with its own per-cell time string).
- **`validate.ts`** — `validateConfig(raw)` is the single entry gate. It throws Hungarian error messages (rendered by HA's UI), and returns a `NormalizedConfig` where every `schedule[day]` array is padded to exactly `periods.length`. The render path assumes this invariant and indexes by row without bounds checks.
- **`card.ts`** — `SchoolTimetableCard` (Lit element). Only state is `_config` (normalized) and `_todayKey`. A `setInterval` re-checks the current weekday every 5 minutes so the highlighted column flips after midnight without a page reload. `getCardSize()` returns `periods.length + 1` for HA's masonry layout.
- **`styles.ts`** — Lit `css` tagged template. Today's column uses HA's `--primary-color` CSS variable; subject colors come from per-cell inline styles mixed via `color-mix(... 18%, transparent)` for the tinted background while keeping the left border at full saturation.

Data flow: HA calls `setConfig(rawYaml)` → `validateConfig` normalizes & pads → `render()` walks `periods` as rows and `days` as columns, pulling each cell from `schedule[day][rowIdx]` and subject metadata (color, `mdi:` icon) from `subjects[cell.subject]`.

## Config invariants worth preserving

- `periods[i].start` and `periods[i].end` must be both present or both absent. Rows without times are the "afternoon / adhoc" rows where time lives inside the cell (`ScheduleCell.time`).
- A schedule row shorter than `periods.length` is valid input and gets null-padded; a row longer than `periods.length` is a hard error.
- `days` defaults to Mon–Fri (`DEFAULT_DAYS`); valid keys are the seven lowercase English weekday names in `ALL_DAYS`.
- Error messages thrown from `validate.ts` surface directly in the HA dashboard UI — keep them in Hungarian and specific enough to point at the offending field (e.g. `periods[2].start`, `schedule.monday[4]`).

## Release surface

Bumping the card version: update both `package.json` `version` and the `VERSION` constant in `src/card.ts` (logged to the browser console on load). `hacs.json` pins the served filename to `school-timetable-card.js`.
