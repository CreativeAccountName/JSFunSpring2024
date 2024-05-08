/**
 * As a user, I should be able to click on a button and get a quote, so I can learn about what ron-swanson's opinions are.
 *
 *  Developer notes:
 *  In the HTML, there is an element that you can use to populate the quotes(#blockquote) or feel free to use your own design.
 *
 * This is the API you will be using. The method will be GET.
 * https://ron-swanson-quotes.herokuapp.com/v2/quotes
 */

const quote = document.querySelector("#quote");

// Using async on this function here so that await will work
const getData = async () => {
  // Going to the Ron Swanson API and getting a quote
  const response = await axios.get(
    "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
  );
  // Displays the quote on the page
  quote.textContent = response.data[0];
};

// Gets the button on the page and react to when the button is clicked
const button = document.querySelector("button");
button.addEventListener("click", getData);
