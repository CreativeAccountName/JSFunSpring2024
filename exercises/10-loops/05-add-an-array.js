let numbers = [10000, -8, 10, 0.7]; // e.g.

/**
 * Create a variable called "sum".
 * It should be equal to the sum of all the numbers in an array.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
let sum = 0;

// Adds the value of the item in the current index position to the sum variable.
for (let index of numbers) {
  sum += index;
  console.log(sum); // Should show the results of each loop via Quokka: 10000, 9992, 10002, 10002.7
}