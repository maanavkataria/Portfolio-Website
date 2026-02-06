document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        // Dono par class toggle karein
        hamburger.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    // Link click hote hi menu band ho jaye
    document.querySelectorAll('.navbar ul li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navbar.classList.remove('active');
        });
    });
});