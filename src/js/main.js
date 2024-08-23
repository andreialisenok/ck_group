const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const application = document.querySelectorAll('.application');
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const inputsPhone = document.querySelectorAll("[type='tel']");
application.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.classList.toggle('active');
    body.classList.toggle('isLock');
  });
});
modalClose.addEventListener('click', () => {
  modal.classList.toggle('active');
  body.classList.toggle('isLock');
});
modalClose.addEventListener('click', () => {
  menu.classList.toggle('isOpen');
  burger.classList.toggle('isOpen');
});
inputsPhone.forEach((item) => {
  window.intlTelInput(item, {
    utilsScript:
      'https://cdn.jsdelivr.net/npm/intl-tel-input@24.1.1/build/js/utils.js',
    initialCountry: 'ru',
    useFullscreenPopup: false,
    separateDialCode: true,
  });
});

burger.addEventListener('click', () => {
  menu.classList.toggle('isOpen');
  burger.classList.toggle('isOpen');
});

const tabBtns = document.querySelectorAll('.services .tabs button');
const tabContent = document.querySelectorAll('.services .tabs-content');

tabBtns.forEach((tab, tabIndex) => {
  tab.addEventListener('click', () => {
    tabBtns.forEach((tab) => {
      tab.classList.remove('active');
    });
    tab.classList.add('active');

    // tab.classList.add('active');

    tabContent.forEach((tabContent, tabContentIndex) => {
      tabContent.classList.remove('active');
      if (tabIndex === tabContentIndex) {
        tabContent.classList.add('active');
      }
    });
  });
});
AOS.init({
  duration: 1200,
});
