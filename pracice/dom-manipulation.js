// Select the elements
const title = document.querySelector("h1");
const divOne = document.getElementById("one");
const button = document.getElementById("brtn");

// Add content to the <h1> initially
title.textContent = "Original Title";

// Add content to the <div id="one"> initially
divOne.textContent = "This is a div";

// Add event listener to the button
button.addEventListener("click", function () {
  // Change the text content of <h1> and <div>
  title.textContent = "Title Changed!";
  divOne.textContent = "Div content updated after button click!";
});
