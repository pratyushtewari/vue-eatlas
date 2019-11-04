<template>
  <model-gltf 
    :backgroundAlpha="1" 
    @on-load="onLoad" 
    src="assets/earthLowPoly.glb">
  </model-gltf>
</template>

<script>
import { ModelGltf } from "vue-3d-model";

export default {
  name: "demo-gltf",
  data() {
    return {
      loading: true
    };
  },
  methods: {
    onLoad() {
      this.loading = false;
    }
  },
  components: {
    ModelGltf
  }
};
</script>
