const botao = document.querySelector("#executar");
const r = document.querySelector("#resultado");

function q03 () {
    let cont = 0;
    let x = 0;
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;
    let n5 = 0;
    let n6 = 0;
    while (cont < 1000000) {
        x = Math.floor(Math.random() * 6) + 1;
        if (x == 1) {
            n1++;
        } else if (x == 2) {
            n2++;
        } else if (x == 3) {
            n3++;
        } else if (x == 4) {
            n4++;
        } else if (x == 5) {
            n5++;
        } else if (x == 6) {
            n6++;
        }
        cont++;
    }
    let p1 = (n1/1000000) * 100;
    let p2 = (n2/1000000) * 100;
    let p3 = (n3/1000000) * 100;
    let p4 = (n4/1000000) * 100;
    let p5 = (n5/1000000) * 100;
    let p6 = (n6/1000000) * 100;
    r.innerHTML += "<h2>Resultado</h2>" + "<table border=\"1px\"><tr><th>Face</th><th>Ocorrências</th><th>Frequência</th></tr><tr><td>1</td><td>" + n1 + "</td>" + "<td>" + p1.toFixed(2) + "%</td></tr><tr><td>2</td><td>" + n2 + "</td><td>" + p2.toFixed(2) + "%</td></tr><tr><td>3</td><td>" + n3 + "</td><td>" + p3.toFixed(2) + "%</td></tr><tr><td>4</td><td>" + n4 + "</td><td>" + p4.toFixed(2) + "%</td></tr><tr><td>5</td><td>" + n5 + "</td><td>" + p5.toFixed(2) + "%</td></tr><tr><td>6</td><td>" + n6 + "</td><td>" + p6.toFixed(2) + "%</td></tr></table>";
}

botao.addEventListener("click", q03);