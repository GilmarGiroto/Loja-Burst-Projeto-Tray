<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <h2>Gerenciar Produtos</h2>
      <button class="btn btn-primary mb-3" @click="adicionarProduto">Adicionar Produto</button>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Subcategoria</th>
            <th>Valor</th>
            <th>Estoque</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="produto in produtos.items" :key="produto.id">
            <td>{{ produto.nome }}</td>
            <td>{{ produto.categoria }}</td>
            <td>{{ produto.subcategoria }}</td>
            <td>R$ {{ produto.valor.toFixed(2) }}</td>
            <td>{{ produto.quantidadeEstoque }}</td>
            <td>
              <button class="btn btn-sm btn-primary" @click="editarProduto(produto.id)">Editar</button>
              <button class="btn btn-sm btn-danger" @click="excluirProduto(produto.id)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Modal para adicionar produto -->
      <div v-if="showModal" class="modal" tabindex="-1" style="display: block;">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Adicionar Produto</h5>
              <button type="button" class="btn-close" @click="showModal = false"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="salvarProduto">
                <div class="mb-3">
                  <label for="nome" class="form-label">Nome</label>
                  <input type="text" class="form-control" id="nome" v-model="newProduct.nome" required>
                </div>
                <div class="mb-3">
                  <label for="categoria" class="form-label">Categoria</label>
                  <input type="text" class="form-control" id="categoria" v-model="newProduct.categoria" required>
                </div>
                <div class="mb-3">
                  <label for="subcategoria" class="form-label">Subcategoria</label>
                  <input type="text" class="form-control" id="subcategoria" v-model="newProduct.subcategoria" required>
                </div>
                <div class="mb-3">
                  <label for="valor" class="form-label">Valor</label>
                  <input type="number" step="0.01" class="form-control" id="valor" v-model="newProduct.valor" required>
                </div>
                <div class="mb-3">
                  <label for="quantidadeEstoque" class="form-label">Estoque</label>
                  <input type="number" class="form-control" id="quantidadeEstoque" v-model="newProduct.quantidadeEstoque" required>
                </div>
                <button type="submit" class="btn btn-primary">Salvar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import ProductDataService from '@/services/ProductDataService';
import Navbar from '@/components/Navbar.vue';

const produtos = reactive({ items: [] });
const showModal = ref(false);
const newProduct = ref({
    nome: '',
    categoria: '',
    subcategoria: '',
    valor: 0,
    quantidadeEstoque: 0,
});
const router = useRouter();

onMounted(() => {
    loadProducts();
});

const loadProducts = () => {
    ProductDataService.getAll()
        .then((response) => {
            produtos.items = response.data;
        })
        .catch((error) => {
            console.error("Falha ao exibir produtos:", error);
        });
};

const editarProduto = (id) => {
    router.push({ path: '/editar', query: { id } });
};

const excluirProduto = (id) => {
    ProductDataService.delete(id)
        .then(() => {
            const index = produtos.items.findIndex(produto => produto.id === id);
            if (index !== -1) {
                produtos.items.splice(index, 1);
            }
        })
        .catch((error) => {
            console.error("Falha ao excluir produto:", error);
        });
};

const adicionarProduto = () => {
    showModal.value = true;
};

const salvarProduto = () => {
    console.log("Novo produto:", newProduct.value);

    // Envia os dados para o backend
    axios.post('api/Produtos/adicionarProduto', {
        imagem: 'URL_da_imagem',
        nome: newProduct.value.nome,
        categoria: newProduct.value.categoria,
        subcategoria: newProduct.value.subcategoria,
        descricao: '',
        valor: newProduct.value.valor,
        quantidadeEstoque: newProduct.value.quantidadeEstoque
    })
    .then((response) => {
        console.log("Produto adicionado com sucesso:", response.data);
        produtos.items.push(response.data);
        showModal.value = false;
        resetNewProduct();
    })
    .catch((error) => {
        console.error("Erro ao adicionar produto:", error.response.data);
    });
};

const resetNewProduct = () => {
    newProduct.value = {
        nome: '',
        categoria: '',
        subcategoria: '',
        valor: 0,
        quantidadeEstoque: 0,
    };
};
</script>

<style scoped>
.container {
    margin-top: 2rem;
}

h2 {
    margin-bottom: 1.5rem;
}

.table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
}

.btn {
    margin-right: 0.5rem;
}

.modal {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-dialog {
    max-width: 500px;
}
</style>
