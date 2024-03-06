import { Review } from './review.js';

const reviewsContainer = document.getElementById('reviews-container');
const addReviewForm = document.getElementById('add-review-form');

addReviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const productName = document.getElementById('product-name').value;
    const reviewText = document.getElementById('review-text').value;
    const rating = parseInt(document.getElementById('rating').value);

    const review = new Review(productName, reviewText, rating);
    review.render(reviewsContainer);
    addReviewForm.reset();
});
