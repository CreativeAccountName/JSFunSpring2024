// E.g. do not change me
const createLink = (text) => {
  return `<a href="#" class="button">${text}</a>`;
};

// E.g. do not change me
const createButton = (text) => {
  return `<button type="button">${text}</button>`;
};

/**
 * Right now, "createCallToAction" only invokes "createLink",
 * However, we want make "createCallToAction" more flexible
 * so that it can invoke both "createLink" and "createButton".
 *
 * What you need to do is update "createCallToAction" so that
 * it is uses a callback instead of invoking "createLink" directly.
 */

// CHANGE SOMETHING WITH THE FUNCTION DECLARATION
const createCallToAction = (text, callback) => {
  // CHANGE SOMETHING INSIDE THIS FUNCTION


  
  return `<div>Limited Time: Members Save 30%<br>${callback(text)}</div>`;
};

// CHANGE SOMETHING HERE TOO so that creates a link
console.log(createCallToAction("Book Now", createLink));
console.log(createCallToAction("Book Now", createButton));

// IGNORE THIS BELOW. It is for the tests.

export { createCallToAction };


  // return callback(`<div>Limited Time: Members Save 30%<br>${text}</div>`); // My original answer. Seemed to work, but was failing nonetheless.
  // return callback(`<div>${callback(`Limited Time: Members Save 30%<br>${text}`)}</div>`);

  // This seemed to work, but it fails the test somehow. The error that appears is partial:
  //      AssertionError: expected [ …(2) ] to include '<div>Limited Time: Members Save 30%<b…' is all it says, so I don't see the full expected text.
  // return (`<div>${callback(`Limited Time: Members Save 30%<br>${text}`)}</div>`); // I even tried setting up the return to
  // see if the div was supposed to contain the button or link instead, but that didn't pass the test either, so I reverted back.

  // Eventually, I found that the issue is that the test was looking for a *very* specific return statement.
  // My code seemed fine, so I decided to look at the tests' code to figure out what was going on.
  // When I looked at the expected test output (which did not fully write to the error message in the Debug Console)
  // I saw that the <div> element was not meant to be inside the link or button. In fact,
  // the callback couldn't include anything *but* the text argument, and the 'Limited Time' section had to be in the div *but*
  // the callback function with the text had to be within the link or button for the desired formatting.
  // I was confused by the formatting requirement, is all. I must've forgotten the rules regarding static elements within interactive elements.