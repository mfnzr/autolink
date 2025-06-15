<template>
  <div class="register-new-car">
    <Header />
    <Navbar />
    <VehicleRegistrationForm />
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from "../components/Header/header.vue";
import Navbar from "../components/Header/navbar.vue";
import VehicleRegistrationForm from "../components/Forms/VehicleRegistrationForm.vue";
import Footer from "../components/Footer/Footer.vue"

export default {
  name: "RegisterNewVehicleView",
  components: {
    Header,
    Navbar,
    VehicleRegistrationForm,
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