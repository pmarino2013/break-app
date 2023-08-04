<template>
  <audio
    ref="sound"
    class="margen"
    loop
    :src="musicSelected"
    type="audio/ogg"
  />
</template>
<script setup>
const props = defineProps({
  play: Boolean,
});
import { ref, onMounted, computed } from "vue";
import { musicArray } from "../helpers/arrayMusic";

const sound = ref(null);
const musica = ref(null);
let cantidad = musicArray.length - 1;

const musicSelected = computed(() => {
  let opcion = Math.round(Math.random() * cantidad);
  return (musica.value = musicArray[opcion]);
});

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
