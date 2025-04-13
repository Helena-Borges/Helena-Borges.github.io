const botao = document.querySelector("#executar")
const r = document.querySelector("#resultado")

function at7 () {
    let frase = document.querySelector("#frase").value
    let letra = frase.toLowerCase().split("")
    let cont = 0
    let fraca = 0
    let moderada = 0
    let forte = 0

    let minusculas = "abcdefghijklmnopqrstuvwxyz";
    let maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numeros = "0123456789";
    let especiais = "@#!$%&*()-+=.";

    while (cont < letra.length) {
        if (minusculas.includes(letra[cont]) || maiusculas.includes(letra[cont])) {
            fraca = fraca + 1
        }
        if (numeros.includes(letra[cont])) {
            moderada = moderada + 1
        }
        if (especiais.includes(letra[cont])) {
            forte = forte + 1
        }
        cont++
    }
        if (forte != 0) {
            r.innerHTML += "<h3>Forte</h3>"
        } else if (moderada != 0) {
            r.innerHTML += "<h4>Moderada</h4>"
        } else if (fraca != 0){
            r.innerHTML += "<h5>Fraca</h5>"
        }
}

botao.addEventListener("click", at7)