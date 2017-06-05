//EFECTO SCROLL DEL NAV
/* Código de Liliana Kastilio: https://codepen.io/lili2311/pen/dJjuL< */
window.addEventListener('scroll', function () {
   const distanceY = window.pageYOffset || document.documentElement.scrollTop,
   shrinkOn = 100,
   navElem = document.getElementById('nav-js');
   signUp = document.getElementById('sign-up');
   logo = document.getElementById('logo-nav');

   if (distanceY > shrinkOn) {
     navElem.classList.add("nav-color");
     signUp.classList.add("show-sign-up");
     logo.src = "assets/images/logo-pink.png";
   } else {
     navElem.classList.remove("nav-color");
     signUp.classList.remove("show-sign-up");
     logo.src = "assets/images/logo-white.png";
   }
 });

 document.getElementById('input-phone').addEventListener('click', function(){
   var input = Array.from(document.getElementsByClassName('input'));
   input.forEach(function(el){
     el.classList.remove('hidden');
   });
 });
