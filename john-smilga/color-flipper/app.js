const button = document.getElementById('btn');
const colorElement = document.querySelector('.container .color');

const changeBackgroundColor = () => {
    // Generate random color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // Update background color
    document.body.style.backgroundColor = randomColor;
    // Update the span element
    colorElement.textContent = randomColor;
}

button.addEventListener('click', changeBackgroundColor);