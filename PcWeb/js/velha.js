const botao = document.querySelector("#botao");
const r = document.querySelector("#r");
const btnreiniciar = document.querySelector("#btnreiniciar");

let ocupado = [];
let tabuleiro = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

function sortear () {
    return Math.floor(Math.random() * 9);

}

function computador () {
    let n = sortear();
    if (ocupado.includes(n)) {
        while (ocupado.includes(n)) {
            n = sortear();
        }
    }
    
    ocupado.push(n);
    tabuleiro[n] = "X";
    r.innerHTML = "<table><tr><td>" + tabuleiro[0] + "</td><td>" + tabuleiro[1] + "</td><td>" + tabuleiro[2] + "</td></tr><tr><td>" + tabuleiro[3] + "</td><td>" + tabuleiro[4] + "</td><td>" + tabuleiro[5] + "</td></tr><tr><td>" + tabuleiro[6] + "</td><td>" + tabuleiro[7] + "</td><td>" + tabuleiro[8] + "</td></tr></table>";

    if (tabuleiro[0] === "X" && tabuleiro[1] === "X" && tabuleiro[2] === "X" || 
        tabuleiro[3] === "X" && tabuleiro[4] === "X" && tabuleiro[5] === "X" ||
        tabuleiro[6] === "X" && tabuleiro[7] === "X" && tabuleiro[8] === "X" ||
        tabuleiro[0] === "X" && tabuleiro[4] === "X" && tabuleiro[8] === "X" ||
        tabuleiro[2] === "X" && tabuleiro[4] === "X" && tabuleiro[6] === "X" ||
        tabuleiro[0] === "X" && tabuleiro[3] === "X" && tabuleiro[6] === "X" ||
        tabuleiro[1] === "X" && tabuleiro[4] === "X" && tabuleiro[7] === "X" ||
        tabuleiro[2] === "X" && tabuleiro[5] === "X" && tabuleiro[8] === "X") {
        r.innerHTML = "Você Ganhou!";
    }
}

function usuario () {
    let caixa = parseInt(document.querySelector("#caixa").value);

    if (ocupado.includes(caixa)) {
        alert("Essa posição já está ocupada!");
        return;
    }

    ocupado.push(parseInt(caixa));

    tabuleiro[caixa] = "O";

    r.innerHTML = "<table><tr><td>" + tabuleiro[0] + "</td><td>" + tabuleiro[1] + "</td><td>" + tabuleiro[2] + "</td></tr><tr><td>" + tabuleiro[3] + "</td><td>" + tabuleiro[4] + "</td><td>" + tabuleiro[5] + "</td></tr><tr><td>" + tabuleiro[6] + "</td><td>" + tabuleiro[7] + "</td><td>" + tabuleiro[8] + "</td></tr></table>";

    if (tabuleiro[0] === "O" && tabuleiro[1] === "O" && tabuleiro[2] === "O" || 
        tabuleiro[3] === "O" && tabuleiro[4] === "O" && tabuleiro[5] === "O" ||
        tabuleiro[6] === "O" && tabuleiro[7] === "O" && tabuleiro[8] === "O" ||
        tabuleiro[0] === "O" && tabuleiro[4] === "O" && tabuleiro[8] === "O" ||
        tabuleiro[2] === "O" && tabuleiro[4] === "O" && tabuleiro[6] === "O" ||
        tabuleiro[0] === "O" && tabuleiro[3] === "O" && tabuleiro[6] === "O" ||
        tabuleiro[1] === "O" && tabuleiro[4] === "O" && tabuleiro[7] === "O" ||
        tabuleiro[2] === "O" && tabuleiro[5] === "O" && tabuleiro[8] === "O") {
        r.innerHTML = "Você Ganhou!";
    } else {
        document.querySelector("#caixa").value = "";
        computador();
    }
}

function reiniciar() {
    tabuleiro = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    ocupado = [];
    r.innerHTML = "<table><tr><td>" + tabuleiro[0] + "</td><td>" + tabuleiro[1] + "</td><td>" + tabuleiro[2] + "</td></tr><tr><td>" + tabuleiro[3] + "</td><td>" + tabuleiro[4] + "</td><td>" + tabuleiro[5] + "</td></tr><tr><td>" + tabuleiro[6] + "</td><td>" + tabuleiro[7] + "</td><td>" + tabuleiro[8] + "</td></tr></table>";
    document.querySelector("#caixa").value = "";
}

botao.addEventListener("click", usuario);
btnreiniciar.addEventListener("click", reiniciar);