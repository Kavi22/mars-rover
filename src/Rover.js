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
        if (this.direction === 'E') {
          this.xPosition += 1;
        }
        if (this.direction === 'S') {
          this.yPosition -= 1;
        }
        if (this.direction === 'W') {
          this.xPosition -= 1;
        }
      }

    });
  }

}

module.exports = Rover;