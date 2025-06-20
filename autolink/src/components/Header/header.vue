<template>
  <div :class="['animate__animated', 'animate__fadeIn']">
    <div class="container-fluid p-0">
      <h3
        class="bg-primary text-secondary text-center p-1 m-0 fs-6 custom-title"
      >
        CONTE COM QUEM ENTENDE DE CARROS
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.custom-title {
  font-size: 14px;
}
</style>
