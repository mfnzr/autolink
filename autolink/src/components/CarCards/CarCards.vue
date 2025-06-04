<template>
  <div class="d-flex flex-wrap justify-content-center">
    <div
      v-for="(vehicle, index) in vehicles"
      :key="index"
      class="card"
      style="width: 18rem; margin: 3rem;"
    >
    <img
      :src="vehicle.image"
      class="card-img-top"
      alt="Foto do veículo"
    />
    <div class="card-body">
      <div>
        <h5 class="card-title fw-bold">{{  vehicle.brand }} {{ vehicle.model }} {{ vehicle.year }}</h5>
    </div>
    <p class="card-text">
        {{vehicle.description}}
    </p>
    <h5 class="card-price">{{ vehicle.price }}</h5>
    <a href="#" class="btn btn-primary">Ver mais detalhes</a>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from '../../store';
import { computed } from 'vue';

export default {
  name: "CarCards",
  setup() {
    const vehicleStore = useStore();
    const vehicles = computed(() => vehicleStore.vehicles);

    return {
      vehicles,
    };
  },
};
</script>

<style scoped>
.card-img-top {
  height: 250px; /* altura fixa da imagem */
  object-fit: cover; /* corta e preenche proporcionalmente */
}

.card {
  height: 100%; /* força os cards a terem mesma altura se usado com layout adequado */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-body {
  flex-grow: 1; /* preenche o espaço restante do card */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
