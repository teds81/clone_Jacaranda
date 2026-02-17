const toggleMenu = () => {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('#nav a');

  if (hamburger && nav) {
      hamburger.addEventListener('click', () => {
          hamburger.classList.toggle('active');
          nav.classList.toggle('show');

          document.body.style.overflow = nav.classList.contains('show') ? 'hidden' : 'auto';
      });

      navLinks.forEach(link => {
          link.addEventListener('click', () => {
              hamburger.classList.remove('active');
              nav.classList.remove('show');
              document.body.style.overflow = 'auto';
          });
      });
  }
};

document.addEventListener('DOMContentLoaded', toggleMenu);
