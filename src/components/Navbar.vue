<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Burst Vendas</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Entrar | Criar Conta</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/gerenciar">Gerenciador de Produtos</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/gerenciarContas">Gerenciador de Contas</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
body {
  background-color: #f8f9fa;
  color: #333;
}

.navbar {
  background-color: #cfcfcf !important;
}

.footer {
  background-color: transparent;
  padding: 20px;
  text-align: center;
}

.icon_carrinho svg {
  margin-top: 5px;
  margin-left: -3px;
  width: 38px;
  height: 38px;
  display: flex; 
  justify-content: center; 
  align-items: center; 
}

.btn-floating {
  background-color: #ffc107;
  color: #fff;
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 24px;
  line-height: 50px;
  text-align: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.btn-floating:hover {
  background-color: #e0a800;
}

#product-list .card {
  background-color: #fff;
  height: 400px;
  width: 350px;
}

#product-list .card:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
</style>
