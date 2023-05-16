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

  // Portfolio Card data
  const portfolioList = [
    {
      id: 1,
      title: 'Keeping track of hundreds of components',
      techStack: ['HTML', 'JavaScript', 'Ruby on Rails'],
      screenshotMobile: 'assets/SnapshootPortfolio(1).png',
      screenshotDekstop: 'assets/SnapshootPortfolio(1)Dekstop.png',
      details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
      source: 'https://github.com/ichsansandy/portfolio-microverse',
      live: 'https://github.com/ichsansandy/portfolio-microverse',
    },
    {
      id: 2,
      title: 'Multi-Post Stories Gain+Glory',
      techStack: ['HTML', 'JavaScript', 'Ruby on Rails'],
      screenshotMobile: '#',
      screenshotDekstop: '#',
      details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
      source: 'https://github.com/ichsansandy/portfolio-microverse',
      live: 'https://github.com/ichsansandy/portfolio-microverse',
    },
    {
      id: 3,
      title: 'Multi-Post Stories Gain+Glory',
      techStack: ['HTML', 'JavaScript', 'Ruby on Rails'],
      screenshotMobile: '#',
      screenshotDekstop: '#',
      details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
      source: 'https://github.com/ichsansandy/portfolio-microverse',
      live: 'https://github.com/ichsansandy/portfolio-microverse',
    },
    {
      id: 4,
      title: 'Multi-Post Stories Gain+Glory',
      techStack: ['HTML', 'JavaScript', 'Ruby on Rails'],
      screenshotMobile: '#',
      screenshotDekstop: '#',
      details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
      source: 'https://github.com/ichsansandy/portfolio-microverse',
      live: 'https://github.com/ichsansandy/portfolio-microverse',
    },
    {
      id: 5,
      title: 'Multi-Post Stories Gain+Glory',
      techStack: ['HTML', 'JavaScript', 'Ruby on Rails'],
      screenshotMobile: '#',
      screenshotDekstop: '#',
      details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
      source: 'https://github.com/ichsansandy/portfolio-microverse',
      live: 'https://github.com/ichsansandy/portfolio-microverse',
    },
    {
      id: 6,
      title: 'Multi-Post Stories Gain+Glory',
      techStack: ['HTML', 'JavaScript', 'Ruby on Rails'],
      screenshotMobile: '#',
      screenshotDekstop: '#',
      details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
      source: 'https://github.com/ichsansandy/portfolio-microverse',
      live: 'https://github.com/ichsansandy/portfolio-microverse',
    },
  ];

  function cardAndModal(portfolio) {
    const techStack = portfolio.techStack.map((element) => `<li class="tag flex-center">${element}</li>`).join('');

    return `<div class="card">
    <div class="card-image" style="--image:url('${portfolio.screenshotMobile}')"></div>
    <div class="card-info">
    <h4 class="card-title title-text center-text dark">${portfolio.title}</h4>
    <ul class="tag-container">
     ${techStack}
    </ul>
    <button class="button card-button white modal-button" data-modal="modal${portfolio.id}">See project</button>
  </div>
  </div>
  <dialog id="modal${portfolio.id}">
  <div class="modal">
  <button class="close-modal-button" data-modal="modal${portfolio.id}"><i class="fas fa-xmark fa-lg"></i></button>
  <div class="modal-image" style="--imageMobile:url('${portfolio.screenshotMobile}'); --imageDekstop:url('${portfolio.screenshotDekstop}')"></div>
  <h3 class="modal-title">${portfolio.title}</h3>
  <ul class="tag-container">
    ${techStack}
  </ul>
  <p>${portfolio.details}</p>
  <p>${portfolio.details}</p>
  <div class="modal-button-container">
  <a class="button card-button modal-link" href=${portfolio.live} target="_blank">
  See live <span><i class="fa-duotone fa-arrow-up-left-from-circle fa-rotate-90 fa-xl fa-fw"></i></span>
  </a>
  <a class="button card-button modal-link" href=${portfolio.source} target="_blank">
  See source <span><i class="fa-brands fa-github fa-xl fa-fw"></i></span>
  </a>
  </div>
  </div>
  </dialog>
  `;
  }

  const cards = () => {
    const card = portfolioList.map(cardAndModal);
    return card;
  };

  document.querySelector('.card-container').innerHTML = cards().join('');

  const modalButtons = document.querySelectorAll('.modal-button');
  const closeButtons = document.querySelectorAll('.close-modal-button');

  if (modalButtons) {
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < modalButtons.length; index++) {
      const element = modalButtons[index];
      const modalId = element.getAttribute('data-modal');
      const modal = document.getElementById(`${modalId}`);

      element.addEventListener('click', () => {
        modal.showModal();
        body.classList.add('prevent-scrolling');
      });
    }
  }

  if (closeButtons) {
    closeButtons.forEach((element) => {
      const modalId = element.getAttribute('data-modal');
      const modal = document.getElementById(`${modalId}`);

      element.addEventListener('click', () => {
        modal.close();
      });

      modal.addEventListener('close', () => {
        body.classList.remove('prevent-scrolling');
      });
    });
  }

  const form = document.querySelector('.form-container');
  const fullnameInput = document.querySelector('#fullnameInput');
  const firstnameInput = document.querySelector('#firstnameInput');
  const lastnameInput = document.querySelector('#lastnameInput');
  const emailInput = document.querySelector('#emailInput');
  const messageInput = document.querySelector('#messageInput');

  form.addEventListener('input', () => {
    const formData = {
      fullname: fullnameInput.value,
      firstname: firstnameInput.value,
      lastname: lastnameInput.value,
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
  });

  const formData = JSON.parse(localStorage.getItem('formData'));

  if (formData) {
    fullnameInput.value = formData.fullname;
    firstnameInput.value = formData.firstname;
    lastnameInput.value = formData.lastname;
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
});
