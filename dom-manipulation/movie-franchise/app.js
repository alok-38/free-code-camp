// Selecting elements
const mainHeading = document.getElementById('main-heading');
const listItems = document.querySelectorAll('.list-items');

// Adding event listener to each list item
listItems.forEach(item => {
    item.addEventListener('click', () => {
        alert(`You clicked on ${item.textContent}`);
    });
});

const addButtonElement = document.getElementById("add-button");
const ulElement = document.querySelector("ul");

addButtonElement.addEventListener('click', function() {
    const newMovie = prompt("Enter a new movie franchise:");
    if (newMovie) {
        const newListItem = document.createElement("li");
        newListItem.textContent = newMovie;
        newListItem.classList.add("list-items");
        ulElement.appendChild(newListItem);
        // Update the main heading only if a new movie franchise is added
        mainHeading.textContent = 'Updated Movie Franchise';
    }
});