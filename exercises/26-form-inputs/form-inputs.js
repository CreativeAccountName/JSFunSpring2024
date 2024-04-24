(function () {
	/**
	 * You have a few problems to solve below with Vanilla JavaScript.
	 * You are allowed to make changes to the HTML and CSS.
	 */
	/**
	 * Problem 1: Display what the user is typing or selecting from a dropdown.
	 *
	 * When the user types in an email address,
	 * display what they are typing inside of the empty <span> tags.
	 * When the user selects an option from the dropdown,
	 * display what they selected inside of the empty <span> tags.
	 * (See the comments in the HTML for what <span> tags to sue.)
	 */
	// Write your answer here

	const email = document.querySelector(["#email"]);
	email.addEventListener("input", (event) => {
		document.querySelector("#displayEmail").textContent = event.target.value;
	});

	const title = document.querySelector("#title");
	title.addEventListener("input", () => {
		document.querySelector("#titleSpan").textContent = title.options[title.selectedIndex].text;
	});

	/**
	 * Problem 2: Handle a checkbox
	 *
	 * A <div> that says "✓ Include promotional offers" is hidden o the screen.
	 * When the user checks the "Send promotional offers to my email address" checkbox,
	 * show the hidden <div> tag.
	 *
	 * As a bonus, see if you can hide the <div> tag if they uncheck the checkbox.
	 */
	// Write your answer here.

	const isOptIn = document.querySelector("#shouldSendPromotions");
	isOptIn.addEventListener("click", () => {
		if (isOptIn.checked) {
			document.querySelector("#promoInc").classList.remove("hidden");
		} else {
			document.querySelector("#promoInc").classList.add("hidden");
		}
	});

	/**
	 * Problem 3: Input validation
	 *
	 * There is a hidden error message "Please enter email address."
	 * If the user has not typed in anything in the email address textbox,
	 * show this error message.
	 * If they have typed something, hide this error message.
	 *
	 * You can use the "input" or "change" events, but the general UX recommendation
	 * is to use "blur" events for these types of error messages (form validation errors).
	 */
	// Write your answer here


	//Set button to disabled by default
	email.addEventListener("input", () => {
		if (!email.value) {
			document.querySelector(".invalid-feedback").style.display = "block";
			document.querySelector("#signUp").disabled = true;
		} else {
			document.querySelector(".invalid-feedback").style.display = "none";
			document.querySelector("#signUp").disabled = false;
		}
	});
})();
