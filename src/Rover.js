class Rover {
  // sets  the position and direction of the rover
  constructor(xPosition = 0, yPosition = 0, direction = 'N') {
    this.xPosition = xPosition,
      this.yPosition = yPosition,
      this.direction = direction,
      this.commands = [],
      this.errors = [];
  }
  // adds the commands to the rover
  // saveCommands(commands) {
  //   this.commands = commands;
  // }

  moveOrTurn(command) {
    if (command === 'M') {
      this.move();
    } else if (command === 'L') {
      this.turnLeft();
    } else if (command === 'R') {
      this.turnRight();
    }
  }

  move() {
    if (this.direction === 'N') {
      this.yPosition += 1;
    } else if (this.direction === 'E') {
      this.xPosition += 1;
    } else if (this.direction === 'S') {
      this.yPosition -= 1;
    } else if (this.direction === 'W') {
      this.xPosition -= 1;
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