const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  apellidos: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
	fecha_nacimiento: /^.{4,12}$/, // 4 a 12 digitos.
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
}

const campos = {
	usuario: false,
	nombre: false,
	fecha_nacimiento: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellidos":
			validarCampo(expresiones.apellidos, e.target, 'apellidos');
		break;
		case "fecha_nacimiento":
			validarCampo(expresiones.fecha_nacimiento, e.target, 'fecha_nacimiento');
			validarPassword2();
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('glyphicon glyphicon-remove');
		document.querySelector(`#grupo__${campo} i`).classList.remove('glyphicon glyphicon-remove');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.nombre && campos.apellidos && campos.fecha_nacimiento && campos.telefono && campos.direccion_postal ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 8000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});



 /*probando otro tipo de validación con ventana emergente*/
  function validateForm() {
        let formulario_validacion = document.forms["formulario"]["nombre"].value;
        if (formulario_validacion == "") {
          alert("El nombre debe de ser llenado correctamente");
          return false;
        }
      }
    
        
      function validateForm() {
        let formulario_validacion = document.forms["formulario"]["apellidos"].value;
        if (formulario_validacion == "") {
          alert("El apellido debe de ser llenado correctamente");
          return false;
        }
      }
    
      function validateForm() {
        let formulario_validacion = document.forms["formulario"]["fecha_nacimiento"].value;
        if (formulario_validacion == "") {
          alert("La fecha de nacimiento debe de ser llenado correctamente");
          return false;
        }
      }
   
    
      function validateForm() {
        let formulario_validacion = document.forms["formulario"]["direccion_postal"].value;
        if (formulario_validacion == "") {
          alert("La dirección postal debe de ser llenado correctamente");
          return false;
        }
      }
    
      function validateForm() {
        let formulario_validacion = document.forms["formulario"]["telefono"].value;
        if (formulario_validacion == "") {
          alert("El teléfono debe de ser llenado correctamente");
          return false;
        }
      }
    