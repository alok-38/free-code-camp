const appDivEl = document.getElementById("app");
const h1Element = document.createElement("h1");
const h1TextNode = document.createTextNode("Hello from React!");
h1Element.appendChild(h1TextNode);
appDivEl.appendChild(h1Element);
