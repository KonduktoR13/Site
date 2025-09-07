<template>
  <section class="section">
    <Carousel class="other-training-carousel" :items="trainings">
      <template #default="{ item }">
        <TrainingCard :training="item" />
      </template>
    </Carousel>
  </section>
</template>

<script setup>
import TrainingCard from './TrainingCard.vue'
import Carousel from './Carousel.vue'

const trainings = []
</script>
