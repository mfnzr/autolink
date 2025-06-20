<template>
  <div :class="['animate__animated', 'animate__fadeIn']">
    <div class="container-fluid p-5">
      <div class="radious overflow-hidden">
        <h3
          class="bg-primary text-secondary text-center p-2 m-0 fs-6 custom-title"
        >
          NAVEGUE POR NOSSAS MARCAS
        </h3>
        <ul class="nav justify-content-center bg-secondary p-4">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <img
                src="../../assets/brands/fiat.png"
                width="60"
                height="40"
                alt=""
              />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <img
                src="../../assets/brands/honda.png"
                width="60"
                height="40"
                alt=""
              />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <img
                src="../../assets/brands/ford.png"
                width="60"
                height="40"
                alt=""
              />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <img
                src="../../assets/brands/nissan.png"
                width="60"
                height="40"
                alt=""
              />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <img
                src="../../assets/brands/renault.png"
                width="60"
                height="40"
                alt=""
              />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <img
                src="../../assets/brands/hyundai.png"
                width="60"
                height="40"
                alt=""
              />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <img
                src="../../assets/brands/ram.png"
                width="60"
                height="40"
                alt=""
              />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <img
                src="../../assets/brands/jeep.png"
                width="60"
                height="40"
                alt=""
              />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <img
                src="../../assets/brands/peugeot.png"
                width="60"
                height="40"
                alt=""
              />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <img
                src="../../assets/brands/citroen.png"
                width="60"
                height="40"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "BrandsNav",
};
</script>

<style scoped>
.radious {
  border-radius: 10px 10px 0 0;
}
</style>
