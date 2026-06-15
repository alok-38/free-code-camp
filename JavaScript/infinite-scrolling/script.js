const container = document.getElementById('container');
const loadingIndicator = document.getElementById('loading');
const backToTopBtn = document.getElementById('back-to-top');
const sentinel = document.getElementById('scroll-sentinel');

let isLoading = false;
let maxPosts = 50; // limit (optional)

// Back to top visibility
window.addEventListener('scroll', () => {
  backToTopBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
});

// Back to top click
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Load posts function
function loadMorePosts() {
  if (isLoading) return;
  if (container.children.length >= maxPosts) return;

  isLoading = true;
  loadingIndicator.style.display = 'block';

  setTimeout(() => {
    for (let i = 0; i < 5; i++) {
      const post = document.createElement('div');
      post.className = 'post';
      post.textContent = `Post ${container.children.length + 1}`;
      container.appendChild(post);
    }

    loadingIndicator.style.display = 'none';
    isLoading = false;
  }, 1000);
}

// Intersection Observer (best practice)
const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    loadMorePosts();
  }
});

observer.observe(sentinel);