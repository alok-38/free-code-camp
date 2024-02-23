// counter.js

class Counter {
    constructor() {
        this.value = 0;
        this.maxLimit = 10; // Example maximum limit
        this.minLimit = -10; // Example minimum limit

        // Select elements
        this.valueElement = document.getElementById('value');
        this.increaseButton = document.querySelector('.increase');
        this.decreaseButton = document.querySelector('.decrease');
        this.resetButton = document.querySelector('.reset');

        // Add event listeners
        this.increaseButton.addEventListener('click', this.increase.bind(this));
        this.decreaseButton.addEventListener('click', this.decrease.bind(this));
        this.resetButton.addEventListener('click', this.reset.bind(this));

        // Initialize counter display
        this.updateDisplay();
    }

    increase() {
        if (this.value < this.maxLimit) {
            this.value++;
            this.updateDisplay();
        } else {
            alert('Maximum limit reached!');
        }
    }

    decrease() {
        if (this.value > this.minLimit) {
            this.value--;
            this.updateDisplay();
        } else {
            alert('Minimum limit reached!');
        }
    }

    reset() {
        this.value = 0;
        this.updateDisplay();
    }

    updateDisplay() {
        this.valueElement.textContent = this.value;
    }
}

const counter = new Counter();
