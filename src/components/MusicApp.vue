<template>
  <audio
    ref="sound"
    class="margen"
    loop
    :src="musicSelected"
    type="audio/mp3"
  />
</template>
<script setup>
const props = defineProps({
  play: Boolean,
});
import { ref, onMounted, computed } from "vue";
import musica1 from "/music/music01.mp3";
import musica2 from "/music/music02.mp3";

const sound = ref(null);
const musica = ref(musica1);

const musicArray = ref([musica1, musica2]);

const musicSelected = computed(() => {
  // let opcion = Math.ceil(Math.random() * 2);
  let opcion = Math.round(Math.random() * 1);

  return (musica.value = musicArray.value[opcion]);
});

//   switch (opcion) {
//     case 1:
//       return (musica.value = musica1);
//     case 2:
//       return (musica.value = musica2);
//   }
// });
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
