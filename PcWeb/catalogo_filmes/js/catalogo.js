let lista = document.createElement("ul");
lista.classList.add("lista");

dados.forEach(dado => {
    let filme = document.createElement("li");
    filme.classList.add("filme");
    lista.appendChild(filme);

    let imagem = document.createElement("img");
    imagem.src = dado['figura'];               
    imagem.classList.add("poster");    
    filme.appendChild(imagem); 

    let titulo = document.createElement("h2")
    titulo.textContent = dado['titulo'];
    titulo.classList.add("titulo");
    filme.appendChild(titulo);

    let resumo = document.createElement("h4")
    resumo.textContent = dado['resumo']
    resumo.classList.add("resumo");
    filme.appendChild(resumo); 

    let botao = document.createElement("button")
    botao.textContent = "Ver mais"
    botao.classList.add("botao")
    filme.appendChild(botao)

    let caixa = document.createElement("div")
    caixa.classList.add("caixa")

    let categoriag = document.createElement("h2");
    categoriag.classList.add("categoria");
    categoriag.textContent = "Gêneros"
    caixa.appendChild(categoriag)

    let generos = dado['generos'];
    generos.forEach(genero => {
        let item = document.createElement("li");
        item.textContent = genero.trim(); 
        item.classList.add("genero");
        categoriag.appendChild(item);
    });

    let categoriae = document.createElement("h2");
    categoriae.classList.add("categoria");
    categoriae.textContent = "Elenco"
    caixa.appendChild(categoriae)

    let elenco = dado['elenco'];
    elenco.forEach(genero => {
        let item = document.createElement("li");
        item.textContent = genero.trim(); 
        item.classList.add("elenco");
        categoriae.appendChild(item);
    });
    
    let categoriac = document.createElement("h2");
    categoriac.classList.add("categoria");
    categoriac.textContent = "Classificação"
    caixa.appendChild(categoriac)

    let classificacao = document.createElement("h5")
    let valor = dado['classificacao']
    classificacao.textContent = valor;
    if (valor >= 0 && valor <= 14) {
        classificacao.classList.add("verde");
    } else if (valor < 18) {
        classificacao.classList.add("amarelo");
    } else {
        classificacao.classList.add("vermelho");
    } 
    categoriac.appendChild(classificacao);

    filme.appendChild(caixa)

    let categoriat = document.createElement("h2");
    filme.classList.add("categoriat");
    categoriat.textContent = "Títulos Semelhantes"
    filme.appendChild(categoriat)

    let titsemelhantes = document.createElement("div")
    titsemelhantes.classList.add("divsemelhantes");
    dado.titulosSemelhantes.forEach(id => {
        let img = document.createElement("img");
        img.classList.add("semelhantes");
        img.src = dados[id].figura;
        titsemelhantes.appendChild(img);
    });
    filme.appendChild(titsemelhantes)
    
    let caixaopniao = document.createElement("div")
    caixaopniao.classList.add("caixaopniao");

    let categoriao = document.createElement("h2");
    categoriao.classList.add("categoriao");
    categoriao.textContent = "Opniões"
    filme.appendChild(categoriao)

    dado.opinioes.forEach(opiniao => {
    let opiniaoElem = document.createElement("div");
    opiniaoElem.classList.add("opniao");
    for (let i = 0; i < opiniao.rating; i++) {
        let estrela = document.createElement("img");
        estrela.src = "estrelas.PNG";
        estrela.classList.add("estrela");
        opiniaoElem.appendChild(estrela);
    }
    let texto = document.createElement("p");
    texto.textContent = opiniao.descricao;
    opiniaoElem.appendChild(texto);

    caixaopniao.appendChild(opiniaoElem);
});
    filme.appendChild(caixaopniao)

});

document.body.appendChild(lista);