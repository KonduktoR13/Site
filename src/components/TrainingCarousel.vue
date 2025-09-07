<template>
  <section class="section" v-if="trainings.length">
    <Carousel class="training-carousel" :items="trainings">
      <template #default="{ item }">
        <TrainingCard :training="item" />
      </template>
    </Carousel>
  </section>
  <p v-else>Нет доступных тренировок.</p>
</template>

<script setup>
import TrainingCard from './TrainingCard.vue'
import Carousel from './Carousel.vue'

const trainings = [
  { title: 'Jõutreening', description: 'Paranda lihasjõudu ja vastupidavust.' },
  { title: 'Jooga', description: 'Tugevdab keha ja meelt.' },
  { title: 'Kardio', description: 'Tõstab pulssi ja põletab kaloreid.' }
]
</script>
