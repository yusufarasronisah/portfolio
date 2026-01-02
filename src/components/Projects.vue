<template>
  <section id="projects" class="relative bg-zinc-950 py-32 border-t border-zinc-900">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>

    <div class="max-w-7xl mx-auto px-10 md:px-16">
      <div class="mb-20 max-w-2xl">
        <h3 class="text-4xl md:text-5xl font-black text-white tracking-tighter reveal">
          Featured <span class="text-indigo-500">Projects</span>
        </h3>
        <p class="mt-6 text-lg text-zinc-400 leading-relaxed reveal delay-100">
          A collection of production-ready applications built with focus on 
          <span class="text-zinc-200 font-medium">performance</span>, 
          user experience, and robust architecture.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2">
        
        <div class="group relative p-10 bg-zinc-900/30 border border-zinc-800 rounded-2xl transition-all duration-500 hover:border-indigo-500/40 hover:bg-zinc-900/60 hover:-translate-y-2 reveal-project">
          <div class="relative h-full flex flex-col">
            <div class="mb-8 flex justify-between items-start">
              <div class="space-y-1">
                <h4 class="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors tracking-tight">
                  Client Portal SaaS
                </h4>
                <div class="h-1 w-0 group-hover:w-full bg-indigo-500 transition-all duration-500"></div>
              </div>
              <span class="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 bg-indigo-500/10 px-3 py-1.5 rounded-lg border border-indigo-500/20">
                SaaS
              </span>
            </div>
            
            <p class="text-zinc-400 leading-relaxed mb-12 text-sm md:text-base">
              Platform manajemen klien end-to-end yang mengintegrasikan invoice otomatis dan sistem manajemen dokumen terpusat secara aman.
            </p>
            
            <div class="flex flex-wrap gap-2 mt-auto">
              <span class="text-[11px] font-bold text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-md border border-zinc-800 group-hover:border-zinc-700 transition-colors">Vue.js</span>
              <span class="text-[11px] font-bold text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-md border border-zinc-800 group-hover:border-zinc-700 transition-colors">Django</span>
              <span class="text-[11px] font-bold text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-md border border-zinc-800 group-hover:border-zinc-700 transition-colors">PostgreSQL</span>
            </div>
          </div>
        </div>

        <div class="group relative p-10 bg-zinc-900/30 border border-zinc-800 rounded-2xl transition-all duration-500 hover:border-emerald-500/40 hover:bg-zinc-900/60 hover:-translate-y-2 reveal-project">
          <div class="relative h-full flex flex-col">
            <div class="mb-8 flex justify-between items-start">
              <div class="space-y-1">
                <h4 class="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors tracking-tight">
                  Retail Analytics Dashboard
                </h4>
                <div class="h-1 w-0 group-hover:w-full bg-emerald-500 transition-all duration-500"></div>
              </div>
              <span class="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                Analytics
              </span>
            </div>
            
            <p class="text-zinc-400 leading-relaxed mb-12 text-sm md:text-base">
              Visualisasi data finansial real-time dengan algoritma kalkulasi YTD (Year-to-Date) dan MTD yang kompleks untuk efisiensi retail.
            </p>
            
            <div class="flex flex-wrap gap-2 mt-auto">
              <span class="text-[11px] font-bold text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-md border border-zinc-800 group-hover:border-zinc-700 transition-colors">Vue 3</span>
              <span class="text-[11px] font-bold text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-md border border-zinc-800 group-hover:border-zinc-700 transition-colors">DRF</span>
              <span class="text-[11px] font-bold text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-md border border-zinc-800 group-hover:border-zinc-700 transition-colors">SQL Server</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animasi Reveal yang konsisten dengan section sebelumnya */
.reveal, .reveal-project {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.delay-100 { animation-delay: 0.1s; }
.reveal-project:nth-child(1) { animation-delay: 0.2s; }
.reveal-project:nth-child(2) { animation-delay: 0.3s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Memperhalus interaksi hover */
.group {
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
}
.group:hover {
  box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.5);
}
</style>