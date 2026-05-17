// Class to manage a scrolling text instance
class TextScroller {
  constructor(textString, textSizeVal, textColor, speed = 2, verticalShift = 0) {
    this.textString = textString;
    this.textSizeVal = textSizeVal;
    this.textColor = textColor;
    this.speed = speed;
    this.verticalShift = verticalShift;
    this.textX = 0; // Start text at the right edge of the canvas
  }

  // Initialize the scroller (called during setup)
  init() {
    textSize(this.textSizeVal);
    this.textWidthVal = textWidth(this.textString) + 10;
    this.textX = 0; // Start at right edge
  }

  // Update position and draw the scroller
  updateAndDraw() {
    // Update text position (move leftward)
    this.textX -= this.speed;
    // Draw vertically centered scrolling text instances to cover the whole canvas
    textAlign(LEFT, CENTER);
    fill(this.textColor);

    // Determine how many repetitions are needed to cover the canvas width
    // We'll draw enough copies so that even when scrolling, there's always text on screen
    // Using a loop to draw multiple repeated instances
    let numRepeats = Math.ceil(width / this.textWidthVal) + 2;
    for (let i = 0; i < numRepeats; i++) {
      text(this.textString, this.textX + i * this.textWidthVal, height / 2 + this.verticalShift);
    }

    // Reset text position when the first instance has scrolled off-screen to the left
    if (this.textX < -this.textWidthVal) {
      this.textX = 0;
    }
  }
}

// Array to hold all scroller instances
let textScrollers = [];

function setup() {
  createCanvas(448, 256);

  // Define 10 different text strings, colors, speeds, and vertical shifts
  const scrollerConfigs = [
    { text: "Fast Red",      size: 20, color: color(255, 0, 0),   speed: 4, vShift: -40 },
    { text: "Slow Blue",     size: 22, color: color(0, 0, 255),   speed: 1, vShift: -20 },
    { text: "Green Scroll",  size: 18, color: color(0, 128, 0),   speed: 2.5, vShift: 0 },
    { text: "Purple Dash",   size: 26, color: color(128, 0, 128), speed: 3, vShift: 20 },
    { text: "Orange Flow",   size: 24, color: color(255, 165, 0), speed: 2, vShift: -10 },
    { text: "Cyan Wave",     size: 20, color: color(0, 255, 255), speed: 1.5, vShift: 30 },
    { text: "Yellow Line",   size: 16, color: color(255, 255, 0), speed: 5, vShift: -30 },
    { text: "Magenta Pulse", size: 28, color: color(255, 0, 255), speed: 0.8, vShift: 40 },
    { text: "Teal Slide",    size: 22, color: color(0, 128, 128), speed: 2.2, vShift: 10 },
    { text: "Brown Run",     size: 19, color: color(139, 69, 19), speed: 1.2, vShift: -15 }
  ];

  // Create and initialize 10 text scrollers
  for (let config of scrollerConfigs) {
    let scroller = new TextScroller(
      config.text,
      config.size,
      config.color,
      config.speed,
      config.vShift
    );
    scroller.init();
    textScrollers.push(scroller);
  }
}

function draw() {
  background(220);

  // Draw original lines
  line(0, 0, width, height);
  line(0, height, width, 0);

  // Update and draw each scroller
  for (let scroller of textScrollers) {
    scroller.updateAndDraw();
  }
}

function keyPressed() {
  if (key === "f" || key === "F") {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
