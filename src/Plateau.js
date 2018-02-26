const Rover = require('./Rover');
const DataError = require('./DataError');

class Plateau {
  constructor(width, height) {
    this.width = width,
      this.height = height,
      this.rovers = [];
    this.errors = [];
  }

  addRover(xPosition, yPosition, direction) {
      if (this.isInBoudary(xPosition, yPosition, direction)) {
        const newRover = new Rover(xPosition, yPosition, direction);
        newRover.boundryY = this.height;
        newRover.boundryX = this.width;
        this.rovers.push(newRover);
      }
  }

  isInBoudary(xPosition, yPosition) {
    let isInB = true;
    if (xPosition > this.width || yPosition > this.height) {
      let e = new DataError('Rover co-ordinates out of grid. Can not add', xPosition, yPosition);
      this.errors.push(e);
      console.log(`${e.message}: ${e.data}`);
      isInB = false;
    }
    return isInB;
  }

  sendCommands(commands) {
    this.rovers[this.rovers.length - 1].saveCommands(commands);
    this.rovers[this.rovers.length - 1].moveOrTurn();
  }

  get allRoverPositions() {
    this.rovers.forEach((rover) => {
      console.log(rover.positions.join(' '));
    });
  }

}

module.exports = Plateau;