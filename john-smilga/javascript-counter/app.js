const spanElement = document.getElementById('value');
const decreaseBtn = document.getElementsByClassName('decrease')[0]; // Accessing the first element
const resetBtn = document.getElementsByClassName('reset')[0]; // Accessing the first element
const increaseBtn = document.getElementsByClassName('increase')[0]; // Accessing the first element
const h1Element = document.querySelector('h1');

let count = 0;
let spanColor = spanElement.style.color;

decreaseBtn.addEventListener('click', () => {
    count -= 1;
    spanElement.textContent = count;
    if (count < 0) {
        spanElement.style.color = 'red';
    }
    if (count === -5) {
        h1Element.textContent = "Don't be negative";
    }
});

resetBtn.addEventListener('click', () => {
    count = 0;
    spanElement.textContent = count;
    spanElement.style.color = spanColor;
    if (h1Element.textContent === "Don't be negative" || "Don't you have better work?") {
        h1Element.textContent = 'Counter';
    }
});

increaseBtn.addEventListener('click', () => {
    count += 1;
    spanElement.textContent = count;
    spanElement.style.color = 'green';
    if (count > 5) {
        h1Element.textContent = "Don't you have better work?";
    }
});