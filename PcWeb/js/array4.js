const botao = document.querySelector("#botao");
const r = document.querySelector("#r");

function array4 () {
    let num = parseInt(document.querySelector("#num").value);

    let html = "";
    
    const valores = [100, 50, 20, 10, 2];

    for (let i = 0; i < valores.length; i++) {
        let val = valores[i];
        let rep = 0;
        while (num >= val) {
            rep++;
            num -= val;
        }
        if (rep > 0) {
            html += "<tr><td>" + val + "</td><td>" + rep + "</td></tr>";
        }
    }
    r.innerHTML += html;
}

botao.addEventListener("click", array4);
