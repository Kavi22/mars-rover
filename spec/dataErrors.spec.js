const expect = require('chai').expect;
const DataError = require('../src/DataError');
const Rover = require('../src/Rover');
// const Plateau = require('../src/Plateau');

describe('DataError', () => {
  it('is a function ', () => {
    expect(DataError).to.be.a('function');
  });

  it('creates an instance', () => {
    let e = new DataError();
    expect(e).to.be.an.instanceof(DataError);
  });

  it.skip('creates and saves an error if invalid commmand is passed to rover', () => {
    let rover1 = new Rover(1, 5, 'S');
    rover1.saveCommands('S');
    rover1.moveOrTurn();
    expect(rover1.errors[0].data).to.equal('S');
  });

  // it('creates and saves an error if invalid direction is passed to rover', () => {
  //   let rover1 = new Rover(1, 5, 'F');
  //   expect(rover1.errors[0].data).to.equal('F');
  // });

});