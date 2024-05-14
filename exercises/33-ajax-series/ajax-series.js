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
	const imgCaption = document.querySelector("#photo-caption");
	const mainImg = document.querySelector("#get-schwifty");
	const wikiLink = document.querySelector("#main-img a");
	// const photoCaption = document.querySelector("#photo-caption");
	let charList = [];
	let pageData = {};
	let charLinks = [];

	// Get pageData info.
	const getInfo = async (pData) => {
		try {
			let response = await axios.get("https://rickandmortyapi.com/api/character");
			pData.info = response.data.info;
			console.log(pData);
			return pData;
		} catch (err) {
			body.innerHTML = `<p>An unexpected error has occurred: ${err}</p>`;
		}
	};
	getInfo(pageData);
	console.log(pageData);

	// Populate charLinks with an array of numbers.
	const getLinkNums = (links, pData) => {
		let maxLinks = pData.count;
		let linkNum = 1;
		while (linkNum <= maxLinks) {
			links.push(linkNum);
			linkNum++;
		}
		return links;
	};
	getLinkNums(charLinks, pageData);

	console.log(charLinks);

	// Populates charList with character data.
	const getChar = async (list, links) => {
		try {
			for (let link of links) {
				let response = await axios.get(`https://rickandmortyapi.com/api/character/${link}`);
				let result = response.data;

				let listName = result.data.name;
				let linkName = listName.replace(/ /g, "_");
				let char = { id: `${result.data.id}`, name: `${listName}`, image: `${result.data.image}`, url: `http://rickandmorty.wikia.com/wiki/${linkName}` };
				list.push(char);
				console.log("char: " + char);
			}

			return list;
		} catch (err) {
			body.innerHTML = `<p>An unexpected error has occurred: ${err}</p>`;
		}
	};
	getChar(charList, charLinks);

	// Creates dropDown options.
	const addOptions = (list) => {
		for (let index of list) {
			let newOpt = document.createElement("option");
			newOpt.id = list[index].id;
			newOpt.textContent += list[index].name;
			dropDown.appendChild(newOpt);
		}
	};
	addOptions(charList);

	// Changes the page when the user makes a change to the dropDown selector.
	dropDown.addEventListener("change", async () => {
		let listIndex = dropDown.selectedIndex;

		/* 		// Normalizes ids
		let dropIndex = dropDown.selectedIndex;
		let listIndex = dropIndex - 1;
		// addresses type error
		if (dropIndex <= -1 || listIndex <= -1) {
			dropIndex = 0;
			listIndex = 0;
		} */

		//console.log("dropIndex: " + dropIndex);
		console.log("charList[listIndex].id: " + charList[listIndex].id);
		titleHead.textContent = charList[listIndex].name;
		mainImg.src = charList[listIndex].image;
		imgCaption.innerHTML = `<em>${titleHead.textContent}</em>`;
		wikiLink.href = charList[listIndex].url;
	});
})();
