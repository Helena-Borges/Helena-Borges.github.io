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

const buscarProduto = () => {
  const buscar = document.querySelector("#buscar");
  
}

const listarProdutos = () => {
  r.innerHTML = "";
  produtos.forEach(p => {
    r.innerHTML += "<ul><li>Nome: " + p['nome'] + "</li><li>Preço: " + p['preco'] + "</li><li>Quantidade: " + p['quantidade'] + "</li></ul>";
  })
}

const mostrarNomes = () => {
  r.innerHTML = "";
  let nomes = produtos.map(p => {
    return p['nome'];
  })
  nomes.forEach(x => {
    r.innerHTML += "<li>" + x + "</li>";
  })
}


const calcularTotal = () => {
  r.innerHTML = "";
  let total = 0;
  produtos.forEach(p => {
    total += p['preco'] * p['quantidade']
  })
  r.innerHTML += "Valor Total do Estoque : R$:" + total.toFixed(2);
}
/*
const verificarEsgotados = () => {

}

const verificarPrecos = () => {

}
*/
