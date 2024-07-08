const tabBtns = document.querySelectorAll('.services .tabs button');
const tabContent = document.querySelectorAll('.services .tabs-content');

// tabBtns.forEach(function (el, index) {
//   el.addEventListener('click', openTabs);
// });

// function openTabs(el, index) {
//   var btnTarget = el.pointerId;
//   console.log(index);
//    var country = btnTarget.dataset.country;

//    tabContent.forEach(function(el) {
//       el.classList.remove("active");
//    });

//    tabLinks.forEach(function(el) {
//       el.classList.remove("active");
//    });

//    document.querySelector("#" + country).classList.add("active");

//    btnTarget.classList.add("active");
// }

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
