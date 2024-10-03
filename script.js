function scrollToSection(section) {
    document.querySelector(section).scrollIntoView({
        behavior: 'smooth'
    });
}

const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent! Thank you.');
});