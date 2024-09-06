"use strict";var burger=document.querySelector(".burger"),menu=document.querySelector(".menu"),inputsPhone=document.querySelectorAll("[type='tel']");$(".equipment-page__content .buy").on("click",(function(){$(".modal").toggleClass("active"),$("body").toggleClass("isLock");var e=$(this).parents(".equipment-page__content").find("h3").text(),t=$(this).parents(".equipment-page__info").find(".equipment-page__bottom span").text(),n=$(this).parents(".equipment-page__content").find(".btns button.active").text();console.log(n),$(".productName input").attr("value","".concat(e," - ").concat(n)),$(".productPrice input").attr("value","".concat(t))})),$(".modal__close").on("click",(function(){$(".modal").toggleClass("active"),$("body").toggleClass("isLock")})),inputsPhone.forEach((function(e){window.intlTelInput(e,{utilsScript:"https://cdn.jsdelivr.net/npm/intl-tel-input@24.1.1/build/js/utils.js",initialCountry:"ru",useFullscreenPopup:!1,separateDialCode:!0})}));var equipmentTabs=document.querySelectorAll(".equipment-page .btns button"),equipmentTabsContent=document.querySelectorAll(".equipment-page .equipment-page__info"),minerBtns=document.querySelectorAll(".equipment-page .btns button");$(".btns button").on("click",(function(){var e=$(this).attr("data-id");$(this).siblings().removeClass("active"),$(this).addClass("active"),$(this).parents(".equipment-page__content").find(".equipment-page__info").removeClass("active"),$(this).parents(".equipment-page__content").find(".equipment-page__info[data-id=".concat(e,"]")).addClass("active")}));var btnMinus=document.querySelector(".modal .counter .btn-minus"),btnPlus=document.querySelector(".modal .counter .btn-plus"),inputNumber=document.querySelector(".modal .counter input");function setEquipment(){var e=document.getElementById("equipment").options[document.getElementById("equipment").selectedIndex],t=e.getAttribute("data-consumption"),n=e.getAttribute("data-hashrate");console.log(t,n),document.getElementById("consumption").value=t,document.getElementById("hashrate").value=n}function updateResultTable(e){document.getElementById("dayIncome").innerHTML="".concat(e.income.day," ").concat(e.currency.name),document.getElementById("weekIncome").innerHTML="".concat(e.income.week," ").concat(e.currency.name),document.getElementById("monthIncome").innerHTML="".concat(e.income.month," ").concat(e.currency.name),document.getElementById("dayOutGo").innerHTML="".concat(e.outgo.day," ").concat(e.currency.name),document.getElementById("weekOutGo").innerHTML="".concat(e.outgo.week," ").concat(e.currency.name),document.getElementById("monthOutGo").innerHTML="".concat(e.outgo.month," ").concat(e.currency.name),document.getElementById("monthProfit").innerHTML="Прибыль в месяц: ".concat(e.monthProfit," ").concat(e.currency.name)}function calcResult(){var e=document.querySelector(".currency__btn.active").getAttribute("data-rateUSD"),t=document.querySelector(".currency__btn.active").getAttribute("data-sign"),n=parseFloat(document.getElementById("commission").value),o=calcIncome()*e,c=Math.round(100*(o+o*n/100))/100,u=Math.round(7*c*100)/100,a=Math.round(30*c*100)/100,i=Math.round(calcOutGo()*e*100)/100,r=Math.round(7*i*100)/100,l=Math.round(30*i*100)/100;updateResultTable({currency:{name:t},income:{day:c,week:u,month:a},outgo:{day:i,week:r,month:l},monthProfit:Math.round(100*(a-l))/100})}function calcOutGo(){return parseFloat(document.getElementById("consumption").value)/1e3*parseFloat(document.getElementById("electricityCost").value)}function calcIncome(){return calcDailyIncomeTH_s_usdt()*parseFloat(document.getElementById("hashrate").value)}function calcDailyIncomeTH_s_usdt(){var e=parseFloat(document.getElementById("difficulty").value),t=parseFloat(document.getElementById("blockReward").value),n=parseFloat(document.getElementById("hashrate_s").value),o=parseFloat(document.getElementById("rateBTC").value),c=BigInt(86400*t*n),u=BigInt(e*Math.pow(2,32)),a=(Number(c)/Number(u)).toFixed(8);return console.log(a),Number(a*o)}btnMinus.addEventListener("click",(function(){inputNumber.value>1&&inputNumber.value--})),btnPlus.addEventListener("click",(function(){inputNumber.value++,console.log(inputNumber.value)})),AOS.init({duration:1200});
//# sourceMappingURL=equipment.js.map