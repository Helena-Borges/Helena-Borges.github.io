const botao = document.querySelector("#executar")
const r = document.querySelector("#result")

function mm () {
    let palavra = document.querySelector("#palavra").value
    let letra = document.querySelector("#letra").value
    rep(palavra, letra)
}
function rep (a, b) {
    let cont = 0;
    let tam = a.length
    let result = 0
    
    while (cont < tam)
    {
        let letra2 = a[cont]
        if (letra2 == b)
        {
            result++
            cont++
        }
        else {
            cont++;
        }
    }
    r.innerHTML += "A letra " + b + " foi repetida " + result + " vezes."  + "<br>"
}
botao.addEventListener("click", mm);
