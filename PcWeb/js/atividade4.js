const botao = document.querySelector("#executar");
const r = document.querySelector("#resultado1");

function est () {
    let frase = document.querySelector("#frase").value.trim();

    // 1. Divide a frase em palavras
    let palavras = frase.toLowerCase().split(" ");

    // 2. Conta repetições
    let contagem = {};
    for (let palavra of palavras) {
        contagem[palavra] = (contagem[palavra] || 0) + 1;
    }

    // 3. Encontra a palavra mais frequente
    let maisRepetida = "";
    let max = 0;
    for (let palavra in contagem) {
        if (contagem[palavra] > max) {
            max = contagem[palavra];
            maisRepetida = palavra;
        }
    }

    // 4. Conta total de palavras
    let totalPalavras = palavras.length;

    // 5. Conta total de letras (sem espaços)
    let totalLetras = palavras.join("").length;

    // 6. Exibe o resultado
    r.innerHTML += "A palavra mais repetida é \"" + maisRepetida + "\" ela foi repetida " + max + " vezes.<br>";
    r.innerHTML += "Quantidade de palavras: " + totalPalavras + ".<br>";
    r.innerHTML += "Quantidade de letras: " + totalLetras + ".<br>";
}

botao.addEventListener("click", est);