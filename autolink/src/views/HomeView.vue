<template>
  <div class="home">
    <Header />
    <Navbar />
    <Carousel />
    <BrandsNav />
    <Searchbox />
    <CarCards />
  </div>
</template>

<script lang="ts">
import Searchbox from "../components/BrandsSection/Searchbox.vue";
import BrandsNav from "../components/BrandsSection/BrandsNav.vue";
import Carousel from "../components/Carousel/Carousel.vue";
import Header from "../components/Header/header.vue";
import Navbar from "../components/Header/navbar.vue";
import CarCards from "../components/CarCards/CarCards.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    Navbar,
    Carousel,
    BrandsNav,
    Searchbox,
    CarCards,
  },
};
</script>
