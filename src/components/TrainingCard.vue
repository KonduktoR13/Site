<template>
  <div class="card training-card">
    <h3>{{ training.title }}</h3>
    <p>{{ training.description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  training: {
    type: Object,
    required: true
  }
})
</script>
