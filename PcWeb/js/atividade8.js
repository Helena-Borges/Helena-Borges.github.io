const botao = document.querySelector("#executar")
const r = document.querySelector("#resultado")

function at8 () {
    let frase = document.querySelector("#frase").value
    let letra = frase.toLowerCase().split("")
    let resultado = ""
    let cont = 0

    while (letra.length > cont)
    {
        switch (letra[cont])
        {
            case "t": resultado += "p"; break;
            case "p": resultado += "t"; break;
            case "e": resultado += "o"; break;
            case "o": resultado += "e"; break;
            case "n": resultado += "l"; break;
            case "l": resultado += "n"; break;
            case "i": resultado += "a"; break;
            case "a": resultado += "i"; break;
            case "s": resultado += "r"; break;
            case "r": resultado += "s"; break;
            default: resultado += letra[cont]; break;
        }
        cont++
    }
    r.innerHTML += resultado + "<br>"
}

botao.addEventListener("click", at8)