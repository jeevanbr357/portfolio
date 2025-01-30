// Function to check if an element is in view
function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Function to handle scroll events and reveal content
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach((reveal) => {
        if (isElementInView(reveal)) {
            reveal.classList.add('visible');
        }
    });
}

// Add a class to make elements visible when scrolling
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // For initial reveal when the page is loaded
});
