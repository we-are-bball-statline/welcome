document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const headerText = header.querySelector('h1');
        if (window.scrollY > 50) {
            header.classList.add('smaller');
            headerText.classList.add('smaller');
        } else {
            header.classList.remove('smaller');
            headerText.classList.remove('smaller');
        }
    });
});