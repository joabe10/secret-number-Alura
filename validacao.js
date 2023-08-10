function verificarSeOChutePossuiUmValorValido(chute) {
    const numero =+ chute
    if (numeroInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido. Tente falar um número.</div>'
    }

    if (valoresPermitidos(numero)) {
        elementoChute.innerHTML += '<div>ERRO. Digite um número dentro dos parâmetros estipulados.</div>'
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        `
    }
}
function numeroInvalido(numero){
    return Number.isNaN(numero)
}

function valoresPermitidos(numero) {
    return numero > maiorValor || numero < menorValor
}
