export class Review {
    constructor(productName, reviewText, rating) {
        this.productName = productName;
        this.reviewText = reviewText;
        this.rating = rating;
    }

    render(container) {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `
            <h3>${this.productName}</h3>
            <p>${this.reviewText}</p>
            <p>Rating: ${this.rating}/5</p>
        `;
        container.appendChild(reviewElement);
    }
}
