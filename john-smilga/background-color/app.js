const buttonElement = document.getElementById('btn');
const spanElement = document.querySelector('.color');
const bodyElement = document.body;

// Function to generate a random hexadecimal color
function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Event listener for the button click
buttonElement.addEventListener('click', () => {
    // Changing the background color of the body
    const randomColor = generateRandomColor();
    bodyElement.style.backgroundColor = randomColor;
    // Updating the color code displayed in the span
    spanElement.textContent = randomColor;
});
