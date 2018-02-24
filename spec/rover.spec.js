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
    let rover1 = new Rover(1, 5, 'S');
    expect(rover1.xPosition).to.equal(1);
    expect(rover1.yPosition).to.equal(5);
    expect(rover1.direction).to.equal('S');
  });

  it('should receive a command line and set this', () => {
    let rover1 = new Rover(1, 5, 'S');
    rover1.splitCommandline('LMLMLM');
    expect(rover1.commands).to.eql(['L', 'M', 'L', 'M', 'L', 'M']);
  });

});