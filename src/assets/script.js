
const products = [
    {
        "id": 0,
        "imagem": "https://as1.ftcdn.net/v2/jpg/02/65/68/34/1000_F_265683485_SrQP36roamZV47f9zveHM0ULNeEyieM0.jpg",
        "nome": "Produto 1",
        "categoria": "Categoria 1",
        "subcategoria": "Subcategoria 1",
        "descrição": "Descrição do Produto 1",
        "valor": 10.99,
        "quantidade_estoque": 7
    },
    {
        "id": 1,
        "imagem": "https://as1.ftcdn.net/v2/jpg/02/65/68/34/1000_F_265683485_SrQP36roamZV47f9zveHM0ULNeEyieM0.jpg",
        "nome": "Produto 2",
        "categoria": "Categoria 1",
        "subcategoria": "Subcategoria 2",
        "descrição": "Descrição do Produto 2",
        "valor": 20.49,
        "quantidade_estoque": 8
    },
    {
        "id": 2,
        "imagem": "https://as1.ftcdn.net/v2/jpg/02/65/68/34/1000_F_265683485_SrQP36roamZV47f9zveHM0ULNeEyieM0.jpg",
        "nome": "Produto 3",
        "categoria": "Categoria 1",
        "subcategoria": "Subcategoria 1",
        "descrição": "Descrição do Produto 3",
        "valor": 30.99,
        "quantidade_estoque": 1
    },
    {
        "id": 3,
        "imagem": "https://as1.ftcdn.net/v2/jpg/02/65/68/34/1000_F_265683485_SrQP36roamZV47f9zveHM0ULNeEyieM0.jpg",
        "nome": "Produto 4",
        "categoria": "Categoria 1",
        "subcategoria": "Subcategoria 2",
        "descrição": "Descrição do Produto 4",
        "valor": 25.49,
        "quantidade_estoque": 3
    },
    {
        "id": 4,
        "imagem": "https://as1.ftcdn.net/v2/jpg/02/65/68/34/1000_F_265683485_SrQP36roamZV47f9zveHM0ULNeEyieM0.jpg",
        "nome": "Produto 5",
        "categoria": "Categoria 1",
        "subcategoria": "Subcategoria 3",
        "descrição": "Descrição do Produto 5",
        "valor": 18.99,
        "quantidade_estoque": 27
    },
    {
        "id": 5,
        "imagem": "https://as1.ftcdn.net/v2/jpg/02/65/68/34/1000_F_265683485_SrQP36roamZV47f9zveHM0ULNeEyieM0.jpg",
        "nome": "Produto 6",
        "categoria": "Categoria 1",
        "subcategoria": "Subcategoria 1",
        "descrição": "Descrição do Produto 6",
        "valor": 22.99,
        "quantidade_estoque": 98
    },
    {
        "id": 6,
        "imagem": "https://as1.ftcdn.net/v2/jpg/02/65/68/34/1000_F_265683485_SrQP36roamZV47f9zveHM0ULNeEyieM0.jpg",
        "nome": "Produto 7",
        "categoria": "Categoria 1",
        "subcategoria": "Subcategoria 2",
        "descrição": "Descrição do Produto 7",
        "valor": 17.49,
        "quantidade_estoque": 88
    },
    {
        "id": 7,
        "imagem": "https://as1.ftcdn.net/v2/jpg/02/65/68/34/1000_F_265683485_SrQP36roamZV47f9zveHM0ULNeEyieM0.jpg",
        "nome": "Produto 8",
        "categoria": "Categoria 1",
        "subcategoria": "Subcategoria 3",
        "descrição": "Descrição do Produto 8",
        "valor": 33.99,
        "quantidade_estoque": 108
    },
    {
        "id": 8,
        "imagem": "https://as1.ftcdn.net/v2/jpg/02/65/68/34/1000_F_265683485_SrQP36roamZV47f9zveHM0ULNeEyieM0.jpg",
        "nome": "Produto 9",
        "categoria": "Categoria 1",
        "subcategoria": "Subcategoria 1",
        "descrição": "Descrição do Produto 9",
        "valor": 28.99,
        "quantidade_estoque": 972
    },
    {
        "id": 9,
        "imagem": "https://as1.ftcdn.net/v2/jpg/02/65/68/34/1000_F_265683485_SrQP36roamZV47f9zveHM0ULNeEyieM0.jpg",
        "nome": "Produto 10",
        "categoria": "Categoria 1",
        "subcategoria": "Subcategoria 2",
        "descrição": "Descrição do Produto 10",
        "valor": 21.49,
        "quantidade_estoque": 104
    },
    {
        "id": 10,
        "imagem": "https://as1.ftcdn.net/v2/jpg/02/65/68/34/1000_F_265683485_SrQP36roamZV47f9zveHM0ULNeEyieM0.jpg",
        "nome": "Produto 11",
        "categoria": "Categoria 1",
        "subcategoria": "Subcategoria 3",
        "descrição": "Descrição do Produto 11",
        "valor": 15.99,
        "quantidade_estoque": 102
    },
    {
        "id": 11,
        "imagem": "https://as1.ftcdn.net/v2/jpg/02/65/68/34/1000_F_265683485_SrQP36roamZV47f9zveHM0ULNeEyieM0.jpg",
        "nome": "Produto 12",
        "categoria": "Categoria 1",
        "subcategoria": "Subcategoria 1",
        "descrição": "Descrição do Produto 12",
        "valor": 29.99,
        "quantidade_estoque": 93
    },
    {
        "id": 12,
        "imagem": "https://as1.ftcdn.net/v2/jpg/02/65/68/34/1000_F_265683485_SrQP36roamZV47f9zveHM0ULNeEyieM0.jpg",
        "nome": "Produto 13",
        "categoria": "Categoria 1",
        "subcategoria": "Subcategoria 2",
        "descrição": "Descrição do Produto 13",
        "valor": 24.49,
        "quantidade_estoque": 400
    },
    {
        "id": 13,
        "imagem": "https://as1.ftcdn.net/v2/jpg/02/65/68/34/1000_F_265683485_SrQP36roamZV47f9zveHM0ULNeEyieM0.jpg",
        "nome": "Produto 14",
        "categoria": "Categoria 1",
        "subcategoria": "Subcategoria 3",
        "descrição": "Descrição do Produto 14",
        "valor": 19.99,
        "quantidade_estoque": 18
    },
    {
        "id": 14,
        "imagem": "https://as1.ftcdn.net/v2/jpg/02/65/68/34/1000_F_265683485_SrQP36roamZV47f9zveHM0ULNeEyieM0.jpg",
        "nome": "Produto 15",
        "categoria": "Categoria 1",
        "subcategoria": "Subcategoria 1",
        "descrição": "Descrição do Produto 15",
        "valor": 27.99,
        "quantidade_estoque": 63
    },
    {
        "id": 15,
        "imagem": "https://as1.ftcdn.net/v2/jpg/02/65/68/34/1000_F_265683485_SrQP36roamZV47f9zveHM0ULNeEyieM0.jpg",
        "nome": "Produto 16",
        "categoria": "Categoria 1",
        "subcategoria": "Subcategoria 2",
        "descrição": "Descrição do Produto 16",
        "valor": 23.49,
        "quantidade_estoque": 41
    },
    {
        "id": 16,
        "imagem": "https://as1.ftcdn.net/v2/jpg/02/65/68/34/1000_F_265683485_SrQP36roamZV47f9zveHM0ULNeEyieM0.jpg",
        "nome": "Produto 17",
        "categoria": "Categoria 1",
        "subcategoria": "Subcategoria 3",
        "descrição": "Descrição do Produto 17",
        "valor": 16.99,
        "quantidade_estoque": 25
    },
    {
        "id": 17,
        "imagem": "https://as1.ftcdn.net/v2/jpg/02/65/68/34/1000_F_265683485_SrQP36roamZV47f9zveHM0ULNeEyieM0.jpg",
        "nome": "Produto 18",
        "categoria": "Categoria 1",
        "subcategoria": "Subcategoria 1",
        "descrição": "Descrição do Produto 18",
        "valor": 31.99,
        "quantidade_estoque": 18
    },
    {
        "id": 18,
        "imagem": "https://as1.ftcdn.net/v2/jpg/02/65/68/34/1000_F_265683485_SrQP36roamZV47f9zveHM0ULNeEyieM0.jpg",
        "nome": "Produto 19",
        "categoria": "Categoria 1",
        "subcategoria": "Subcategoria 2",
        "descrição": "Descrição do Produto 19",
        "valor": 26.49,
        "quantidade_estoque": 17
    },
    {
        "id": 19,
        "imagem": "https://as1.ftcdn.net/v2/jpg/02/65/68/34/1000_F_265683485_SrQP36roamZV47f9zveHM0ULNeEyieM0.jpg",
        "nome": "Produto 20",
        "categoria": "Categoria 1",
        "subcategoria": "Subcategoria 3",
        "descrição": "Descrição do Produto 20",
        "valor": 20.99,
        "quantidade_estoque": 99
    },
    {
        "id": 20,
        "imagem": "https://as1.ftcdn.net/v2/jpg/02/65/68/34/1000_F_265683485_SrQP36roamZV47f9zveHM0ULNeEyieM0.jpg",
        "nome": "Produto 21",
        "categoria": "Categoria 1",
        "subcategoria": "Subcategoria 1",
        "descrição": "Descrição do Produto 21",
        "valor": 35.99,
        "quantidade_estoque": 450
    }
];

// Função para obter o ID do produto da URL
function getProductIdFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get('id'));
}

// Função para exibir os detalhes do produto na página de compra
function displayProductDetails(productId) {
  const product = products[productId];
  const productImage = document.getElementById('product-image');
  const productName = document.getElementById('product-name');
  const productDescription = document.getElementById('product-description');
  const productPrice = document.getElementById('product-price');
  const productstock = document.getElementById('product-stock');
  const productStock = product.quantidade_estoque;
  const quantityInput = document.getElementById('quantity');
  const suggestedProductsContainer = document.getElementById('suggested-products');
  
  productImage.src = product.imagem;
  productName.textContent = product.nome;
  productDescription.textContent = product.descrição;
  productPrice.textContent = product.valor.toFixed(2);
  productstock.textContent = product.quantidade_estoque;

  // Atualizar o atributo max do campo de entrada com a quantidade em estoque
  quantityInput.setAttribute('max', productStock);

  // Adicionar um evento de escuta para verificar a entrada do usuário
  quantityInput.addEventListener('input', function(event) {
    const quantityEntered = parseInt(event.target.value);
    if (quantityEntered > productStock) {
      event.target.value = productStock; // Definir o valor do campo como a quantidade máxima disponível em estoque
    }
  });

  // Exibir apenas o item principal
  const mainProductCard = `
      <div class="col-md-" id="principal-item">
        <div class="card mb-4 shadow-sm">
          <img src="${product.imagem}" class="bd-placeholder-img card-img-top rounded-start" alt="${product.nome}">
          <div class="card-body">
            <h5 class="card-title">${product.nome}</h5>
            <p class="card-text">${product.descrição}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <router-link to="/comprar" id=${productId}" class="btn btn-sm btn-outline-secondary">Comprar</router-link>
                <a href="/adicionar?id=${productId}" class="btn btn-sm btn-outline-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                  </svg>
                </a>
              </div>
              <small class="text-muted">${product.valor.toFixed(2)}</small>
            </div>
          </div>
        </div>
      </div>
  `;
  
  suggestedProductsContainer.innerHTML = mainProductCard; // Exibindo apenas o item principal

  // Exibir dois itens sugeridos
  const suggestedProducts = products.filter(prod => prod.nome !== product.nome).slice(0, 2);
  let suggestedTotalPrice = product.valor;
  suggestedProducts.forEach(suggestedProduct => {
    suggestedTotalPrice += suggestedProduct.valor;
    const suggestedProductCard = `
      <div class="card-sugestoes">
        <div class="card mb-4 shadow-sm">
          <img src="${suggestedProduct.imagem}" class="bd-placeholder-img card-img-top rounded-start" width="200" height="150" alt="${suggestedProduct.nome}">
          <div class="card-body">
            <h5 class="card-title">${suggestedProduct.nome}</h5>
            <p class="card-text">${suggestedProduct.descrição}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <router-link to="/comprar" id=${products.indexOf(suggestedProduct)}" class="btn btn-sm btn-outline-secondary">Comprar</router-link>
                <a href="/adicionar?id=${products.indexOf(suggestedProduct)}" class="btn btn-sm btn-outline-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                  </svg>
                </a>
              </div>
              <small class="text-muted">${suggestedProduct.valor.toFixed(2)}</small>
            </div>
          </div>
        </div>
      </div>
    `;
    suggestedProductsContainer.innerHTML += suggestedProductCard;
  });

  // Exibindo o valor total dos três itens
  const totalPriceElement = document.createElement('p');
  totalPriceElement.textContent = `Valor do Combo: $${suggestedTotalPrice.toFixed(2)}`;
  totalPriceElement.style.fontFamily = 'Anton, sans-serif'; // Define a fonte
  totalPriceElement.style.fontSize = '20px'; // Define o tamanho da fonte
  totalPriceElement.style.marginTop = '10.3%';
  totalPriceElement.style.color = 'grey';
  suggestedProductsContainer.appendChild(totalPriceElement);

  // Botão de "Comprar Agora"
  const compareButton = document.createElement('a');
  compareButton.href = '/carrinho';
  compareButton.className = 'btn btn-comprarcombo';
  compareButton.textContent = 'Comprar Agora';
  suggestedProductsContainer.appendChild(compareButton);
}

document.addEventListener('DOMContentLoaded', function() {
  const productId = getProductIdFromURL();
  displayProductDetails(productId);
});
