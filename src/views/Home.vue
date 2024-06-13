<template>
    <main>
        <Navbar />
        <div class="container mt-5">
            <div class="row">
                <Cards
                    v-for="produto in products"
                    :key="produto.id"
                    :id="produto.id"
                    :imagem="produto.imagem"
                    :nome="produto.nome"
                    :categoria="produto.categoria"
                    :subcategoria="produto.subcategoria"
                    :descrição="produto.descricao"
                    :valor="produto.valor"
                    :quantidade_estoque="produto.quantidade_estoque"
                />
            </div>
        </div>
        <Carrinho />
    </main>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Carrinho from '@/components/Carrinho.vue';
import Cards from '@/components/Cards.vue';
import ProductDataService from '@/services/ProductDataService';

export default {
    components: {
      Navbar,
      Carrinho,
      Cards
  },
    name: "products-list",
    data() {
        return {
            products: []
        };
    },
    
    methods: {
        retrieveProducts() {
            ProductDataService.getAll()
                .then(response => {
                    this.products = response.data;
                    console.log(this.products);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
    mounted() {
        this.retrieveProducts();
    }
};
</script>
