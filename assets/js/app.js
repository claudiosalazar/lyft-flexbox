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

//INPUT OCULTOS
 document.getElementById('input-phone').addEventListener('click', function(){
   var input = Array.from(document.getElementsByClassName('input'));
   input.forEach(function(el){
     el.classList.remove('hidden');
   });
 });

//VALIDACIONES
 (function validateForm(){
	document.getElementById('driver-btn').addEventListener('click', function(event) {
		event.preventDefault();
	  // Eliminar span de validaciones anteriores
		document.querySelectorAll(".form-input span").forEach(function(span) {span.remove()});
	  // Input value
    var phone = document.getElementById('input-phone').value;
		var name = document.getElementById('input-name').value;
		var email = document.getElementById('input-email').value;
		var city = document.getElementById('input-city').value;
		var validaciones = true;

	   // Caracteres validos
		var validName = /^[A-Za-z]*/;
		var validPhone = /^56(?=[1-9]\d{0,2}[1-9])(?=\d{2,15}$)\d+$/;
		var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  ///// TELÉFONO
    // Verificación campo obligatorio
    if (phone === "") {
      document.getElementsByClassName('form-input')[2].appendChild(labelErr());
      document.getElementsByClassName('form-input')[2].classList.add('error');
      console.log("Phone: " + phone);
      validaciones = validaciones && false;
        }
    // Verificación campo obligatorio
    else if(!validPhone.test(phone)) {
      document.getElementsByClassName('form-input')[2].appendChild(labelErr());
      document.getElementsByClassName('form-input')[2].classList.add('error');
      console.log("Teléfono: " + phone + ". Tiene caracteres no permitidos.");
      validaciones = validaciones && false;
    }
    // Print
    else {
      console.log("Teléfono: " + phone);
      validaciones = validaciones && true;
    }

  ///// NOMBRE
		// Verificación campo obligatorio
		if (name === "") {
			document.getElementsByClassName('form-input')[0].appendChild(labelErr());
			document.getElementsByClassName('form-input')[0].classList.add('error');
			console.log("Nombre:" + name);
			validaciones = validaciones && false;
		} else {
		// Print
			console.log("Nombre:" + name);
			validaciones = validaciones && true;
		}

	///// EMAIL
		// Verificación campo obligatorio
		if (email === "") {
			document.getElementsByClassName('form-input')[1].appendChild(labelErr());
			document.getElementsByClassName('form-input')[1].classList.add('error');
			console.log("Correo: " + email);
			validaciones = validaciones && false;
		}
		// Verificación caracteres requeridos
		else if(!validEmail.test(email)) {
			document.getElementsByClassName('form-input')[1].appendChild(labelErr());
			document.getElementsByClassName('form-input')[1].classList.add('error');
			console.log("Correo: " + email + ". Tiene caracteres no permitidos.");
			validaciones = validaciones && false;
		}
		// Print
		else {
			console.log("Correo: " + email);
			validaciones = validaciones && true;
		}

	///// CIUDAD
		// Verificación campo obligatorio
		if (city === "") {
			document.getElementsByClassName('form-input')[3].appendChild(labelErr());
			document.getElementsByClassName('form-input')[3].classList.add('error');
			console.log("Ciudad:" + city);
			validaciones = validaciones && false;
		} else {
		// Print
			console.log("Ciudad:" + city);
			validaciones = validaciones && true;
		}

	///// VACIAR CAMPOS
		if (validaciones == true) {
			document.getElementById('name').value = "";
			document.getElementById('email').value = "";
			document.getElementById('phone').value = "";
			document.getElementById('city').value = "";
		}

		function labelErr() {
			var labelError = document.createElement('span');
			labelError.innerHTML = '<i class="fa fa-times-circle" aria-hidden="true"></i>';
			labelError.classList.add('label', 'error');
			return labelError;
		}
	});
})();
