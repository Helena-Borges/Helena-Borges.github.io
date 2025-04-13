const botao = document.querySelector("#executar")

const getValue = seletorDom => document.querySelector(seletorDom).value

// Função que imprime o resultado no seletor fornecido
const imprimir = (lista, seletor) => {
    document.querySelector(seletor).innerHTML = lista.join(' ');
}

//Função que substitui as vogais por negrito
const questao1 = () => {
    // 1. Recuperar a frase digitada
    let frase = getValue("#frase");
    
    // 2. Substituir as vogais por negrito
    let resultado = "";
    for (let i = 0; i < frase.length; i++) {
        let letra = frase[i];
        
        // 3. Verificar se a letra é uma vogal e, se for, colocar em negrito
        if (['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú', 'ã', 'õ'].includes(letra.toLowerCase())) {
            resultado += `<b>${letra}</b>`;  // Substitui a vogal por negrito
        } else {
            resultado += letra;  // Se não for vogal, apenas adiciona a letra normalmente
        }
    }

    // 4. Exibir o resultado no seletor apropriado
    imprimir([resultado], "#resultado1");
}

botao.addEventListener("click", questao1)