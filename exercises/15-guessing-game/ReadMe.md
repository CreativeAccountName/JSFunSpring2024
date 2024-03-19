# Guess the Number Game Project Instructions

**OBJECTIVE**:

Create a simple command-line "Guess the Number" game where the computer selects a random number, and the player attempts to guess it based on feedback.

**Setup Steps**:

1. Prepare your Environment

```bash
cd exercises/15-guessing-game
npm init -y
npm install readline-sync
```

2. Create Project Files
   Create an `index.js` This will be where you write the game logic.

## Game Development Instructions

1.  Random Number Generation
    Generate a random integer within a specified range as the secret number at the start of your game:

```bash
Math.random()
```

2. Setting Up User Input
   Use readline-sync or readline to prompt the player to enter their guess.

3. Implement Game Logic
   Implement a while loop to process guesses, providing feedback on whether the guess is too high, too low, or correct.

4. Error Handling
   Validate the player's input to ensure it's a number within the expected range. Prompt for re-entry if invalid.

5. Game Over Condition
   End the game once the player guesses correctly.

## Playing the Game

In Visual Studio Code, open your terminal. To start the game, run `node .` To end the game, press `ctrl + c`.

You will display messages to the user with `console.log`. For example:

```javascript
console.log("\nWelcome to the Guessing Game!\nPress ctrl+c to stop\n");
```

The new line character (`\n`) is like pressing "enter" in text editors like Microsoft Word or Visual Studio Code. Use this to make your text output easier to read.

The player will guess a number over the command line. The player will type a number and hit `enter`. To get input from the player with the _readline-sync_ library, you will do something like this:

```javascript
const number = prompt.question("Please guess a number between 1 through 10: ");
```

[You can read the full _readline-sync_ documentation here](https://www.npmjs.com/package/readline-sync).

## Project Requirements

Additional Tips
Use pseudocode to outline the game flow before coding.
Break down the game logic into functions for better organization and readability.
Use clear prompts and messages for a good user experience.
