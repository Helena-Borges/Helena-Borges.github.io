const botao = document.querySelector("#executar")
const r = document.querySelector("#result")

function fatorial () {
    let n = parseInt(document.querySelector("#numero").value)
    let ninicial = n
    let result = 1
    while (n > 0)
    {
        result = result * n
        n--
    }
    r.innerHTML += "O fatorial de " + ninicial + " é " + result + ".<br>"
}

botao.addEventListener("click", fatorial);
