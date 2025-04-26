const botao = document.querySelector("#botao");
const r = document.querySelector("#r");

function array3 () {
    let num = parseInt(document.querySelector("#num").value);
    let resul = "";
    let entrada = num;

    const romanos = [
        { valor: 1000, letra: "M" },
        { valor: 900, letra: "CM" },
        { valor: 500, letra: "D" },
        { valor: 400, letra: "CD" },
        { valor: 100, letra: "C" },
        { valor: 90, letra: "XC" },
        { valor: 50, letra: "L" },
        { valor: 40, letra: "XL" },
        { valor: 10, letra: "X" },
        { valor: 9, letra: "IX" },
        { valor: 5, letra: "V" },
        { valor: 4, letra: "IV" },
        { valor: 1, letra: "I" }
    ];

    for (let i = 0; i < romanos.length; i++) {
        while (num >= romanos[i].valor) {
            resul += romanos[i].letra;
            num -= romanos[i].valor;
        }
    }
    let html = "";
    html = "<tr><td>" + entrada + "</td><td>" + resul + "</td></tr>";
    r.innerHTML += html;
}

botao.addEventListener("click", array3);
