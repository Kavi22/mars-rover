const expect = require('chai').expect;
const Plateau = require('../src/Plateau');
const Rover = require('../src/Rover');

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

  describe('adds rovers', () => {
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
  });

  describe('manages if rover co-ordinates are outside boundry',() => {
    it('checkLandingPosition throws an error', () => {
      let p = new Plateau(5,5);
      let r = new Rover(5, 6);
      const throwErrorWithRover = p.checkLandingPosition.bind(p,r);
      expect(throwErrorWithRover).to.throw('Rover co-ordinates out of grid. Cannot land');
    });
    it('will not land rover if co-ordinates are outside of boundry', () => {
      let p = new Plateau(5,5);
      p.addRover(6, 5, 'S');
      expect(p.rovers.length).to.equal(1);
      expect(p.rovers[0].errors.length).to.equal(1);
    });
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

});