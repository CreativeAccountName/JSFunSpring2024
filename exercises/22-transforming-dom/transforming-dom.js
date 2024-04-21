/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  // Img tag
document.querySelector(".alert-danger img").src ="https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif";

    // link
 document.querySelector(".alert-warning a").href ="https://developer.mozilla.org/en-US/docs/Web/JavaScript";

  // Victorious
  document.querySelector(".alert-success").textContent="I am victorious!";

  // bg
  document.querySelector(".alert-info").style.backgroundColor="#000000";

  // text color (we added an id to the element in the HTML)
  document.querySelector("#changeMyColor").classList.add("text-primary");

  // hide div with inline styles CHANGED HTML FOR THIS
  document.querySelector("#hideMe").classList.add("hidden");

  //show hidden div ADDED id
  document.querySelector("#showMe").classList.remove("hidden");

  // button
  const thisButton = document.querySelector("#thisButton");

  if (thisButton.classList.contains("btn-primary")){document.querySelector("#answer").textContent = "✓ blue";}

})();
