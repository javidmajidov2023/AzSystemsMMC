const scrollingDiv = document.getElementById('scrollingDiv');

let lastScrollPosition = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        // Scrolling down
        scrollingDiv.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        scrollingDiv.style.transform = 'translateY(0px)';
    }

    lastScrollPosition = currentScrollPosition;
});

// Optional: Add smooth scrolling to the top when clicking the div
scrollingDiv.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

//-------------------------------LOOP VIDEO---------------------------------------------------\


if (selectedLanguage === "en") {
    window.location.href = "main-page-en.html"; // İngilizce sürümüne yönlendir
} else if (selectedLanguage === "ru") {
    window.location.href = "main-page-ru.html"; // Rusça sürümüne yönlendir
} else if (selectedLanguage === "az") {
    window.location.href = "main-page.html"; // Azerice sürümüne yönlendir (ana sayfa)
}
