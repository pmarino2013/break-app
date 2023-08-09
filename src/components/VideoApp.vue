<template>
  <video muted loop autoplay>
    <source :src="videoSelected" type="video/mp4" />
  </video>
</template>
<script setup>
import { computed } from "vue";

import { videos } from "../helpers/arrayVideos";

let cantidadVideo = videos.length - 1;
const videoSelected = computed(() => {
  let option = Math.round(Math.random() * cantidadVideo);

  return videos[option];
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
