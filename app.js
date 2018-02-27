const Plateau = require('./src/Plateau');

const marsRover = new Plateau(5, 5);
marsRover.addRover(1, 2, 'N');
marsRover.sendCommands('LMLMLMLMM');
marsRover.addRover(3, 3, 'E');
marsRover.sendCommands('MMRMMRMRRM');
marsRover.allRoverPositions;
