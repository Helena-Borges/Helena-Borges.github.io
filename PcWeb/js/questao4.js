const botao1 = document.querySelector("#nomeexe");
const botao2 = document.querySelector("#executar");

const r = document.querySelector("#resultado");
const n = document.querySelector("#resulnome");

let nomes = [];

function funcnome () {
    let nome = document.querySelector("#nome").value;

    if (nome !== "") {
        nomes.push(nome); // adiciona o nome ao array

        n.innerHTML = ""; // limpa antes de atualizar

        nomes.forEach((nomeItem) => {
            n.innerHTML += "<li>" + nomeItem + "</li><br>";
        });
    }

}

function resultado () {
    nomesInvertidos = [];
    r.innerHTML = ""; 

    nomes.forEach((nomeOriginal) => {
        let invertido = "";

        for (let i = nomeOriginal.length - 1; i >= 0; i--) {
            invertido += nomeOriginal[i];
        }

        nomesInvertidos.push(invertido); 
        r.innerHTML += "<li>" + invertido + "</li><br>"; 
    });
}

botao1.addEventListener("click", funcnome);
botao2.addEventListener("click", resultado);