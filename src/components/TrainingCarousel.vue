<template>
  <section class="section">
    <div class="training-carousel">
      <button class="carousel-arrow prev" @click="prev" aria-label="Eelmine treening">
        <span class="material-icons-round">chevron_left</span>
      </button>
      <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <TrainingCard v-for="(t, i) in trainings" :key="i" :training="t" />
      </div>
      <button class="carousel-arrow next" @click="next" aria-label="Järgmine treening">
        <span class="material-icons-round">chevron_right</span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import TrainingCard from './TrainingCard.vue'

const trainings = [
  { title: 'Jõutreening', description: 'Paranda lihasjõudu ja vastupidavust.' },
  { title: 'Jooga', description: 'Tugevdab keha ja meelt.' },
  { title: 'Kardio', description: 'Tõstab pulssi ja põletab kaloreid.' }
]

const currentIndex = ref(0)
const total = trainings.length

function next() {
  currentIndex.value = (currentIndex.value + 1) % total
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + total) % total
}
</script>
