const inputElement = document.querySelector('input');
const headerElement = document.querySelector('h2');
const paraElement = document.querySelector('p');

inputElement.addEventListener('click', () => {
    const newHeaderContent = prompt("New header content please...");
    if (newHeaderContent !== null) { // Check if user clicked cancel
        headerElement.textContent = newHeaderContent;
        headerElement.style.color = 'rebeccapurple';
    }
    
    const newParaContent = prompt('New para content please...');
    if (newParaContent !== null) { // Check if user clicked cancel
        paraElement.textContent = newParaContent;
        paraElement.style.color = 'orange';
    }

    const choice = prompt('Would you like to create a new paragraph?');
    if (choice && (choice.toLowerCase() === 'yes' || choice.toLowerCase() === 'y')) {
        const newParaElement = document.createElement('p');
        const newParaText = prompt('Enter content for the new paragraph:');
        if (newParaText !== null) { // Check if user clicked cancel
            newParaElement.textContent = newParaText;
            document.body.appendChild(newParaElement);
        }
    }
});
