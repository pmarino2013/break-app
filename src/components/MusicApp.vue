<template>
  <audio
    ref="sound"
    class="margen"
    loop
    :src="musicSelected"
    type="audio/ogg"
  />
  <small class="derechos"
    ><i class="fa fa-music" aria-hidden="true"></i> {{ descripcion }}</small
  >
</template>
<script setup>
const props = defineProps({
  play: Boolean,
});
import { ref, onMounted, computed } from "vue";
import { musicArray } from "../helpers/arrayMusic";

const sound = ref(null);
const musica = ref(null);
const descripcion = ref("");
let cantidad = musicArray.length - 1;

const musicSelected = computed(() => {
  let opcion = Math.round(Math.random() * cantidad);
  descripcion.value = musicArray[opcion].derechos;
  return (musica.value = musicArray[opcion].track);
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
.derechos {
  position: fixed;
  right: 10px;
  bottom: 10px;
  color: rgb(138, 140, 141);
}
</style>
