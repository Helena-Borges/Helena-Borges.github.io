const botao = document.querySelector("#executar")
const r = document.querySelector("#result")

function fatorial () {
    let palavra = document.querySelector("#palavra").value;
    let tam = palavra.length;
    r.innerHTML += tam + "<br>";
}

botao.addEventListener("click", fatorial);
