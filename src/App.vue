<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-950 text-gray-100 font-sans overflow-x-hidden">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>


<style scoped>
@keyframes fade-up {
from { opacity: 0; transform: translateY(24px); }
to { opacity: 1; transform: translateY(0); }
}


.reveal {
opacity: 0;
}


.reveal.active {
animation: fade-up 0.8s ease forwards;
}
</style>
