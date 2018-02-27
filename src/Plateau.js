const Rover = require('./Rover');

class Plateau {
  constructor(width, height) {
    this.width = width,
      this.height = height,
      this.rovers = [];
    this.errors = [];
  }

  addRover(xPosition, yPosition, direction) {
    const newRover = new Rover(xPosition, yPosition, direction);
    try {
      this.checkLandingPosition(newRover);
    } catch (error) {
      if (error.name === 'InvalidLandingPosition') {
        newRover.errors.push(error);
      }
    }
    this.rovers.push(newRover);
  }

  checkLandingPosition(rover) {
    if (rover.xPosition > this.width || rover.yPosition > this.height) {
      let e = new Error('Rover co-ordinates out of grid. Cannot land');
      e.xPosition = rover.xPosition;
      e.yPosition = rover.yPosition;
      e.name = 'InvalidLandingPosition';
      throw e;
    }
  }

  sendCommands(commands) {
    let currentRover = this.rovers[this.rovers.length - 1];
    currentRover.saveCommands(commands);
    try {
      this.checkforInvalidCommands(commands);
      currentRover.moveOrTurn();
    }
    catch (error) {
      if (error.name === 'Contains Invalid commands') {
        currentRover.errors.push(error);
      }
    }
  }

  checkforInvalidCommands(commands) {
    commands.split('').forEach((command) => {
      if (/[^MLR]/.test(command)) {
        let e = new Error('Contains Invalid commands');
        e.commands = commands;
        e.name = 'InvalidCommands';
        throw e;
      }
    });
  }

  get allRoverPositions() {
    this.rovers.forEach((rover) => {
      console.log(rover.positions.join(' '));
    });
  }
}

module.exports = Plateau;