<template>
  <nav class="bg-secondary radious">
    <h3 class="text-primary text-center m-0 fs-6 fw-bold">
      ENCONTRE SEU VEÍCULO
    </h3>
    <div class="container-fluid p-3">
      <form class="d-flex" role="search">
        <div class="position-relative w-100 me-2">
          <font-awesome-icon
            icon="magnifying-glass"
            class="position-absolute top-50 start-0 translate-middle-y ps-3 text-muted"
          />
          <input
            class="form-control ps-5 bg-white"
            type="search"
            placeholder="Busque por marca ou modelo do carro"
            aria-label="Buscar"
          />
        </div>
        <button class="btn btn-outline-custom" type="submit">Buscar</button>
      </form>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Searchbox",
};
</script>

<style scoped>
.radious {
  margin: 0 50px;
}
.btn-outline-custom {
  color: #b32222;
  border: 1px solid #b32222;
  background-color: transparent;
  transition: background-color 0.3s, color 0.3s;
}

.btn-outline-custom:hover {
  background-color: #b32222;
  color: white;
}
</style>
