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
import axios from 'axios';
import { useStore } from '../../store';
import { computed, onMounted, ref } from 'vue';

interface Vehicle {
  category: string;
  brand: string;
  model: string;
  year: string;
  price: string;
  description: string;
  image: string;
}


export default {
  name: "CarCards",
  setup() {
    const vehicles= ref<Vehicle[]>([]);

    const fetchVehicles = async () => {
      try {
        const response = await axios.get<Vehicle[]>('http://localhost:3000/available-vehicles');
          vehicles.value = response.data
      } catch (error) {
        console.error('Erro ao buscar veículos:', error);
      }
    }

    onMounted(() => {
      fetchVehicles();
    })

    return {
      vehicles,
    };
  },
};
</script>

<style scoped>
.card-img-top {
  height: 250px;
  object-fit: cover;
}

.card {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
