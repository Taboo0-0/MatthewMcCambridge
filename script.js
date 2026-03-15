// Scroll animation using Intersection Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, observerOptions);

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
  const nameElement = document.querySelector('.name');
  const taglineElement = document.querySelector('.tagline');
  const sections = document.querySelectorAll('.section');

  observer.observe(nameElement);
  observer.observe(taglineElement);
  sections.forEach(section => observer.observe(section));

  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});