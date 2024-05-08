(function () {
	/**
	 * As a user, I should be able to click on a button and get a quote, so I can learn about what ron-swanson's opinions are.
	 *
	 *  Developer notes:
	 *  In the HTML, there is an element that you can use to populate the quotes(#blockquote) or feel free to use your own design.
	 *
	 * This is the API you will be using. The method will be GET.
	 * https://ron-swanson-quotes.herokuapp.com/v2/quotes
	 */
	//  Creates constants to target DOM elements.
	const quote = document.querySelector("#quote");
	const buttonQuote = document.querySelector(".btn");

	// Establishes an async API request. This will ask for a random quote from the host server. Once a response has been received, the blockquote (#quote) textContent property is updated.
	const getQuote = async () => {
		const result = await axios("https://ron-swanson-quotes.herokuapp.com/v2/quotes");
		quote.textContent = result.data;
	};

	// Event listener that calls getQuote when .btn is clicked.
	buttonQuote.addEventListener("click", () => {
		getQuote();
	});
})();
