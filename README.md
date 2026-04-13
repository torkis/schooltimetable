# School Timetable Card

Iskolai órarend custom Lovelace kártya a [Home Assistant](https://www.home-assistant.io/)-hez.
Több gyerek órarendjét tudja egymás mellett megjeleníteni egy családi tablet-dashboardon.
Fix órák + délutáni / adhoc foglalkozások, és az aktuális nap vizuális kiemelése.

## Telepítés

### HACS (ajánlott)

1. HACS → **Custom repositories**.
2. URL: a repo GitHub címe, kategória: **Dashboard** (korábbi nevén „Frontend" / „Lovelace" / „Plugin" — HACS verziótól függően).
3. Telepítés után a HACS beteszi a fájlt a `www/community/.../school-timetable-card.js` helyre.
4. **Fontos:** Ha a kártya nem jelenik meg betöltés után, kézzel kell hozzáadni a **Beállítások → Dashboards → Erőforrások**-hoz:
   - URL: `/hacsfiles/schooltimesheet/school-timetable-card.js`
   - Típus: **JavaScript Module**
5. Újraindítás / hard refresh.

### Manuális telepítés

1. Másold a `dist/school-timetable-card.js`-t a HA `config/www/` könyvtárba.
2. **Beállítások → Dashboards → Erőforrások** → hozzáadás:
   - URL: `/local/school-timetable-card.js`
   - Típus: **JavaScript Module**
3. Hard refresh.

## Konfiguráció

A kártya teljesen YAML-ben van definiálva — nincs GUI-szerkesztő.

### Minimum példa

```yaml
type: custom:school-timetable-card
title: "Anna órarendje"
periods:
  - { label: "1. óra", start: "08:00", end: "08:45" }
  - { label: "2. óra", start: "08:55", end: "09:40" }
  - { label: "3. óra", start: "09:50", end: "10:35" }
schedule:
  monday:    [Matek, Magyar, Angol]
  tuesday:   [Angol, Tesi,   Matek]
  wednesday: [Magyar, Rajz,  Matek]
  thursday:  [Matek, Magyar, Angol]
  friday:    [Angol, Tesi,   Matek]
```

### Teljes példa — iskola + délutáni foglalkozások

A délutáni foglalkozások mennyisége és időpontja gyakran változik, ezért azokra
érdemes időpont nélküli „D1" / „D2" sorokat tenni a `periods`-ben, és a konkrét
időpontot a `schedule` cellában megadni. A fix iskolai órák idejét a bal oldali
oszlop mutatja; az adhoc cellák pedig saját időpontjukkal.

```yaml
type: custom:school-timetable-card
title: "Anna órarendje"

periods:
  - { label: "1. óra", start: "08:00", end: "08:45" }
  - { label: "2. óra", start: "08:55", end: "09:40" }
  - { label: "3. óra", start: "09:50", end: "10:35" }
  - { label: "4. óra", start: "10:45", end: "11:30" }
  - { label: "5. óra", start: "11:40", end: "12:25" }
  - { label: "D1" }                         # délutáni sor — idő a cellában
  - { label: "D2" }

subjects:
  Matek:     { color: "#ffb347", icon: "mdi:calculator-variant" }
  Magyar:    { color: "#8ecae6", icon: "mdi:book-open-page-variant" }
  Angol:     { color: "#a0c4ff", icon: "mdi:translate" }
  Tesi:      { color: "#b9fbc0", icon: "mdi:run" }
  Rajz:      { color: "#ffc6ff", icon: "mdi:palette" }
  Ének:      { color: "#fde7a1", icon: "mdi:music-note" }
  Zongora:   { color: "#d4a5e8", icon: "mdi:piano" }
  Úszás:     { color: "#90e0ef", icon: "mdi:swim" }
  Néptánc:   { color: "#ffafcc", icon: "mdi:human-female-dance" }

schedule:
  monday:
    - Matek
    - Magyar
    - Angol
    - Tesi
    - Ének
    - { subject: Zongora, time: "15:00–16:00" }
    -
  tuesday:
    - Angol
    - Tesi
    - Matek
    - Magyar
    - Rajz
    -
    -
  wednesday:
    - Magyar
    - Matek
    - Angol
    - Rajz
    - Tesi
    - { subject: Úszás, time: "15:30" }
    -
  thursday:
    - Matek
    - Magyar
    - Angol
    - Ének
    - Tesi
    - { subject: Néptánc, time: "16:00–17:00" }
    -
  friday:
    - Angol
    - Tesi
    - Matek
    - Magyar
    -
    -
    -
```

### Két gyerek egymás mellett

Tabletre landscape módban `horizontal-stack`-be tedd:

```yaml
type: horizontal-stack
cards:
  - type: custom:school-timetable-card
    title: "Anna"
    periods: [ ... ]
    subjects: { ... }
    schedule: { ... }
  - type: custom:school-timetable-card
    title: "Borka"
    periods: [ ... ]
    subjects: { ... }
    schedule: { ... }
```

## Opciók

| Opció | Típus | Kötelező | Leírás |
|---|---|---|---|
| `title` | string | nem | Kártya fejléc (pl. a gyerek neve). |
| `days` | string lista | nem | Megjelenítendő napok. Alapértelmezett: hétfő–péntek. Érvényes: `monday`…`sunday`. |
| `show_times` | boolean | nem | Ha `false`, a `periods` `start`/`end` időpontjai **nem** jelennek meg a bal oszlopban — csak a `label` (pl. „1. óra"). Alapértelmezett: `true`. A cellákon belüli `time` mezőt nem érinti. |
| `next_day_after` | `HH:MM` | nem | Napi időpont, ami után a „mai nap" kiemelése átvált a **következő iskolai napra** (csak a `days`-ben szereplő napok közül). Pl. `"20:00"` esetén este 8-tól a gyerek már a másnapi órarendet látja kijelölve; péntek 20:00 után Hétfő lesz kiemelve. Ha nincs megadva, a váltás éjfélkor történik. |
| `periods` | lista | **igen** | Sorok. Minden elem: `label` (szöveg). A `start` és `end` (`HH:MM`) opcionális — ha megadod, a bal oldali oszlopban megjelennek (hacsak a `show_times: false` el nem rejti). Délutáni adhoc sorokhoz hagyd el. |
| `subjects` | map | nem | Tantárgy-metaadatok: `color` (CSS szín) és `icon` (`mdi:*`). |
| `schedule` | map | **igen** | Naponkénti lista. Egy cella lehet: tantárgynév (string), `null` vagy üres (nincs óra), vagy objektum `{ subject, time }` (cellán belüli időponttal). |

### Cella-formátumok

```yaml
schedule:
  monday:
    - Matek                                     # egyszerű név
    -                                           # null / üres → nincs óra
    - { subject: Zongora, time: "15:00–16:00" } # szöveg + cellán belüli idő
    - { subject: Úszás,   time: "15:30" }       # csak kezdési idő
```

A `time` szabadon formázható szöveg — a kártya egy az egyben megjeleníti a tantárgy alatt kisebb betűvel.

## Működés

- Az aktuális nap oszlopa a HA `--primary-color` változójával ki van emelve.
- Éjfél után a kártya automatikusan átvált (5 percenként frissít).
- Hibás konfigurációnál a HA UI magyar nyelvű hibaüzenetet mutat.

## Fejlesztés

```bash
npm install
npm run build      # → dist/school-timetable-card.js
npm run watch      # folyamatos build
```

A `dist/` könyvtár a repo része, mert HACS onnan szolgálja ki a fájlt.

