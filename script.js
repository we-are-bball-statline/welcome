document.addEventListener('DOMContentLoaded', function() {
    let vintageBox = document.querySelector('.vintage-boxscore');
    let modernBox = document.querySelector('.modern-boxscore');

    window.addEventListener('scroll', function() {
        let scrollPos = window.scrollY;
        let zoomLevel = 1 + (scrollPos / window.innerHeight) * 0.5; // Adjust zoom level as needed

        // Apply zoom effect on the vintage box
        vintageBox.style.transform = `scale(${zoomLevel})`;
        vintageBox.style.opacity = 1 - (scrollPos / window.innerHeight);

        // Apply fade-in effect on the modern box
        modernBox.style.opacity = scrollPos / window.innerHeight;
    });
});
