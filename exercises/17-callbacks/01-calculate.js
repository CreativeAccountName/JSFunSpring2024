// e.g.
const add = (num1, num2) => {
  return num1 + num2;
};

// e.g
const subtract = (num1, num2) => {
  return num1 - num2;
};

/**
 * In "calculate" function below, use a callback function to perform a calculation.
 *
 * Before completing this problem, ask yourself these questions:
 * - What are function parameters and arguments?
 * - What does it mean to "invoke" a function? How do you do that?
 * - How do you return a value inside of a function?
 * If you do not know the answer to these questions, please review the function
 * exercises and slides. Please ask for help.
 *
 * Here are the steps you need to take to complete this problem:
 * - Return and invoke "callback". It should accept the two numbers as arguments.
 *
 * @example
 * const add = (a, b) => {
 *   return a + b;
 * }
 * const subtract = (a, b) => {
 *   return a - b;
 * }
 * console.log( calculate(5, 10, add) ); // 15
 * console.log( calculate(7, 3, subtract) ); // 4
 *
 * @param {number} num1
 * @param {number} num2
 * @param {function} callback
 * @returns {number}
 */

const calculate = (num1, num2, callback) => {
  // WRITE YOUR ANSWER IN HERE
};

// Uncomment me to test in Quokka
// console.log( calculate(5, 10, add) );
// console.log( calculate(7, 3, subtract) );

// IGNORE THIS BELOW. It is for the tests.

export { calculate };
