// Contact form
const contactform = document.getElementById('contactForm');
contactform.setAttribute('action', 'https://formspree.io/' + 'leo' + 'j' + 'reeves' + '+' + 'portfolio' + '@' + 'gmail' + '.' + 'com');

// Hide/show scroll to top button
const scrollTopBtn = document.querySelector('.scroll-top');
document.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollTopBtn.classList.remove('hidden-xs');
  } else {
    scrollTopBtn.classList.add('hidden-xs');
  }
});
