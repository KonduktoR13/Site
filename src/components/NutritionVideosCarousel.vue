<template>
  <section class="section">
    <div class="card">
      <div class="nutrition-videos-carousel">
        <button class="carousel-arrow prev" @click="prev" aria-label="Eelmine video">
          <span class="material-icons-round">chevron_left</span>
        </button>
        <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div v-for="(v, i) in videos" :key="i" class="video-slot">
            <!-- Video player will be inserted here -->
          </div>
        </div>
        <button class="carousel-arrow next" @click="next" aria-label="Järgmine video">
          <span class="material-icons-round">chevron_right</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const videos = []
const currentIndex = ref(0)
const total = videos.length

function next() {
  if (!total) return
  currentIndex.value = (currentIndex.value + 1) % total
}

function prev() {
  if (!total) return
  currentIndex.value = (currentIndex.value - 1 + total) % total
}
</script>

<style scoped>
.nutrition-videos-carousel { position: relative; overflow: hidden; }
.nutrition-videos-carousel .carousel-track { display: flex; transition: transform 0.4s ease; }
.nutrition-videos-carousel .video-slot { flex: 0 0 100%; display: flex; justify-content: center; align-items: center; }
.nutrition-videos-carousel iframe,
.nutrition-videos-carousel video { max-width: 100%; border-radius: 10px; }
</style>

