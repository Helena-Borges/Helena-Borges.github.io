const r = document.querySelector("#r");
const botao = document.querySelector("#botao");

function array1 () {
    let op = document.querySelector("#operacao").value;
    let nmax = parseInt(document.querySelector("#nmax").value);

    let html = "<tr>"

    if (op === 'sum') {
        let cont = 1;
        let numeros = [];
        html += "<td>Soma</td><td>(";
        while (cont <= nmax) {
            numeros.push(cont);
            html += cont + " ";
            cont++;
        } 
        html += ")</td>";
        cont = 1;
        let resultado = 0;
        while (cont <= nmax)  {
            resultado += cont;
            cont++;
        }
        html += "<td>" + resultado + "</td>";
    }

    if (op === 'sumodds') {
        let cont = 1;
        let numeros = [];
        html += "<td>Soma de ímpares</td><td>(";
        while (cont <= nmax) {
            numeros.push(cont);
            html += cont + " ";
            cont++;
        } 
        html += ")</td>";
        cont = 1;
        let resultado = 0;
        while (cont <= nmax)  {
            resultado += cont;
            cont += 2;
        }
        html += "<td>" + resultado + "</td>";
    }

    if (op === 'product') {
        let cont = 1;
        let numeros = [];
        html += "<td>Multiplicação</td><td>(";
        while (cont <= nmax) {
            numeros.push(cont);
            html += cont + " ";
            cont++;
        } 
        html += ")</td>";
        cont = 1;
        let resultado = 1;
        while (cont <= nmax)  {
            resultado *= cont;
            cont++;
        }
        html += "<td>" + resultado + "</td>";
    }
    html += "</tr>";
    document.querySelector("#r table").innerHTML += html;
}

botao.addEventListener("click", array1);
