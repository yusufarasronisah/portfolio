<template>
  <section
    id="about"
    class="relative max-w-[1200px] mx-auto px-10 md:px-16 py-32 border-t border-zinc-900"
  >
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
      
      <div class="reveal">
        <h3 class="text-4xl font-black tracking-tighter mb-8 text-white">
          About <span class="text-indigo-500">Me</span>
        </h3>

        <div class="space-y-6">
          <p class="text-zinc-400 text-lg leading-relaxed max-w-xl">
            I'm a Web Developer with a passion for creating dynamic, user-friendly, and efficient web applications. I specialize in front-end and back-end development, utilizing modern technologies such as Vue, React, Express, Wordpress and Django.With experience in building responsive and accessible websites, I focus on delivering high-quality solutions that enhance user experience and meet business goals. I’m also committed to continuous learning, staying updated with industry trends, and applying best practices in web development.
          </p>
        </div>
      </div>

      <div class="space-y-6 reveal delay-300">
        <div class="group bg-zinc-900/20 border border-zinc-800/60 rounded-2xl p-8 hover:border-indigo-500/30 transition-all duration-500 hover:bg-zinc-900/40">
          <h4 class="text-xs uppercase tracking-[0.2em] text-indigo-400 font-bold mb-4">
            Core Focus
          </h4>
          <ul class="text-zinc-300 space-y-4 text-base">
            <li class="flex items-start gap-3">
              <span class="text-indigo-500 mt-1">▹</span>
              <span>Scalable backend systems <span class="text-zinc-500 text-sm">(Django, Postgres)</span></span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-indigo-500 mt-1">▹</span>
              <span>Frontend architecture <span class="text-zinc-500 text-sm">(Vue, Tailwind)</span></span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-indigo-500 mt-1">▹</span>
              <span>Performance & data integrity</span>
            </li>
          </ul>
        </div>

        <div class="group bg-zinc-900/20 border border-zinc-800/60 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-500 hover:bg-zinc-900/40">
          <h4 class="text-xs uppercase tracking-[0.2em] text-emerald-400 font-bold mb-4">
            Working Style
          </h4>
          <ul class="text-zinc-300 space-y-4 text-base">
            <li class="flex items-start gap-3">
              <span class="text-emerald-500 mt-1">▹</span>
              <span>Clean, readable, and maintainable code</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-emerald-500 mt-1">▹</span>
              <span>Thoughtful API & data modeling</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-emerald-500 mt-1">▹</span>
              <span>Long-term mindset, not quick hacks</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Menyamakan animasi reveal dengan section Hero */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.delay-300 {
  animation-delay: 0.3s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsif adjustment */
@media (max-width: 768px) {
  #about {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
}
</style>