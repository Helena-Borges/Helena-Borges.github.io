const botao = document.querySelector("#executar")
const r = document.querySelector("#resposta")

function at6 () {
    let data = document.querySelector("#data").value
    let data2 = data.split("/")
    r.innerHTML += data2[0] + " de "

    switch (data2[1]) {
        case "01": r.innerHTML += "janeiro "; break;
        case "02": r.innerHTML += "fevereiro "; break;
        case "03": r.innerHTML += "março "; break;
        case "04": r.innerHTML += "abril "; break;
        case "05": r.innerHTML += "maio "; break;
        case "06": r.innerHTML += "junho "; break;
        case "07": r.innerHTML += "julho "; break;
        case "08": r.innerHTML += "agosto "; break;
        case "09": r.innerHTML += "setembro "; break;
        case "10": r.innerHTML += "outubro "; break;
        case "11": r.innerHTML += "novembro "; break;
        case "12": r.innerHTML += "dezembro "; break;
        default: r.innerHTML += "mês inválido "; break;
    }
    r.innerHTML += data2[2] + "<br>"
}

botao.addEventListener("click", at6)