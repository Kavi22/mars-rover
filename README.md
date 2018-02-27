# Mars-Rover

## About
This is a solution to the Mars-Rover test for ThoughtWorks.
It has been built in JavaScript ES6 using Node.js(v7.9.0). 

----

## Set Up
To check if Node.js is installed on your machine open a terminal window and enter:

```node -v```

If you do not already have Node.js installed, please follow the instructions on [this guide](https://nodejs.org/en/download/package-manager/).

To check if npm is installed on your machine enter this command in your terminal window: 

```npm -v```

If you do not have npm already installed please follow [this guide](https://www.npmjs.com/get-npm) to set it up.

----

## Installation

To run this project, you will need to download it onto your local machine and install all dev-dependencies (testing purposes).

Navigate inside the folder and install all dependencies by entering the following command on your terminal window: 

```npm install```

Feed input to the program by entering the following command in your terminal window: 

```npm run mr```

----

## Testing

To see the unit and integration tests, enter the following command in your terminal window:

```npm test```

Testing was carried out using Mocha and Chai.

----

## Assumptions and Design

I have tried to solve this problem using Object-Orientated Design with the SOLID principles in mind. 

I started by identifying the Objects that I would need - Plateau and Rover. 
* Plateau - Used to set the width and height of what the rovers should stay within

* Rover - Rover can turn left, turn right and move forward one step

I implemented these with basic constructors and then built functions on them.
All the functions added were designed to adhere to the single responsibility principle. 

Plateau class monitors if coordinates for new rover are outside of the current plateau boundary.  
It also verifies if movement is 'legal' before it is interpreted by the rover. 

Rover class interprets commands from Plateau and executes an action,  move forward or turn left/right. 

Towards the end of my implementation, I realised that my design contained all the business logic in Plateau. In my model, Plateau was the higher level object which feeds information to rovers. Although this was how I intended for the program to work, I can see that I could have added a Controller class which would be responsible for giving the other classes instructions and feeding valid information. 

For example, moving the responsibility of creating a Rover class out of the Plateau class, and instead move that logic to the Controller, allowing for a better separation of concerns. In that way, each class could have been responsible for itself and not any others. 

I attempted to be thorough with organising my code and making it easy to read by implementing well-named variables and functions. I split test files up according to the class under evaluation. 

----

## Possible Extensions

1. Would add controller as mentioned above.

2. Would have like to be able to implement functionality to check validation of input:
* Plateau to accept positive integers only
* Rover co-ordinates to be positive integers and direction can only be one of 'NESW.'

3. Implement a UI for the input
