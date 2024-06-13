<template>
  <div>
    <Navbar />
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" id="email" required />
        </div>
        <div>
          <label for="password">Senha:</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Não tem uma conta? <router-link to="/criar">Crie uma conta</router-link></p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar
  },
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();

    const login = () => {
      alert('Usuário conectado'); 
      const data = {
        email: email.value,
        senha: password.value
      };

      axios.post('/api/user/login', data)
        .then((response) => {
          console.log('Login bem-sucedido:', response.data);
          router.push('/');
        })
        .catch((err) => {
          console.error('Erro ao fazer login:', err);
        });
    };

    return {
      email,
      password,
      login,
    };
  },
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #ffc107;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #e0a800;
}

p {
  text-align: center;
  margin-top: 15px;
}

a {
  color: #42b983;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
