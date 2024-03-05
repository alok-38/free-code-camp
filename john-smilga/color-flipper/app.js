const buttonEl = document.getElementById('color-btn');
const displayDivEl = document.getElementById('color-display');
const hexCodeDivEl = document.getElementById('hex-code');

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

const changeMainBackgroundColor = () => {
    const randomColor = generateRandomColor();
    displayDivEl.style.backgroundColor = randomColor;
    const rgbValues = randomColor.match(/\d+/g);
    const hexColor = rgbToHex(parseInt(rgbValues[0]), parseInt(rgbValues[1]), parseInt(rgbValues[2]));
    hexCodeDivEl.textContent = hexColor;
}

buttonEl.addEventListener('click', changeMainBackgroundColor);