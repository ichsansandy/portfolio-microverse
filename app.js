window.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const primaryNavigation = document.querySelector('#primary-navigation');
  const navLinkMenu = document.querySelectorAll('.nav-link');
  const body = document.querySelector('body');

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      const menuVisibility = primaryNavigation.getAttribute('data-visible');
      if (menuVisibility === 'false') {
        primaryNavigation.setAttribute('data-visible', true);
        mobileMenuToggle.setAttribute('aria-expanded', true);
        body.classList.add('prevent-scrolling');
      } else {
        primaryNavigation.setAttribute('data-visible', false);
        mobileMenuToggle.setAttribute('aria-expanded', false);
        body.classList.remove('prevent-scrolling');
      }
    });
    navLinkMenu.forEach((element) => {
      element.addEventListener('click', () => {
        primaryNavigation.setAttribute('data-visible', false);
        mobileMenuToggle.setAttribute('aria-expanded', false);
        body.classList.remove('prevent-scrolling');
      });
    });
  }
});

const portfolioList = [
  {
    id: 1,
    title: 'Multi-Post Stories Gain+Glory',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Ruby on Rails'],
    screenshot: '#',
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
    source: 'https://github.com/ichsansandy/portfolio-microverse',
    live: 'https://github.com/ichsansandy/portfolio-microverse',
  },
  {
    id: 2,
    title: 'Multi-Post Stories Gain+Glory',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Ruby on Rails'],
    screenshot: '#',
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
    source: 'https://github.com/ichsansandy/portfolio-microverse',
    live: 'https://github.com/ichsansandy/portfolio-microverse',
  },
  {
    id: 3,
    title: 'Multi-Post Stories Gain+Glory',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Ruby on Rails'],
    screenshot: '#',
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
    source: 'https://github.com/ichsansandy/portfolio-microverse',
    live: 'https://github.com/ichsansandy/portfolio-microverse',
  },
  {
    id: 4,
    title: 'Multi-Post Stories Gain+Glory',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Ruby on Rails'],
    screenshot: '#',
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
    source: 'https://github.com/ichsansandy/portfolio-microverse',
    live: 'https://github.com/ichsansandy/portfolio-microverse',
  },
  {
    id: 5,
    title: 'Multi-Post Stories Gain+Glory',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Ruby on Rails'],
    screenshot: '#',
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
    source: 'https://github.com/ichsansandy/portfolio-microverse',
    live: 'https://github.com/ichsansandy/portfolio-microverse',
  },
  {
    id: 5,
    title: 'Multi-Post Stories Gain+Glory',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Ruby on Rails'],
    screenshot: '#',
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
    source: 'https://github.com/ichsansandy/portfolio-microverse',
    live: 'https://github.com/ichsansandy/portfolio-microverse',
  },
];

const cards = () => {
  const card = portfolioList.map(
    (portfolio) => `<div class="card">
  <div class="card-image"></div>
  <div class="card-info">
    <h4 class="card-title title-text center-text dark">${portfolio.title}</h4>
    <ul class="tag-container">
       <li class="tag flex-center">${portfolio.techStack[0]}</li>
       <li class="tag flex-center">${portfolio.techStack[1]}</li>
       <li class="tag flex-center">${portfolio.techStack[2]}</li>
       <li class="tag flex-center">${portfolio.techStack[3]}</li>
    </ul>
    <button class="button card-button white modal-button" data-modal="modal${portfolio.id}">See project</button>
  </div>
</div>
<dialog id="modal${portfolio.id}">
<div class="modal">
  <img src=${portfolio.screenshot} width="100%" height="220px" alt="portfolio" />
  <h3 class="modal-title">${portfolio.title}</h3>
  <ul class="tag-container">
    <li class="tag flex-center">${portfolio.techStack[0]}</li>
    <li class="tag flex-center">${portfolio.techStack[1]}</li>
    <li class="tag flex-center">${portfolio.techStack[2]}</li>
    <li class="tag flex-center">${portfolio.techStack[3]}</li>
  </ul>
  <p>${portfolio.details}</p>
  <p>${portfolio.details}</p>
  <div class="modal-button-container">
    <button class="button card-button white">
      See live <span><i class="fa-duotone fa-arrow-up-left-from-circle fa-rotate-90 fa-xl fa-fw"></i></span>
    </button>
    <button class="button card-button white">
      See source <span><i class="fa-brands fa-github fa-xl fa-fw"></i></span>
    </button>
  </div>
</div>
</dialog>
`
  );
  return card;
};

window.addEventListener('load', () => {
  document.querySelector('.card-container').innerHTML = cards().join('');
});

// const modalButtons = document.querySelectorAll('.modal-button');
