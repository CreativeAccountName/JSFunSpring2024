/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */
(function () {

  // Single elements
  let listItem = document.querySelector("li");
  console.log(listItem);

  let myIdItem = document.querySelector("#myId");
  console.log(myIdItem);

  // Groups of elements
 let yellowTarget = document.querySelectorAll(".bg-warning");
 console.log(yellowTarget);

  // Structuring HTML for JS
  let btnTarget = document.querySelectorAll("#targetBtn");
  console.log(btnTarget);

  let aTag = document.querySelectorAll(".socMed");
  console.log(aTag);

  // Nested Elements. This targets both of the green cells individually instead of targeting the full row.
  let greenTarget = document.querySelectorAll("div#myRow div.col");
  console.log(greenTarget);
})();
