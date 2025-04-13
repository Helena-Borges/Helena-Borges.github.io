const botao = document.querySelector("#executar")
const r = document.querySelector("#resultado")

function diasDeVida() {
    let dataNascimentoStr = document.querySelector("#data").value
    let partes = dataNascimentoStr.split("/")
    let nascimento = new Date(partes[2], partes[1] - 1, partes[0]) // ano, mês (0-index), dia

    let hoje = new Date()

    let diferencaMs = hoje - nascimento

    let dias = Math.floor(diferencaMs / (1000 * 60 * 60 * 24))

    r.innerHTML += dias + " dias de vida<br>"
}

botao.addEventListener("click", diasDeVida)