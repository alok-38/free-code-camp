const headingElement = document.getElementById('main-heading');
headingElement.style.color = 'orangered';

const addButtonElement = document.querySelector('#add-button');
const ulElement = document.querySelector('ul');

addButtonElement.addEventListener('click', () => {
    let newLiElement = document.createElement('li');
    const userInput = prompt("Add a new movie franchise");
    if (userInput) { // Check if user entered something
        newLiElement.textContent = userInput; // Set text content of li
        newLiElement.style.backgroundColor = 'rebeccapurple';
        newLiElement.style.color = '#ffffff';
        ulElement.appendChild(newLiElement);
        headingElement.textContent = 'Updated Movie Franchise';
    }
});

const removeButtonElement = document.querySelector('#remove-button');
removeButtonElement.addEventListener('click', () => {
    const lastLiElement = ulElement.querySelector('li:last-child');
    if (lastLiElement) {
        lastLiElement.remove();
    } else {
        console.log('No more items to remove.');
    }
    headingElement.textContent = 'Favorite Movie Franchise';
});
