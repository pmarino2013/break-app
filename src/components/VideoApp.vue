<template>
  <video muted loop autoplay>
    <source :src="videito" type="video/mp4" />
  </video>
</template>
<script setup>
import { ref, onMounted } from "vue";
const videito = ref(null);
onMounted(() => {
  videoRandom();
});
function videoRandom() {
  let opcion = Math.ceil(Math.random() * 4);

  switch (opcion) {
    case 1:
      videito.value = "/videos/dev1.mp4";
      break;
    case 2:
      videito.value = "/videos/dev2.mp4";
      break;
    case 3:
      videito.value = "/videos/dev3.mp4";
      break;
    case 4:
      videito.value = "/videos/dev4.mp4";
      break;
  }
}
</script>
<style scope>
video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
