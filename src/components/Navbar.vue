<template>
  <nav class="navbar navbar-expand-sm bg-body-tertiary fixed-top">
    <div class="container-fluid">
        <router-link to='/'>
      <a class="navbar-brand" href="#">Freehua</a>
        </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Início</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Aplicativo</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sobre</a>
          </li>
        </ul>
        <div class='container d-flex justify-content-end'>
        <router-link to="/login">
          <button type="button" class="btn btn-primary ms-auto">Entrar</button>
        </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
