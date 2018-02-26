const expect = require('chai').expect;
const Rover = require('../src/Rover');
// const Plateau = require('../src/Plateau');

describe('Rover', () => {
  it('is a function ', () => {
    expect(Rover).to.be.a('function');
  });

  it('creates an instance', () => {
    let rover1 = new Rover();
    expect(rover1).to.be.an.instanceof(Rover);
  });

  describe('manages position', () => {
    it('sets the rovers starting location', () => {
      let rover1 = new Rover(1, 5, 'S');
      expect(rover1.xPosition).to.equal(1);
      expect(rover1.yPosition).to.equal(5);
      expect(rover1.direction).to.equal('S');
    });
  
    it('sets the rovers position to 0,0,N if not specified', () => {
      let rover1 = new Rover();
      expect(rover1.xPosition).to.equal(0);
      expect(rover1.yPosition).to.equal(0);
      expect(rover1.direction).to.equal('N');
    });
  });

  it('receives a set of commands and stores this on the rover', () => {
    let rover1 = new Rover(1, 5, 'S');
    rover1.saveCommands('LMLMLM');
    expect(rover1.commands).to.equal('LMLMLM');
  });

  it('creates and saves an error if invalid commmand is passed', () => {
    let rover1 = new Rover(1, 5, 'S');
    rover1.saveCommands('S');
    rover1.moveOrTurn();
    expect(rover1.errors[0].data).to.equal('S');
  });

  describe('sets new co-ordinates when instructed to move', () => {
    it('increments Y position  if currently facing North', () => {
      let rover1 = new Rover(1, 5, 'N');
      rover1.saveCommands('MM');
      rover1.moveOrTurn();
      expect(rover1.yPosition).to.equal(7);
    });
    it('increments X position  if currently facing East', () => {
      let rover1 = new Rover(1, 3, 'E');
      rover1.saveCommands('MMM');
      rover1.moveOrTurn();
      expect(rover1.xPosition).to.equal(4);
    });
    it('increments Y position  if currently facing South', () => {
      let rover1 = new Rover(1, 4, 'S');
      rover1.saveCommands('MMM');
      rover1.moveOrTurn();
      expect(rover1.yPosition).to.equal(1);
    });
    it('increments X position  if currently facing West', () => {
      let rover1 = new Rover(5, 2, 'W');
      rover1.saveCommands('MM');
      rover1.moveOrTurn();
      expect(rover1.xPosition).to.equal(3);
    });
  });

  describe('changes the rovers direction according to instruction', () => {
    it('changes the direction from N to W when command is L', () => {
      let rover1 = new Rover(1, 3, 'N');
      rover1.saveCommands('L');
      rover1.moveOrTurn();
      expect(rover1.direction).to.equal('W');
    });
    it('changes the direction from E to N when command is L', () => {
      let rover1 = new Rover(1, 3, 'E');
      rover1.saveCommands('L');
      rover1.moveOrTurn();
      expect(rover1.direction).to.equal('N');
    });
    it('changes the direction from S to E when command is L', () => {
      let rover1 = new Rover(1, 3, 'S');
      rover1.saveCommands('L');
      rover1.moveOrTurn();
      expect(rover1.direction).to.equal('E');
    });
    it('changes the direction from W to S when command is L', () => {
      let rover1 = new Rover(1, 3, 'W');
      rover1.saveCommands('L');
      rover1.moveOrTurn();
      expect(rover1.direction).to.equal('S');
    });
    it('changes the direction from N to E when command is R', () => {
      let rover1 = new Rover(1, 3, 'N');
      rover1.saveCommands('R');
      rover1.moveOrTurn();
      expect(rover1.direction).to.equal('E');
    });
    it('changes the direction from E to S when command is R', () => {
      let rover1 = new Rover(1, 3, 'E');
      rover1.saveCommands('R');
      rover1.moveOrTurn();
      expect(rover1.direction).to.equal('S');
    });
    it('changes the direction from S to E when command is R', () => {
      let rover1 = new Rover(1, 3, 'S');
      rover1.saveCommands('R');
      rover1.moveOrTurn();
      expect(rover1.direction).to.equal('W');
    });
    it('changes the direction from W to S when command is R', () => {
      let rover1 = new Rover(1, 3, 'W');
      rover1.saveCommands('R');
      rover1.moveOrTurn();
      expect(rover1.direction).to.equal('N');
    });
    it('changes the direction according to commands', () => {
      let rover1 = new Rover(1, 3, 'N');
      rover1.saveCommands('RRL');
      rover1.moveOrTurn();
      expect(rover1.direction).to.equal('E');
    });
  });
  
  describe('moves and turns accordingly', () => {
    it('turns according to the commands it receives', () => {
      let rover1 = new Rover(1, 2, 'N');
      rover1.saveCommands('LMLMLMLMM');
      rover1.moveOrTurn();
      expect(rover1.direction).to.equal('N');
      expect(rover1.xPosition).to.equal(1);
      expect(rover1.yPosition).to.equal(3);
    });
  });

  describe('output', () => {
    it('gets the correct current position of rover', () => {
      let rover1 = new Rover(1, 2, 'N');
      rover1.saveCommands('LMLMLMLMM');
      rover1.moveOrTurn();
      let result = rover1.positions;
      expect(result).to.eql([1, 3, 'N']);
    });
  });

});