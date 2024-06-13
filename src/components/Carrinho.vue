<template>
  <footer class="footer fixed-bottom transparent-footer">
    <router-link to="/carrinho" class="btn btn-primary btn-floating">
      <i class="icon_carrinho">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
        </svg>
      </i>
    </router-link>
  </footer>
</template>

<style>

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
