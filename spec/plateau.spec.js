const expect = require('chai').expect;
const Plateau = require('../src/Plateau');

describe.only('Rover', () => {
  it('is a function ', () => {
    expect(Plateau).to.be.a('function');
  });
  it('creates an instance', () => {
    let plateau1 = new Plateau();
    expect(plateau1).to.be.an.instanceof(Plateau);
  });

});