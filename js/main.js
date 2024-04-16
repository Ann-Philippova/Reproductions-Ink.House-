// Добавьте активный класс к текущей кнопке (выделите его)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

   // Подключаем MixItUp
   let mixBlockEl = document.querySelector('#mix-cards');

   let mixer = mixitup(mixBlockEl, {
       classNames: {
           block: ""
       }
   });

   // при разрешении меньше 768 сбрасываем настройки и показываем все карточки
   window.addEventListener('resize', function(){
       if (document.documentElement.clientWidth < 768) {
           mixer.show()
           .then(function(state) {
               console.log(state.totalShow === state.totalTargets); // true
           });
       }
   });

/* ================= MOBILE NAV ========================= */
const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavButton.addEventListener('click', function () {
	mobileNavIcon.classList.toggle('active');
	mobileNav.classList.toggle('active');
	document.body.classList.toggle('no-scroll');
});