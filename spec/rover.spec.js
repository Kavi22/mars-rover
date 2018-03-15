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

  describe('sets new co-ordinates when instructed to move', () => {
    it('increments Y position  if currently facing North', () => {
      let rover1 = new Rover(1, 5, 'N');
      rover1.move();
      expect(rover1.yPosition).to.equal(6);
    });
    it('increments X position  if currently facing East', () => {
      let rover1 = new Rover(1, 3, 'E');
      rover1.move();
      rover1.move();
      rover1.move();
      expect(rover1.xPosition).to.equal(4);
    });
    it('increments Y position  if currently facing South', () => {
      let rover1 = new Rover(1, 4, 'S');
      rover1.move();
      rover1.move();
      rover1.move();
      expect(rover1.yPosition).to.equal(1);
    });
    it('increments X position  if currently facing West', () => {
      let rover1 = new Rover(5, 2, 'W');
      rover1.move();
      rover1.move();
      expect(rover1.xPosition).to.equal(3);
    });
  });

  describe('changes the rovers direction according to instruction', () => {
    it('changes the direction from N to W when command is L', () => {
      let rover1 = new Rover(1, 3, 'N');
      rover1.turnLeft();
      expect(rover1.direction).to.equal('W');
    });
    it('changes the direction from E to N when command is L', () => {
      let rover1 = new Rover(1, 3, 'E');
      rover1.turnLeft();
      expect(rover1.direction).to.equal('N');
    });
    it('changes the direction from S to E when command is L', () => {
      let rover1 = new Rover(1, 3, 'S');
      rover1.turnLeft();
      expect(rover1.direction).to.equal('E');
    });
    it('changes the direction from W to S when command is L', () => {
      let rover1 = new Rover(1, 3, 'W');
      rover1.turnLeft();
      expect(rover1.direction).to.equal('S');
    });
    it('changes the direction from N to E when command is R', () => {
      let rover1 = new Rover(1, 3, 'N');
      rover1.turnRight();
      expect(rover1.direction).to.equal('E');
    });
    it('changes the direction from E to S when command is R', () => {
      let rover1 = new Rover(1, 3, 'E');
      rover1.turnRight();
      expect(rover1.direction).to.equal('S');
    });
    it('changes the direction from S to E when command is R', () => {
      let rover1 = new Rover(1, 3, 'S');
      rover1.turnRight();
      expect(rover1.direction).to.equal('W');
    });
    it('changes the direction from W to S when command is R', () => {
      let rover1 = new Rover(1, 3, 'W');
      rover1.turnRight();
      expect(rover1.direction).to.equal('N');
    });
    it('changes the direction according to commands', () => {
      let rover1 = new Rover(1, 3, 'N');
      rover1.turnRight();
      rover1.turnRight();
      rover1.turnLeft();
      expect(rover1.direction).to.equal('E');
    });
  });
  
  describe('moves and turns accordingly', () => {
    it('turns according to the commands it receives', () => {
      let rover1 = new Rover(1, 2, 'N');
      rover1.moveOrTurn('L');
      rover1.moveOrTurn('M');
      rover1.moveOrTurn('R');
      expect(rover1.direction).to.equal('N');
      expect(rover1.xPosition).to.equal(0);
      expect(rover1.yPosition).to.equal(2);
    });
  });

  describe('positions', () => {
    it('gets the current position of rover', () => {
      let rover1 = new Rover(1, 2, 'N');
      rover1.moveOrTurn('L');
      rover1.moveOrTurn('M');
      rover1.moveOrTurn('L');
      rover1.moveOrTurn('M');
      let result = rover1.positions;
      expect(result).to.eql([0, 1, 'S']);
    });
  });
});