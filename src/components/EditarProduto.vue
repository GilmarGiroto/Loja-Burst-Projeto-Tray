<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ProductDataService from '@/services/ProductDataService';

const route = useRoute();
const router = useRouter();
const id = route.query.id;

const produto = ref({});
const loading = ref(true);
const error = ref('');

onMounted(() => {
    ProductDataService.getAll()
        .then((response) => {
            produto.value = response.data.find(p => p.id == id);
            if (!produto.value) {
                error.value = 'Produto não encontrado';
            }
        })
        .catch((err) => {
            console.error("Failed to fetch product:", err);
            error.value = 'Erro ao buscar o produto';
        })
        .finally(() => {
            loading.value = false;
        });
});

const salvarProduto = () => {
    var data = {
        id: id,
        imagem: produto.value.imagem,
        nome: produto.value.nome,
        categoria: produto.value.categoria,
        subcategoria: produto.value.subcategoria,
        descricao: produto.value.descricao,
        valor: produto.value.valor,
        quantidadeEstoque: produto.value.quantidadeEstoque
    };

    ProductDataService.update(id, data)
        .then(() => {
            console.log('Produto salvo:', data);
            router.push('/gerenciar');
        })
        .catch((err) => {
            console.error('Erro ao salvar produto:', err);
        });
};
</script>

<template>
    <div class="container mt-5">
        <h2>Editar Produto</h2>
        <div v-if="loading">Carregando...</div>
        <div v-else-if="error">{{ error }}</div>
        <form v-else @submit.prevent="salvarProduto">
            <div class="form-group">
                <label for="nome">Nome</label>
                <input type="text" v-model="produto.nome" class="form-control" id="nome" required>
            </div>
            <div class="form-group">
                <label for="categoria">Categoria</label>
                <input type="text" v-model="produto.categoria" class="form-control" id="categoria" required>
            </div>
            <div class="form-group">
                <label for="subcategoria">Subcategoria</label>
                <input type="text" v-model="produto.subcategoria" class="form-control" id="subcategoria" required>
            </div>
            <div class="form-group">
                <label for="valor">Valor</label>
                <input type="number" v-model.number="produto.valor" class="form-control" id="valor" step="0.01" required>
            </div>
            <div class="form-group">
                <label for="quantidade_estoque">Quantidade em Estoque</label>
                <input type="number" v-model.number="produto.quantidadeEstoque" class="form-control" id="quantidade_estoque" required>
            </div>
            <button type="submit" class="btn btn-primary">Salvar</button>
        </form>
    </div>
</template>

<style scoped>
.container {
    margin-top: 2rem;
}

h2 {
    margin-bottom: 1.5rem;
}

.form-group {
    margin-bottom: 1rem;
}
</style>
