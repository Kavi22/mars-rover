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
  it('should set plateau size', () => {
    let plateau1 = new Plateau(5, 5);
    expect(plateau1.width).to.equal(5);
    expect(plateau1.height).to.equal(5);
  });
  it('should add a rover to the plateau', () => {
    let plateau1 = new Plateau(5, 5);
    plateau1.addRover(2,2, 'E');
    expect(plateau1.rovers.length).to.equal(1);
    expect(plateau1.rovers).to.be.an('Array');
    expect(plateau1.rovers[0]).to.be.an('Object');
  });

  it('should add mulitple rovers to the plateau', () => {
    let plateau1 = new Plateau(5, 5);
    plateau1.addRover(2,2, 'E');
    plateau1.addRover(5,1, 'W');
    expect(plateau1.rovers.length).to.equal(2);
  });

});