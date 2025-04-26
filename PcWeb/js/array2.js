const r = document.querySelector("#r");
const botao = document.querySelector("#botao");

function array2 () {
    let html = "<tr>";

    let numeros = document.querySelector("#num").value;
    let numero = numeros.split("/");

    if (numero.length == 1) {
        let num = numero[0];
        let cont = 2;
        let qtd = 0;
        let div = 1;
        let resultado = [];

        html += "<td>" + num + "</td>";

        while (qtd <= num) {
            if (cont == 2 || cont == 3 || cont == 5 || cont == 7) {
                resultado.push(cont);
                qtd++;
            } else if (cont % 2 != 0 && cont % 3 != 0 && cont % 5 != 0 && cont % 7 != 0) {
                resultado.push(cont);
                qtd++;
            }
            cont++;
        }
        html += "<td>"
        
        for (let i = 0; i < resultado.length; i++) {
            html += resultado[i] + " ";
        }

        html += "</td></tr>";
        document.querySelector("#r table").innerHTML += html;
    } 
    
    else if (numero.length == 2) {
        let min = parseInt(numero[0]);
        let max = parseInt(numero[1]);
        cont = min;
        let qtd = 0;
        let resultado = [];

        html += "<td>" + min + " a " + max + "</td>";

        while (cont <= max) {
            if (cont == 1) {

            } else if (cont == 2 || cont == 3 || cont == 5 || cont == 7) {
                resultado.push(cont);
            } else if (cont % 2 != 0 && cont % 3 != 0 && cont % 5 != 0 && cont % 7 != 0) {
                resultado.push(cont);
                qtd++;
            }
            cont++;
        }

        html += "<td>"

        for (let i = 0; i < resultado.length; i++) {
            html += resultado[i] + " ";
        }

        html += "</td></tr>";
        document.querySelector("#r table").innerHTML += html;
    }
}

botao.addEventListener("click", array2);