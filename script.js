// Mobile Navigation with enhanced functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Animate hamburger bars
        const bars = hamburger.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (hamburger.classList.contains('active')) {
                if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) bar.style.opacity = '0';
                if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            }
        });
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        
        // Reset hamburger bars
        const bars = hamburger.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    }));

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            const bars = hamburger.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            });
        }
    });
}

// Smooth Scrolling with enhanced mobile support
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background on Scroll with mobile optimization
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// Enhanced Scroll Animations with Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Add staggered animation for child elements
            const children = entry.target.querySelectorAll('.skill-item, .project-card, .detail-item');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.style.opacity = '1';
                    child.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.about-content, .skills-grid, .projects-grid, .contact-content, .profile-content');
    animateElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
});

// Enhanced Tech Objects Interaction
document.querySelectorAll('.tech-object').forEach((object, index) => {
    // Add click/touch interaction
    object.addEventListener('click', function() {
        this.style.transform = 'scale(1.2) rotateY(20deg) rotateX(20deg)';
        setTimeout(() => {
            this.style.transform = 'scale(1.1) rotateY(10deg) rotateX(10deg)';
        }, 300);
        
        // Show tooltip or info
        showTechInfo(this.classList[1]);
    });
    
    // Add hover effects for desktop
    if (window.innerWidth > 768) {
        object.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotateY(10deg) rotateX(10deg)';
        });
        
        object.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotateY(0deg) rotateX(0deg)';
        });
    }
    
    // Add touch feedback for mobile
    object.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.95)';
    });
    
    object.addEventListener('touchend', function() {
        this.style.transform = 'scale(1)';
    });
});

// Show technology information
function showTechInfo(techClass) {
    const techInfo = {
        'html-object': {
            name: 'HTML5',
            description: 'Semantic markup language for structuring web content',
            features: ['Semantic Elements', 'Accessibility', 'SEO Friendly']
        },
        'css-object': {
            name: 'CSS3',
            description: 'Styling language for web design and layout',
            features: ['Flexbox', 'Grid', 'Animations', 'Responsive Design']
        },
        'js-object': {
            name: 'JavaScript',
            description: 'Dynamic programming language for web interactivity',
            features: ['ES6+', 'DOM Manipulation', 'Async/Await', 'Modules']
        },
        'react-object': {
            name: 'React',
            description: 'JavaScript library for building user interfaces',
            features: ['Components', 'Hooks', 'Virtual DOM', 'JSX']
        }
    };
    
    const info = techInfo[techClass];
    if (info) {
        showNotification(`${info.name}: ${info.description}`, 'success');
    }
}

// Enhanced Skill Items Animation
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        if (window.innerWidth > 768) {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        }
    });
    
    item.addEventListener('mouseleave', function() {
        if (window.innerWidth > 768) {
            this.style.transform = 'translateY(0) scale(1)';
        }
    });
    
    // Add click interaction for mobile
    item.addEventListener('click', function() {
        const skillName = this.querySelector('span').textContent;
        showNotification(`Skill: ${skillName}`, 'success');
    });
});

// Enhanced Project Cards Hover Effect
document.querySelectorAll('.project-card').forEach(card => {
    if (window.innerWidth > 768) {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }
});

// Enhanced Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission with loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showNotification('Message sent successfully!', 'success');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Enhanced Notification System
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
        ${type === 'success' ? 'background: #28a745;' : 'background: #dc3545;'}
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Typing Animation for Hero Title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Enhanced Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent && window.innerWidth > 768) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Enhanced Skill Progress Animation
function animateSkills() {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Enhanced Counter Animation for Stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + (counter.textContent.includes('+') ? '+' : '') + (counter.textContent.includes('%') ? '%' : '');
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target + (counter.textContent.includes('+') ? '+' : '') + (counter.textContent.includes('%') ? '%' : '');
            }
        };
        
        updateCounter();
    });
}

// Enhanced Floating Cards Animation
function animateFloatingCards() {
    const cards = document.querySelectorAll('.floating-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 2}s`;
    });
}

// Enhanced Window Resize Handler
window.addEventListener('resize', () => {
    // Reinitialize mobile menu if needed
    if (window.innerWidth > 768) {
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        if (navMenu && hamburger) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }
});

// Enhanced Touch and Mouse Interactions
document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) {
        const cards = document.querySelectorAll('.floating-card');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        cards.forEach((card, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            
            card.style.transform = `translate(${x}px, ${y}px)`;
        });
    }
});

// Enhanced Scroll-triggered animations
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollY = window.scrollY;
        
        if (scrollY > sectionTop - window.innerHeight * 0.8) {
            section.classList.add('fade-in-up');
        }
    });
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    animateSkills();
    animateFloatingCards();
    
    // Start counter animation when about section is visible
    const aboutSection = document.querySelector('#about');
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                aboutObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (aboutSection) {
        aboutObserver.observe(aboutSection);
    }
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Initialize mobile-specific features
    if (window.innerWidth <= 768) {
        // Add touch feedback for mobile
        document.querySelectorAll('.btn, .skill-item, .project-card').forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            element.addEventListener('touchend', function() {
                this.style.transform = '';
            });
        });
    }
});

// Add some CSS for the new animations
const style = document.createElement('style');
style.textContent = `
    .notification {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
    
    .skill-item {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
    }
    
    .floating-card {
        transition: transform 0.3s ease;
    }
    
    section {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    section.fade-in-up {
        opacity: 1;
        transform: translateY(0);
    }
    
    .tech-object {
        transition: all 0.3s ease;
    }
    
    @media (max-width: 768px) {
        .tech-object:hover {
            transform: scale(1.05) !important;
        }
    }
`;
document.head.appendChild(style); 