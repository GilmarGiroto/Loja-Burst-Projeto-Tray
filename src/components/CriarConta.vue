<template>
  <div>
    <Navbar />
    <div class="signup">
      <h2>Criar Conta</h2>
      <form @submit.prevent="signup">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="email" id="email" required />
        </div>
        <div class="form-group">
          <label for="password">Senha:</label>
          <input type="password" v-model="senha" id="password" required />
        </div>
        <button type="submit">Criar Conta</button>
      </form>
      <p>Já tem uma conta? <router-link to="/login">Faça login</router-link></p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import UserDataService from '@/services/UserDataService';
import Navbar from './Navbar.vue'; 

export default {
  components: {
    Navbar 
  },

  setup() {
    const email = ref('');
    const senha = ref('');
    const router = useRouter();

    const signup = () => {
      UserDataService.create({ Email: email.value, Senha: senha.value })
        .then((response) => {
          console.log('Resposta do servidor:', response.data);
          alert('Conta Criada com Sucesso!');
          router.push('/login');
        })
        .catch((err) => {
          console.error('Erro ao criar conta:', err);
        });
    };

    return {
      email,
      senha,
      signup,
    };
  },
};
</script>

<style scoped>
.signup {
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 25px;
}

h2 {
  text-align: center;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 0.5rem;
  background-color: #ffc107;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #e0a800;
}

p {
  text-align: center;
  margin-top: 1rem;
}
</style>
