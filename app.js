window.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const primaryNavigation = document.querySelector('#primary-navigation');
  const navLinkMenu = document.querySelectorAll('.nav-link');

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      const menuVisibility = primaryNavigation.getAttribute('data-visible');
      if (menuVisibility === 'false') {
        primaryNavigation.setAttribute('data-visible', true);
        mobileMenuToggle.setAttribute('aria-expanded', true);
      } else {
        primaryNavigation.setAttribute('data-visible', false);
        mobileMenuToggle.setAttribute('aria-expanded', false);
      }
    });
    navLinkMenu.forEach((element) => {
      element.addEventListener('click', () => {
        primaryNavigation.setAttribute('data-visible', false);
        mobileMenuToggle.setAttribute('aria-expanded', false);
      });
    });
  }
});
