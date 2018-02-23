const expect = require('chai').expect;
const Rover = require('../src/Rover');

describe('Rover', () => {
  it('is a function ', () => {
    expect(Rover).to.be.a('function');
  });
  it('creates an instance', () => {
    let rover1 = new Rover();
    expect(rover1).to.be.an.instanceof(Rover);
  });
    it('should set starting location', () => {
        let rover1 = new Rover(1, 5);
        expect(rover1.x).to.equal(1);
        expect(rover1.y).to.equal(5);
  });

});