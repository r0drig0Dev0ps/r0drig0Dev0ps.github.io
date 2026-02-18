// ===========================
// Particles Background
// ===========================
function createParticles() {
  const container = document.getElementById("particles");
  const count = 40;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDuration = Math.random() * 15 + 10 + "s";
    particle.style.animationDelay = Math.random() * 10 + "s";
    particle.style.width = Math.random() * 3 + 1 + "px";
    particle.style.height = particle.style.width;

    const colors = [
      "rgba(59, 130, 246, 0.3)",
      "rgba(139, 92, 246, 0.3)",
      "rgba(236, 72, 153, 0.2)",
      "rgba(6, 182, 212, 0.25)",
    ];
    particle.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    container.appendChild(particle);
  }
}

// ===========================
// Navbar scroll effect
// ===========================
function handleNavbarScroll() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// ===========================
// Mobile menu toggle
// ===========================
function handleMobileMenu() {
  const toggle = document.getElementById("navToggle");
  const links = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    links.classList.toggle("active");
    const icon = toggle.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });

  // Close menu when link is clicked
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("active");
      const icon = toggle.querySelector("i");
      icon.classList.add("fa-bars");
      icon.classList.remove("fa-times");
    });
  });
}

// ===========================
// Counter animation
// ===========================
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number[data-count]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-count"));
          let current = 0;
          const step = Math.ceil(target / 40);
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = current;
          }, 30);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 },
  );

  counters.forEach((counter) => observer.observe(counter));
}

// ===========================
// Scroll reveal animations
// ===========================
function handleScrollReveal() {
  const revealElements = document.querySelectorAll(
    ".feature-card, .step, .tech-card, .arch-layer, .dev-card",
  );

  revealElements.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );

  revealElements.forEach((el) => observer.observe(el));
}

// ===========================
// Smooth scrolling for anchor links
// ===========================
function handleSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// ===========================
// Typing effect on the mock equation
// ===========================
function typingEffect() {
  const equations = [
    "12 + 7 = ?",
    "15 - 8 = ?",
    "6 × 9 = ?",
    "23 + 14 = ?",
    "45 - 17 = ?",
  ];
  const answers = ["19", "7", "54", "37", "28"];
  const eqEl = document.querySelector(".mock-equation");
  const ansEl = document.querySelector(".mock-answer-box");
  let index = 0;

  if (!eqEl || !ansEl) return;

  setInterval(() => {
    index = (index + 1) % equations.length;

    // Fade out
    eqEl.style.opacity = "0";
    ansEl.style.opacity = "0";

    setTimeout(() => {
      eqEl.textContent = equations[index];
      ansEl.textContent = answers[index];
      eqEl.style.opacity = "1";
      ansEl.style.opacity = "1";
    }, 400);
  }, 3000);
}

// ===========================
// Initialize
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  createParticles();
  handleNavbarScroll();
  handleMobileMenu();
  animateCounters();
  handleScrollReveal();
  handleSmoothScroll();
  typingEffect();
});
