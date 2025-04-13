const botao = document.querySelector("#executar");

const getValue = seletorDom => document.querySelector(seletorDom).value

const imprimir = (texto, seletor) => {
    document.querySelector(seletor).innerHTML += texto + "<br>"
};

function separarPalavras() {
    const frase = getValue("#frase")
    const palavras = frase.split(" ")

    let contador = {};

    palavras.forEach(palavra => {
        if (contador[palavra]) {
            contador[palavra] += 1 
        } else {
            contador[palavra] = 1
        }
    });

    for (let palavra in contador) {
        imprimir(`Palavra: ${palavra} - Repetições: ${contador[palavra]}`, "#resultado1");
    }
}

botao.addEventListener("click", separarPalavras);