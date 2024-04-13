const app = document.getElementById("app");

const root = ReactDOM.createRoot(app);

const divElement = document.createElement('div');
const h1Element = document.createElement('h1');
h1Element.textContent = 'Hello world';
divElement.className = 'container';
divElement.appendChild(h1Element);
app.appendChild(divElement);
