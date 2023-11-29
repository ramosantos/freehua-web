<template>
  <div class="container-fluid border rounded border-secondary p-4">
    <form>
      <h2>Cadastro</h2>
      <div class="form-group my-4">
        <input
          type="text"
          class="form-control form-control-lg"
          v-model="username"
          placeholder="Nome de usuário"
        />
      </div>
      <div class="form-group my-4">
        <input
          type="email"
          class="form-control form-control-lg"
          v-model="email"
          placeholder="Email"
        />
      </div>
      <div class="form-group my-4">
        <input
          type="password"
          class="form-control form-control-lg"
          v-model="password"
          placeholder="Senha"
        />
      </div>
      <div class="form-group my-4">
        <input
          v-model="confirmation"
          type="password"
          class="form-control form-control-lg"
          placeholder="Confirme senha"
        />
      </div>
      <div class="form-check mb-4">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="rightsCheck"
          v-model="agreed"
        />
        <label class="form-check-label" for="rightsCheck">
          Eu li e aceito
          <router-link to="/policy"> os termos de uso do Freehua </router-link>
        </label>
      </div>
      <div class="container-fluid">
        <button
          @click.prevent="submit"
          type="submit"
          class="btn btn-primary btn-lg"
        >
          Simbora!
        </button>
        <router-link to="/login">
          <button type="submit" class="btn btn-secondary btn-md ms-4">
            Voltar
          </button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { registerUser } from "../components/Logger.js";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmation: "",
      agreed: false,
    };
  },
  methods: {
    async submit() {
      if (this.confirmation !== this.password) {
        alert("Senhas não condizem");
        return null;
      }

      if (!this.agreed) {
        alert("Aceite os termos de uso para se cadastrar");
        return null;
      }

      if ((this.email == "") | (this.password == "") | (this.username == "")) {
        alert("Preencha tudo");
        return null;
      }

      try {
        const user = await registerUser(
          this.email,
          this.password,
          this.username,
        );
        if (user) {
          this.$router.push("/login");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
