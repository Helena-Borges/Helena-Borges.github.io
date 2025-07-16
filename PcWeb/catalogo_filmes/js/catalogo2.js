let paravoce = document.createElement("h3");
paravoce.classList.add("paravoce");
paravoce.textContent = "Escolhas para você";
document.body.appendChild(paravoce);

fetch("https://rafaelescalfoni.github.io/desenv_web/filmes.json")
  .then(response => response.json())
  .then(dado => {

let lista = document.createElement("ul");
lista.classList.add("lista");

dado.forEach(dado => {
    let filme = document.createElement("li");
    filme.classList.add("filme");

    let id = dado['id']
    let link = document.createElement("a");
    link.href = dados[id - 1]['url'];
    console.log("ID:", id);
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

})

.catch(error => {
    console.error("Erro ao carregar os dados do JSON:", error);
});