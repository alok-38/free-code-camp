// Selecting the button element
const button = document.querySelector('button');
const headingElement = document.querySelector('h1');
const labelElement = document.querySelector('label');
const inputElement = document.querySelector('input');

// Selecting the main element
const main = document.querySelector('main');

// Adding event listener for button hover
button.addEventListener('mouseenter', () => {
    main.style.backgroundColor = 'aliceblue';
    main.style.color = 'rgb(239, 63, 31)';
    headingElement.style.color = '#ef3f1f';
    labelElement.style.color = '#ef3f1f';
    button.style.backgroundColor = '#ef3f1f';
    button.style.color = 'aliceblue';
});

// Adding event listener for button mouse leave
button.addEventListener('mouseleave', () => {
    main.style.backgroundColor = '';
    headingElement.style.color = 'aliceblue';
    labelElement.style.color = 'aliceblue';
    inputElement.style.backgroundColor = '#f6c0b6';
    button.style.backgroundColor = 'aliceblue';
    button.style.color = 'tomato';
});
