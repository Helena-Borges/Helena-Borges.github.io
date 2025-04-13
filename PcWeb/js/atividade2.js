const botao = document.querySelector("#executar")

const getValue = seletorDom => document.querySelector(seletorDom).value

const imprimir = (lista, seletor) => {
    document.querySelector(seletor).innerHTML = lista.join(' ');
}


const questao1 = () => {

    let frase = getValue("#frase");
    
    let resultado = "";
    for (let i = 0; i < frase.length; i++) {
        let letra = frase[i];
        
        if (['a', 'e', 'i', 'o', 'u'].includes(letra.toLowerCase())) {
            resultado += `<b>${letra}</b>`;  
        } else {
            resultado += letra; 
        }
    }

    imprimir([resultado], "#resultado1");
}

botao.addEventListener("click", questao1)