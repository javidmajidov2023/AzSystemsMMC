const scrollingDiv = document.getElementById('scrollingDiv');
let lastScrollPosition = window.scrollY;
let isScrollingDown = false;

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        // Scrolling down
        isScrollingDown = true;
        animateScrollingDiv('-100%');
    } else {
        // Scrolling up
        isScrollingDown = false;
        animateScrollingDiv('0');
    }

    lastScrollPosition = currentScrollPosition;
});

scrollingDiv.addEventListener('click', () => {
    if (isScrollingDown) {
        // If scrolling down, scroll to the bottom
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
        // If scrolling up or at the top, scroll to the top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

function animateScrollingDiv(translateYValue) {
    // Use requestAnimationFrame for smooth animation
    requestAnimationFrame(() => {
        scrollingDiv.style.transition = 'transform 0.5s';
        scrollingDiv.style.transform = `translateY(${translateYValue})`;
    });
}



