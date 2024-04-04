const parentElement = document.querySelector('.parent');
const addButton = document.getElementById('add-child');
const removeButton = document.getElementById('remove-child');

addButton.addEventListener('click', () => {
    const childDiv = document.createElement('div');
    childDiv.textContent = 'Child';
    childDiv.style.color = 'floralwhite';
    
    // Copying the border style from the parent
    const parentComputedStyle = window.getComputedStyle(parentElement);
    const parentBorderStyle = parentComputedStyle.getPropertyValue('border');
    childDiv.style.border = parentBorderStyle;

    parentElement.appendChild(childDiv);
});

removeButton.addEventListener('click', () => {
    const children = parentElement.querySelectorAll('.parent > div');
    if (children.length > 0) {
        parentElement.removeChild(children[children.length - 1]);
    }
});
