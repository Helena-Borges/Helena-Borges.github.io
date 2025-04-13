const botao = document.querySelector("#executar");
const r = document.querySelector("#resultado");

function at10() {
    let data1Str = document.querySelector("#data1").value;
    let data2Str = document.querySelector("#data2").value;

    let partes1 = data1Str.split("/");
    let partes2 = data2Str.split("/");

    let d1 = new Date(partes1[2], partes1[1] - 1, partes1[0]);
    let d2 = new Date(partes2[2], partes2[1] - 1, partes2[0]);

    let diffMs = Math.abs(d2 - d1);

    let semanas = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 7));

    r.innerHTML = "Resultado " + semanas + " semanas";
}

botao.addEventListener("click", at10)
