<template>
  <div :class="['animate__animated', 'animate__fadeIn']">
    <div class="d-flex flex-wrap justify-content-center">
      <div
        v-for="(vehicle, index) in vehicles"
        :key="index"
        class="card"
        style="width: 18rem; margin: 3rem"
      >
        <img :src="vehicle.image" class="card-img-top" alt="Foto do veículo" />
        <div class="card-body">
          <div>
            <h5 class="card-title fw-bold">
              {{ vehicle.brand }} {{ vehicle.model }} {{ vehicle.year }}
            </h5>
          </div>
          <p class="card-text">
            {{ vehicle.description }}
          </p>
          <h5 class="card-price">{{ vehicle.price }}</h5>
          <a href="#" class="btn btn-primary">Ver mais detalhes</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { useStore } from "../../store";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

interface Vehicle {
  id: number;
  category: string;
  brand: string;
  model: string;
  year: string;
  price: string;
  description: string;
  image: string;
}

export default {
  name: "SoldCarCards",
  setup() {
    const vehicles = ref<Vehicle[]>([]);

    const fetchVehicles = async () => {
      try {
        const response = await axios.get<Vehicle[]>(
          "http://localhost:3000/sold-vehicles"
        );
        vehicles.value = response.data;
      } catch (error) {
        console.error("Erro ao buscar veículos:", error);
      }
    };

    onMounted(() => {
      fetchVehicles();
    });

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
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 450px;
  width: 18rem; 
}

.card-body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mark-sold-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  cursor: pointer;
}

.mark-sold-btn:hover {
  box-shadow: #333;
}
</style>
