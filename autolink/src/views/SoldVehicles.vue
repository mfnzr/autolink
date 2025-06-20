<template>
    <div class="register-new-car">
      <Header />
      <Navbar />
      <SoldCarCards />
      <Footer />
    </div>
  </template>
  
  <script lang="ts">
  import Header from "../components/Header/header.vue";
  import Navbar from "../components/Header/navbar.vue";
  import Footer from "../components/Footer/Footer.vue"
import { useRoute } from "vue-router";
import { ref } from "vue";
import SoldCarCards from '../components/CarCards/SoldCarCards.vue';

  export default {
    name: "SoldVehicles",
    components: {
      Header,
      Navbar,
      Footer,
      SoldCarCards
    },
    setup() {
        const route = useRoute();
        const soldVehicles = ref(history.state?.SoldVehicles || []);

        return {
            soldVehicles
        }
    }
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