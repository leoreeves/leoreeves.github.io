// Defer image load
function init() {
  const imgDefer = document.getElementsByTagName('img');
  for (let i = 0; i < imgDefer.length; i += 1) {
    if (imgDefer[i].getAttribute('data-src')) {
      imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
    }
  }
}

window.onload = init;

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
