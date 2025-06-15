<template>
    <div class="register-new-car">
      <Header />
      <Navbar />
      <FipeAPIForms />
      <Footer />
    </div>
  </template>
  
  <script lang="ts">
  import Header from "../components/Header/header.vue";
  import Navbar from "../components/Header/navbar.vue";
  import FipeAPIForms from "../components/Forms/FipeAPIForms.vue";
  import Footer from "../components/Footer/Footer.vue"

  export default {
    name: "FipeAPI",
    components: {
      Header,
      Navbar,
      FipeAPIForms,
      Footer
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