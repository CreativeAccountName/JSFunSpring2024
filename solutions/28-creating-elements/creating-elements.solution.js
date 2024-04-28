(function () {
  /**
   * You have three problem below.
   * In each problem, you will create new HTML elements using JavaScript.
   * When you complete these problems, the page should look like
   * @see creating-elements.png
   *
   * You may modify the HTML.
   *
   * Before completing this exercise, I recommend you take a look
   * at the solutions for the "Data Structures" exercise. See the solutions folder.
   */

  const oceanInput = document.querySelector("#oceanInput");

  const handleSubmit = (e) => {
    e.preventDefault();

    const ocean = oceanInput.value;
    /**
     * Problem 1: Display the results of the world's most pointless search engine
     *
     * Using document.createElement, add the following HTML on the page.
     * Replace "_____" with the variable "ocean".
     * @example <p class="italic">No results for _____ found.</p>
     *
     * See the comments in the HTML for where to place this on the page.
     *
     * Note that this won't display until you click on the "Search" button.
     */
    const results = document.createElement("div");
    // Add text
    results.textContent = `No results for ${ocean} found.`;
    // Add classes
    results.classList.add("italic");

    // Add to page
    const parent = document.querySelector("#searchEngine");
    parent.appendChild(results);
  };

  document
    .querySelector("#handleThisForm")
    .addEventListener("submit", handleSubmit);

  /**
   * Problem 2: Create a movie description from an object
   *
   * Scroll down to the next comment
   */
  const movie = {
    title: "Luca",
    year: 2021,
    imgSrc:
      "https://m.media-amazon.com/images/M/MV5BNWMzZjNjMjgtYjdlNS00ZmNiLThlYWQtOTkyNmNmZjBlOTdhXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX280_CR0,0,280,280_.jpg",
    description:
      "Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.",
  };

  /*
   * STEP 1
   * Replace img src, movie title (Luca), and date (2001)
   * with values from the movie object.
   * See what I am doing with "movie.description" below as an example.
   */
  let movieHtml = `<img src="${movie.imgSrc}" />
  <div class="flex-auto my-4">
    <h1 class="text-2xl mb-4">${movie.title} <small>(${movie.year})</small></h1>
    <p clas="mb-4">
      ${movie.description}
    </p>
  </div>`;

  /**
   * STEP 2
   * Use insertAdjacentHTML or innerHTML to add movieHTML to the page.
   * See the comments in the HTML for where to add it.
   */
  document.querySelector("#movie").innerHTML = movieHtml;

  /**
   * Problem 3: Create a ChatGPT conversation from an array of objects
   *
   * STEP 1
   * Loop through the array of objects "conversationDialogues" below.
   */
  const conversationDialogues = [
    {
      author: "You",
      message: "In JavaScript, what is a nested collection?",
    },
    {
      author: "ChatGPT",
      message:
        "A nested collection in JavaScript refers to a collection (such as an array or an object) that contains other collections as elements or properties. For instance, you could have an array of arrays, an array of objects, an object with arrays as property values, or even more complex combinations.",
    },
    {
      author: "You",
      message:
        "When would I want to use an array and when would I want to use an object?",
    },
    {
      author: "ChatGPT",
      message:
        "Deciding whether to use an array or an object in JavaScript depends on the structure and purpose of your data. Here are some guidelines to help you decide: ...",
    },
  ];

  /**
   * STEP 2
   * Inside the loop, use insertAdjacentHTML or innerHTML to add your
   * HTML from the ChatGPT conversation on to the page.
   * See the comments in the HTML for where to add it.
   *
   * When this is completed, your HTML should looks like"
   * @example
     <div class="border-solid border-2 border-slate-200 rounded p-2 mb-4">
      <div class="font-bold">You</div>
      <p>
        When would I want to use an array and when would I want to use an
        object?
      </p>
    </div>
   */
  const conversation = document.querySelector("#conversation");

  /**
   * Alternatively, I can use a for or a for ... of loop here
   * @example for (let dialogue of conversationDialogues) {
   */
  conversationDialogues.forEach((dialogue) => {
    let conversationHtml = `<div class="border-solid border-2 border-slate-200 rounded p-2 mb-4">
      <div class="font-bold">${dialogue.author}</div>
      <p>
        ${dialogue.message}
      </p>
    </div>`;
    conversation.insertAdjacentHTML("beforeEnd", conversationHtml);
  });
})();
