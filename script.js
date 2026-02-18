// ===========================
// Particles Background
// ===========================
function createParticles() {
    const container = document.getElementById('particles');
    const count = 35;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
        particle.style.animationDelay = (Math.random() * 10) + 's';
        particle.style.width = (Math.random() * 3 + 1) + 'px';
        particle.style.height = particle.style.width;

        const colors = [
            'rgba(59, 130, 246, 0.3)',
            'rgba(139, 92, 246, 0.3)',
            'rgba(236, 72, 153, 0.2)',
            'rgba(6, 182, 212, 0.25)'
        ];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(particle);
    }
}

// ===========================
// Navbar scroll effect
// ===========================
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// ===========================
// Mobile menu toggle
// ===========================
function handleMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    toggle.addEventListener('click', () => {
        links.classList.toggle('active');
        const icon = toggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            links.classList.remove('active');
            const icon = toggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });
}

// ===========================
// Terminal typing effect
// ===========================
function terminalTyping() {
    const commands = [
        'cat about.txt → "Android Developer & DevOps enthusiast"',
        'ls projects/ → MathAlarm  GpsAlarm  ...',
        'git log --oneline -1 → "feat: add math challenges"',
        'adb install MathAlarm.apk → Success',
        './gradlew build → BUILD SUCCESSFUL'
    ];
    const el = document.getElementById('typingText');
    if (!el) return;

    let cmdIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {
        const current = commands[cmdIndex];

        if (!deleting) {
            el.textContent = current.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === current.length) {
                deleting = true;
                setTimeout(type, 2500); // pause before deleting
                return;
            }
            setTimeout(type, 45);
        } else {
            el.textContent = current.substring(0, charIndex);
            charIndex--;

            if (charIndex === 0) {
                deleting = false;
                cmdIndex = (cmdIndex + 1) % commands.length;
                setTimeout(type, 500);
                return;
            }
            setTimeout(type, 25);
        }
    }

    setTimeout(type, 1000);
}

// ===========================
// Scroll reveal animations
// ===========================
function handleScrollReveal() {
    const elements = document.querySelectorAll(
        '.highlight, .skill-category, .featured-project, .cs-card, .contact-card, .arch-node'
    );

    elements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(el => observer.observe(el));
}

// ===========================
// Smooth scrolling
// ===========================
function handleSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ===========================
// Math equation cycling (phone mockup)
// ===========================
function equationCycler() {
    const equations = ['12 + 7 = ?', '15 − 8 = ?', '6 × 9 = ?', '23 + 14 = ?', '45 − 17 = ?'];
    const answers = ['19', '7', '54', '37', '28'];
    const eqEl = document.querySelector('.mock-equation');
    const ansEl = document.querySelector('.mock-answer-box');
    if (!eqEl || !ansEl) return;

    let index = 0;

    setInterval(() => {
        index = (index + 1) % equations.length;
        eqEl.style.opacity = '0';
        ansEl.style.opacity = '0';

        setTimeout(() => {
            eqEl.textContent = equations[index];
            ansEl.textContent = answers[index];
            eqEl.style.opacity = '1';
            ansEl.style.opacity = '1';
        }, 400);
    }, 3000);
}

// ===========================
// Initialize
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    handleNavbarScroll();
    handleMobileMenu();
    terminalTyping();
    handleScrollReveal();
    handleSmoothScroll();
    equationCycler();
});
