(function () {
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
	// Targeting Dom elements so they can be changed based on user selection
	const body = document.querySelector("body");
	const dropDown = document.querySelector("#dropdown");
	const titleHead = document.querySelector("#title-head");
	const mainImg = document.querySelector("#get-schwifty");
	const wikiLink = document.querySelector("#main-img a");
	// const photoCaption = document.querySelector("#photo-caption");
	let charList = [];
	let pageData = {};
	let charLinks = [];

	const getInfo = async () => {
		try {
			let response = await axios.get("https://rickandmortyapi.com/api/character");
			pageData = response.data.info;
		} catch (err) {
			body.innerHTML = `<p>An unexpected error has occurred: ${err}</p>`;
		}

		let maxLinks = pageData.count;
		let linkNum = 1;
		while (linkNum <= maxLinks) {
			charLinks.push(`${linkNum}`);
			linkNum++;
		}
			return charLinks;
	};
	getInfo();
console.log(charLinks);
		console.log(`${charLinks[0]}`);
	// console.log(`pageData.info: ${pageData.info.next}`);

	// Setting up async function that requests data from an API source. If that's successful, the charList array is populated with the data necessary to perform future tasks, and then the #dropdown input is populated with new options.
	const getChar = async () => {
		try {
			for (let link of charLinks) {
				let targetUrl = charLinks[3];
				console.log(targetUrl);
				let response = await axios.get(`https://rickandmortyapi.com/api/character${link}`);
				let result = response.data;

				let listName = result.data.name;
				let linkName = listName.replace(/ /g, "_");
				let char = { id: `${result.data.id}`, name: `${listName}`, image: `${result.data.image}`, url: `http://rickandmorty.wikia.com/wiki/${linkName}` };
				console.log(char);
				charList.push(char);
			}

			for (let index of charList) {
				let newOpt = document.createElement("option");
				newOpt.id = charList[index].id;
				newOpt.textContent += charList[index].name;
				dropDown.appendChild(newOpt);
			}

			return charList;
		} catch (err) {
			body.innerHTML = `<p>An unexpected error has occurred: ${err}</p>`; // Placeholder error
		}


	};
	getChar();

	dropDown.addEventListener("change", async () => {
		// Normalizes ids
		let dropIndex = dropDown.selectedIndex;
		let listIndex = dropIndex - 1;
		// addresses type error
		if (dropIndex <= -1 || listIndex <= -1) {
			dropIndex = 0;
			listIndex = 0;
		}

		console.log("dropIndex: " + dropIndex);
		console.log("charList[listIndex].id: " + charList[listIndex].id);
		titleHead.textContent = charList[listIndex].name;
		mainImg.src = charList[listIndex].image;
		wikiLink.href = charList[listIndex].url;
	});


})();
