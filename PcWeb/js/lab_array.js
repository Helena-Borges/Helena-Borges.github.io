const produtos = [
  { id: 1, nome: "Mouse", preco: 59.9, quantidade: 12 },
  { id: 2, nome: "Teclado", preco: 99.9, quantidade: 5 },
  { id: 3, nome: "Monitor", preco: 799.9, quantidade: 2 },
  { id: 4, nome: "Cabo HDMI", preco: 29.9, quantidade: 30 },
  { id: 5, nome: "Pen Drive", preco: 49.9, quantidade: 0 },
  { id: 6, nome: "Webcam", preco: 199.9, quantidade: 4 },
  { id: 7, nome: "SSD 240GB", preco: 299.9, quantidade: 6 },
  { id: 8, nome: "HD Externo", preco: 499.9, quantidade: 3 },
  { id: 9, nome: "Notebook", preco: 3499.9, quantidade: 1 },
  { id: 10, nome: "Suporte de Notebook", preco: 89.9, quantidade: 0 }
];

const r = document.querySelector("#resultado")
const resultadoBusca = document.querySelector("#resultadoBusca")

const buscarProduto = () => {
  let buscar1 = document.querySelector("#buscar").value;
  let buscar = buscar1.toLowerCase();
  let correto = 0;
  produtos.forEach(x => {
    let nome = x['nome'].toLowerCase();
    if(nome === buscar) {
      resultadoBusca.innerHTML = "<h2>" + x['nome'] + "</h2><ul><li>Preço: R$:" + x['preco'].toFixed(2) + "</li></li>Quantidade: " + x['quantidade'] + "</li></ul>";
      correto = 1;
    }
  });
  if(correto == 0) {
    resultadoBusca.innerHTML = "Produto não encontrado";
  }
}

const listarProdutos = () => { 
  r.innerHTML = "";
  produtos.forEach(p => {
    r.innerHTML += "<h2>" + p['nome'] + "</h2><ul><li><h4>Preço: R$:" + p['preco'].toFixed(2) + "</h4></li><li><h4>Quantidade: " + p['quantidade'] + "</h4></li></ul>";
  })
}

const mostrarNomes = () => {
  r.innerHTML = "";
  let nomes = produtos.map(p => {
    return p['nome'];
  })
  nomes.forEach(x => {
    r.innerHTML += "<h3>" + x + "</h3>";
  })
}


const calcularTotal = () => {
  r.innerHTML = "";
  let total = 0;
  produtos.forEach(p => {
    total += p['preco'] * p['quantidade']
  })
  r.innerHTML += "<h3>Valor Total do Estoque : R$:" + total.toFixed(2) + "</h3>";
}

const verificarEsgotados = () => {
  r.innerHTML = "";
  produtos.forEach(x => {
    if(x['quantidade'] == 0) {
      r.innerHTML += "<h3>" + x['nome'] + "</h3>";
    }
  });
}

const verificarPrecos = () => {
  r.innerHTML = "";
  let cont = 0;
  for(let i = 0; i < produtos.length; i++) {
    if(produtos[i]['preco'] > 10) {
      cont += 1;
    }
  }
  if(cont == produtos.length) {
    r.innerHTML += "<h3>Todos os produtos têm preço justo</h3>";
  } else {
    r.innerHTML += "<h3>Há produtos com preço muito baixo</h3>";
  }
}