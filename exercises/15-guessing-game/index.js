// Importing the readlineSync module and setting a boolean value to true which will keep the game running until the player chooses to stop.
import prompt from "readline-sync";

// Greets the user and explains the game.
console.log(
  `\n========================================\nWelcome to the Guessing Game!\nPress ctrl+c to stop at any time to quit.\n========================================\nInstructions: A random whole number between 1 - 10 will be generated, and your task is to guess the hidden value without running out of tries.\n========================================\n`
);

// Creates a random integer between 1 and 10. Function parameters are run through rounding parameters.
// This is future-proofing in case numRand is called in the future with alternate values or accepts user input.
const numRand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Checks to make sure user answer is an integer within the given range. If it is, then it's compared to the secret number with the player's response.
const numCheck = (sNum, pAns) => {
  if (!isNaN(pAns)) {
    if (pAns >= 1 && pAns <= 10) {
      if (pAns === sNum) {
        let result = 1;
        return result;
      } else if (pAns < sNum) {
        let result = 2;
        return result;
      } else if (pAns > sNum) {
        let result = 3;
        return result;
      }
    } else if (pAns < 1 || pAns > 10) {
      let result = 4;
      return result;
    }
  } else if (isNaN(pAns)) {
    let result = 5;
    return result;
  }
};

// Function to set values to their default position and generate a new random number when invoked.
const setup = () => {
  let secretNum = numRand(1, 10);
  let guessCount = 5;
  let isGuessing = true;
  let isPlaying = true;
  let gameStartVal = {
    count: guessCount,
    guess: isGuessing,
    play: isPlaying,
    secret: secretNum,
  };
  return gameStartVal;
};

// Sets a global object that, when it invokes the setup function, sets the object's properties. Because it initializes immediately before the while loop that relies on it, the loop is not able to be skipped.
let game = setup();

// Sets up and holds the game. Resets the game when looped through a second time until isPlaying is set to false.
while (game.play) {
  // Gives the player the prompt until they run out of guesses or correctly guess the answer.
  while (game.guess) {
    // If there are no more tries left, the player receives a game over message and the loop ends.
    if (game.count === 0) {
      console.log(
        `Sorry, you've run out of guesses. The correct number was ${game.secret}`
      );
      game.guess = false; // ends the loop condition so that it won't loop again until set back to true.
      break; // Forces the loop to end early, skipping the rest of the final loop.
    } else if (game.count > 0) {
      // Reduces the number of tries left.
      console.log(`You have ${game.count} guess(es) left!`);
      game.count--;
    }

    // Takes the player's answer and puts it through the parseInt method and tries to turn the player's answer into a number value.
    let playerAns = prompt.question(
      `Please guess a whole number between 1 through 10: \n`
    );
    playerAns = parseInt(playerAns);
    console.log(`========================================`);
    //Responses to player output change depending on the player's answer.
    if (numCheck(game.secret, playerAns) === 1) {
      console.log(`Correct, you win!\n`);
      game.guess = false; // Ends the current round.
    } else if (numCheck(game.secret, playerAns) === 2) {
      console.log(`Sorry, ${playerAns} is too low. Please guess again.\n`);
    } else if (numCheck(game.secret, playerAns) === 3) {
      console.log(`Sorry, ${playerAns} is too high. Please guess again.\n`);
    } else if (numCheck(game.secret, playerAns) === 4) {
      console.log(
        `Sorry, that's out of the given rage of options. Please guess again.\n`
      );
    } else if (numCheck(game.secret, playerAns) === 5) {
      console.log(`Sorry, that's not a number. Please guess again.\n`);
    }
  }

  // Takes player input of "y" or "n" and the enter key. If the player replies with "y", the game is reset and a new round begins. Otherwise, the game sends a closing message and exits the loop.
  if (!game.guess) {
    const startGame = prompt.question(`Do you want to play again? [y/n]\n`, {
      limit: ["y", "n"],
    });
    if (startGame === "y") {
      game = setup();
    } else if (startGame === "n") {
      console.log(
        "\n========================================\nThank you for playing. Have a nice day!"
      );
      game.play = false;
    }
  }
}
