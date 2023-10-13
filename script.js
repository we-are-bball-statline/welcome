document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('smaller');
        } else {
            header.classList.remove('smaller');
        }
    });
});
