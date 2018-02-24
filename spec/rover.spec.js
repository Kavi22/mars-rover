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

  describe('should set new co-ordinates when instructed to move', () => {
    it('should increment Y position  if currently facing North', () => {
      let rover1 = new Rover(1, 5, 'N');
      rover1.splitCommandline('MM');
      rover1.moveOrTurn();
      expect(rover1.yPosition).to.equal(7);
    });
    it('should increment X position  if currently facing East', () => {
      let rover1 = new Rover(1, 3, 'E');
      rover1.splitCommandline('MMM');
      rover1.moveOrTurn();
      expect(rover1.xPosition).to.equal(4);
    });
    it('should increment Y position  if currently facing South', () => {
      let rover1 = new Rover(1, 4, 'S');
      rover1.splitCommandline('MMM');
      rover1.moveOrTurn();
      expect(rover1.yPosition).to.equal(1);
    });
    it('should increment X position  if currently facing West', () => {
      let rover1 = new Rover(5, 2, 'W');
      rover1.splitCommandline('MM');
      rover1.moveOrTurn();
      expect(rover1.xPosition).to.equal(3);
    });
  });

  describe('should change the rovers direction according to instruction', () => {
    it('should change the direction from N to W when command is L', () => {
      let rover1 = new Rover(1, 3, 'N');
      rover1.splitCommandline('L');
      rover1.moveOrTurn();
      expect(rover1.direction).to.equal('W');
    });
    it('should change the direction from E to N when command is L', () => {
      let rover1 = new Rover(1, 3, 'E');
      rover1.splitCommandline('L');
      rover1.moveOrTurn();
      expect(rover1.direction).to.equal('N');
    });
    it('should change the direction from S to E when command is L', () => {
      let rover1 = new Rover(1, 3, 'S');
      rover1.splitCommandline('L');
      rover1.moveOrTurn();
      expect(rover1.direction).to.equal('E');
    });
    it('should change the direction from W to S when command is L', () => {
      let rover1 = new Rover(1, 3, 'W');
      rover1.splitCommandline('L');
      rover1.moveOrTurn();
      expect(rover1.direction).to.equal('S');
    });
    it('should change the direction from N to E when command is R', () => {
      let rover1 = new Rover(1, 3, 'N');
      rover1.splitCommandline('R');
      rover1.moveOrTurn();
      expect(rover1.direction).to.equal('E');
    });
    it('should change the direction from E to S when command is R', () => {
      let rover1 = new Rover(1, 3, 'E');
      rover1.splitCommandline('R');
      rover1.moveOrTurn();
      expect(rover1.direction).to.equal('S');
    });
    it('should change the direction from S to E when command is R', () => {
      let rover1 = new Rover(1, 3, 'S');
      rover1.splitCommandline('R');
      rover1.moveOrTurn();
      expect(rover1.direction).to.equal('W');
    });
    it('should change the direction from W to S when command is R', () => {
      let rover1 = new Rover(1, 3, 'W');
      rover1.splitCommandline('R');
      rover1.moveOrTurn();
      expect(rover1.direction).to.equal('N');
    });

  });

});