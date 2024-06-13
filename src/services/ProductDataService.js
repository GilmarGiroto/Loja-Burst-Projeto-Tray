import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:5057/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default {
    getAll() {
        return apiClient.get('/Produtos/exibirProdutos');
    },
    get(id) {
        return apiClient.get(`/Produtos/exibirProduto/${id}`);
    },
    create(data) {
        return apiClient.post('/Produtos/adicionarProduto', data);
    },
    update(id, data) {
        return apiClient.put(`/Produtos/updateProduto/${id}`, data);
    },
    delete(id) {
        return apiClient.delete(`/Produtos/deleteProduto/${id}`);
    }
};
