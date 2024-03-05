const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
const spanEl = document.getElementById('count');
const inputEl = document.getElementById('step');

const milestoneThreshold = 10;

let count = 0;
let step = parseInt(inputEl.value);

const incrementCount = () => {
    count += step;
    updateDisplay();
    checkMilestone();
}

const decrementCount = () => {
    count -= step;
    updateDisplay();
    checkMilestone();
}

const resetCount = () => {
    count = 0;
    inputEl.value = 0;
    updateDisplay();
}

const updateDisplay = () => {
    spanEl.textContent = count;
}

const checkMilestone = () => {
    if (count % milestoneThreshold === 0) {
        spanEl.classList.add('milestone');
        setTimeout(() => {
            spanEl.classList.remove('milestone');
        }, 1000);
    }
}

incrementBtn.addEventListener('click', incrementCount);
decrementBtn.addEventListener('click', decrementCount);
resetBtn.addEventListener('click', resetCount);
inputEl.addEventListener('change', () => {
    step = parseInt(inputEl.value);
});