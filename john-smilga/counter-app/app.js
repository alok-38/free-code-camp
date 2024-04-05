const span = document.getElementById('value');
const decreaseButton = document.querySelector('.decrease');
const resetButton = document.querySelector('.reset');
const increaseButton = document.querySelector('.increase');

let currentValue = parseInt(span.textContent); // Get current value and convert to number

const increaseCount = () => {
    currentValue++; // Increment the value
    span.textContent = currentValue; // Update the displayed value
}

increaseButton.addEventListener('click', increaseCount);

const resetCount = () => {
    currentValue = 0; // Reset the counter value
    span.textContent = currentValue; // Update the displayed value
}

resetButton.addEventListener('click', resetCount);

const decreaseCount = () => {
    currentValue--;
    span.textContent = currentValue;
}

decreaseButton.addEventListener('click', decreaseCount);