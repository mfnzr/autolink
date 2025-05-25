<template>
    <div class="register-new-car">
      <Header />
      <Navbar />
      <FipeAPIForms />
    </div>
  </template>
  
  <script lang="ts">
  import Header from "../components/Header/header.vue";
  import Navbar from "../components/Header/navbar.vue";
  import FipeAPIForms from "../components/Forms/FipeAPIForms.vue";
  
  export default {
    name: "FipeAPI",
    components: {
      Header,
      Navbar,
      FipeAPIForms
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