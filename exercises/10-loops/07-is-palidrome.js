let string = "racecar";

/**
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 *
 * Create a variable called "isPalindrome".
 * It should equal true if "string" is a palindrome
 * and false if it is not.
 *
 * Use the split and join methods to solve this problem.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
let isPalindrome = false;

const stringArray = string.split(""); // Creating a new array using the .split() method.
const stringReversedArray = stringArray.toReversed(); // Creating a reversed copy of stringArray with the .toReversed() method, since .reverse alters the original.
const stringReversed = stringReversedArray.join(""); // Using the .join() method to turn the reversed array copy into a separate string.
console.log(stringReversed);

if (string === stringReversed){isPalindrome = true; console.log(`Congratulations! "${string}" is a palindrome! 8D`);} // If string and stringReversed are identical, then it's a palindrome.
else if (string !== stringReversed){isPalindrome = false; console.log(`Sorry, but "${string}" is not a palindrome. 8C`);} // If string and stringReversed aren't identical, it's not a palindrome.

/*
// This was my first attempt to solve this problem. I was trying to directly compare items on either end of the array by iterating from either side, but before I could get that working I realized the above method would take fewer lines of code and would be easier to write.

// The way it was going to work, I would create a variable that was equal to half the length of the string, rounded down, to check the first half of the array against the back half in reversed order. So stringArray[0] would be checked against stringArray[6] in a seven(7) character string. If that was true, then it would check stringArray[1] against stringArray[5], and so on, until it either completed the loop or it found a discrepancy. The middle character of a string would always equal itself, so that's why it would've rounded down instead of rounding up or keeping strHalf as a float.

let strHalf = (string.length / 2);
let strComp = string.length;
const stringArray = string.split("");

if (strHalf % 2 !== 0) {
  strHalf -= .5;
}
console.log(strHalf);

for (let index = 0; index <= strHalf; index++){
  console.log(index);
  console.log(strComp);
  if (stringArray[index] !== stringArray[strComp])
  {isPalindrome = false; break;}
  else {isPalindrome = true;
        strComp--;}
}

if (isPalindrome === true){console.log("It's a palindrome!");}
else {console.log("It's not a palindrome. :C");}
*/
