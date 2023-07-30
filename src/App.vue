<script setup>
import { ref, watch, onMounted } from "vue";
import MusicApp from "./components/MusicApp.vue";
let initialValue = 0;
const tiempo = ref(5);
const counter = ref(initialValue);
const segundos = ref(0);
const boton = ref(true);
const onPlay = ref(false);

let countdown = null;

onMounted(() => {
  counter.value = Number(tiempo.value);
  segundos.value = 0;
});

watch(counter, (newCounter) => {
  // yes, console.log() is a side effect
  if (newCounter <= 0 && initialValue == 0) {
    clearInterval(countdown);
    onPlay.value = false;
    console.log("¡La cuenta regresiva ha terminado!");
    // counter.value = 0;
    initialValue = Number(tiempo.value);
    boton.value = true;
    // counter.value = 0;
  }
});

watch(segundos, (newSegundos) => {
  // yes, console.log() is a side effect
  if (newSegundos <= 0) {
    if (counter.value >= 0) {
      counter.value--;
    }
    initialValue--;
  }
});

watch(tiempo, (newTiempo) => {
  counter.value = Number(newTiempo);
});

const iniciarTiempo = () => {
  onPlay.value = true;
  boton.value = false;
  initialValue = Number(tiempo.value);
  counter.value = initialValue - 1;
  segundos.value = 59;
  countdown = setInterval(function () {
    if (segundos.value > 0) {
      segundos.value--;
    } else {
      segundos.value = 59;
    }
  }, 1000);
};

const detenerTiempo = () => {
  onPlay.value = false;
  counter.value = Number(tiempo.value) + 1;
  segundos.value = 0;
  boton.value = true;

  clearInterval(countdown);
};
</script>

<template>
  <!-- <input type="number" v-model="tiempo" /> -->
  <select v-model="tiempo" :disabled="!boton">
    <option value="1">1</option>

    <option value="5">5</option>
    <option value="10">10</option>
    <option value="15">15</option>
    <option value="20">20</option>
    <option value="25">25</option>
  </select>
  <h1>
    <span v-if="counter > 0">{{ counter > 9 ? counter : "0" + counter }}:</span
    >{{ segundos > 9 ? segundos : "0" + segundos }}
  </h1>
  <button @click="iniciarTiempo" :disabled="!boton">Iniciar</button>
  <button @click="detenerTiempo" :disabled="boton">Parar</button>
  <div v-if="onPlay">
    <MusicApp />
  </div>
</template>

<style scoped>
button {
  margin-left: 10px;
}
</style>
