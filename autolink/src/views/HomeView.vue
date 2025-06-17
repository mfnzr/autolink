<template>
  <div class="home">
    <Header />
    <Navbar />
    <Carousel />
    <BrandsNav />
    <Searchbox />
    <CarCards />
    <ServicesSection />
  </div>
</template>

<script lang="ts">
import Searchbox from "../components/BrandsSection/Searchbox.vue";
import BrandsNav from "../components/BrandsSection/BrandsNav.vue";
import Carousel from "../components/Carousel/Carousel.vue";
import Header from "../components/Header/header.vue";
import Navbar from "../components/Header/navbar.vue";
import CarCards from "../components/CarCards/CarCards.vue";
import Footer from "../components/Footer/Footer.vue"
import ServicesSection from "@/components/ServicesSection/ServicesSection.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    Navbar,
    Carousel,
    BrandsNav,
    Searchbox,
    CarCards,
    Footer,
    ServicesSection,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  flex: 1; /* ocupa o espaço disponível */
}

.footer {
  margin-top: auto;
}
</style>