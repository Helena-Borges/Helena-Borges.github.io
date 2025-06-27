const botao = document.querySelector("#botao");
const r = document.querySelector("#result");

const usuarios = [
  { nome: 'Alice', idade: 25, ativo: true },
  { nome: 'Bob', idade: 17, ativo: true },
  { nome: 'Carol', idade: 30, ativo: false },
  { nome: 'Daniel', idade: 22, ativo: true },
];

function funcao () {
    r.innerHTML = "";
    
    let filtrados = usuarios.filter(function(usu) {
        return usu['ativo'] === true && usu['idade'] >= 18;
    });

    let resultado = filtrados.map(function(x) {
        return {nome: x['nome'].toUpperCase(), idade: x['idade']};
    });

    resultado.forEach(function(y) {
        r.innerHTML += "<table><tr><td>" + y['nome'] + "</td><td>" + y['idade'] +"</td></tr><table>";
    });
}

botao.addEventListener("click", funcao);