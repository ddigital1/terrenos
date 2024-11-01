

const $form = document.querySelector('#form');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const phone = '524448482650';
//const phone = '524445760050';


$form.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true

    setTimeout(() => {
        let name = document.querySelector('#name').value
        let lastname = document.querySelector('#lastname').value
        let email = document.querySelector('#email').value
		let date = document.querySelector('#date').value
		let asunto = document.querySelector('#asunto').value
        let message = 'send?phone=' + phone + '&text=*Cita de concepto inmobiliario*%0A%0A*Nombre:*%0A' + name + '%0A*Apellidos:*%0A' + lastname + '%0A*Correo:*%0A' + email + '%0A*Dia y Hora Propuesta:*%0A' + date + '%0A*Detalles de la cita:*%0A' + asunto + ''


        if (isMobile()) {
            window.open(urlMobile + message, )
        } else {
            window.open(urlDesktop + message, )
        }

        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false

    }, 4000);

});
