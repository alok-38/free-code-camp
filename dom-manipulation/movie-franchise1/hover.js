document.addEventListener('DOMContentLoaded', () => {
    // Select all list items
    const listItems = document.querySelectorAll('.list-item');
    // Create a div element for displaying movie info
    const movieInfoContainer = document.createElement('div');
    movieInfoContainer.classList.add('movie-info');
    movieInfoContainer.style.textAlign = 'center';
    movieInfoContainer.style.marginTop = '50px';
    movieInfoContainer.style.color = 'floralwhite';
    movieInfoContainer.style.fontSize = '2em';
    document.body.appendChild(movieInfoContainer);

    // Add event listener to each list item
    listItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'lightblue';
            item.style.cursor = 'pointer';
            displayMovieInfo(item.textContent.trim());
        });
        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = '';
            clearMovieInfo();
        });
    });

    // Function to display additional information about the movie
    function displayMovieInfo(movieTitle) {
        // Dummy data for additional information
        const movieInfo = {
            'The Matrix': 'A science fiction action film directed by the Wachowskis.',
            'Star Wars': 'An epic space opera film series created by George Lucas.',
            'Harry Potter': 'A fantasy film series based on the novels by J.K. Rowling.',
            'Lord of the Rings': 'An epic fantasy adventure film series directed by Peter Jackson.',
            'Marvel': 'A cinematic universe based on characters appearing in Marvel Comics.'
        };
        // Display movie information if available
        if (movieInfo[movieTitle]) {
            movieInfoContainer.textContent = movieInfo[movieTitle];
        } else {
            movieInfoContainer.textContent = 'Additional information not available.';
        }
    }
    // Function to clear displayed movie info
    function clearMovieInfo() {
        movieInfoContainer.textContent = '';
    }
});