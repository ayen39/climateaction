// script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Hero Image Slider ---
    const slides = document.querySelectorAll('.slide');
    let currentHeroSlide = 0;

    if(slides.length > 0) {
        const nextHeroSlide = () => {
            slides[currentHeroSlide].classList.remove('active');
            currentHeroSlide = (currentHeroSlide + 1) % slides.length;
            slides[currentHeroSlide].classList.add('active');
        };

        // Transition image every 6 seconds
        setInterval(nextHeroSlide, 6000);
    }

    // --- 2. Navbar Glassmorphism on Scroll ---
    const navbar = document.getElementById('navbar');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on load in case user is already scrolled down

    // --- 3. Reveal on Scroll Animation ---
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            // Reveal element when it is 100px into the viewport
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check on page load

    // --- 4. Smooth Navigation for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
