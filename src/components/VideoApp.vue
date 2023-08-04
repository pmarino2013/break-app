<template>
  <video muted loop autoplay>
    <source :src="videoSelected" type="video/mp4" />
  </video>
</template>
<script setup>
import { ref, computed } from "vue";

const videos = ref([
  "/videos/dev1.mp4",
  "/videos/dev2.mp4",
  "/videos/dev3.mp4",
  "/videos/dev4.mp4",
]);

const videoSelected = computed(() => {
  let option = Math.round(Math.random() * 3);
  return videos.value[option];
});
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
