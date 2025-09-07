import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'

const app = createApp(App)
app.mount('#app')

window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader')
  if (preloader) preloader.remove()

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register(`${import.meta.env.BASE_URL}service-worker.js`, { scope: import.meta.env.BASE_URL })
      .then(() => console.log('Service Worker registered'))
      .catch(err => console.error('SW registration failed:', err))
  }
})

document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]')
  if (!a) return
  const id = a.getAttribute('href').slice(1)
  const el = document.getElementById(id)
  if (el) {
    e.preventDefault()
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
})
