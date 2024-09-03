const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const application = document.querySelectorAll('.application');
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const inputsPhone = document.querySelectorAll("[type='tel']");
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

const equipmentTabs = document.querySelectorAll('.equipment-page .btns button');
const equipmentTabsContent = document.querySelectorAll(
  '.equipment-page .equipment-page__info'
);

equipmentTabs.forEach((tab, tabIndex) => {
  tab.addEventListener('click', () => {
    equipmentTabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    tab.classList.add('active');

    // tab.classList.add('active');

    equipmentTabsContent.forEach((tabContent, tabContentIndex) => {
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

const data = [
  {
    year: 2014,
    distance: 0.11,
    text: 'первые шаги в отрасли, знакомство с майнингом в домашних условиях ( "домашний майнинг" )',
  },
  {
    year: 2017,
    distance: 0.22,
    text: 'первые разработки собственных ЦОДов на базе морских контейнеров 40 ft"',
  },
  {
    year: 2018,
    distance: 0.33,
    text: 'общий объем эксплуатируемого оборудования более 10 мвт"',
  },
  {
    year: 2021,
    distance: 0.44,
    text: 'Создание ООО "Цифра Капитал Групп"',
  },
  {
    year: 2022,
    distance: 0.55,
    text: 'Запуск 1го этапа строительства собственного ЦОДа "Башкирский". (Сотрудничество с ведущими Российскими производителями электроэнергии)',
  },
  {
    year: 2023,
    distance: 0.66,
    text: 'Завершение первого этапа строительства (потенциал 4 мгвт, +1000 ед. оборудования). Запуск площадки и размещение первых клиентов',
  },
  {
    year: 2024,
    distance: 0.77,
    text: 'Загрузка ЦОДа ~ 70% , вступление в ассоциацию промышленного майнинга и в реестр Минцифры РФ',
  },
  {
    year: 2025,
    distance: 0.88,
    text: 'Разработка 2го этапа по строительству собственного ЦОДа "Башкирский". Планируемая мощность ~ 50 мвт.',
  },
  {
    year: 2026,
    distance: 0.99,
    text: '3й этап. Планируемая мощность ЦОДа "Башкирский" ~ 120 мвт',
  },
];

const numsBtns = '.years__btn';

const currencyBtns = '.currency__btn';
$(currencyBtns).on('click', function () {
  $(currencyBtns).removeClass('active');
  $(this).addClass('active');
});

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
scrollByPercent(0);
gsap.to('#green-line', { drawSVG: `0%`, duration: 0 });
window.addEventListener('scroll', function (e) {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

  const filteredData = data.filter((x) => x.distance * 100 <= scrollPercentage);
  const currentData = filteredData[filteredData.length - 1];

  if (currentData) {
    const index = data.indexOf(currentData);

    $(numsBtns).removeClass('active');
    $(numsBtns).eq(index).addClass('active');

    document.querySelector('.about-page-second__row p').textContent =
      currentData.text;
    document.querySelector('.about-page-second__row h5').textContent =
      currentData.year;
  }

  gsap.to('#green-line', {
    drawSVG: `${scrollPercentage.toFixed(2)}%`,
    duration: 0.1,
  });
  // console.log(+scrollPercentage.toFixed(3));
  // if (condition) {
  // }
});
function scrollByPercent(percent) {
  console.log(percent);
  const percent2 = percent * 100;
  const totalHeight = document.documentElement.scrollHeight;
  const targetPosition = totalHeight * (percent2 / 100);
  console.log(targetPosition);

  const result =
    targetPosition - window.innerHeight > 0
      ? targetPosition - window.innerHeight
      : targetPosition / 3;
  console.log(result);

  window.scrollTo({
    top: result,
    behavior: 'smooth',
  });
}
$(numsBtns).on('click', function () {
  $(numsBtns).removeClass('active');
  $(this).addClass('active');
});

const yearsBtns = document.querySelectorAll('.years__btn');
const yearsTitle = document.querySelector('.about-page-second__row h5');
yearsBtns.forEach((item, idx) => {
  item.addEventListener('click', () => {
    data.forEach((obj, i) => {
      // console.log(idx === i);
      if (idx === i) {
        document.querySelector('.about-page-second__row p').textContent =
          obj.text;
        document.querySelector('.about-page-second__row h5').textContent =
          obj.year;
        gsap.to('#green-line', {
          drawSVG: `${obj.distance * 100}%`,
          duration: 0.1,
        });
      }
    });
  });
});
