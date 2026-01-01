<template>
  <header
    class="fixed top-0 inset-x-0 z-50
           bg-zinc-950/70 backdrop-blur-md
           border-b border-zinc-800/60"
  >
    <nav class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <h1
        class="font-semibold tracking-wide text-white
               hover:text-indigo-400 transition"
      >
        Yusuf Aras
      </h1>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex gap-8 text-sm">
        <li v-for="item in menu" :key="item.id">
          <a
            :href="item.href"
            class="relative text-zinc-300
                   hover:text-indigo-400
                   transition
                   after:absolute after:left-0 after:-bottom-1
                   after:h-[2px] after:w-0 after:bg-indigo-400
                   after:transition-all after:duration-300
                   hover:after:w-full"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const menu = [
  { id: 1, label: 'About', href: '#about' },
  { id: 2, label: 'Skills', href: '#skills' },
  { id: 3, label: 'Projects', href: '#projects' },
  { id: 4, label: 'Contact', href: '#contact' },
]
</script>
