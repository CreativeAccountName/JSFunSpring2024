(function () {
	/**
	 * You have a few problems to solve below with Vanilla JavaScript.
	 * You are allowed to make changes to the HTML and CSS.
	 */
	// Write your answer here

	/**
	 * Problem 1: Display the results of the world's most pointless search engine.
	 *
	 * When the user types in the textbook and either clicks "Search" button or hits the enter key,
	 * display the message "No results for ___ found" inside of this <p></p> below.
	 * For example, if the user searches for "Indian Ocean", display "No results for Indian Ocean found".
	 * (Since there are no oceans near Albany, NY, the search engine should
	 * display the "No results for ___ found" message every time.)
	 *
	 * The exercise must be completed with a form handler
	 * and you must prevent the page from refreshing when the form is submitted.
	 */
	// Write your answer here

	const form = document.querySelector("#form"); // Target forms
	const results = document.querySelector("#results"); // Target output
	const search = document.querySelector("#search"); // Target input

	form.addEventListener("submit", (event) => {
		event.preventDefault(); // Prevents page from refreshing
		results.textContent = `No results for ${search.value} found`;
	});

	/**
	 * Problem 2: Agree to the terms and conditions
	 *
	 * Whenever the user clicks the "Continue" button, if she has not agreed to the terms,
	 * the error "You must agree to the terms and conditions" should appear
	 * and the label "I Agree to the Terms and Conditions" should turn red.
	 * If she has, then display "Thank you for signing up".
	 *
	 * To see an example of what this looks like:
	 * When the page loads, @see terms-on-load.png
	 * When the user clicks on the "Continue" button without checking the "I Agree ..." checkbox,
	 * @see terms-on-error.png
	 * When the user checks the "I Agree ..." checkbox and click "Continue",
	 * @see terms-on-success.png
	 *
	 * To start, you will need to hide some element on the page and change the input's classes.
	 */
	// Write your answer here

	// Initializing constants to target specific elements in the page for changes based on user input.
	const formAccept = document.querySelector("#formAccept"); // Targets form
	const buttonCont = document.querySelector("#buttonCont"); // Targets "Continue" button
	const hasAgreed = document.querySelector("#hasAgreed"); // Targets checkbox
	hasAgreed.checked = false; // Forces checkbox back to its default unchecked state on page reload.

	// Checks whether the user has agreed to the ToS. If they haven't and they've already tried to click the "Continue" button, they receive an error, the checkbox and related text elements turn red, and the "Continue" button is disabled. Otherwise, the error state changes are reverted.
	hasAgreed.addEventListener("click", () => {
		if (hasAgreed.checked) {
			hasAgreed.classList.remove("is-invalid");
			document.querySelector(".text-danger").hidden = true;
			buttonCont.disabled = false;
		} else {
			hasAgreed.classList.add("is-invalid");
			document.querySelector(".text-danger").hidden = false;
			buttonCont.disabled = true;
		}
	});

	// When the user clicks the "Continue" button, the checkbox is checked again to verify the user has agreed to the ToS. If they have, they're thanked for signing up. If they haven't, the button will be disabled and they'll receive red text errors indicating that checking the box is required.
	formAccept.addEventListener("submit", (event) => {
		event.preventDefault(); // Prevents page refresh

		// If hasAgreed is checked, prevents the user from unchecking box or clicking the button after successfully submitting the form.
		if (hasAgreed.checked) {
			buttonCont.disabled = true;
			hasAgreed.disabled = true;
			document.querySelector(".text-success").hidden = false;
		}

		// If they have not, button id disabled and errors are displayed instead.
		else {
			buttonCont.disabled = true;
			hasAgreed.classList.add("is-invalid");
			document.querySelector(".text-danger").hidden = false;
			document.querySelector(".form-check-label").classList.add(".is-invalid");
		}
	});
})();
