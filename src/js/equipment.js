const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const inputsPhone = document.querySelectorAll("[type='tel']");

$('.equipment-page__content .buy').on('click', function () {
  $('.modal').toggleClass('active');
  $('body').toggleClass('isLock');

  // const title = $(this).parents('.equipment-page__content').find('h3');
  // const title1 = $(this)
  //   .parents('.equipment-page__content')
  //   .find('.equipment-page__info');
  const productName = $(this)
    .parents('.equipment-page__content')
    .find('h3')
    .text();
  const productPrice = $(this)
    .parents('.equipment-page__info')
    .find('.equipment-page__bottom span')
    .text();
  const type = $(this)
    .parents('.equipment-page__content')
    .find('.btns button.active')
    .text();
  console.log(type);

  $('.productName input').attr('value', `${productName} - ${type}`);
  $('.productPrice input').attr('value', `${productPrice}`);
});

$('.modal__close').on('click', () => {
  $('.modal').toggleClass('active');
  $('body').toggleClass('isLock');
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

const equipmentTabs = document.querySelectorAll('.equipment-page .btns button');
const equipmentTabsContent = document.querySelectorAll(
  '.equipment-page .equipment-page__info'
);

const minerBtns = document.querySelectorAll('.equipment-page .btns button');

$('.btns button').on('click', function () {
  const id = $(this).attr('data-id');
  $(this).siblings().removeClass('active');
  $(this).addClass('active');
  $(this)
    .parents('.equipment-page__content')
    .find('.equipment-page__info')
    .removeClass('active');
  $(this)
    .parents('.equipment-page__content')
    .find(`.equipment-page__info[data-id=${id}]`)
    .addClass('active');
});

const btnMinus = document.querySelector('.modal .counter .btn-minus');
const btnPlus = document.querySelector('.modal .counter .btn-plus');
const inputNumber = document.querySelector('.modal .counter input');

btnMinus.addEventListener('click', () => {
  if (inputNumber.value > 1) {
    inputNumber.value--;
  }
});
btnPlus.addEventListener('click', () => {
  inputNumber.value++;
  console.log(inputNumber.value);
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
