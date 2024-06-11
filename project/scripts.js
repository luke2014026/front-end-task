document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const carousel = document.querySelector('.carousel');
    const testimonials = document.querySelectorAll('.testimonial-wrapper');
    let index = 0;

    function showTestimonial() {
        carousel.style.transform = `translateX(${-index * 100}%)`;
    }

    prevBtn.addEventListener('click', function() {
        index = (index - 1 + testimonials.length) % testimonials.length;
        showTestimonial();
    });

    nextBtn.addEventListener('click', function() {
        index = (index + 1) % testimonials.length;
        showTestimonial();
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const mainColumn = document.querySelector('.column1 .portfolio-item');
    const contentItems = document.querySelectorAll('.portfolio-content .row');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetCategory = this.getAttribute('data-target');
            
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            this.classList.add('active');

            // Find the first matching content item
            const matchingItem = Array.from(contentItems).find(item => item.getAttribute('data-category') === targetCategory);
            
            if (matchingItem) {
                const newImage = matchingItem.querySelector('img').src;
                const newH3 = matchingItem.querySelector('h3').textContent;
                const newP = matchingItem.querySelector('p').textContent;

                mainColumn.querySelector('img').src = newImage;
                mainColumn.querySelector('h3').textContent = newH3;
                mainColumn.querySelector('p').textContent = newP;
            }
        });
    });

    // Set initial active content
    document.querySelector('.tab-btn.active').click();
});


    // Carousel functionality
    const carousel = document.querySelector('.carousel');
    const testimonials = document.querySelectorAll('.testimonial');
    let index = 0;

    function showTestimonial() {
        carousel.style.transform = `translateX(${-index * 100}%)`;
    }

    setInterval(() => {
        index = (index + 1) % testimonials.length;
        showTestimonial();
    }, 3000);

    // Contact form validation
    const contactForm = document.getElementById('contact');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const contact = contactForm.contact.value.trim();
        const message = contactForm.message.value.trim();

        if (name === '' || email === '' || contact === '' || message === '') {
            alert('Please fill in all fields');
        } else {
            alert('Message sent successfully');
            contactForm.reset();
        }
    

    // Responsive menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
   // JavaScript to handle navigation link click event
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function() {
            // Remove active class from all navigation links
            navLinks.forEach(function(link) {
                link.classList.remove("active");
            });

            // Add active class to the clicked navigation link
            navLink.classList.add("active");
        });
    });
});

// scripts.js

document.getElementById('hamburger').addEventListener('click', function() {
    var sideNav = document.getElementById('side-nav');
    if (sideNav.classList.contains('show')) {
        sideNav.classList.remove('show');
    } else {
        sideNav.classList.add('show');
    }
});
