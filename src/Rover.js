const DataError = require('./DataError');

class Rover {
  constructor(xPosition = 0, yPosition = 0, direction = 'N') {
    this.xPosition = xPosition,
    this.yPosition = yPosition,
    this.direction = direction;
    this.errors = [];
  }

  saveCommands(commands) {
    this.commands = commands;
  }

  isAtBoundry(axis) {
    return (this[`${axis}Position`] >= this[`boundry${axis.toUpperCase()}`]);
  }

  moveOrTurn() {
    this.commands.split('').forEach(command => {
      if (command === 'M') {
        this.move(command);
      } else if (command === 'L') {
        this.turnLeft();
      } else if (command === 'R') {
        this.turnRight();
      } else {
        let e = new DataError('Invalid command', command);
        this.errors.push(e);
        console.log(`${e.message}: ${e.data},  rover can not proceed!`);
      }
    });
  }

  sendBoundaryError(axis) {
    let e = new DataError('Can not move further', this[`${axis}Position`]);
    this.errors.push(e);
    console.log(`${e.message}: Rover reached the boundary : ${e.data}`);
  }

  move() {
    if (this.direction === 'N') {
      !this.isAtBoundry('y') ? this.yPosition += 1 : this.sendBoundaryError('y');
    } else if (this.direction === 'E') {
      !this.isAtBoundry('x') ? this.xPosition += 1 : this.sendBoundaryError('x');
    } else if (this.direction === 'S') {
      !this.isAtBoundry('y') ? this.yPosition -= 1 : this.sendBoundaryError('y');
    } else if (this.direction === 'W') {
      !this.isAtBoundry('x') ? this.xPosition -= 1 : this.sendBoundaryError('x');
    }
  }

  turnLeft() {
    if (this.direction === 'N') {
      this.direction = 'W';
    } else if (this.direction === 'E') {
      this.direction = 'N';
    } else if (this.direction === 'S') {
      this.direction = 'E';
    } else if (this.direction === 'W') {
      this.direction = 'S';
    }
  }

  turnRight() {
    if (this.direction === 'N') {
      this.direction = 'E';
    } else if (this.direction === 'E') {
      this.direction = 'S';
    } else if (this.direction === 'S') {
      this.direction = 'W';
    } else if (this.direction === 'W') {
      this.direction = 'N';
    }
  }

  get positions() {
    return [this.xPosition, this.yPosition, this.direction];
  }

}

module.exports = Rover;