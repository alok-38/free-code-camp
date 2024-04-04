const linkElement = document.querySelector('a');

linkElement.textContent = 'Mozilla Developer Network';

linkElement.href = "https://developer.mozilla.org";

// Creating and placing new nodes
const sectionElement = document.querySelector('section');

// create a new paragraph
let paraElement = document.createElement('p');
paraElement.textContent = "I'm enjoying learning JavaScript."; // Assign text content properly

// append the new paragraph at the end of the section
sectionElement.appendChild(paraElement);
