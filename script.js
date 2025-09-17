
document.addEventListener("DOMContentLoaded", function() {
    // Typing Animation for the Home section
    const textToType = ["A Full Stack Developer", "A Web Designer"];
    let charIndex = 0;
    let textIndex = 0;
    const typedTextElement = document.querySelector('.typed-text');

    function type() {
        if (charIndex < textToType[textIndex].length) {
            typedTextElement.textContent += textToType[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1500);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextElement.textContent = textToType[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            textIndex++;
            if (textIndex >= textToType.length) {
                textIndex = 0;
            }
            setTimeout(type, 500);
        }
    }

            // Start the typing animation
    type();

            // Intersection Observer for scroll-based fade-in effects
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, { threshold: 0.1 });

            // Apply fade-in effect to all elements with the 'fade-in' class
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });


            // Active Link Highlighting on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.href.includes(current)) {
                a.classList.add('active');
            }
        });
    });

            // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault(); // stop default reload

        const formData = new FormData(contactForm);

        try {
            const response = await fetch(contactForm.action, {
                method: contactForm.method,
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                alert("✅ Thank you! Your message has been sent.");
                contactForm.reset();
            } else {
                alert("❌ Oops! Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("⚠️ Network error. Please try again later.");
        }
    });
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

});
