const Rover = require('./Rover');

class Plateau  {
  constructor(width, height) {
   this.width = width,
   this.height = height,
   this.rovers = [];
  }

  addRover(xPosition, yPosition, direction) {
    const newRover = new Rover(xPosition, yPosition, direction);
    this.rovers.push(newRover);
  }

}

module.exports = Plateau;