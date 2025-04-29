<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-secondary w-100 m-0 p-0 px-5">
      <router-link class="nav-link text-primary" to="/">
        <img src="../../assets/autolink-logo.png" alt="Logo" width="90" height="84" class="d-inline-block align-text-top">
      </router-link>
      <button
        class="navbar-toggler me-3"
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
        <ul class="navbar-nav d-flex w-100 justify-content-between px-3">
          <li class="nav-item">
            <router-link class="nav-link text-primary" to="/">
              Veículos Disponíveis
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-primary" to="/register-new-car">
              Cadastrar novo veículo
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link text-primary" href="#">Veículos Vendidos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled text-primary" aria-disabled="true">AutoLink</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>


<script lang="ts">
export default {
  name: "Navbar",
  components: {},
};

</script>

<style scoped>
</style>