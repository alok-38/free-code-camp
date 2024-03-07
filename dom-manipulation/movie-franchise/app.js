const mainHeadingEl = document.querySelector('h1');
mainHeadingEl.textContent = 'Favorite Movie Franchise';

const firstListItemWithClass = document.querySelector("ul li.list-item");
firstListItemWithClass.textContent = 'Blade Trinity';

const lastListItem = document.querySelector("ul li:last-child");
if (lastListItem) {
    lastListItem.remove();
} else {
    console.log('No last list item found.');
}

const allListItems = document.querySelectorAll('li');
allListItems.forEach(function(li) {
    li.style.backgroundColor = 'lightblue';
    li.style.color = 'whitesmoke';
});