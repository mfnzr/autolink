<template>
  <div class="register-new-car">
    <Header />
    <Navbar />
    <div class="container-fluid p-5 ">
      <h3 class="
                bg-primary
                text-secondary
                text-center
                p-2 m-0 fs-6
                custom-title"
            >VALOR DA FIPE
        </h3>
        <div class="radious overflow-hidden justify-content-center bg-secondary p-4">
          <h6 class="text-primary text-center p-4">Consulte o valor da tabela  FIPE do novo veículo para definir um valor para venda</h6>
          <label for="form-select" class="text-primary">Categoria</label>
          <select class="form-select bg-secondary" aria-label="Default select example">
            <option selected>Selecione a categoria</option>
            <option value="1">{{ categoria }}</option>
          </select>

          <label for="form-select" class="text-primary">Marca</label>
          <select class="form-select bg-secondary" aria-label="Default select example">
            <option selected>Selecione uma marca</option>
            <option value="1">{{ marca }}</option>
          </select>
          
          <label for="form-select" class="text-primary">Modelo</label>
          <select class="form-select bg-secondary" aria-label="Default select example">
            <option selected>Selecione um modelo</option>
            <option value="1">{{ modelo }}</option>
          </select>

          <label for="form-select" class="text-primary">Ano</label>
          <select class="form-select bg-secondary" aria-label="Default select example">
            <option selected>Selecione o ano</option>
            <option value="1">{{ ano }}</option>
          </select>

          <span class="text-primary d-grid col-3 mx-auto p-4 fw-bold">R$ {{ valor }}</span>

        <div class="d-grid gap-2 col-3 mx-auto">
          <button class="btn btn-primary" type="button">Continuar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Header from "../components/Header/header.vue";
import Navbar from "../components/Header/navbar.vue";

export default {
  name: "RegisterNewCar",
  components: {
    Header,
    Navbar,
  },
};

</script>

<style scoped>
.radious {
  border-radius: 0 0 10px 10px;
}
.custom-title {
  border-radius: 10px 10px 0 0;
}
</style>