const expect = require('chai').expect;
const Plateau = require('../src/Plateau');
// const sinon = require('sinon');

describe('Plateau', () => {
  it('is a function ', () => {
    expect(Plateau).to.be.a('function');
  });
  it('creates an instance', () => {
    let plateau1 = new Plateau();
    expect(plateau1).to.be.an.instanceof(Plateau);
  });
  it('sets plateau size', () => {
    let plateau1 = new Plateau(5, 5);
    expect(plateau1.width).to.equal(5);
    expect(plateau1.height).to.equal(5);
  });
  it('adds a rover to the plateau', () => {
    let plateau1 = new Plateau(5, 5);
    plateau1.addRover(2, 2, 'E');
    expect(plateau1.rovers.length).to.equal(1);
    expect(plateau1.rovers).to.be.an('Array');
    expect(plateau1.rovers[0]).to.be.an('Object');
  });

  it('adds mulitple rovers to the plateau', () => {
    let plateau1 = new Plateau(5, 5);
    plateau1.addRover(2, 2, 'E');
    plateau1.addRover(5, 1, 'W');
    expect(plateau1.rovers.length).to.equal(2);
  });

  it('sets boundry properties on each rover', () => {
    let plateau1 = new Plateau(5, 5);
    plateau1.addRover(2, 2, 'E');
    plateau1.addRover();
    expect(plateau1.rovers[0].boundryY).to.equal(5);
    expect(plateau1.rovers[0].boundryX).to.equal(5);
    expect(plateau1.rovers[1].boundryY).to.equal(5);
    expect(plateau1.rovers[1].boundryX).to.equal(5);
  });

  it('sends the commands to the rover', () => {
    let plateau1 = new Plateau(5, 5);
    plateau1.addRover(2, 2, 'E');
    plateau1.sendCommands('MMLRL');
    expect(plateau1.rovers[0].commands).to.equal('MMLRL');
  });

  it('instructs the rover to carry out the commands', () => {
    let plateau1 = new Plateau(5, 5);
    plateau1.addRover(2, 2, 'E');
    plateau1.sendCommands('MMLRL');
    expect(plateau1.rovers[0].xPosition).to.equal(4);
    expect(plateau1.rovers[0].yPosition).to.equal(2);
    expect(plateau1.rovers[0].direction).to.equal('N');
  });

  it('prints out the final positions of all rovers', () => {
    // const spy = sinon.spy(console.log);
    let plateau1 = new Plateau(5, 5);
    plateau1.addRover(1, 2, 'N');
    plateau1.sendCommands('LMLMLMLMM');
    plateau1.addRover(3,3,'E');
    plateau1.sendCommands('MMRMMRMRRM');
    plateau1.allRoverPositions;
    // expect(spy.callCount).to.equal(2);
  });

});