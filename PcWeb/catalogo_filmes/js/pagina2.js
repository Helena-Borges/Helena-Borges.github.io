fetch("https://rafaelescalfoni.github.io/desenv_web/filmes.json")
  .then(response => response.json())
  .then(dado => {
    let titulo = document.title;
    let id;

    if (titulo === "Better Call Saul") id = 0;
    else if (titulo === "Breaking Bad") id = 1;
    else if (titulo === "House of Cards") id = 2;
    else if (titulo === "Narcos") id = 3;
    else if (titulo === "Carros") id = 4;
    else if (titulo === "Carros 2") id = 5;
    else if (titulo === "Uma Família da Pesada") id = 6;
    else if (titulo === "Valente") id = 7;
    else if (titulo === "Friends") id = 8;
    else if (titulo === "House") id = 9;
    else if (titulo === "Mãos talentosas") id = 10;
    else if (titulo === "Família Moderna") id = 11;
    else if (titulo === "Scarface") id = 12;
    else if (titulo === "That '70s Show") id = 13;
    else if (titulo === "Zumbilândia") id = 14;

    const filme = dado[id];

    let caixa1 = document.getElementById("caixa1")
    caixa1.classList.add("caixa1")

    let imagem = document.createElement("img");
    imagem.classList.add("imagem");
    imagem.src = dados[id]['figura2']; 
    caixa1.appendChild(imagem); 

    let nome = document.createElement("h1")
    nome.classList.add("nome")
    nome.textContent = filme['titulo']
    caixa1.appendChild(nome)

    let resumo = document.createElement("h3")
    resumo.classList.add("resumo")
    resumo.textContent = filme['resumo']
    caixa1.appendChild(resumo)

    let classificacaoValor = document.createElement("h5");
    let valor = filme['classificacao'];
    classificacaoValor.textContent = valor;

    if (valor >= 0 && valor <= 14) {
        classificacaoValor.classList.add("verde");
    } else if (valor < 18) {
        classificacaoValor.classList.add("amarelo");
    } else {
        classificacaoValor.classList.add("vermelho");
    }

    caixa1.appendChild(classificacaoValor);

    let caixa2 = document.getElementById("caixa2");
    caixa2.classList.add("caixa2");

    let categoriag = document.createElement("div");
    categoriag.classList.add("categoriag");
    categoriag.textContent = "Gêneros: ";
    caixa2.appendChild(categoriag);

    let generosLista = document.createElement("ul");
    generosLista.classList.add("generos");

    filme['generos'].forEach(genero => {
        let item = document.createElement("li");
        item.textContent = genero.trim();
        generosLista.appendChild(item);
    });

    categoriag.appendChild(generosLista);

    let categoriae = document.createElement("div");
    categoriae.classList.add("categoriae");
    categoriae.textContent = "Elenco: ";
    caixa2.appendChild(categoriae);

    let elencoLista = document.createElement("ul");
    elencoLista.classList.add("elenco");

    filme['elenco'].forEach(elenco => {
        let item = document.createElement("li");
        item.textContent = elenco.trim();
        elencoLista.appendChild(item);
    });

    categoriae.appendChild(elencoLista);

    let categoriao = document.createElement("div");
    categoriao.classList.add("categoriao");
    categoriao.textContent = "Opiniões: ";
    caixa2.appendChild(categoriao);

    let opinioes = document.createElement("ul");
    opinioes.classList.add("opinioes");

    filme['opinioes'].forEach(op => {
        let opiniao = document.createElement("li");
        opiniao.classList.add("opniao");

        for (let i = 0; i < op.rating; i++) {
            let estrela = document.createElement("img");
            estrela.src = "estrelas.PNG";
            estrela.classList.add("estrela");
            opiniao.appendChild(estrela);
        }

        let texto = document.createElement("h6");
        texto.classList.add("descricao");
        texto.textContent = op['descricao'];
        opiniao.appendChild(texto);

        opinioes.appendChild(opiniao);
    });

    categoriao.appendChild(opinioes);

    if (filme['titulosSemelhantes'] && filme['titulosSemelhantes'].length > 0) {
        let caixaSemelhantes = document.createElement("div");
        caixaSemelhantes.classList.add("caixaSemelhantes");

        let tituloSemelhantes = document.createElement("h2");
        tituloSemelhantes.textContent = "Títulos Semelhantes:";
        caixaSemelhantes.appendChild(tituloSemelhantes);

        let semelhantes = document.createElement("ul");
        semelhantes.classList.add("semelhantes");

        filme['titulosSemelhantes'].forEach(x => {
            let li = document.createElement("li");

            let link = document.createElement("a");
            link.href = `${dado[x - 1]['url']}`;

            let imagem = document.createElement("img");
            imagem.src = dado[x - 1]['figura'];
            imagem.classList.add("imgSemelhante");

            link.appendChild(imagem);
            li.appendChild(link);
            semelhantes.appendChild(li);
        });

        caixaSemelhantes.appendChild(semelhantes);
        document.body.appendChild(caixaSemelhantes);
    }
  })
  .catch(error => {
    console.error("Erro ao carregar dados:", error);
  });
