var colorValueIncrease = 33;
var fillColor
var colorIncreaser

function setup() {
  createCanvas(500, 500);
  background(0);
  fillColor = color(0, 0, 0, 255);
  noStroke();
}

function draw() {
  fill(fillColor);
  rect(0, 0, 500, 500);

  fillColor.levels[0] += colorValueIncrease;

  if (fillColor.levels[0] > 255) {
    fillColor.levels[0] = 0;
    fillColor.levels[1] += colorValueIncrease;
  }

  if (fillColor.levels[1] > 255) {
    fillColor.levels[1] = 0;
    fillColor.levels[2] += colorValueIncrease;
  }

  if (fillColor.levels[2] > 255) {
    fillColor.levels[2] = 0;
  }

}
