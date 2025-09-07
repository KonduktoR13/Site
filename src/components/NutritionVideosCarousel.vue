<template>
  <section class="section" v-if="videos.length">
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
  <p v-else>Нет доступных видео.</p>
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
