# P5.js: Empty Sketch

[English](README.md)

Ein leeres Starter-Template für [p5.js](https://p5js.org/): die
p5.js-Bibliothek, das p5.sound-Add-on, eine minimale HTML-Seite und eine
vorkonfigurierte Visual-Studio-Code-Umgebung. Der Sketch zeichnet nur ein
«X» über die Zeichenfläche. Als sauberen Ausgangspunkt für jeden neuen
Sketch und jede Übung kopieren.

## Installation

Voraussetzungen: [Visual Studio Code](https://code.visualstudio.com/) und
ein Browser (Live Server ist so eingestellt, dass Chrome öffnet).

1. Den Ordner in Visual Studio Code öffnen.
2. Die empfohlenen Erweiterungen installieren, wenn VS Code danach fragt
   (oder in der Befehlspalette `Extensions: Show Recommended Extensions`):
   `samplavigne.p5-vscode` (p5.js-Snippets), `ritwickdey.liveserver`
   (lokaler Server mit automatischem Neuladen) und `continue.continue`
   (KI-Coding-Assistent, optional).
3. Live Server starten (in der Statusleiste auf **Go Live** klicken). Der
   Sketch öffnet sich unter `http://127.0.0.1:5500` und lädt bei jedem
   Speichern neu.

Bibliotheken (in `libraries/`): p5.js 1.10.0, p5.sound 1.0.1 (eingebunden,
nicht verwendet – Sound-Funktionen gehen ohne zusätzlichen
`<script>`-Tag).

## Coding-Hilfe

### Projektstruktur

```
P5_Empty_Sketch/
├── .continue/              # Konfiguration für den KI-Assistenten Continue
├── .vscode/
│   ├── extensions.json     # Empfohlene VS-Code-Erweiterungen
│   ├── global.d.ts         # p5.js-Typdefinitionen für Autovervollständigung
│   └── settings.json       # Live-Server-Konfiguration
├── libraries/
│   ├── p5.min.js
│   └── p5.sound.min.js
├── index.html              # Lädt Bibliotheken + Sketch
├── jsconfig.json           # JS-IntelliSense-Konfiguration
├── sketch.js               # Dein Sketch — diese Datei bearbeiten
└── style.css               # Entfernt die Ränder
```

### Was passiert wo

- **`sketch.js` → `setup()`**: läuft einmal und erstellt eine
  Zeichenfläche mit 448×256 Pixeln. Die Grösse in
  `createCanvas(breite, höhe)` ändern.
- **`sketch.js` → `draw()`**: läuft etwa 60 Mal pro Sekunde, füllt die
  Zeichenfläche hellgrau und zeichnet zwei Diagonalen.
- **`sketch.js` → `keyPressed()`**: Die Taste **F** schaltet Vollbild
  ein/aus.
- **`index.html`**: lädt `p5.min.js`, `p5.sound.min.js` und `sketch.js`.
  Weitere Bibliotheken oder Scripts hier einbinden.
- **Autovervollständigung**: `.vscode/global.d.ts` und `jsconfig.json`
  sorgen für Vervollständigung und Parameter-Hinweise zu p5.js-Funktionen.
- **Konsole**: Die Entwicklertools des Browsers öffnen (⌥⌘I auf macOS),
  um `console.log()`-Ausgaben und Fehler zu sehen.

Mehr: [p5.js-Referenz](https://p5js.org/reference/),
[p5.js-Beispiele](https://p5js.org/examples/),
[The Coding Train](https://thecodingtrain.com/).
