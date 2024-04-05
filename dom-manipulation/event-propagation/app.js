const firstDiv = document.querySelector('.div1');
const secondDiv = document.querySelector('.div2');
const button = document.querySelector('button');

// Adding event listeners to the elements
firstDiv.addEventListener('click', () => {
    console.log('First div clicked');
}, true); // Capturing phase

secondDiv.addEventListener('click', () => {
    console.log('Second div clicked');
}, true); // Capturing phase

button.addEventListener('click', () => {
    console.log('Button clicked');
}, true); // Capturing phase

// Adding event listeners to the elements
firstDiv.addEventListener('click', () => {
    console.log('First div clicked');
}, true); // Bubbling phase

secondDiv.addEventListener('click', () => {
    console.log('Second div clicked');
}, true); // Bubbling phase

button.addEventListener('click', () => {
    console.log('Button clicked');
}, true); // Bubbling phase