<template>
  <audio ref="sound" class="margen" loop :src="musica" type="audio/mp3" />
</template>
<script setup>
const props = defineProps({
  play: Boolean,
});
import { ref, onMounted } from "vue";
import musica from "../assets/music01.mp3";
const sound = ref(null);
function playMusic() {
  sound.value.play();
}

onMounted(() => {
  playMusic();
});
</script>
<style scope>
.margen {
  margin-top: 10px;
}
</style>
