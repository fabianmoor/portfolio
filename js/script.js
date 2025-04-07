document.addEventListener('DOMContentLoaded', function() {

    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800, // Animation duration in milliseconds
        offset: 120,   // Offset (in px) from the original trigger point
        once: true,    // Whether animation should happen only once - while scrolling down
        easing: 'ease-in-out', // Default easing
    });

    // Optional: Update footer year dynamically
    const currentYear = new Date().getFullYear();
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }

    // Optional: Add smooth scroll for browsers that don't support CSS scroll-behavior
    // (More robust version might check for support first)
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         try {
    //             document.querySelector(this.getAttribute('href')).scrollIntoView({
    //                 behavior: 'smooth'
    //             });
    //         } catch (error) {
    //             console.warn("Smooth scroll target not found:", this.getAttribute('href'));
    //         }
    //     });
    // });

    // Optional: Mobile menu toggle logic would go here
    // const mobileMenuButton = document.querySelector('.mobile-menu-button');
    // const navLinks = document.querySelector('nav ul');
    //
    // if (mobileMenuButton && navLinks) {
    //     mobileMenuButton.addEventListener('click', () => {
    //         navLinks.classList.toggle('active'); // You'd need a .active class in CSS
    //     });
    // }

});
