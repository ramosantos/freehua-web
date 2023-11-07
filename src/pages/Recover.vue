<template>
  <div class="container-fluid border rounded border-secondary p-4">
    <form>
      <h2>Recuperação</h2>
      <div class="form-group my-4">
        <input
          type="email"
          class="form-control form-control-lg"
          v-model="email"
          placeholder="Email"
        />
      </div>
      <div class="container-fluid">
        <button
          type="submit"
          class="btn btn-primary btn-lg"
          @click.prevent="submit"
        >
          Enviar recuperação
        </button>
        <router-link to="/login">
          <button class="btn btn-lg btn-secondary ms-2">Voltar</button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script setup></script>

<script>
import { recoverUser } from "../components/Logger.js";

export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async submit() {
      if (this.email === "") {
        alert("Preencha tudo");
        return;
      }
      try {
        const recovery = await recoverUser(this.email);
        console.log(recovery);
        if (recovery !== null) {
          alert("Email de recuperação enviado");
          this.$router.push("/login");
        }
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>
