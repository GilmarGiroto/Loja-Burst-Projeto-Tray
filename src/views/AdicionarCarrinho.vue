<script>
import Navbar from '@/components/Navbar.vue';
import Carrinho from '@/components/Carrinho.vue';
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">Burst Vendas</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="navbar-brand" to="">Cadastre-se</router-link>
            </li>
            <li class="nav-item">
              <router-link class="navbar-brand" to="/">Produtos</router-link>
            </li>
          </ul>
        </div>
      </nav>

    <div class="container mt-5">
        <div class="row">
          <div class="col-md-4">
            <img src="" alt="Produto" id="product-image">
          </div>
          <div class="col-md-8">
            <h2 id="product-name"></h2>
            <p><strong>Descrição:</strong> <span id="product-description"></span></p>
            <p><strong>Valor:</strong> R$ <span id="product-price"></span></p>
            <p><strong>Quantidade em Estoque:</strong> <span id="product-stock"></span></p>
            <div class="form-group">
              <label for="quantity">Quantidade:</label>
              <input type="number" class="form-control" id="quantity" value="1" min="1">
            </div>
            <button class="btn btn-warning" id="addToCartBtn">Comprar</button>
            <button class="btn btn-warning" id="addToCartBtn">Adicionar ao carrinho</button>
          </div>
        </div>
    
        <div class="containers-sugestoes">
          <h3 class="mt-5">Sugestões</h3>
          <div class="row" id="suggested-products">
            <!-- Produtos Sugeridos Aparecem aqui -->
          </div>
        </div>
      </div>

      <footer class="footer fixed-bottom transparent-footer">
        <router-link to="/carrinho" class="btn btn-primary btn-floating">
          <i class="icon_carrinho">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" linkBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg>
          </i>
        </router-link>
      </footer>
</template>