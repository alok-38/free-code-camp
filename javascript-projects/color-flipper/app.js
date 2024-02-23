// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

const btn = document.getElementById("btn");
const colorSpan = document.querySelector(".color");
const colorPicker = document.getElementById("color-picker");

btn.addEventListener('click', () => {
    const color = colorPicker.value;
    // Invoke a function
    changeColor(color);
});

const changeColor = (color) => {
    document.body.style.backgroundColor = color;
    colorSpan.textContent = color;
}

