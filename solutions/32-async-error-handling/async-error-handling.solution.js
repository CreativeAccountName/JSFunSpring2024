/**
 * Adds error handling to the previous problem
 */

const quote = document.querySelector("#quote");

// Using async on this function here so that await will work
const getData = async () => {
  // Wrapping this in try ... block, so that if there is an error,
  // we can handle it in the catch block.
  // Otherwise, everything would just crash.
  try {
    // Going to the Ron Swanson API and getting a quote
    const response = await axios.get(
      "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
    );
    // Displays the quote on the page
    quote.textContent = response.data[0];
  } catch (err) {
    // Logging the error to our console so that we can troubleshoot
    console.error(err);
    // Displaying a user friendly message
    quote.textContent = "Sorry, an unexpected error occurred";
  }
};

// Gets the button on the page and react to when the button is clicked
const button = document.querySelector("button");
button.addEventListener("click", getData);
