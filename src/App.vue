<template>
  <div id="preloader">
    <div class="spinner"></div>
  </div>
  <SiteHeader />
  <main>
    <HeroSection />
    <TrainingCarousel />
    <ServicesSection />
    <AboutSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>

<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import TrainingCarousel from './components/TrainingCarousel.vue'
import ServicesSection from './components/ServicesSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>
