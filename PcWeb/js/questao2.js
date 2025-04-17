const botao = document.querySelector("#executar");

const r = document.querySelector("#result");

function q02 () {
  let peso = parseFloat(document.querySelector("#peso").value);
  let altura = parseFloat(document.querySelector("#altura").value);
  let imc = peso/(altura ** 2);
  r.innerHTML += "Seu IMC é " + imc + "<br>";

  if (imc < 18.5) {
    r.innerHTML += "Você está abaixo do peso<br>";
  } else if (imc <= 24.9) {
    r.innerHTML += "Você está com peso normal<br>";
  } else if (imc <= 29.9) {
    r.innerHTML += "Você está levemente acima do peso<br>";
  } else if (imc <- 34.9) {
    r.innerHTML += "Você está com Obesidade grau I<br>";
  } else if (imc <- 39.9) {
    r.innerHTML += "Você está com Obesidade grau II (severa)<br>";
  } else if (imc > 40) {
    r.innerHTML += "Você está com Obesidade grau III (mórbida)<br>";
  }
}

botao.addEventListener("click", q02);
