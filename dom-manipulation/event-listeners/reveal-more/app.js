const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {
    if (hiddenContent.classList.contains('reveal-btn')) {
        hiddenContent.classList.remove('reveal-btn');
        revealBtn.textContent = 'Reveal More'; // Change button text to "Reveal More"
        revealBtn.blur(); // Remove focus from the Reveal More button
    } else {
        hiddenContent.classList.add('reveal-btn');
        revealBtn.textContent = 'Reveal Nothing'; // Change button text back to "Reveal Nothing"
        revealBtn.blur(); // Remove focus from the Reveal Nothing button
    }
}

revealBtn.addEventListener('click', revealContent);
