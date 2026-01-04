window.addEventListener('scroll', function() {
    const footer = document.querySelector('.footer');

    // Check if the user has scrolled to the very bottom of the page
    if (footer) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            footer.classList.add('show'); // Add 'show' class to reveal the footer
        } else {
            footer.classList.remove('show'); // Remove 'show' class to hide it
        }
    }
});

