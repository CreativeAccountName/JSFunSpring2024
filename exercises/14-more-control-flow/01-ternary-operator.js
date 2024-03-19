let num = 8; // e.g.

/**
 * This is similar to an older problem.
 * Solve this problem with the ternary operator this time.
 *
 * Create a variable called "isEvenOrOdd". (Do not use var.)
 * If "num" is even, "isEvenOrOdd" should equal the string "even".
 * Otherwise, "isEvenOrOdd" should equal the string "odd".
 * Your answer should still work when "num" is a different value.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
let isEvenOrOdd;
isEvenOrOdd = num % 2 === 0
? isEvenOrOdd = "even"
: isEvenOrOdd = "odd";

console.log(isEvenOrOdd);

// let isEvenOrOdd = num % 2 === 0 ? "even" : "odd";  // FAR BETTER way to do this. Thanks, Chelsea M.!