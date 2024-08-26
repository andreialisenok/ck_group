"use strict";var burger=document.querySelector(".burger"),menu=document.querySelector(".menu"),application=document.querySelectorAll(".application"),body=document.querySelector("body"),modal=document.querySelector(".modal"),modalClose=document.querySelector(".modal__close"),inputsPhone=document.querySelectorAll("[type='tel']");application.forEach((function(e){e.addEventListener("click",(function(){modal.classList.toggle("active"),body.classList.toggle("isLock")}))})),inputsPhone.forEach((function(e){window.intlTelInput(e,{utilsScript:"https://cdn.jsdelivr.net/npm/intl-tel-input@24.1.1/build/js/utils.js",initialCountry:"ru",useFullscreenPopup:!1,separateDialCode:!0})})),burger.addEventListener("click",(function(){menu.classList.toggle("isOpen"),burger.classList.toggle("isOpen")}));var tabBtns=document.querySelectorAll(".services .tabs button"),tabContent=document.querySelectorAll(".services .tabs-content");tabBtns.forEach((function(e,t){e.addEventListener("click",(function(){tabBtns.forEach((function(e){e.classList.remove("active")})),e.classList.add("active"),tabContent.forEach((function(e,n){e.classList.remove("active"),t===n&&e.classList.add("active")}))}))}));var equipmentTabs=document.querySelectorAll(".equipment-page .btns button"),equipmentTabsContent=document.querySelectorAll(".equipment-page .equipment-page__info");function setEquipment(){var e=document.getElementById("equipment").options[document.getElementById("equipment").selectedIndex],t=e.getAttribute("data-consumption"),n=e.getAttribute("data-hashrate");console.log(t,n),document.getElementById("consumption").value=t,document.getElementById("hashrate").value=n}function updateResultTable(e){document.getElementById("dayIncome").innerHTML="".concat(e.income.day," ").concat(e.currency.name),document.getElementById("weekIncome").innerHTML="".concat(e.income.week," ").concat(e.currency.name),document.getElementById("monthIncome").innerHTML="".concat(e.income.month," ").concat(e.currency.name),document.getElementById("dayOutGo").innerHTML="".concat(e.outgo.day," ").concat(e.currency.name),document.getElementById("weekOutGo").innerHTML="".concat(e.outgo.week," ").concat(e.currency.name),document.getElementById("monthOutGo").innerHTML="".concat(e.outgo.month," ").concat(e.currency.name),document.getElementById("monthProfit").innerHTML="Прибыль в месяц: ".concat(e.monthProfit," ").concat(e.currency.name)}function calcResult(){var e=document.querySelector(".currency__btn.active").getAttribute("data-rateUSD"),t=document.querySelector(".currency__btn.active").getAttribute("data-sign"),n=parseFloat(document.getElementById("commission").value),o=calcIncome()*e,c=Math.round(100*(o+o*n/100))/100,a=Math.round(7*c*100)/100,r=Math.round(30*c*100)/100,u=Math.round(calcOutGo()*e*100)/100,l=Math.round(7*u*100)/100,i=Math.round(30*u*100)/100;updateResultTable({currency:{name:t},income:{day:c,week:a,month:r},outgo:{day:u,week:l,month:i},monthProfit:Math.round(100*(r-i))/100})}function calcOutGo(){return parseFloat(document.getElementById("consumption").value)/1e3*parseFloat(document.getElementById("electricityCost").value)}function calcIncome(){return calcDailyIncomeTH_s_usdt()*parseFloat(document.getElementById("hashrate").value)}function calcDailyIncomeTH_s_usdt(){var e=parseFloat(document.getElementById("difficulty").value),t=parseFloat(document.getElementById("blockReward").value),n=parseFloat(document.getElementById("hashrate_s").value),o=parseFloat(document.getElementById("rateBTC").value),c=BigInt(86400*t*n),a=BigInt(e*Math.pow(2,32)),r=(Number(c)/Number(a)).toFixed(8);return console.log(r),Number(r*o)}equipmentTabs.forEach((function(e,t){e.addEventListener("click",(function(){equipmentTabs.forEach((function(e){e.classList.remove("active")})),e.classList.add("active"),equipmentTabsContent.forEach((function(e,n){e.classList.remove("active"),t===n&&e.classList.add("active")}))}))})),AOS.init({duration:1200});var data=[{year:2014,distance:.11,text:'первые шаги в отрасли, знакомство с майнингом в домашних условиях ( "домашний майнинг" )'},{year:2017,distance:.22,text:'первые разработки собственных ЦОДов на базе морских контейнеров 40 ft"'},{year:2018,distance:.33,text:'общий объем эксплуатируемого оборудования более 10 мвт"'},{year:2021,distance:.44,text:'Создание ООО "Цифра Капитал Групп"'},{year:2022,distance:.55,text:'Запуск 1го этапа строительства собственного ЦОДа "Башкирский". (Сотрудничество с ведущими Российскими производителями электроэнергии)'},{year:2023,distance:.66,text:"Завершение первого этапа строительства (потенциал 4 мгвт, +1000 ед. оборудования). Запуск площадки и размещение первых клиентов"},{year:2024,distance:.77,text:"Загрузка ЦОДа ~ 70% , вступление в ассоциацию промышленного майнинга и в реестр Минцифры РФ"},{year:2025,distance:.88,text:'Разработка 2го этапа по строительству собственного ЦОДа "Башкирский". Планируемая мощность ~ 50 мвт.'},{year:2026,distance:.99,text:'3й этап. Планируемая мощность ЦОДа "Башкирский" ~ 120 мвт'}],numsBtns=".years__btn",currencyBtns=".currency__btn";function scrollByPercent(e){console.log(e);var t=100*e,n=document.documentElement.scrollHeight;console.log(n);var o=n*(t/100);console.log(o);var c=o-window.innerHeight>0?o-window.innerHeight:o/3;console.log(c),window.scrollTo({top:c,behavior:"smooth"})}$(currencyBtns).on("click",(function(){$(currencyBtns).removeClass("active"),$(this).addClass("active")})),gsap.registerPlugin(MotionPathPlugin,ScrollTrigger),scrollByPercent(0),gsap.to("#green-line",{drawSVG:"0%",duration:0}),window.addEventListener("scroll",(function(e){var t=(document.documentElement.scrollTop||document.body.scrollTop)/((document.documentElement.scrollHeight||document.body.scrollHeight)-document.documentElement.clientHeight)*100,n=data.filter((function(e){return 100*e.distance<=t})),o=n[n.length-1];if(o){var c=data.indexOf(o);console.log(c),$(numsBtns).removeClass("active"),$(numsBtns).eq(c).addClass("active"),document.querySelector(".about-page-second__row p").textContent=o.text,document.querySelector(".about-page-second__row h5").textContent=o.year}gsap.to("#green-line",{drawSVG:"".concat(t.toFixed(2),"%"),duration:.1})})),$(numsBtns).on("click",(function(){$(numsBtns).removeClass("active"),$(this).addClass("active")}));var yearsBtns=document.querySelectorAll(".years__btn"),yearsTitle=document.querySelector(".about-page-second__row h5");yearsBtns.forEach((function(e,t){e.addEventListener("click",(function(){data.forEach((function(e,n){t===n&&(document.querySelector(".about-page-second__row p").textContent=e.text,document.querySelector(".about-page-second__row h5").textContent=e.year,gsap.to("#green-line",{drawSVG:"".concat(100*e.distance,"%"),duration:.1}))}))}))})),console.log("hello");
//# sourceMappingURL=about.js.map