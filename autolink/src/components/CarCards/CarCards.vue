<template>
    <div :class="['animate__animated', 'animate__fadeIn']">
  <div class="d-flex flex-wrap justify-content-center">
    <div
      v-for="(vehicle, index) in vehicles"
      :key="index"
      class="card m-5"
    >
    <img
      :src="vehicle.image"
      class="card-img-top"
      alt="Foto do veículo"
    />
    <button
      class="mark-sold-btn btn border-3 rounded-circle bg-secondary"
      @click="markAsSold(vehicle)"
    >
      <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 2.36493V8.17341C0 8.83391 0.245057 9.4672 0.683964 9.93344L7.12127 16.7715C8.03566 17.7428 9.51697 17.7428 10.4314 16.7715L15.3142 11.5847C16.2286 10.6134 16.2286 9.03982 15.3142 8.06851L8.8769 1.23043C8.43799 0.764198 7.84181 0.503885 7.22002 0.503885L1.75563 0.5C0.786376 0.5 0 1.33533 0 2.36493ZM4.09647 3.60822C4.40688 3.60822 4.70458 3.7392 4.92408 3.97237C5.14358 4.20553 5.26689 4.52176 5.26689 4.8515C5.26689 5.18124 5.14358 5.49748 4.92408 5.73064C4.70458 5.9638 4.40688 6.09479 4.09647 6.09479C3.78605 6.09479 3.48835 5.9638 3.26886 5.73064C3.04936 5.49748 2.92605 5.18124 2.92605 4.8515C2.92605 4.52176 3.04936 4.20553 3.26886 3.97237C3.48835 3.7392 3.78605 3.60822 4.09647 3.60822Z" fill="#B32222"/>
      </svg>      

      <span class="custom-tooltip">Marcar como vendido</span>
    </button>
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
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

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
  name: "CarCards",
  setup() {
    const vehicles= ref<Vehicle[]>([]);
    const router = useRouter()

    const fetchVehicles = async () => {
      try {
        const response = await axios.get<Vehicle[]>('http://localhost:3000/available-vehicles');
          vehicles.value = response.data
      } catch (error) {
        console.error('Erro ao buscar veículos:', error);
      }
    }

    const markAsSold = async (vehicle: Vehicle) => {
      try {
        await axios.delete(`http://localhost:3000/available-vehicles/${vehicle.id}`)
        await axios.post('http://localhost:3000/sold-vehicles', vehicle)

        vehicles.value = vehicles.value.filter(v => v.id !== vehicle.id);

        toast.success(`Veículo ${vehicle.brand} ${vehicle.model} definido como vendido`)
      } catch (error) {
        console.error('Erro ao marcar como vendido:', error);
      }
    }

    onMounted(() => {
      fetchVehicles();
    })

    return {
      vehicles,
      markAsSold
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
  background-color: #b32222 !important;
}

.mark-sold-btn:hover svg path {
  fill: #fff;
}

.custom-tooltip {
  visibility: hidden;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 2px 6px;
  border-radius: 4px;
  position: absolute;
  z-index: 1;
  top: -30px;
  left: 10px;
  font-size: clamp(0.6rem, 1vw + 0.4rem, 0.9rem);
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s;
}

.mark-sold-btn:hover .custom-tooltip {
  visibility: visible;
  opacity: 1;
}

</style>
