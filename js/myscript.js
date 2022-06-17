
let word = prompt("Welcome to Hangman! Player 1, please enter a word for Player 2 to guess.").toUpperCase();

let revealedLetters = new Array(word.length);
revealedLetters.fill(false);


const maxStrikes = 6;
let strikes = 0;
let strikeLetters = new Array(maxStrikes);


drawWordProgress();


function drawStrikeLetters() {
  // should create a String from strikeLetters and put that into the content of some element
  let string = strikeLetters.join('');
  document.getElementById("strike-letters").innerHTML = string;
}


function drawWordProgress() {
  // should iterate over revealedLetters, and if the value at each index is truthy, print the corresponding letter from word. Otherwise, it should print a -
  let currentguess = "";

  document.getElementById("guessedLetters").innerHTML = currentguess;

  for (let i = 0; i < revealedLetters.length; i++) {

    // is the current value in revealedLetters true?
    if (revealedLetters[i] == true) {
      currentguess += word[i];

    } else {
      currentguess += "-";
    }
  }
  document.getElementById("guessedLetters").innerHTML += currentguess;
}




function drawGallows() {

  // should update an <img> element's src attribute to point to "images/strike-" + strikes + ".png"
  let img = document.getElementById("strike-0");
  document.getElementById("strike-0").src = "images/strike-" + strikes + ".png";

}

// DO YOU NEED TO BE IN A FUNCTION?!?
document.getElementById("submit-button").addEventListener("click", processGuess);

function processGuess(e) {
  e.preventDefault(); // prevent the form from trying to send information somewhere

  let guess = document.getElementById("guessedLetters").value.toUpperCase(); // assign to the value of the <form>'s <input> element, toUpperCase()

  if (strikes < maxStrikes) {
    // IF word.includes(guess)
    if (word.includes(guess)) {
      // loop over word // CHANGE CONDITIONS -- WHAT SHOULD THE CONDITIONS BE?
      for (let i = word[i]; word[i] == true; revealedLetters[i] = word[i]) {
        // inside loop, check IF current letter matches guess, set corresponding index in revealedLetters to a truthy value // HOW DO I WRITE THIS?
        if (guess == revealedLetters[i]) {
          revealedLetters[i] = true;
        }
        else {
          ;
        }
      }

      // ELSE
    } else {

      // update strikeLetters at current strike with incorrect guess
      strikeLetters.push(guess);
      // increment strikes
      strikes++;
      // invoke drawGallows() and drawStrikeLetters()
      drawGallows();
      drawStrikeLetters();
    }
    // invoke drawWordProgress() to update HTML
    drawWordProgress();
    // check if player 2 has won by looping over revealedLetters. if no values are false, player 2 wins
      if (revealedLetters[i].values() == true) {
          alert("Player 2 wins!");
      } else {
          alert("Player 1 wins!")
      }

  } else {
    alert("The game is over!");
  }
}
// add event listener
// make an inital call to drawWordProgress()


