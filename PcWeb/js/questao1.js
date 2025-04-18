const botao = document.querySelector("#q01-executar");

const r = document.querySelector("#q01-result");

function q01 () {
  let valor = parseInt(document.querySelector("#q01-dinheiro").value)
  let litros = valor/7;
  let corre = litros * 20;
  r.innerHTML += "Você abastecerá " + litros.toFixed(2) + " litros.<br>" + "Sua automomia é de " + corre.toFixed(2) + " quilômetros<br>";
}

botao.addEventListener("click", q01);
