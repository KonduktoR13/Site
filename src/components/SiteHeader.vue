<template>
  <header class="site-header">
    <nav class="nav" :aria-expanded="isMenuOpen">
      <div class="logo">MinuTrenn</div>
      <input id="menu-toggle" type="checkbox" v-model="isMenuOpen" />
      <label
        class="menu-button-container"
        for="menu-toggle"
        aria-label="Ava menüü"
        :aria-expanded="isMenuOpen"
      >
        <div class="menu-button"></div>
      </label>
      <ul class="menu">
        <li><a href="#services">Teenused</a></li>
        <li><a href="#about">Meist</a></li>
        <li><a href="#contact">Kontakt</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>
