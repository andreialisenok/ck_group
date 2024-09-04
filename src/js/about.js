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

AOS.init({
  duration: 1200,
});

const data = [
  {
    year: 2014,
    distance: 0.13,
    text: 'Первые шаги в отрасли, знакомство с майнингом в домашних условиях',
    subtext: '',
    // subtext: '("домашний майнинг")',
  },
  {
    year: 2017,
    distance: 0.2,
    text: 'Первые разработки собственных ЦОДов на базе морских контейнеров 40 ft"',
    subtext: '',
  },
  {
    year: 2018,
    distance: 0.28,
    text: 'Общий объем эксплуатируемого оборудования более 10 мвт',
    subtext: '',
  },
  {
    year: 2021,
    distance: 0.34,
    text: 'Создание ООО "Цифра Капитал Групп"',
    subtext: '',
  },
  {
    year: 2022,
    distance: 0.41,
    text: 'Запуск 1го этапа строительства собственного ЦОДа "Башкирский".',
    subtext: '',
    // subtext:
    //   '(Сотрудничество с ведущими Российскими производителями электроэнергии)',
  },
  {
    year: 2023,
    distance: 0.5,
    text: 'Завершение первого этапа строительства (потенциал 4 мгвт, +1000 ед. оборудования). Запуск площадки и размещение первых клиентов',
    subtext: '',
  },
  {
    year: 2024,
    distance: 0.6,
    text: 'Загрузка ЦОДа ~ 70% , вступление в ассоциацию промышленного майнинга и в реестр Минцифры РФ',
    subtext: '',
  },
  {
    year: 2025,
    distance: 0.8,
    text: 'Разработка 2го этапа по строительству собственного ЦОДа "Башкирский". Планируемая мощность ~ 50 мвт.',
    subtext: '',
  },
  {
    year: 2026,
    distance: 0.93,
    text: '3й этап. Планируемая мощность ЦОДа "Башкирский" ~ 120 мвт',
    subtext: '',
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

let test = 0;
document.addEventListener('click', function () {
  console.log(test);
});
gsap.to('#green-line', { drawSVG: `0%`, duration: 0 });
window.addEventListener('scroll', function (e) {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

  test = scrollPercentage.toFixed(1);

  const filteredData = data.filter((x) => x.distance * 100 <= scrollPercentage);
  const currentData = filteredData[filteredData.length - 1];

  // console.log(scrollTop);
  // console.log(scrollHeight);
  // console.log(clientHeight);
  // console.log(scrollPercentage);
  // console.log(filteredData);
  // console.log(currentData);
  if (currentData) {
    const index = data.indexOf(currentData);
    $(numsBtns).removeClass('active');
    $(numsBtns).eq(index).addClass('active');

    document.querySelector('.about-page-second__row div .text').textContent =
      currentData.text;
    document.querySelector('.about-page-second__row h5').textContent =
      currentData.year;
    document.querySelector('.about-page-second__row div .subtext').textContent =
      currentData.subtext;
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
  const percent2 = percent * 100;
  const totalHeight = document.documentElement.scrollHeight;
  const targetPosition = totalHeight * (percent2 / 100);

  // const result =
  //   targetPosition - window.innerHeight > 0
  //     ? targetPosition - window.innerHeight
  //     : targetPosition / 3;

  window.scrollTo({
    top: targetPosition,
    // behavior: 'smooth',
  });
}
// $(numsBtns).on('click', function () {
//   $(numsBtns).removeClass('active');
//   $(this).addClass('active');
// });

const yearsBtns = document.querySelectorAll('.years__btn');
const yearsTitle = document.querySelector('.about-page-second__row h5');
yearsBtns.forEach((item, idx) => {
  item.addEventListener('click', () => {
    data.forEach((obj, i) => {
      // console.log(idx === i);
      if (idx === i) {
        scrollByPercent(obj.distance);
      }
    });
  });
});
