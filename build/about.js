"use strict";var burger=document.querySelector(".burger"),menu=document.querySelector(".menu"),application=document.querySelectorAll(".application"),body=document.querySelector("body"),modal=document.querySelector(".modal"),modalClose=document.querySelector(".modal__close"),inputsPhone=document.querySelectorAll("[type='tel']");inputsPhone.forEach((function(e){window.intlTelInput(e,{utilsScript:"https://cdn.jsdelivr.net/npm/intl-tel-input@24.1.1/build/js/utils.js",initialCountry:"ru",useFullscreenPopup:!1,separateDialCode:!0})})),burger.addEventListener("click",(function(){menu.classList.toggle("isOpen"),burger.classList.toggle("isOpen")})),AOS.init({duration:1200});var data=[{year:2014,distance:.13,text:"Первые шаги в отрасли, знакомство с майнингом в домашних условиях",subtext:""},{year:2017,distance:.2,text:'Первые разработки собственных ЦОДов на базе морских контейнеров 40 ft"',subtext:""},{year:2018,distance:.28,text:"Общий объем эксплуатируемого оборудования более 10 мвт",subtext:""},{year:2021,distance:.34,text:'Создание ООО "Цифра Капитал Групп"',subtext:""},{year:2022,distance:.41,text:'Запуск 1го этапа строительства собственного ЦОДа "Башкирский".',subtext:""},{year:2023,distance:.5,text:"Завершение первого этапа строительства (потенциал 4 мгвт, +1000 ед. оборудования). Запуск площадки и размещение первых клиентов",subtext:""},{year:2024,distance:.6,text:"Загрузка ЦОДа ~ 70% , вступление в ассоциацию промышленного майнинга и в реестр Минцифры РФ",subtext:""},{year:2025,distance:.8,text:'Разработка 2го этапа по строительству собственного ЦОДа "Башкирский". Планируемая мощность ~ 50 мвт.',subtext:""},{year:2026,distance:1,text:'3й этап. Планируемая мощность ЦОДа "Башкирский" ~ 120 мвт',subtext:""}],numsBtns=".years__btn",currencyBtns=".currency__btn";$(currencyBtns).on("click",(function(){$(currencyBtns).removeClass("active"),$(this).addClass("active")})),gsap.registerPlugin(MotionPathPlugin,ScrollTrigger),scrollByPercent(0);var test=0;function scrollByPercent(e){var t=100*e,n=document.documentElement.scrollHeight*(t/100);window.scrollTo({top:n})}document.addEventListener("click",(function(){console.log(test)})),gsap.to("#green-line",{drawSVG:"0%",duration:0}),window.addEventListener("scroll",(function(e){var t=(document.documentElement.scrollTop||document.body.scrollTop)/((document.documentElement.scrollHeight||document.body.scrollHeight)-document.documentElement.clientHeight)*100;test=t.toFixed(1);var n=data.filter((function(e){return 100*e.distance<=t})),o=n[n.length-1];if(o){var r=data.indexOf(o);$(numsBtns).removeClass("active"),$(numsBtns).eq(r).addClass("active"),document.querySelector(".about-page-second__row div .text").textContent=o.text,document.querySelector(".about-page-second__row h5").textContent=o.year,document.querySelector(".about-page-second__row div .subtext").textContent=o.subtext}gsap.to("#green-line",{drawSVG:"".concat(t.toFixed(2),"%"),duration:.1})}));var yearsBtns=document.querySelectorAll(".years__btn"),yearsTitle=document.querySelector(".about-page-second__row h5");yearsBtns.forEach((function(e,t){e.addEventListener("click",(function(){data.forEach((function(e,n){t===n&&scrollByPercent(e.distance)}))}))}));
//# sourceMappingURL=about.js.map