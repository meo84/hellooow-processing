var colorValueIncrease = 1;
var fillColor
var colorIncreaser

function setup() {
  createCanvas(500, 500);
  background(0);
  fillColor = color(0, 0, 0, 255);
  noStroke();
  colorIncreaser = new ColorIncreaser(colorValueIncrease, fillColor);
}

function draw() {
  fill(fillColor);
  rect(0, 0, 500, 500);

  colorIncreaser.increaseFillColor();
}

exports.ColorIncreaser = function(colorValueIncrease, fillColor) {
  this.colorValueIncrease = colorValueIncrease;
  this.fillColor = fillColor;
  this.increaseFillColor = function() {
    this.fillColor.levels[0] += this.colorValueIncrease;
    this.numColorsSoFar += 1;

    if (this.fillColor.levels[0] > 255) {
      this.fillColor.levels[0] = 0;
      this.fillColor.levels[1] += this.colorValueIncrease;
    }

    if (this.fillColor.levels[1] > 255) {
      this.fillColor.levels[1] = 0;
      this. fillColor.levels[2] += this.colorValueIncrease;
    }

    if (this.fillColor.levels[2] > 255) {
      this.fillColor.levels[2] = 0;
    }

  };
}
