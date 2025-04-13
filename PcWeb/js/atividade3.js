const botao = document.querySelector("#executar");

const getValue = seletorDom => document.querySelector(seletorDom).value;

const imprimir = (texto, seletor) => {
    document.querySelector(seletor).innerHTML += texto + "<br>"; // Agora vai adicionar a informação sem sobrescrever
};

function separarPalavras() {
    const frase = getValue("#frase"); // Obtém a frase do input
    const palavras = frase.split(" "); // Divide a frase em palavras

    // Criar um objeto para contar as repetições
    let contador = {};

    // Contar as palavras
    palavras.forEach(palavra => {
        if (contador[palavra]) {
            contador[palavra] += 1; // Se a palavra já existe no objeto, incrementa o contador
        } else {
            contador[palavra] = 1; // Se a palavra não existe no objeto, cria com valor 1
        }
    });

    // Imprimir os resultados na tabela
    for (let palavra in contador) {
        imprimir(`Palavra: ${palavra} - Repetições: ${contador[palavra]}`, "#resultado1");
    }
}

botao.addEventListener("click", separarPalavras);