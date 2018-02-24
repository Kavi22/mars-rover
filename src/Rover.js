class Rover {
  constructor(xPosition, yPosition, direction) {
    this.xPosition = xPosition,
      this.yPosition = yPosition,
      this.direction = direction;
  }

  splitCommandline(commands) {
    this.commands = commands.split('');
  }

  moveOrTurn() {
    this.commands.forEach(command => {
      if (command === 'M') {
        if (this.direction === 'N') {
          this.yPosition += 1;
        }
        else if (this.direction === 'E') {
          this.xPosition += 1;
        }
        else if (this.direction === 'S') {
          this.yPosition -= 1;
        }
        else if (this.direction === 'W') {
          this.xPosition -= 1;
        }
      }
      if (command === 'L') {
        if (this.direction === 'N') {
          this.direction = 'W';
        }
        else if (this.direction === 'E') {
          this.direction = 'N';
        }
        else if (this.direction === 'S') {
          this.direction = 'E';
        }
        else if (this.direction === 'W') {
          this.direction = 'S';
        }
      }

      if (command === 'R') {
        if (this.direction === 'N') {
          this.direction = 'E';
        }
        else if (this.direction === 'E') {
          this.direction = 'S';
        }
        else if (this.direction === 'S') {
          this.direction = 'W';
        }
        else if (this.direction === 'W') {
          this.direction = 'N';
        }
      }
    });
  }

}

module.exports = Rover;