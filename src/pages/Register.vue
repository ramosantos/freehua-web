<template>
 <div class='container'>
        <form>
  <div class="form-group my-4">
    <input type="email" class="form-control form-control-lg" v-model="email" placeholder="Email">
  </div>
  <div class="form-group my-4">
    <input type="password" class="form-control form-control-lg" v-model="password" placeholder="Senha">
  </div>
 <div class="form-group my-4">
    <input v-model="confirmation" type="password" class="form-control form-control-lg"  placeholder="Confirme senha">
  </div>
  <div class="container-fluid">
    <button @click.prevent="submit" type="submit" class="btn btn-primary btn-lg">Simbora!</button>
  </div>
</form>
    </div>
</template>

<script>
import { registerUser } from '../components/Logger.js';

  export default {
    data() {
      return {
        email: '',
        password: '',
        confirmation: ''
      };
    },
    methods: {
        submit() {
            if (this.confirmation !== this.password) {
                alert('Senhas não condizem');
                return null;
            }

            if (this.email == '' | this.password == '') {
                alert('Preencha tudo');
                return null;
            }

            const user = registerUser(this.email, this.password);
            if (user) {
                this.$router.push('/login');
            }
        }
    }
  }

</script>
