const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

const countEl = document.getElementById('count');

let count = 0;

const incrementCount = () => {
    count++;
    updateDisplay();
}

const decrementCount = () => {
    count--;
    updateDisplay();
}

const resetCount = () => {
    count = 0;
    updateDisplay();
}

const updateDisplay = () => {
    countEl.textContent = count;
}

incrementBtn.addEventListener('click', incrementCount);
decrementBtn.addEventListener('click', decrementCount);
resetBtn.addEventListener('click', resetCount);
