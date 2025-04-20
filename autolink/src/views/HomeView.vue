<template>
  <div class="home">
    <Header />
    <Navbar />
    <Carousel />
    <BrandsNav />
  </div>
</template>

<script lang="ts">
import BrandsNav from '../components/BrandsSection/BrandsNav.vue';
import Carousel from '../components/Carousel/Carousel.vue';
import Header from '../components/Header/header.vue';
import Navbar from '../components/Header/navbar.vue';


export default {
  name: 'HomeView',
  components: {
    Header,
    Navbar,
    Carousel,
    BrandsNav,
  }
}
</script>
