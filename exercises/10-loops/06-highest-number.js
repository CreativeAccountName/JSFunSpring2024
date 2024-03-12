let numbers = [10000, -8, 10, 0.7]; // e.g.

/**
 * Create a variable called "highest".
 * Loop through the array using a for loop (or for ... of loop) and return the highest number.
 * Set "highest" to the highest number.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
let highest;

for (let index of numbers) {highest = Math.max(...numbers);} // This loop sets highest to the largest value provided in the numbers array by way of the Math.max() function, which provides the largest of a set of parameters. A spread is used, which lets each item in the array act as a separate parameter for the Math.max() function.
console.log(highest); // 10000