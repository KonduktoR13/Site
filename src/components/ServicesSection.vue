<template>
  <section id="services" class="section">
    <h2>Teenused</h2>
    <div class="cards">
      <article
        v-for="service in services"
        :key="service.title"
        class="card"
      >
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Personaaltrenn',
    description: 'Ühele inimesele kohandatud treeningkava ja tugi.'
  },
  {
    title: 'Rühmatrennid',
    description: 'Motiveeriv treening väikestes gruppides.'
  },
  {
    title: 'Toitumisnõustamine',
    description: 'Lihtsad sammud paremate toitumisharjumusteni.'
  }
]
</script>
