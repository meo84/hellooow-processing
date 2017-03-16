var expect = require('chai').expect;

var p5js = 42;

describe('first tests for p5js', function() {
  it('should be a string', function(done) {
    expect(p5js).to.be.a('string');
    done();
  });
  it('should be awesome', function(done) {
    expect(p5js).to.equal('awesome');
    done();
  });
});
