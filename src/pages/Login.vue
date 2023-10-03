<template>
  <div class='container'>
    <form>
      <div class="form-group my-4">
        <input type="email" class="form-control form-control-lg" v-model="email" placeholder="Email">
      </div>
      <div class="form-group my-4">
        <input type="password" class="form-control form-control-lg" v-model="password" placeholder="Senha">
      </div>
      <div class="container-fluid">
        <button type="submit" class="btn btn-primary btn-lg" @click.prevent="submit">Logar</button>
        <router-link to='/register'>
          <button type="submit" class="btn btn-primary btn-lg mx-2">Registrar</button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
  import { logUser } from '../components/Logger.js';

  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
        async submit() {
            const user = await logUser(this.email, this.password);
            if (user) {
                this.$router.push('/dashboard');
            }
        }
    }
  }
</script>

