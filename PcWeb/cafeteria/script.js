const array = [
    { "id": 1, "nome": "Café Expresso", "preco": 8, "imagem" : "cafe.png"},
    { "id": 2, "nome": "Cappuccino", "preco": 12, "imagem" : "cappuccino.png"},
    { "id": 3, "nome": "Suco de Laranja", "preco": 10, "imagem" : "suco-de-laranja.png"},
    { "id": 4, "nome": "Água Mineral", "preco": 6, "imagem" : "agua.png"},
    { "id": 5, "nome": "Fatia de Bolo", "preco": 12, "imagem" : "bolo.png"},
    { "id": 6, "nome": "Sanduiche Natural", "preco": 15, "imagem" : "sanduiche.png"},
    { "id": 7, "nome": "Croissant", "preco": 17, "imagem" : "croissant.png"}
];
 
let lista = document.getElementById("lista")
 
array.forEach(produto => {
    let item = document.createElement("li");
    item.classList.add("item");
 
    item.id = produto['id']

    let imagem = document.createElement("img");
    imagem.src = produto['imagem'];
    imagem.classList.add("imagem");
    item.appendChild(imagem);
 
    let nome = document.createElement("h2");
    nome.textContent = produto['nome'];
    nome.classList.add("nome");
    item.appendChild(nome);
 
    let preco = document.createElement("h4");
    preco.textContent = "R$: " + produto['preco'] + ",00";
    preco.classList.add("preco");
    item.appendChild(preco);
 
    lista.appendChild(item);
 
    item.addEventListener("click", () => {
        let produtosSelecionados = JSON.parse(localStorage.getItem('produtosSelecionados')) || [];
        produtosSelecionados.push(produto.id);
        localStorage.setItem('produtosSelecionados', JSON.stringify(produtosSelecionados)); 
        console.log("IDs de produtos selecionados:", produtosSelecionados);
    });
});

document.getElementById("limpar").addEventListener("click", () => {
    localStorage.setItem('produtosSelecionados', JSON.stringify([])); 
    console.log("Array de produtos selecionados limpo!");
});

let listacarrinho = document.getElementById("listacarrinho");
let produtoscarrinho = JSON.parse(localStorage.getItem('produtosSelecionados')) || [];

let totalCarrinhoEl = document.getElementById("totalCarrinho");

function listarCarrinho(produtosSelecionados) {
    listacarrinho.innerHTML = '';
    
    let total = 0;  
    
    produtosSelecionados.forEach(produtoId => {
        let produto = array.find(p => p.id === produtoId);

        if (produto) {
            total += produto.preco;  

            let item = document.createElement("li");
            item.classList.add("itemcarrinho");
            item.id = produto.id;

            let imagem = document.createElement("img");
            imagem.src = produto.imagem;
            imagem.classList.add("imagemcarrinho");
            item.appendChild(imagem);

            let nome = document.createElement("h2");
            nome.textContent = produto.nome;
            nome.classList.add("nomecarrinho");
            item.appendChild(nome);

            let preco = document.createElement("h4");
            preco.textContent = "R$: " + produto.preco + ",00";
            preco.classList.add("precocarrinho");
            item.appendChild(preco);

            listacarrinho.appendChild(item);
        } else {
            console.error(`Produto com ID ${produtoId} não encontrado!`);
        }
    });

    if(totalCarrinhoEl){
        totalCarrinhoEl.textContent = "Total: R$ " + total + ",00";
    }
}

listarCarrinho(produtoscarrinho);

document.addEventListener('click', () => {
  location.reload();
});