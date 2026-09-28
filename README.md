# P5.js: Empty Sketch

[Deutsch](README_DE.md)

An empty starter template for [p5.js](https://p5js.org/): the p5.js
library, the p5.sound add-on, a minimal HTML page and a pre-configured
Visual Studio Code workspace. The sketch only draws an "X" across the
canvas. Copy it as a fresh starting point for every new sketch or exercise.

## Installation

Requirements: [Visual Studio Code](https://code.visualstudio.com/) and a
browser (Live Server is configured to open Chrome).

1. Open the folder in Visual Studio Code.
2. Install the recommended extensions when prompted (or run
   `Extensions: Show Recommended Extensions` from the Command Palette):
   `samplavigne.p5-vscode` (p5.js snippets), `ritwickdey.liveserver`
   (local server with auto-reload) and `continue.continue` (AI coding
   assistant, optional).

Libraries (in `libraries/`): p5.js 1.10.0, p5.sound 1.0.1 (included, not
used — sound functions work without adding a `<script>` tag).

## How to Run

Start Live Server (click **Go Live** in the status bar). The sketch opens
at `http://127.0.0.1:5500` and reloads whenever you save a file.

## Coding Help

### Project Structure

```
P5_Empty_Sketch/
├── .continue/              # Configuration for the Continue AI assistant
├── .vscode/
│   ├── extensions.json     # Recommended VS Code extensions
│   ├── global.d.ts         # p5.js type definitions for autocomplete
│   └── settings.json       # Live Server configuration
├── libraries/
│   ├── p5.min.js
│   └── p5.sound.min.js
├── index.html              # Loads libraries + sketch
├── jsconfig.json           # JS IntelliSense configuration
├── sketch.js               # Your sketch — edit this file
└── style.css               # Removes margins
```

### What Happens Where

- **`sketch.js` → `setup()`**: runs once and creates a 448×256 canvas.
  Change the size in `createCanvas(width, height)`.
- **`sketch.js` → `draw()`**: runs about 60 times per second, fills the
  canvas light grey and draws two diagonal lines.
- **`sketch.js` → `keyPressed()`**: pressing **F** toggles fullscreen.
- **`index.html`**: loads `p5.min.js`, `p5.sound.min.js` and `sketch.js`.
  Add further libraries or scripts here.
- **Autocomplete**: `.vscode/global.d.ts` and `jsconfig.json` give code
  completion and parameter hints for p5.js functions.
- **Console**: open the browser's developer tools (⌥⌘I on macOS) to see
  `console.log()` output and errors.

More: [p5.js reference](https://p5js.org/reference/),
[p5.js examples](https://p5js.org/examples/),
[The Coding Train](https://thecodingtrain.com/).
