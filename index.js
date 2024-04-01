// Actual number
let gameNum = 25;
// to get a input from user
let userNum = prompt("Guess the game number:");
// loop for the game
while(userNum!= gameNum ){
    userNum = prompt("You entered wrong number, Guess Again");
}
// for output
console.log("Congratulation, You guess the right number!");

