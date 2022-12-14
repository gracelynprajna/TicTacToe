/*TIC TAC TOE

GENERAL OVERVIEW OF GAME
1. player vs computer 
2. start button 
3. player will choose via a button when the game starts if they want to be x or o, the computer will be the other one 
4. 3x3 layout
5. when there is a completed winning line, there will be a pop-up saying who won/you win/you lose! and then will show an ok button
6. play again or end button when the game ends
7. there will be a score counter of how many times the player wins or computer wins and it will show *somewhere*


Requirements - include a short note about how your game will fulfill each of these requirements 

user interaction causes changes to the web page using DOM methods (at least 3 changes during game play) can be images, text, score indicator 
  -show images of user and comp's choices
  -display score
  -display win or lose message

correct use of at least 1 JavaScript Class that is used in the game
this will be included when the person first opens the page: let playerName = prompt("Enter your name.")
alert("Hello " + playerName + "!")
maybe ----> class Player {
    constructor(name, score, addToScore);
    this.name = name;
    this.score = score; 
    this.addToScore = addToScore;
    }
    class User extends Player {
        super(name, score, addToScore);
        this.score = 0;
    }
    class Computer extends Player {
        super(name,score, addToScore);
        this.name = "Computer";
        this.score = 0;
    }
  - player class that will a parent class to user and computer
  -player has a name property, score property, addToScore method

add to score method (i will figure out how to do this later)
- my plan is to make an add to score method that will keep adding until the user clicks that they do not want to play anymore. then it will show them their final score. the final score doesnt show until they do not want to pla anymore 

use of a method defined in your class 
  -addToScore method to increase score
  -randomChoice method on computer class - will choose an empty spot to place the x or o (pickASpot???)


keep score - user must be able to gain points
  

declare if the user won or lost at the end of each game and display on the page 

 Use of CSS to set colors, fonts and overall layout of the page
  - simple flexbox layout center

use of iteration. examples: for loop, while loop, .forEach method, .map method


/*

/* Plan functions 
start thinking about your basic functions! give them a name and list what they do 

function chooseSpot
- it will choose a spot for the computer when it is the computer's turn to play 
- choose a random empty slot out of the 9 

function getChoice 
- gets users choice of x or o 
- gives the computer the one that the user does not pick 
- returns an object containing the user's choice and computer's choice


- outputs console.log messages for each outcome
- increments the round winners score

function playGame
- counts round number if the player plays again, if not the game ends at the final score will show 

*/


