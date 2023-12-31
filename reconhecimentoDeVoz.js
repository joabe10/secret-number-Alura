const elementoChute = document.getElementById('chute')
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new webkitSpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeElementoChute(chute) 
    verificarSeOChutePossuiUmValorValido(chute)
}

function exibeElementoChute(chute) {
    elementoChute.innerHTML = `
    <div>Você disse </div>
    <span class="box">${chute}</span>
    <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
    `
}

