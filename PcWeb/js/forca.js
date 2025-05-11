const reiniciar = document.querySelector("#reiniciar");
const enviar = document.querySelector("#enviar");
const r = document.querySelector("#rpalavra");
const erro = document.querySelector("#erros");

const palavras = [
    "amor", "feliz", "escola", "livro", "pessoa", "sorriso", "casa", 
    "mundo", "cidade", "familia", "carro", "cachorro", "pessoa", "praia", 
    "jogo", "musica", "amigo", "gato", "trabalho", "chocolate"
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