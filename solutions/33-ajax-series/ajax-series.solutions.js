(async function () {
  /**
   *
   * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
   *
   * For this exercise, use the API to populate the dropdown.
   * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
   *
   *
   * Create a list of characters using the API
   * This is the URL for the API you will be using. The method should be GET.
   * To get all characters use this
   * https://rickandmortyapi.com/api/character
   * To get an individual character, you must use this, where you plugin 2
   * with the character's ID:
   * https://rickandmortyapi.com/api/character/2
   *
   * You must make two AJAX request to solve this problem.
   */

  const dropdown = document.querySelector("#dropdown");

  try {
    // Getting the list of characters
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character/"
    );
    const characters = response.data.results;
    characters.forEach((character) => {
      /**
       * Building this HTML, where the value is the character's ID
       * @example <option value="2">Morty Smith</option>
       */
      const option = document.createElement("option");
      option.value = character.id; // I'm going to use this when I lookup when character the user selects
      option.textContent = character.name;
      // Adding the <option> to the dropdown
      dropdown.appendChild(option);
    });

    const getCharacterDetails = async (id) => {
      const response = await axios({
        method: "GET",
        // To get details about a single character,
        // the API has you plug-in the ID into the URL
        url: `https://rickandmortyapi.com/api/character/${id}`,
      });
      const character = response.data;

      // Adding the character's name and image to the page
      document.querySelector("#title-head").textContent = character.name;
      document.querySelector("#get-schwifty").src = character.image;
    };

    dropdown.addEventListener("change", (e) => {
      /**
       *  Getting the character's ID from the value in
       * @example <option value="2">Morty Smith</option>
       */
      const id = e.target.value;
      getCharacterDetails(id);
    });
  } catch (err) {
    console.error(err);
    // Usually, you should display an error message on the screen
  }
})();
