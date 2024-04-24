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

  // Example 1: EMAIL TEXTBOX

  // STEP 1: target
  const email = document.querySelector("#email");
  const emailDisplay = document.querySelector("#emailDisplay");

  // STEP 3: Do something
  const handleEmailInput = (event) => {
    const whatTheUserIsTyping = event.target.value; // Or I could make this equal to "email.value"
    // Showing what the user is typing
    emailDisplay.textContent = whatTheUserIsTyping;
  };

  // STEP 2: React to an event
  displayEmail = email.addEventListener("input", handleEmailInput);

  // Example 2: TITLE / ROLE DROPDOWN

  // STEP 1: Target
  // STEP 2: React to an event
  document.querySelector("#title").addEventListener("change", (event) => {
    const whatTheUserSelected = event.target.value;
    // STEP 3: Do something
    // Targeting display and showing what the user selected from the dropdown
    document.querySelector("#titleDisplay").textContent = whatTheUserSelected;
  });

  /**
   * Problem 2: Handle a checkbox
   *
   * A <div> that says "✓ Include promotional offers" is hidden o the screen.
   * When the user checks the "Send promotional offers to my email address" checkbox, show the hidden <div> tag.
   * If the checkox is not checked, hide the <div> tag.
   */
  // STEP 1: target
  const promotions = document.querySelector("#shouldSendPromotions");
  const promotionDisplay = document.querySelector("#promotionDisplay");

  // STEP 2: React to an event
  displayEmail = promotions.addEventListener("change", (event) => {
    // STEP 3: Do something
    const isChecked = event.target.value; // Or I could make this equal to "email.value"
    if (isChecked) {
      // Showing by removing the "hidden" class.
      promotionDisplay.classList.remove("hidden");
    } else {
      // Showing by adding the "hidden" class.
      promotionDisplay.classList.add("hidden");
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

  // STEP 1: Target
  // I already targeted email above, so no need to do it again
  const emailError = document.querySelector("#emailError");

  // STEP 3: Do something
  const handleBlur = (event) => {
    const textInEmailTextbox = event.target.value; // Or I could make this equal to "email.value"

    if (textInEmailTextbox) {
      emailError.style.display = "none";
    } else {
      emailError.style.display = "block";
    }
  };

  // STEP 2: React to an event
  email.addEventListener("blur", handleBlur);
})();
