// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
const createMobileMenu = () => {
    const header = document.querySelector('header');
    const mobileMenuButton = document.createElement('div');
    mobileMenuButton.classList.add('mobile-menu-button');
    mobileMenuButton.innerHTML = '☰';
    
    // Insert before the first child of header
    if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-button')) {
        header.insertBefore(mobileMenuButton, header.firstChild);
        
        // Add event listener to toggle menu
        mobileMenuButton.addEventListener('click', () => {
            const nav = document.querySelector('nav');
            nav.classList.toggle('mobile-nav-active');
        });
    }
};

// Check screen size on load and resize
window.addEventListener('load', createMobileMenu);
window.addEventListener('resize', createMobileMenu);