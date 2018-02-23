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

});