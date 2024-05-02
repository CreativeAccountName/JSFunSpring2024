(function () {
	/**
	 * As a user, I should be able to click on the a button to see random dog images.
	 * Please use axios in this example.
	 *
	 * You will be making an HTTP request to this API:
	 * https://dog.ceo/api/breeds/image/random
	 *
	 * You should expect this as a response:
	 * {
	 *    "status": "success",
	 *    "message": "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg"
	 * }
	 */

	// Creates a named function to hold the API request.
	const imgRequest = () => {
		// Using axios, sends a GET request to the dog.ceo API for a random image.
		axios({
			method: "GET",
			url: "https://dog.ceo/api/breeds/image/random",
		})
			// If the GET request is successful, the #image elements' source is updated with a new, random image source url.
			.then((response) => {
				const image = document.querySelector("#image");
				image.src = response.data.message;
			})
			// Otherwise, an error is thrown.
			.catch((err) => {
				console.error(err);
			});
	};
	// When clicked, the button element on the page will run the imgRequest function.
	const button = document.querySelector(".button");
	button.addEventListener("click", () => {
		imgRequest();
	});
})();
