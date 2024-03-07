document.addEventListener('DOMContentLoaded', () => {
    // Select all list items
    const listItems = document.querySelectorAll('.list-item');
    // Add event listener to each list item
    listItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'lightblue';
        });
        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = '';
        });
    });
});