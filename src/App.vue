<script setup>
import { ref, watch, onMounted } from "vue";
import MusicApp from "./components/MusicApp.vue";
import VideoApp from "./components/VideoApp.vue";
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
  if (newCounter == 0 && initialValue == 1) {
    segundos.value = 59;
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

<template class="hero">
  <Transition>
    <VideoApp v-if="onPlay" />
  </Transition>
  <div class="content">
    <Transition>
      <select v-show="boton" v-model="tiempo" :disabled="!boton">
        <option value="1">1</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
        <option value="30">30</option>
      </select>
    </Transition>
    <h1>
      <span v-if="counter > 0" :class="counter < 2 && 'counter-class'">
        {{ counter > 9 ? counter : "0" + counter }}:</span
      ><span :class="counter < 2 && 'counter-class'">{{
        segundos > 9 ? segundos : "0" + segundos
      }}</span>
    </h1>
    <button v-if="boton" @click="iniciarTiempo" :disabled="!boton">
      <i class="fa fa-play fa-3x" aria-hidden="true"></i>
    </button>
    <button v-else @click="detenerTiempo" :disabled="boton">
      <i class="fa fa-stop fa-3x" aria-hidden="true"></i>
    </button>
    <div v-if="onPlay">
      <MusicApp />
    </div>
  </div>

  <div class="capa"></div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
button {
  margin-left: 10px;
}

.hero {
  min-height: 100vh;
  position: relative;
}

.content {
  position: relative;
  z-index: 2;
}

.capa {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #1c1c1d;
  opacity: 0.6;
  /* mix-blend-mode: overlay; */
}
.counter-class {
  color: rgb(245, 51, 51);
}
</style>
