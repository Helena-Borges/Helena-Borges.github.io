const botao = document.querySelector("#executar");
const r = document.querySelector("#resultado");

function q05 () {
    let palavra = document.querySelector("#palavra").value.toLowerCase();
    let palavra2 = palavra.split("");

    let tam = palavra.length;
    let tam2 = palavra.length;
    
    let cont = 0;
    let invertida = "";

    while (cont < tam) {
        invertida += palavra2[tam2 - 1];
        cont++;
        tam2--;
    }//funcionando
    
    let cont2  = 0;
    let palin = 0;
    tam2 = tam;
    
    while (cont2 < tam2) {
        if (palavra2[cont2] === invertida[cont2]) {
            palin++;
        }
        cont2++;
    }
    
    if (palin == tam) {
        r.innerHTML += "A palavra " + palavra + " é um palíndromo<br>";
    } else {
        r.innerHTML += "A palavra " + palavra + " não é um palíndromo<br>";
    }
}

botao.addEventListener("click", q05)