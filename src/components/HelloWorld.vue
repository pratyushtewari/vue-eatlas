<template>
  <div>
    <img src="assets/eatlaslogo.svg" />
    <model-gltf
      @on-mousedown="onMouseDown($event)"
      src="assets/earthLowPoly.glb"
    ></model-gltf>
  </div>
</template>

<script>
  import { ModelGltf } from "vue-3d-model";
  export default {
    name: "hello",
    components: {
      ModelGltf
    },
    methods: {
      onMouseDown: function(event) {
        console.log(event);
      }
    }
  };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
