<template>
    <div>
      <Navbar />
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-4">
            <img :src="produto.imagem" alt="Produto" id="product-image" />
          </div>
          <div class="col-md-8">
            <h2 id="product-name">{{ produto.nome }}</h2>
            <p>
              <strong>Descrição:</strong>
              <span id="product-description">{{ produto.descricao }}</span>
            </p>
            <p>
              <strong>Valor:</strong>
              R$ <span id="product-price">{{ produto.valor }}</span>
            </p>
            <p>
              <strong>Quantidade em Estoque:</strong>
              <span id="product-stock">{{ produto.quantidade_estoque }}</span>
            </p>
            <div class="form-group">
              <label for="quantity">Quantidade:</label>
              <input
                type="number"
                class="form-control"
                id="quantity"
                v-model.number="quantidade"
                min="1"
                :max="produto.quantidade_estoque"
              />
            </div>
            <button class="btn btn-warning" @click="adicionarAoCarrinho">
              Comprar
            </button>
          </div>
        </div>
        <div class="containers-sugestoes mt-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h3>Sugestões</h3>
            <div>
              <p class="mr-3 d-inline">
                <strong>Valor total dos três produtos:</strong>
                R$ {{ calcularValorTotal }}
              </p>
              <button class="btn btn-success" @click="comprarCombo">
                Comprar Combo
              </button>
            </div>
          </div>
          <div class="row">
            <div
              v-for="suggestedProduct in suggestedProducts"
              :key="suggestedProduct.id"
              class="col-md-4"
            >
              <div class="card mb-3">
                <img
                  :src="suggestedProduct.imagem"
                  class="card-img-top"
                  alt="Produto"
                />
                <div class="card-body">
                  <h5 class="card-title">{{ suggestedProduct.nome }}</h5>
                  <p class="card-text">{{ suggestedProduct.descricao }}</p>
                  <p class="card-text">
                    <strong>Valor:</strong>
                    R$ {{ suggestedProduct.valor }}
                  </p>
                  <a
                    :href="'/comprar?id=' + suggestedProduct.id"
                    class="btn btn-primary"
                  >
                    Comprar
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-3">
                <img :src="produto.imagem" class="card-img-top" alt="Produto" />
                <div class="card-body">
                  <h5 class="card-title">{{ produto.nome }}</h5>
                  <p class="card-text">{{ produto.descricao }}</p>
                  <p class="card-text">
                    <strong>Valor:</strong>
                    R$ {{ produto.valor }}
                  </p>
                  <a :href="'/comprar?id=' + produto.id" class="btn btn-primary">
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carrinho />
    </div>
  </template>
  
  <script>
  import { ref, onMounted, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import Navbar from '@/components/Navbar.vue';
  import Carrinho from '@/components/Carrinho.vue';
  import ProductDataService from '@/services/ProductDataService';
  
  export default {
    components: {
      Navbar,
      Carrinho,
    },
    setup() {
      const route = useRoute();
      const produto = ref({});
      const quantidade = ref(1);
      const suggestedProducts = ref([]);
  
      onMounted(() => {
        const id = route.query.id;
        ProductDataService.get(id)
          .then(response => {
            produto.value = response.data;
          })
          .catch(error => {
            console.error('Erro ao buscar o produto:', error);
          });
  
        // Sugerir produtos aleatórios
        ProductDataService.getAll()
          .then(response => {
            const allProducts = response.data;
            // Remove o produto atual da lista de sugestões
            const filteredProducts = allProducts.filter(p => p.id !== id);
            const randomIndices = Array.from(
              { length: 2 },
              () => Math.floor(Math.random() * filteredProducts.length)
            );
            randomIndices.forEach(index => {
              suggestedProducts.value.push(filteredProducts[index]);
            });
          })
          .catch(error => {
            console.error('Erro ao buscar as sugestões de produtos:', error);
          });
      });
  
      const adicionarAoCarrinho = () => {
        console.log(`Produto ${produto.value.nome} adicionado ao carrinho com quantidade ${quantidade.value}`);
      };
  
      const calcularValorTotal = computed(() => {
        const valorPrincipal = produto.value.valor * quantidade.value;
        const valorSugestoes = suggestedProducts.value.reduce((acc, curr) => acc + curr.valor, 0);
        return valorPrincipal + valorSugestoes;
      });
  
      const comprarCombo = () => {
        alert('Compra realizada com sucesso!');
      };
  
      return {
        produto,
        quantidade,
        suggestedProducts,
        calcularValorTotal,
        adicionarAoCarrinho,
        comprarCombo,
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 2rem;
  }
  
  .row {
    margin-bottom: 1rem;
  }
  
  .form-group {
    margin-top: 1rem;
  }
  
  .btn-warning {
    margin-top: 1rem;
  }
  
  .containers-sugestoes {
    margin-top: 2rem;
  }
  
  .card {
    margin-bottom: 1rem;
  }
  
  .btn-success {
    margin-left: 1rem;
  }
  </style>
  