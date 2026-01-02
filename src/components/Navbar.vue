<template>
  <header
    class="fixed top-0 inset-x-0 z-50
           bg-zinc-950/80 backdrop-blur-md
           border-b border-zinc-800/60"
  >
    <nav class="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
      <!-- Logo -->
      <h1
        class="text-white text-lg font-medium tracking-wide
               transition-colors duration-300
               hover:text-indigo-400"
      >
        Yusuf Aras Ronisah
      </h1>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex gap-12 text-[15px] font-medium">
        <li
          v-for="(item, index) in menu"
          :key="item.id"
          class="opacity-0 animate-nav"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <a
            :href="item.href"
            class="group relative text-zinc-400
                   transition-colors duration-300
                   hover:text-white"
          >
            {{ item.label }}

            <!-- underline -->
            <span
              class="absolute left-0 -bottom-1 h-[1.5px] w-full
                     bg-indigo-400
                     scale-x-0 origin-left
                     transition-transform duration-300 ease-out
                     group-hover:scale-x-100"
            />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const menu = [
  { id: 1, label: 'Home', href: '' },
  { id: 1, label: 'About', href: '#about' },
  { id: 2, label: 'Skills', href: '#skills' },
  { id: 3, label: 'Projects', href: '#projects' },
  { id: 4, label: 'Contact', href: '#contact' },
]
</script>

<style>
@keyframes navFade {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-nav {
  animation: navFade 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
</style>
