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
      title: 'Portfolio',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      screenshotMobile: 'assets/portfolio.png',
      screenshotDekstop: '#',
      details:
        'Explore my web portfolio, designed with clean and modern HTML and CSS, showcasing a diverse range of projects and skills. With the integration of interactive features and animations using JavaScript, the portfolio provides an engaging and dynamic browsing experience, highlighting my abilities as a talented and innovative developer.',
      source: 'https://github.com/ichsansandy/ichsansandy.github.io',
      live: 'https://ichsansandy.github.io',
    },
    {
      id: 2,
      title: 'Awesome Books',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      screenshotMobile: 'assets/awesome-books.png',
      screenshotDekstop: '#',
      details: 'A user-friendly website that allows you to easily catalog and share your favorite books, creating a virtual collection tailored to your literary preferences.',
      source: 'https://github.com/ichsansandy/awesome-books-microverse/',
      live: 'https://ichsansandy.github.io/awesome-books-microverse/',
    },
    {
      id: 3,
      title: 'To Do List',
      techStack: ['JavaScript', 'Jest', 'Webpack'],
      screenshotMobile: 'assets/to-do-list.png',
      screenshotDekstop: '#',
      details: 'Effortlessly manage your daily tasks with our powerful to-do list website, Built using HTML/CSS/JS, bundle using Webpack with Unit test using Jest',
      source: 'https://github.com/ichsansandy/webpack-todo-list-microverse',
      live: 'https://ichsansandy.github.io/webpack-todo-list-microverse/dist/',
    },
    {
      id: 4,
      title: 'Stockwise',
      techStack: ['React', 'Redux', 'TailwindCSS'],
      screenshotMobile: 'assets/stock-wise.png',
      screenshotDekstop: '#',
      details: 'Welcome to Stockwise, your ultimate destination for market insights and financial wisdom. Our cutting-edge app provides real-time data and analysis for 100 leading Nasdaq companies, empowering you to make informed investment decisions with confidence. It build with React Js and Tailwind CSS and use API finnhub.io and site.financialmodeling.com',
      source: 'https://github.com/ichsansandy/stock-wise',
      live: 'https://stock-wise.vercel.app/',
    },
    {
      id: 5,
      title: 'Kelar.in',
      techStack: ['Java SpringBoot', 'MySQL', 'Firestore'],
      screenshotMobile: 'assets/kelarin.png',
      screenshotDekstop: '#',
      details: 'Say hello to kelar.in, a revolutionary project management designed to take your team\'s productivity to the next level. Built with Java SpringBoot, MySQL, Firestore, ReactJs, React-Native, Tailwind-CSS',
      source: 'https://github.com/ichsansandy/kelar.in',
      live: '#',
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
      <div class="modal-image" style="--imageMobile:url('${portfolio.screenshotMobile}')"></div>
      <div class="modal-title-wrapper">
        <h3 class="modal-title">${portfolio.title}</h3>
        <div class="mobile-hidden modal-button-container display-flex">
        <a class="button card-button modal-link ${portfolio.live === '#' ? ' isDisabled ' : ''} " href=${portfolio.live} target="_blank">
        See live <span><i class="fa-duotone fa-arrow-up-left-from-circle fa-rotate-90 fa-xl fa-fw"></i></span>
        </a>
        <a class="button card-button modal-link" href=${portfolio.source} target="_blank">
        See source <span><i class="fa-brands fa-github fa-xl fa-fw"></i></span>
        </a>
      </div>
        </div>  
        <ul class="tag-container">
          ${techStack}
        </ul>
        <p>${portfolio.details}</p>
        <div class="modal-button-container dekstop-hidden">
          <a class="button card-button modal-link ${portfolio.live === '#' ? ' isDisabled ' : ''} " href=${portfolio.live} target="_blank">
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

  const errorMessage = document.querySelector('.error-message');

  form.addEventListener('submit', (e) => {
    if (emailInput.value.toLowerCase() !== emailInput.value) {
      e.preventDefault();
      errorMessage.style.display = 'block';
    }
  });
});
