class Rover {
  constructor(xPosition, yPosition, direction) {
    this.xPosition = xPosition,
    this.yPosition = yPosition,
    this.direction = direction;
  }

  splitCommandline(commands) {
    this.commands = commands.split('');
  }
  
}

module.exports = Rover;