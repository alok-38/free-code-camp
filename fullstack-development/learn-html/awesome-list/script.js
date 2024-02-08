// JavaScript for making the navigation menu smooth scroll

document.addEventListener("DOMContentLoaded", function() {
    const links = this.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    }
});
