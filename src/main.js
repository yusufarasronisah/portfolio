import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

createApp(App).mount('#app')

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active')
    }
  })
})

setTimeout(() => {
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
}, 300)
