const app = document.getElementById("app");

const h1Element = document.createElement('h1');
h1Element.textContent = 'Hellish World';
app.appendChild(h1Element);


const root = ReactDOM.createRoot(app);