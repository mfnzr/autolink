<template>
  <div>
    <router-view/>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
}
</script>

<style>

#app {
  background-color: #f2f2f2;
  min-height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
