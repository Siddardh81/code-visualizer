document.addEventListener('DOMContentLoaded', () => {
    // Navbar Dropdown Functionality (Desktop)
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener('mouseover', () => {
            const menu = dropdown.querySelector('.dropdown-menu');
            if (menu) menu.style.display = 'block';
        });
        dropdown.addEventListener('mouseout', () => {
            const menu = dropdown.querySelector('.dropdown-menu');
            if (menu) menu.style.display = 'none';
        });
    });

    // Smooth Scrolling for CTA Button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', (event) => {
            event.preventDefault();
            const target = document.querySelector(ctaButton.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Feature Card Hover Animations
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Dynamic Footer Year
    const footer = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    if (footer) {
        footer.textContent = `© ${currentYear} CODE VISUALIZER. All rights reserved.`;
    }

    // Mobile Toggle for Navigation
    const navLinks = document.querySelector('.nav-links');
    const mobileToggle = document.createElement('button');
    mobileToggle.classList.add('mobile-toggle');
    mobileToggle.textContent = '☰';
    navbar.insertBefore(mobileToggle, navLinks);

    mobileToggle.addEventListener('click', () => {
        if (navLinks.style.display === 'block') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'block';
        }
    });

    // Close Nav Links on Outside Click (Mobile)
    document.addEventListener('click', (event) => {
        if (!navbar.contains(event.target) && window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });

    // Section Fade-in Animation on Scroll
    const revealSections = document.querySelectorAll('.why-code-visualizer, .advantages, .achievements, .usefulness');
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );
    revealSections.forEach(section => {
        observer.observe(section);
    });
});
