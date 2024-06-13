<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <h2>Gerenciar Contas</h2>
      <div v-if="clientes.length > 0">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cliente in clientes" :key="cliente.id">
              <td>{{ cliente.id }}</td>
              <td>{{ cliente.email }}</td>
              <td>
                <button class="btn btn-sm btn-primary" @click="editarCliente(cliente)">Editar</button>
                <button class="btn btn-sm btn-danger" @click="deletarCliente(cliente.id)">Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <p>Sem contas criadas até o momento.</p>
      </div>

      <!-- Modal para editar cliente -->
      <div v-if="showModal" class="modal" tabindex="-1" style="display: block;">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Editar Cliente</h5>
              <button type="button" class="btn-close" @click="showModal = false"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="salvarCliente">
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" v-model="clienteAtual.email" required>
                </div>
                <div class="mb-3">
                  <label for="senha" class="form-label">Senha</label>
                  <input type="password" class="form-control" id="senha" v-model="clienteAtual.senha" required>
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
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';

const clientes = ref([]);
const showModal = ref(false);
const clienteAtual = ref({ id: null, email: '', senha: '' });

onMounted(() => {
  listarClientes();
});

const listarClientes = () => {
  axios.get('/api/user/listarClientes')
    .then((response) => {
      clientes.value = response.data.filter(cliente => cliente.email && cliente.senha); 
    })
    .catch((error) => {
      console.error('Erro ao listar clientes:', error);
    });
};

const editarCliente = (cliente) => {
  clienteAtual.value = { ...cliente };
  showModal.value = true;
};

const deletarCliente = (id) => {
  if (confirm('Tem certeza que deseja excluir esta conta?')) {
    axios.delete(`/api/user/deletarCliente/${id}`)
      .then(() => {
        listarClientes();
      })
      .catch((error) => {
        console.error('Erro ao deletar cliente:', error);
      });
  }
};

const salvarCliente = () => {
  axios.put(`/api/user/editarCliente/${clienteAtual.value.id}`, clienteAtual.value)
    .then(() => {
      listarClientes();
      showModal.value = false;
    })
    .catch((error) => {
      console.error('Erro ao editar cliente:', error);
    });
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
