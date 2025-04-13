const botao = document.querySelector("#executar");
const r = document.querySelector("#resultado1");

function est () {
    let frase = document.querySelector("#frase").value.trim();

    let palavras = frase.toLowerCase().split(" ");

    let contagem = {};
    for (let palavra of palavras) {
        contagem[palavra] = (contagem[palavra] || 0) + 1;
    }

    let maisRepetida = "";
    let max = 0;
    for (let palavra in contagem) {
        if (contagem[palavra] > max) {
            max = contagem[palavra];
            maisRepetida = palavra;
        }
    }

    let totalPalavras = palavras.length;

    let totalLetras = palavras.join("").length;

    r.innerHTML += "A palavra mais repetida é \"" + maisRepetida + "\" ela foi repetida " + max + " vezes.<br>";
    r.innerHTML += "Quantidade de palavras: " + totalPalavras + ".<br>";
    r.innerHTML += "Quantidade de letras: " + totalLetras + ".<br>";
}

botao.addEventListener("click", est);