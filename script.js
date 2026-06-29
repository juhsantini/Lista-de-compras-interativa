// Vetor que guarda todos os produtos

let produtos = [];

// ----------------------------------------------------

// Atualiza o contador de produtos cadastrados

// ----------------------------------------------------

function atualizarContador() {

    document.getElementById("contador").textContent = produtos.length;

}

// ----------------------------------------------------

// Exibe uma mensagem para o usuário

// ----------------------------------------------------

function mostrarMensagem(texto, cor) {

    const mensagem = document.getElementById("mensagem");

    mensagem.textContent = texto;

    mensagem.style.color = cor;

    setTimeout(() => {

        mensagem.textContent = "";

    }, 2000);

}

// ----------------------------------------------------

// Adiciona um novo produto

// ----------------------------------------------------

function adicionarProduto() {

    const input = document.getElementById("produto");

    const nome = input.value.trim();

    // Validação do campo vazio

    if (nome === "") {

        mostrarMensagem("Digite um produto!", "red");

        return;

    }

    // Cria um objeto para representar o produto

    const produto = {

        nome: nome,

        comprado: false

    };

    produtos.push(produto);

    input.value = "";

    mostrarMensagem("Produto adicionado!", "green");

    atualizarLista();

}

// ----------------------------------------------------

// Atualiza toda a lista de produtos

// ----------------------------------------------------

function atualizarLista() {

    const lista = document.getElementById("listaProdutos");

    lista.innerHTML = "";

    produtos.forEach((produto, indice) => {

        const li = document.createElement("li");

        li.innerHTML = `

        <div class="produto">

            <input

            type="checkbox"

            ${produto.comprado ? "checked" : ""}

            onchange="marcarComprado(${indice})">

            <span class="${produto.comprado ? "comprado" : ""}">

                ${produto.nome}

            </span>

        </div>

        <button

        class="remover"

        onclick="removerProduto(${indice})">

        Remover

        </button>

        `;

        lista.appendChild(li);

    });

    atualizarContador();

}

// ----------------------------------------------------

// Marca ou desmarca um produto como comprado

// ----------------------------------------------------

function marcarComprado(indice) {

    produtos[indice].comprado = !produtos[indice].comprado;

    atualizarLista();

}

// ----------------------------------------------------

// Remove apenas um produto

// ----------------------------------------------------

function removerProduto(indice) {

    produtos.splice(indice, 1);

    atualizarLista();

}

// ----------------------------------------------------

// Remove todos os produtos marcados como comprados

// ----------------------------------------------------

function removerComprados() {

    produtos = produtos.filter(produto => !produto.comprado);

    atualizarLista();

}