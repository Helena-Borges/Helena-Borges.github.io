const botao = document.querySelector("#executar")
const r = document.querySelector("#resposta")

function at5 () {
    let frase = "O dia está claro"

    let procurar = document.querySelector("#procurar").value
    let substituir = document.querySelector("#substituir").value

    let palavras = frase.split(" ")
    let result = ""
    let cont = 0

    while (cont < palavras.length)
    {
        if (palavras[cont] === procurar)
        {
            result += substituir + " "
        }
        else {
            result += palavras[cont] += " "
        }
        cont++
    }
    r.innerHTML += result + "<br>"
}

botao.addEventListener("click", at5);