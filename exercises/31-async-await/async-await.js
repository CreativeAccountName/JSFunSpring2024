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
	const body = document.querySelector("body");
	const ron = document.querySelector("#img-ron");
	// Error Message that appears on the screen.
	const error = () => {
		
		const errorBox = document.createElement("div");
		errorBox.style.backgroundColor = "#000000aa";
		errorBox.style.color = "#FFFFFF";
		errorBox.style.width = "100%";
		errorBox.style.fontSize = "30px";
		errorBox.style.padding = "10px";
		errorBox.textContent = "Error: Ron has barricaded his office.";
		errorBox.style.position = "absolute";
		errorBox.style.margin.top = "100px";
		errorBox.style.zIndex = "10";
		body.insertBefore(errorBox, ron);
		buttonQuote.disabled = true;
	};

	// Establishes an async API request. This will ask for a random quote from the host server. Once a response has been received, the blockquote (#quote) textContent property is updated.
	const getQuote = async () => {
		try {
			const result = await axios("https://ron-swanson-quotes.herokuapp.com/v2/quotes"); //Axios.get helps
			quote.textContent = result.data;
		} catch (err) {
			console.error("Error:", err);
			return error();
		}
	};

	// Event listener that calls getQuote when .btn is clicked.
	buttonQuote.addEventListener("click", () => {
		getQuote();
	});
})();
