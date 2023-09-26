<script>
    
</script>

<template>
    <div class='container'>
        <form>
  <div class="form-group my-4">
    <input type="email" class="form-control form-control-lg" id="loginEmail" aria-describedby="emailHelp" placeholder="Email">
  </div>
  <div class="form-group my-4">
    <input type="password" class="form-control form-control-lg" id="loginPassword" placeholder="Senha">
  </div>
  <div class="container-fluid">
      <router-link to='/dashboard'>
    <button type="submit" class="btn btn-primary btn-lg">Logar</button>
      </router-link>
    <router-link to='/register'>
        <button type="submit" class="btn btn-primary btn-lg mx-2">Registrar</button>
    </router-link>
  </div>
</form>
    </div>
</template>
