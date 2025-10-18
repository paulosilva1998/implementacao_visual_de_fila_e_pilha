let itens = ["Leite", "Pão", "Ovos", "Arroz", "Feijão", "Carne moída", "Frutas", "Verduras", "Café", "Itens de limpeza"];

const inputValor = document.getElementById("inputValor");
const listaDiv = document.getElementById("lista");

function renderizarLista() {
  listaDiv.innerHTML = "";

  itens.forEach(item => {
    const p = document.createElement("p");
    p.textContent = item;
    listaDiv.appendChild(p);
  });
}

function inserirInicio() {
  const valor = inputValor.value;
  if (valor.trim() !== "") {
    itens.unshift(valor);
    renderizarLista();
    inputValor.value = "";
    inputValor.focus();
  } else {
    alert("Por favor, digite um valor.");
  }
}

function inserirFim() {
  const valor = inputValor.value;
  if (valor.trim() !== "") {
    itens.push(valor);
    renderizarLista();
    inputValor.value = "";
    inputValor.focus();
  } else {
    alert("Por favor, digite um valor.");
  }
}

function excluirInicio() {
  if (itens.length > 0) {
    itens.shift();
    renderizarLista();
  } else {
    alert("A lista está vazia.");
  }
}

function excluirFim() {
  if (itens.length > 0) {
    itens.pop();
    renderizarLista();
  } else {
    alert("A lista está vazia.");
  }
}

function buscarElemento() {
  const valorBusca = inputValor.value;
  if (valorBusca.trim() === "") {
    alert("Digite um valor para buscar.");
    return;
  }

  renderizarLista();
  const itensDaLista = listaDiv.getElementsByTagName("p");
  let encontrado = false;

  for (let i = 0; i < itensDaLista.length; i++) {
    if (itensDaLista[i].textContent.toLowerCase() === valorBusca.toLowerCase()) {
      itensDaLista[i].classList.add("destaque");
      encontrado = true;
    }
  }

  if (!encontrado) {
    alert("Elemento não encontrado na lista.");
  }
}

window.onload = renderizarLista;