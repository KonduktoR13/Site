<template>
  <div class="carousel">
    <button class="carousel-arrow prev" @click="prev" aria-label="Previous">
      <span class="material-icons-round">chevron_left</span>
    </button>
    <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(item, i) in items" :key="i" class="carousel-item">
        <slot :item="item" :index="i" />
      </div>
    </div>
    <button class="carousel-arrow next" @click="next" aria-label="Next">
      <span class="material-icons-round">chevron_right</span>
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})

const currentIndex = ref(0)
const total = computed(() => props.items.length)

function next() {
  if (!total.value) return
  currentIndex.value = (currentIndex.value + 1) % total.value
}

function prev() {
  if (!total.value) return
  currentIndex.value = (currentIndex.value - 1 + total.value) % total.value
}
</script>

<style scoped>
.carousel { position: relative; overflow: hidden; }
.carousel-track { display: flex; transition: transform 0.4s ease; }
.carousel-item { flex: 0 0 100%; }
</style>
