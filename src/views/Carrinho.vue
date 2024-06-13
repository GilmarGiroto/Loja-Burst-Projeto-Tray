<script>
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
        <h1>Carrinho de Compras</h1>
        <div class="row" id="cart-items">
          <!-- Cards de produtos aparecem aqui -->
        </div>
        <div class="row mt-3">
          <div class="col text-center">
            <button class="btn btn-primary">Finalizar Compra</button>
          </div>
        </div>
    </div>
</template>