const reiniciar = document.querySelector("#reiniciar");
const enviar = document.querySelector("#enviar");
const r = document.querySelector("#rpalavra");
const erro = document.querySelector("#erros");

const palavras = [
    "amor", "bola", "casa", "dente", "elefante", "festa", "gato", "homem", "igreja", "jogo",
    "lua", "mundo", "nuvem", "olho", "peixe", "quadro", "rio", "sol", "tigre", "urso",
    "vaca", "xadrez", "yoga", "zebra", "pao", "livro", "computador", "trabalho", "jardim", "caminho",
    "agua", "flor", "arvore", "carro", "janela", "papel", "teclado", "chave", "prato", "cabelo",
    "corte", "voo", "aviao", "mesa", "cadeira", "copo", "telefone", "notebook", "computacao"
  ];

  let palavra = [];  
  let certa = "";  
  let erros = 0;
  let acertos = 0;

function reinicie () {
    r.innerHTML = "";
    erro.innerHTML = "";

    let i = Math.floor(Math.random() * palavras.length);
    certa = palavras[i];
    palavra = [];

    for (let x = 0; certa.length > x; x++) {
        palavra[x] = "_ ";
    }

    for (let y = 0; palavra.length > y; y++) {
        r.innerHTML += palavra[y];
    }

    acertos = 0;
}

function chute () {

    r.innerHTML = "";
    let letra = document.querySelector("#letra").value;

    erros = 0;

    for (let z = 0; certa.length > z; z++) {
        if (certa[z] === letra) {
            palavra[z] = letra;
            acertos++;
        } else {
            erros++;
        }
    }

    if (erros % certa.length == 0) {
        erro.innerHTML += " " + letra + " ";
    }

    for (let w = 0; palavra.length > w; w++) {
        r.innerHTML += palavra[w];
    }

    if (acertos == certa.length) {
        r.innerHTML = "Você Ganhou!";
        erro.innerHTML = "";
    }
}

reiniciar.addEventListener("click", reinicie);
enviar.addEventListener("click", chute);