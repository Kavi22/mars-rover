const Rover = require('./Rover');

class Plateau  {
  constructor(width, height) {
   this.width = width,
   this.height = height,
   this.rovers = [];
  }

  addRover(xPosition, yPosition, direction) {
    const newRover = new Rover(xPosition, yPosition, direction);
    newRover.boundryY = this.height;
    newRover.boundryX = this.width;
    this.rovers.push(newRover);
  }

  get allRoverPositions() {
    this.rovers.forEach((rover) => {
      console.log(rover.positions.join(' '));
    });
  }

  sendCommands(commands) {
    this.rovers[this.rovers.length - 1].saveCommands(commands);
  }

}

module.exports = Plateau;