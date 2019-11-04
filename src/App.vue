<template>
  <div id="app">
    <model-gltf src="assets/earthLowPoly.glb"></model-gltf>
  </div>
</template>

<script>
import { ModelGltf } from 'vue-3d-model'
export default {
  name: 'app',
  components: {
    ModelGltf
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
