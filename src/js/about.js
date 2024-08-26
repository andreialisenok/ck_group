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
// modalClose.addEventListener('click', () => {
//   modal.classList.toggle('active');
//   body.classList.toggle('isLock');
// });
// modalClose.addEventListener('click', () => {
//   menu.classList.toggle('isOpen');
//   burger.classList.toggle('isOpen');
// });
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

// calc
function setEquipment() {
  const equipment =
    document.getElementById('equipment').options[
      document.getElementById('equipment').selectedIndex
    ];
  const consumption = equipment.getAttribute('data-consumption');
  const hashrate = equipment.getAttribute('data-hashrate');
  console.log(consumption, hashrate);
  document.getElementById('consumption').value = consumption;
  document.getElementById('hashrate').value = hashrate;
}

function updateResultTable(data) {
  document.getElementById(
    'dayIncome'
  ).innerHTML = `${data.income.day} ${data.currency.name}`;
  document.getElementById(
    'weekIncome'
  ).innerHTML = `${data.income.week} ${data.currency.name}`;
  document.getElementById(
    'monthIncome'
  ).innerHTML = `${data.income.month} ${data.currency.name}`;
  document.getElementById(
    'dayOutGo'
  ).innerHTML = `${data.outgo.day} ${data.currency.name}`;
  document.getElementById(
    'weekOutGo'
  ).innerHTML = `${data.outgo.week} ${data.currency.name}`;
  document.getElementById(
    'monthOutGo'
  ).innerHTML = `${data.outgo.month} ${data.currency.name}`;
  document.getElementById(
    'monthProfit'
  ).innerHTML = `Прибыль в месяц: ${data.monthProfit} ${data.currency.name}`;
}

function calcResult() {
  // const currencyRate = parseFloat(
  //   document
  //     .getElementById('currency')
  //     .options[document.getElementById('currency').selectedIndex].getAttribute(
  //       'data-rateUSD'
  //     )
  // );

  const currencyRate = document
    .querySelector('.currency__btn.active')
    .getAttribute('data-rateUSD');
  // const currency =
  //   document.getElementById('currency').options[
  //     document.getElementById('currency').selectedIndex
  //   ].text;
  const currency = document
    .querySelector('.currency__btn.active')
    .getAttribute('data-sign');
  const commission = parseFloat(document.getElementById('commission').value);

  const dayIncomeWithoutComission = calcIncome() * currencyRate;
  const dayIncome =
    Math.round(
      (dayIncomeWithoutComission +
        (dayIncomeWithoutComission * commission) / 100) *
        100
    ) / 100;
  const weekIncome = Math.round(dayIncome * 7 * 100) / 100;
  const monthIncome = Math.round(dayIncome * 30 * 100) / 100;

  const dayOutGo = Math.round(calcOutGo() * currencyRate * 100) / 100;
  const weekOutGo = Math.round(dayOutGo * 7 * 100) / 100;
  const monthOutGo = Math.round(dayOutGo * 30 * 100) / 100;

  const monthProfit = Math.round((monthIncome - monthOutGo) * 100) / 100;
  updateResultTable({
    currency: {
      name: currency,
    },
    income: {
      day: dayIncome,
      week: weekIncome,
      month: monthIncome,
    },
    outgo: {
      day: dayOutGo,
      week: weekOutGo,
      month: monthOutGo,
    },
    monthProfit: monthProfit,
  });
}

function calcOutGo() {
  const consumption =
    parseFloat(document.getElementById('consumption').value) / 1000;
  const electricityCost = parseFloat(
    document.getElementById('electricityCost').value
  );
  return consumption * electricityCost;
}

function calcIncome() {
  const dailyIncomeTH_s_usdt = calcDailyIncomeTH_s_usdt();
  const hashrate = parseFloat(document.getElementById('hashrate').value);
  const result = dailyIncomeTH_s_usdt * hashrate;
  return result;
}

function calcDailyIncomeTH_s_usdt() {
  const dayInSec = 86400;
  const difficulty = parseFloat(document.getElementById('difficulty').value);
  const blockReward = parseFloat(document.getElementById('blockReward').value);
  const hashrate_s = parseFloat(document.getElementById('hashrate_s').value);
  const rateBTC = parseFloat(document.getElementById('rateBTC').value);

  //console.log(dayInSec, blockReward, hashrate_s, difficulty);
  const first = BigInt(dayInSec * blockReward * hashrate_s);
  //console.log(first)
  const second = BigInt(difficulty * 2 ** 32);
  //console.log(second)
  const incomeInCoins = (Number(first) / Number(second)).toFixed(8);
  console.log(incomeInCoins);
  //console.log(rateBTC)
  const dailyIncomeTh_s_usdt = Number(incomeInCoins * rateBTC);
  //console.log(dailyIncomeTh_s_usdt)
  return dailyIncomeTh_s_usdt;
}

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
    console.log(index);

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
  console.log(totalHeight);
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

// $(numsBtns).on('click', function () {
//   $(numsBtns).removeClass('active');
//   $(this).addClass('active');
//   $('.line-wrap .about-page-second__row h5').text(this.textContent);
//   // $('.line-wrap .about-page-second__row p').text(this.textContent);
//   $(data).each(function (idx, value) {
//     console.log(numsBtns);
//     // console.log(value.text);
//     // if (this.textContent === value.year) {
//     //   console.log(value.text);
//     // }
//   });

//   // $(data).each(function (idx, value) {
//   //   console.log(value.text);
//   // });
// });
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

console.log('hello');
