<template>
  <section class="section">
    <div class="card">
      <Carousel class="nutrition-videos-carousel" :items="videos">
        <template #default="{ item }">
          <div class="video-slot">
            <!-- Video player will be inserted here -->
          </div>
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup>
import Carousel from './Carousel.vue'

const videos = []
</script>

<style scoped>
.video-slot { flex: 0 0 100%; display: flex; justify-content: center; align-items: center; }
iframe,
video { max-width: 100%; border-radius: 10px; }
</style>
