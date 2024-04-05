// JavaScript code to update the UI
const appElement = document.getElementById('app');
// Create a new H1 element
const h1Element = document.createElement('h1');
// Create a new text node for the H1 element
const textNode = document.createTextNode('Develop. Preview. Ship.');
// Append the text to the H1 element
h1Element.appendChild(textNode);
// Place the h1 element inside the div
appElement.appendChild(h1Element);