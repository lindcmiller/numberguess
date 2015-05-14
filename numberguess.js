(function () {

    var guessesLeft, randomNumber, guessInput, submitButton, answerDisplay, maxGuesses;

    maxGuesses = 3;

    guessInput = document.getElementById("guess");
    submitButton = document.getElementById("submitAnswer");

    answerDisplay = document.getElementById("answer");

    answerDisplay.innerHTML = "I'm thinking of a number between 1 and 10. What is my number?";

    submitButton.addEventListener("click", function (event) {
        event.stopPropagation();
        event.preventDefault();
        checkAnswer();
    });

    initGame();

    function initGame () {
        guessesLeft = maxGuesses;
        randomNumber = Math.floor(Math.random() * 10 + 1);
        guessInput.value = "";
    }

    function checkAnswer () {

        if (parseInt(guessInput.value) == randomNumber) {
            answerDisplay.innerHTML = "You win! " + randomNumber + " is the number. " +
                "To start again, please input your next guess.";
            initGame();
            return;
        }
        else if (guessInput.value > randomNumber) {
            answerDisplay.innerHTML = "Too high! Please guess a lower number.";
        }
        else {
            answerDisplay.innerHTML = "Too low! Please guess a higher number.";
        }

        guessesLeft -= 1;

        if (guessesLeft === 0) {
            answerDisplay.innerHTML = " No guesses left - you lose!";
            initGame();
        }
    }

}());

// var width = 0;
//  window.onload = function(e){
//    setInterval(function () {
//        width = width >= 100 ? 0 : width+5;
//        document.getElementById('progress-bar').style.width += width + '33%'; }, 100);
//  };
