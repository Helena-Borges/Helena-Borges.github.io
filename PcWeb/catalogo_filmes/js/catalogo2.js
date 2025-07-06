let lista = document.createElement("ul");
lista.classList.add("lista");

dados.forEach(dado => {
    let filme = document.createElement("li");
    filme.classList.add("filme");

    let link = document.createElement("a");
    link.href = dado.url;
    link.style.textDecoration = "none";
    link.style.color = "inherit";

    let imagem = document.createElement("img");
    imagem.src = dado['figura'];
    imagem.classList.add("poster");
    link.appendChild(imagem);

    let titulo = document.createElement("h2");
    titulo.textContent = dado['titulo'];
    titulo.classList.add("titulo");
    link.appendChild(titulo);

    let resumo = document.createElement("h4");
    resumo.textContent = dado['resumo'];
    resumo.classList.add("resumo");
    link.appendChild(resumo);

    filme.appendChild(link);
    lista.appendChild(filme);

});

document.body.appendChild(lista);