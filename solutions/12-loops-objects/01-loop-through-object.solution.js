const links = {
  Dogs: "http://www.omfgdogs.com",
  Kittens: "https://giphy.com/search/kitten",
  "Hamster Dance": "https://hamster.dance/hamsterdance/",
};

/**
 * Create an variable called "html".
 * Loop through all properties within the "links" object
 * and set "html" to a list of HTML links.
 *
 * @example
 * console.log(html);
 * // <a href="http://www.omfgdogs.com">Dogs</a><a href="https://giphy.com/search/kitten">Kittens</a><a href="https://hamster.dance/hamsterdance/">Hamster Dance</a>
 *
 * Your answer should still work when "links" has different keys and values.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

// Solution 1
let html = "";
for (let text in links) {
  const href = links[text];
  html = html + '<a href="' + href + '">' + text + "</a>";
}

// Solution 2
let html = "";
for (let [text, href] of Object.entries(links)) {
  html += `<a href="${href}">${text}</a>`;
}
