var expect = require('chai').expect;
var ColorIncreaser = require('../sketch').ColorIncreaser;

function mockColor(red, green, blue, alpha) {
  this.levels = [];
  this.levels[0] = red;
  this.levels[1] = green;
  this.levels[2] = blue;
  this.levels[3] = alpha;
}

describe('ColorIncreaser tests', function() {
  beforeEach(function() {
    var colorValueIncrease = 1;
    var fillColor = new mockColor(0, 0, 0, 255);
    colorIncreaser = new ColorIncreaser(colorValueIncrease, fillColor);
  });
  it('should store initial values without mutation', function(done) {
    expect(colorIncreaser.colorValueIncrease).to.equal(1);
    expect(colorIncreaser.fillColor.levels[0]).to.equal(0);
    expect(colorIncreaser.fillColor.levels[1]).to.equal(0);
    expect(colorIncreaser.fillColor.levels[2]).to.equal(0);
    expect(colorIncreaser.fillColor.levels[3]).to.equal(255);
    done();
  });
  it('should have rgb values 255, 0, 0 after calling increaseFillColor 255 times', function(done) {
    for (var count = 0; count < 255; count +=1) {
      colorIncreaser.increaseFillColor()
    }
    expect(colorIncreaser.fillColor.levels[0]).to.equal(255);
    expect(colorIncreaser.fillColor.levels[1]).to.equal(0);
    expect(colorIncreaser.fillColor.levels[2]).to.equal(0);
    done();
  });
  it('should have rgb values 255, 255, 0 after calling increaseFillColor 65535 times', function(done) {
    for (var count = 0; count < 65535; count +=1) {
      colorIncreaser.increaseFillColor()
    }
    expect(colorIncreaser.fillColor.levels[0]).to.equal(255);
    expect(colorIncreaser.fillColor.levels[1]).to.equal(255);
    expect(colorIncreaser.fillColor.levels[2]).to.equal(0);
    done();
  });
  it('should have rgb values 255, 255, 255 after calling increaseFillColor 16777215 times', function(done) {
    for (var count = 0; count < 16777215; count +=1) {
      colorIncreaser.increaseFillColor()
    }
    expect(colorIncreaser.fillColor.levels[0]).to.equal(255);
    expect(colorIncreaser.fillColor.levels[1]).to.equal(255);
    expect(colorIncreaser.fillColor.levels[2]).to.equal(255);
    done();
  });
});
