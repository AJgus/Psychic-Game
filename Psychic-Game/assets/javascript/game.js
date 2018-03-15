var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

document.onkeyup = funtion(event); {
    //takes user guess
    var userGuess = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    //computer chooses random letter to be guessed
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    //pushes users guess to guesses so far
    guessesSoFar.push(userGuess);

    //resetting the guesses to 9 and guesses so far to 0
    if (userGuess == computerGuess) {
        wins++;
        guessesLeft = 9;
        guessesSoFar.length = 0;
    }
    else if (guessesLeft ==0) {
        losses++;
        guessesLeft = 9;
        guessesSoFar.length = 0;
    }
    else if (userGuess !== computerGuess) {
        guessesLeft --;
    }
    //updating the scoreboard
    var html = "<h1> Psychic Game </h1>" +
    "<p> Wins: " +
    wins +
    "</p>" +
    "<p> Losses: " +
    losses +
    "</p>" +
    "<p> Guesses left: " +
    guessesLeft +
    "</p>" +
    "<p> Your guesses so far" +
    guessesSoFar +
    "</p>"
    ;
    document.querySelector("game.js").innerHTML = html;
    //when i try to run it, it says function is not defined????
}