# School Timetable Card

Iskolai órarend custom Lovelace kártya a [Home Assistant](https://www.home-assistant.io/)-hez.
Több gyerek órarendjét tudja egymás mellett megjeleníteni egy családi tablet-dashboardon.
Fix időpontú órák, szünetek, délutáni foglalkozások, és az aktuális nap vizuális kiemelése.

## Telepítés

### HACS (ajánlott)

1. HACS → **Frontend** → három pöttyös menü → **Custom repositories**.
2. URL: a repo GitHub címe, kategória: **Lovelace**.
3. Keresd meg a „School Timetable Card" bejegyzést, és telepítsd.
4. Frissítsd a böngészőt (HACS automatikusan hozzáadja a resource-t).

### Manuális telepítés

1. Másold a `dist/school-timetable-card.js` fájlt a HA `config/www/` könyvtárba.
2. **Beállítások → Dashboards → Erőforrások** (Resources) → hozzáadás:
   - URL: `/local/school-timetable-card.js`
   - Típus: **JavaScript Module**
3. Hard refresh a böngészőben.

## Konfiguráció

A kártya teljesen YAML-ben van definiálva — nincs GUI-szerkesztő.

### Minimum példa

```yaml
type: custom:school-timetable-card
title: "Anna órarendje"
periods:
  - { label: "1.", start: "08:00", end: "08:45" }
  - { label: "",   start: "08:45", end: "08:55", break: true }
  - { label: "2.", start: "08:55", end: "09:40" }
schedule:
  monday:    [Matek, null, Magyar]
  tuesday:   [Angol, null, Tesi]
  wednesday: [Magyar, null, Rajz]
  thursday:  [Matek, null, Magyar]
  friday:    [Angol, null, Tesi]
```

### Teljes példa színekkel és ikonokkal

```yaml
type: custom:school-timetable-card
title: "Anna órarendje"

periods:
  - { label: "1.", start: "08:00", end: "08:45" }
  - { label: "",   start: "08:45", end: "08:55", break: true }
  - { label: "2.", start: "08:55", end: "09:40" }
  - { label: "",   start: "09:40", end: "10:00", break: true }
  - { label: "3.", start: "10:00", end: "10:45" }
  - { label: "",   start: "10:45", end: "10:55", break: true }
  - { label: "4.", start: "10:55", end: "11:40" }
  - { label: "D",  start: "15:00", end: "16:00" }    # délutáni foglalkozás

subjects:
  Matek:    { color: "#ffb347", icon: "mdi:calculator-variant" }
  Magyar:   { color: "#8ecae6", icon: "mdi:book-open-page-variant" }
  Angol:    { color: "#a0c4ff", icon: "mdi:translate" }
  Tesi:     { color: "#b9fbc0", icon: "mdi:run" }
  Rajz:     { color: "#ffc6ff", icon: "mdi:palette" }
  Zongora:  { color: "#d4a5e8", icon: "mdi:piano" }
  Úszás:    { color: "#90e0ef", icon: "mdi:swim" }

schedule:
  monday:    [Matek,  null, Magyar, null, Angol, null, Tesi, Zongora]
  tuesday:   [Angol,  null, Tesi,   null, Matek, null, Magyar, null]
  wednesday: [Magyar, null, Rajz,   null, Matek, null, Angol, Úszás]
  thursday:  [Matek,  null, Magyar, null, Angol, null, Rajz, null]
  friday:    [Angol,  null, Tesi,   null, Matek, null, Magyar, null]
```

### Két gyerek egymás mellett

Tabletre landscape módban érdemes `horizontal-stack`-be tenni:

```yaml
type: horizontal-stack
cards:
  - type: custom:school-timetable-card
    title: "Anna"
    periods: &periods
      - { label: "1.", start: "08:00", end: "08:45" }
      - { label: "",   start: "08:45", end: "08:55", break: true }
      - { label: "2.", start: "08:55", end: "09:40" }
    subjects: &subjects
      Matek:  { color: "#ffb347", icon: "mdi:calculator-variant" }
      Magyar: { color: "#8ecae6", icon: "mdi:book-open-page-variant" }
    schedule:
      monday:    [Matek, null, Magyar]
      # ...
  - type: custom:school-timetable-card
    title: "Borka"
    periods: *periods
    subjects: *subjects
    schedule:
      monday:    [Magyar, null, Matek]
      # ...
```

> A YAML-anchor (`&periods` / `*periods`) csak ugyanazon YAML-dokumentumban működik — hasznos, ha mindkét lánynak azonos az időbeosztása. Ha nem, egyszerűen másold.

## Opciók

| Opció | Típus | Kötelező | Leírás |
|---|---|---|---|
| `title` | string | nem | Kártya fejléc (pl. a gyerek neve). |
| `days` | string lista | nem | Megjelenítendő napok. Alapértelmezett: hétfő–péntek. Érvényes értékek: `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`. |
| `periods` | lista | **igen** | Idősáv-definíciók (sorok). Minden elem: `label` (szöveg), `start` és `end` (`HH:MM`), opcionálisan `break: true`. |
| `subjects` | map | nem | Tantárgy-metaadatok: `color` (CSS szín) és `icon` (`mdi:*`). |
| `schedule` | map | **igen** | Naponkénti lista a tantárgynevekkel. A lista hossza legfeljebb a `periods` hossza lehet. `null` vagy üres = üres cella. Break-slot cellái automatikusan „szünet"-ként jelennek meg. |

## Működés

- Az aktuális nap oszlopa a HA `--primary-color` változójával ki van emelve (halvány háttér + keret).
- A szünetek (`break: true`) csíkos háttérrel, dőlt szöveggel jelennek meg — a `schedule`-beli érték ezekben a sorokban automatikusan „szünet"-re íródik.
- Éjfél után a kártya automatikusan átvált a következő napra (5 percenként frissít).
- Hibás konfigurációnál a HA UI magyar nyelvű hibaüzenetet mutat.

## Fejlesztés

```bash
npm install
npm run build      # → dist/school-timetable-card.js
npm run watch      # folyamatos build
```

A `dist/` könyvtár a repo része, mert HACS onnan szolgálja ki a fájlt.
