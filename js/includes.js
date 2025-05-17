document.addEventListener('DOMContentLoaded', function () {
  fetch('/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;

      // Highlight active nav link
      const currentPage = window.location.pathname.split("/").pop();
      const navLinks = document.querySelectorAll('#navbar-links a, #mobile-menu a');
      navLinks.forEach(link => {
        const hrefPage = link.getAttribute('href').split("/").pop();
        if (hrefPage === currentPage) {
          link.classList.add( "underline", "underline-offset-4");
        }
      });

      // Mobile menu logic
      const hamburgerBtn = document.getElementById('hamburger-btn');
      const closeBtn = document.getElementById('close-menu');
      const mobileMenu = document.getElementById('mobile-menu');
      const backdrop = document.getElementById('menu-backdrop');

      function openMenu() {
        mobileMenu.classList.remove('translate-x-full');
        backdrop.classList.remove('hidden');
      }

      function closeMenu() {
        mobileMenu.classList.add('translate-x-full');
        backdrop.classList.add('hidden');
      }

      hamburgerBtn?.addEventListener('click', openMenu);
      closeBtn?.addEventListener('click', closeMenu);
      backdrop?.addEventListener('click', closeMenu);
    });

  // Load footer
  fetch('/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    });
});
