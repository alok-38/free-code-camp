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
    button.style.backgroundColor = 'aliceblue';
    button.style.color = 'tomato';
});

// Unordered list to hold the list 
const unorderedList = document.createElement('ul');
// Append the unordered list as a child of the main element
main.appendChild(unorderedList);

const respondWhenClicked = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    //  storing the current value of the input element in a variable
    const newItem = inputElement.value;
    // Set input element value to empty string
    inputElement.value = '';
    const listElement = document.createElement('li');
    const spanElement = document.createElement('span');
    const newButton = document.createElement('button');
    // Append the span and button elements as children of the list item
    listElement.appendChild(spanElement);
    listElement.appendChild(newButton);
    // Set the text content of the span to the input element value
    spanElement.textContent = newItem; // Changed inputElement.value to newItem

    // Set the text content of the button to 'Delete'
    newButton.textContent = 'Delete';
    // Set the class
    newButton.classList = 'delete-btn';

    // Append the list item as a child of the unordered list
    unorderedList.appendChild(listElement);

    // Attach an event handler to the delete button
    newButton.addEventListener('click', () => {
        // Remove the list item when the delete button is clicked
        listElement.remove();
        // Use the focus() method to focus the input element
        inputElement.focus();
    });
}

button.addEventListener('click', respondWhenClicked);
