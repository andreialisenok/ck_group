const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const application = document.querySelectorAll('.application');
const body = document.querySelector('body');
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

async function calcResult() {
  const rateUSDRUB = document.getElementById('rateUSDRUB').value;
  const electricityCost = document.getElementById('electricityCost').value / rateUSDRUB;
  const hashrate = document.getElementById('hashrate').value;
  const consumption = document.getElementById('consumption').value;
  const commission = document.getElementById('commission').value;
  const currentCurrency = document.querySelector('.currency__btn.active').getAttribute('data-rateUSD');
  const currentCurrencyName = document.querySelector('.currency__btn.active').getAttribute('data-sign');
  // console.log(hashrate, consumption, commission, electricityCost)

  let calcData = await calculateMiningProfitabilityUsd(hashrate, consumption, commission, electricityCost);
  calcData.income = calcData.income * currentCurrency;
  calcData.outgo = calcData.outgo * currentCurrency;
  calcData.profit = calcData.profit * currentCurrency;
  calcData.currency = currentCurrency;
  calcData.currencyName = currentCurrencyName;
  // console.log(calcData)
  updateResultTable(calcData);
}

async function calculateMiningProfitabilityUsd(hashrateThs, powerConsumptionWatt, poolFeePercent, electricityCostUsdPerKwh) {
  const coinsArray = await fetch('https://api.minerstat.com/v2/coins?list=BTC').then(r => r.json());

  const BTCdata = coinsArray.find(x => x.coin == 'BTC');
  const btcPerBlock = BTCdata.reward_block;  // Вознаграждение за блок в BTC
  const blocksPerDay = 144;  // Среднее количество блоков в день
  const btcPriceUsd = BTCdata.price;  // Текущая цена BTC в USD
  document.getElementById('rateBTC').value = btcPriceUsd.toFixed(2);
  const networkHashratehs = BTCdata.network_hashrate//620355217.981;  // Текущий хешрейт сети в TH/s
  const networkHashrateThs = networkHashratehs / 1e12;
  // Расчеты
  const dailyBtcEarned = (hashrateThs / networkHashrateThs) * blocksPerDay * btcPerBlock;
  const dailyRevenueUsd = dailyBtcEarned * btcPriceUsd;
  const dailyPowerCostUsd = (powerConsumptionWatt / 1000) * 24 * electricityCostUsdPerKwh;
  const dailyPoolFeeUsd = (dailyRevenueUsd * (poolFeePercent / 100));
  const dailyProfitUsd = dailyRevenueUsd - dailyPowerCostUsd - dailyPoolFeeUsd;

  return {
    income: dailyRevenueUsd - dailyPoolFeeUsd,
    outgo: dailyPowerCostUsd,
    profit: dailyProfitUsd
  }
}

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
  ).innerHTML = `${(data.income).toFixed(2)} ${data.currencyName}`;
  document.getElementById(
    'weekIncome'
  ).innerHTML = `${(data.income * 7).toFixed(2)} ${data.currencyName}`;
  document.getElementById(
    'monthIncome'
  ).innerHTML = `${(data.income * 30).toFixed(2)} ${data.currencyName}`;
  document.getElementById(
    'dayOutGo'
  ).innerHTML = `${(data.outgo).toFixed(2)} ${data.currencyName}`;
  document.getElementById(
    'weekOutGo'
  ).innerHTML = `${(data.outgo * 7).toFixed(2)} ${data.currencyName}`;
  document.getElementById(
    'monthOutGo'
  ).innerHTML = `${(data.outgo * 30).toFixed(2)} ${data.currencyName}`;
  document.getElementById(
    'monthProfit'
  ).innerHTML = `Прибыль в месяц: ${(data.profit * 30).toFixed(2)} ${data.currencyName}`;
}

// function calcResult() {
//   // const currencyRate = parseFloat(
//   //   document
//   //     .getElementById('currency')
//   //     .options[document.getElementById('currency').selectedIndex].getAttribute(
//   //       'data-rateUSD'
//   //     )
//   // );

//   const currencyRate = document
//     .querySelector('.currency__btn.active')
//     .getAttribute('data-rateUSD');
//   // const currency =
//   //   document.getElementById('currency').options[
//   //     document.getElementById('currency').selectedIndex
//   //   ].text;
//   const currency = document
//     .querySelector('.currency__btn.active')
//     .getAttribute('data-sign');
//   const commission = parseFloat(document.getElementById('commission').value);

//   const dayIncomeWithoutComission = calcIncome() * currencyRate;
//   const dayIncome =
//     Math.round(
//       (dayIncomeWithoutComission +
//         (dayIncomeWithoutComission * commission) / 100) *
//         100
//     ) / 100;
//   const weekIncome = Math.round(dayIncome * 7 * 100) / 100;
//   const monthIncome = Math.round(dayIncome * 30 * 100) / 100;

//   const dayOutGo = Math.round(calcOutGo() * currencyRate * 100) / 100;
//   const weekOutGo = Math.round(dayOutGo * 7 * 100) / 100;
//   const monthOutGo = Math.round(dayOutGo * 30 * 100) / 100;

//   const monthProfit = Math.round((monthIncome - monthOutGo) * 100) / 100;
//   updateResultTable({
//     currency: {
//       name: currency,
//     },
//     income: {
//       day: dayIncome,
//       week: weekIncome,
//       month: monthIncome,
//     },
//     outgo: {
//       day: dayOutGo,
//       week: weekOutGo,
//       month: monthOutGo,
//     },
//     monthProfit: monthProfit,
//   });
// }

// function calcOutGo() {
//   const consumption =
//     parseFloat(document.getElementById('consumption').value) / 1000;
//   const electricityCost = parseFloat(
//     document.getElementById('electricityCost').value
//   );
//   return consumption * electricityCost;
// }

// function calcIncome() {
//   const dailyIncomeTH_s_usdt = calcDailyIncomeTH_s_usdt();
//   const hashrate = parseFloat(document.getElementById('hashrate').value);
//   const result = dailyIncomeTH_s_usdt * hashrate;
//   return result;
// }

// function calcDailyIncomeTH_s_usdt() {
//   const dayInSec = 86400;
//   const difficulty = parseFloat(document.getElementById('difficulty').value);
//   const blockReward = parseFloat(document.getElementById('blockReward').value);
//   const hashrate_s = parseFloat(document.getElementById('hashrate_s').value);
//   const rateBTC = parseFloat(document.getElementById('rateBTC').value);

//   //console.log(dayInSec, blockReward, hashrate_s, difficulty);
//   const first = BigInt(dayInSec * blockReward * hashrate_s);
//   //console.log(first)
//   const second = BigInt(difficulty * 2 ** 32);
//   //console.log(second)
//   const incomeInCoins = (Number(first) / Number(second)).toFixed(8);
//   console.log(incomeInCoins);
//   //console.log(rateBTC)
//   const dailyIncomeTh_s_usdt = Number(incomeInCoins * rateBTC);
//   //console.log(dailyIncomeTh_s_usdt)
//   return dailyIncomeTh_s_usdt;
// }
const currencyBtns = '.currency__btn';
$(currencyBtns).on('click', function () {
  $(currencyBtns).removeClass('active');
  $(this).addClass('active');
});
