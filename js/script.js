const inputEl = document.querySelector('#email');
const btn = document.querySelector('#submit');
const RegEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const iconErrorEl = document.querySelector('.iconoX');
const textErrorEl = document.querySelector('.textoX');
const fromGroupEl = document.querySelector('.formulario');
let errors = [];

btn.addEventListener('click', e => {
  // remove success class
  textErrorEl.classList.remove('registro-correcto');

  // reset errors
  errors = [];
  // prevent default action of form
  e.preventDefault();
  // validate email address
  const email = inputEl.value;

  if (email == '' || email === undefined) {
    errors.push('Por Favor Ingresa tu Correo...');
    // show error
    iconErrorEl.style.display = 'block';
    textErrorEl.innerText = errors[0];
  } else if (!email.match(RegEmail)) {
    errors.push('Por Favor Ingresa un Correo Correcto...');
    // show error icon
    iconErrorEl.style.display = 'block';
    textErrorEl.innerText = errors[0];
  }

  if (!errors.length > 0) {
    // hide error icon
    iconErrorEl.style.display = 'none';
    textErrorEl.classList.add('registro-correcto');
    textErrorEl.innerText = 'Gracias por subscribirte !!!';
  }
});
