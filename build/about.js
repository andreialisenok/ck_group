"use strict";var burger=document.querySelector(".burger"),menu=document.querySelector(".menu"),application=document.querySelectorAll(".application"),body=document.querySelector("body"),modal=document.querySelector(".modal"),modalClose=document.querySelector(".modal__close"),inputsPhone=document.querySelectorAll("[type='tel']");inputsPhone.forEach((function(e){window.intlTelInput(e,{utilsScript:"https://cdn.jsdelivr.net/npm/intl-tel-input@24.1.1/build/js/utils.js",initialCountry:"ru",useFullscreenPopup:!1,separateDialCode:!0})})),burger.addEventListener("click",(function(){menu.classList.toggle("isOpen"),burger.classList.toggle("isOpen")})),AOS.init({duration:1200});var data=[{year:2014,distance:.11,text:"первые шаги в отрасли, знакомство с майнингом в домашних условиях",subtext:'("домашний майнинг")'},{year:2017,distance:.22,text:'первые разработки собственных ЦОДов на базе морских контейнеров 40 ft"',subtext:""},{year:2018,distance:.33,text:"общий объем эксплуатируемого оборудования более 10 мвт",subtext:""},{year:2021,distance:.44,text:'Создание ООО "Цифра Капитал Групп"',subtext:""},{year:2022,distance:.55,text:'Запуск 1го этапа строительства собственного ЦОДа "Башкирский".',subtext:"(Сотрудничество с ведущими Российскими производителями электроэнергии)"},{year:2023,distance:.66,text:"Завершение первого этапа строительства (потенциал 4 мгвт, +1000 ед. оборудования). Запуск площадки и размещение первых клиентов",subtext:""},{year:2024,distance:.77,text:"Загрузка ЦОДа ~ 70% , вступление в ассоциацию промышленного майнинга и в реестр Минцифры РФ",subtext:""},{year:2025,distance:.88,text:'Разработка 2го этапа по строительству собственного ЦОДа "Башкирский". Планируемая мощность ~ 50 мвт.',subtext:""},{year:2026,distance:.99,text:'3й этап. Планируемая мощность ЦОДа "Башкирский" ~ 120 мвт',subtext:""}],numsBtns=".years__btn",currencyBtns=".currency__btn";function scrollByPercent(e){var t=100*e,n=document.documentElement.scrollHeight*(t/100),o=n-window.innerHeight>0?n-window.innerHeight:n/3;window.scrollTo({top:o,behavior:"smooth"})}$(currencyBtns).on("click",(function(){$(currencyBtns).removeClass("active"),$(this).addClass("active")})),gsap.registerPlugin(MotionPathPlugin,ScrollTrigger),scrollByPercent(0),gsap.to("#green-line",{drawSVG:"0%",duration:0}),window.addEventListener("scroll",(function(e){var t=(document.documentElement.scrollTop||document.body.scrollTop)/((document.documentElement.scrollHeight||document.body.scrollHeight)-document.documentElement.clientHeight)*100,n=data.filter((function(e){return 100*e.distance<=t})),o=n[n.length-1];if(o){var r=data.indexOf(o);$(numsBtns).removeClass("active"),$(numsBtns).eq(r).addClass("active"),document.querySelector(".about-page-second__row div .text").textContent=o.text,document.querySelector(".about-page-second__row h5").textContent=o.year,document.querySelector(".about-page-second__row div .subtext").textContent=o.subtext}gsap.to("#green-line",{drawSVG:"".concat(t.toFixed(2),"%"),duration:.1})})),$(numsBtns).on("click",(function(){$(numsBtns).removeClass("active"),$(this).addClass("active")}));var yearsBtns=document.querySelectorAll(".years__btn"),yearsTitle=document.querySelector(".about-page-second__row h5");yearsBtns.forEach((function(e,t){e.addEventListener("click",(function(){data.forEach((function(e,n){t===n&&(document.querySelector(".about-page-second__row p").textContent=e.text,document.querySelector(".about-page-second__row h5").textContent=e.year,gsap.to("#green-line",{drawSVG:"".concat(100*e.distance,"%"),duration:.1}))}))}))}));
//# sourceMappingURL=about.js.map