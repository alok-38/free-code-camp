document.addEventListener('DOMContentLoaded', () => {
    const storyElement = document.querySelector('.story');
    const setButton = document.querySelector('#set-text');

    setButton.addEventListener('click', () => {
        const newText = prompt("Enter the text you want to set:");
        if (newText !== null) {
            storyElement.textContent = newText;
        }
    });

    const clearButton = document.querySelector('#clear-text');
    clearButton.addEventListener('click', () => {
        const confirmClear = confirm("Are you sure you want to clear the text?");
        if (confirmClear) {
            storyElement.textContent = "";
        }
    });
});
