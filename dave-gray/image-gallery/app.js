const accessKey = 'BVu68GE_a99mEp_VCV5JOlmQVTmboVCbNRpA3kCSFlQ';
// Number of images to fetch
const count = 10;

const imageContainer = document.getElementById('image-container');

async function fetchImages() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=${count}`);
        const data = await response.json();
        displayImages(data);
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

function displayImages(images) {
    images.forEach(image => {
        const imageElement = document.createElement('div');
        imageElement.classList.add('image-item');
        imageElement.innerHTML = `<img src="${image.urls.regular}" alt="${image.alt_description}">`;
        imageContainer.appendChild(imageElement);
    });

} fetchImages();