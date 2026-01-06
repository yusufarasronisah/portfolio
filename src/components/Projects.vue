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
                  Product Lifecycle Management
                </h4>
                <div class="h-1 w-0 group-hover:w-full bg-indigo-500 transition-all duration-500"></div>
              </div>
              <a href="https://apps.bbi-apparel.com" target="_blank" class="text-[10px] font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1.5 rounded-lg border border-indigo-500/20 hover:bg-indigo-500 hover:text-white transition-all">Live View</a>
            </div>
            <p class="text-zinc-400 leading-relaxed mb-12 text-sm md:text-base">
              Engineered a robust PLM application leveraging a microservices architecture. Managed complex cross-platform data integration from <b>Odoo ERP</b> and <b>Oracle Database</b> into Dockerized environments.
            </p>
            <div class="flex flex-wrap gap-2 mt-auto">
              <span class="text-[11px] font-bold text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-md border border-zinc-800 group-hover:border-zinc-700 transition-colors">Vue.js</span>
              <span class="text-[11px] font-bold text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-md border border-zinc-800 group-hover:border-zinc-700 transition-colors">Django</span>
              <span class="text-[11px] font-bold text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-md border border-zinc-800 group-hover:border-zinc-700 transition-colors">Express.js</span>
              <span class="text-[11px] font-bold text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-md border border-zinc-800 group-hover:border-zinc-700 transition-colors">PostgreSQL</span>
            </div>
          </div>
        </div>

        <div class="group relative p-10 bg-zinc-900/30 border border-zinc-800 rounded-2xl transition-all duration-500 hover:border-emerald-500/40 hover:bg-zinc-900/60 hover:-translate-y-2 reveal-project">
          <div class="relative h-full flex flex-col">
            <div class="mb-8 flex justify-between items-start">
              <div class="space-y-1">
                <h4 class="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors tracking-tight">
                  B2B Marketplace Ecosystem
                </h4>
                <div class="h-1 w-0 group-hover:w-full bg-emerald-500 transition-all duration-500"></div>
              </div>
              <a href="https://indonesiansupplies.com" target="_blank" class="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 hover:bg-emerald-500 hover:text-white transition-all">Live View</a>
            </div>
            <p class="text-zinc-400 leading-relaxed mb-12 text-sm md:text-base">
              Architected a complex B2B platform integrating WooCommerce and WCFM. Engineered custom plugins for membership systems and booking engines, managing self-hosted Apache server infrastructure.
            </p>
            <div class="flex flex-wrap gap-2 mt-auto">
              <span class="text-[11px] font-bold text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-md border border-zinc-800 group-hover:border-zinc-700 transition-colors">WooCommerce</span>
              <span class="text-[11px] font-bold text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-md border border-zinc-800 group-hover:border-zinc-700 transition-colors">PHP</span>
              <span class="text-[11px] font-bold text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-md border border-zinc-800 group-hover:border-zinc-700 transition-colors">Apache</span>
            </div>
          </div>
        </div>

        <div class="group relative p-10 bg-zinc-900/30 border border-zinc-800 rounded-2xl transition-all duration-500 hover:border-orange-500/40 hover:bg-zinc-900/60 hover:-translate-y-2 reveal-project">
          <div class="relative h-full flex flex-col">
            <div class="mb-8 flex justify-between items-start">
              <div class="space-y-1">
                <h4 class="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors tracking-tight">
                  Report Management System
                </h4>
                <div class="h-1 w-0 group-hover:w-full bg-orange-500 transition-all duration-500"></div>
              </div>
              <span class="text-[10px] font-black uppercase tracking-[0.2em] text-orange-400 bg-orange-500/10 px-3 py-1.5 rounded-lg border border-orange-500/20">Enterprise</span>
            </div>
            <p class="text-zinc-400 leading-relaxed mb-12 text-sm md:text-base">
              Developed an end-to-end analytics platform for financial reporting, including P&L, Retail Sales, and Revenue dashboards with high-performance data processing.
            </p>
            <div class="flex flex-wrap gap-2 mt-auto">
              <span class="text-[11px] font-bold text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-md border border-zinc-800 group-hover:border-zinc-700 transition-colors">Vue 3</span>
              <span class="text-[11px] font-bold text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-md border border-zinc-800 group-hover:border-zinc-700 transition-colors">Django</span>
              <span class="text-[11px] font-bold text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-md border border-zinc-800 group-hover:border-zinc-700 transition-colors">PostgreSQL</span>
            </div>
          </div>
        </div>

        <div class="group relative p-10 bg-zinc-900/30 border border-zinc-800 rounded-2xl transition-all duration-500 hover:border-blue-500/40 hover:bg-zinc-900/60 hover:-translate-y-2 reveal-project">
          <div class="relative h-full flex flex-col">
            <div class="mb-8 flex justify-between items-start">
              <div class="space-y-1">
                <h4 class="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">
                  ETL Data Warehouse
                </h4>
                <div class="h-1 w-0 group-hover:w-full bg-blue-500 transition-all duration-500"></div>
              </div>
              <span class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20">Data Engineering</span>
            </div>
            <p class="text-zinc-400 leading-relaxed mb-12 text-sm md:text-base">
              Designed and implemented automated ETL pipelines for corporate data warehousing using Open Talend Studio to ensure data integrity and optimized query performance.
            </p>
            <div class="flex flex-wrap gap-2 mt-auto">
              <span class="text-[11px] font-bold text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-md border border-zinc-800 group-hover:border-zinc-700 transition-colors">Talend Studio</span>
              <span class="text-[11px] font-bold text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-md border border-zinc-800 group-hover:border-zinc-700 transition-colors">SQL</span>
            </div>
          </div>
        </div>

        <div class="group relative p-10 bg-zinc-900/30 border border-zinc-800 rounded-2xl transition-all duration-500 hover:border-red-500/40 hover:bg-zinc-900/60 hover:-translate-y-2 reveal-project md:col-span-2">
          <div class="relative h-full flex flex-col">
            <div class="mb-8 flex justify-between items-start">
              <div class="space-y-1">
                <h4 class="text-2xl font-bold text-white group-hover:text-red-400 transition-colors tracking-tight">
                  Digital News Portal - Telusur.co.id
                </h4>
                <div class="h-1 w-0 group-hover:w-full bg-red-500 transition-all duration-500"></div>
              </div>
              <a href="https://telusur.co.id" target="_blank" class="text-[10px] font-black uppercase tracking-widest text-red-400 bg-red-500/10 px-3 py-1.5 rounded-lg border border-red-500/20 hover:bg-red-500 hover:text-white transition-all">Live View</a>
            </div>
            <p class="text-zinc-400 leading-relaxed mb-12 text-sm md:text-base max-w-4xl">
              Managed and optimized a high-traffic digital news platform built on WordPress, focusing on stability, SEO performance, and seamless content delivery.
            </p>
            <div class="flex flex-wrap gap-2 mt-auto">
              <span class="text-[11px] font-bold text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-md border border-zinc-800 group-hover:border-zinc-700 transition-colors">WordPress</span>
              <span class="text-[11px] font-bold text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-md border border-zinc-800 group-hover:border-zinc-700 transition-colors">PHP</span>
              <span class="text-[11px] font-bold text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-md border border-zinc-800 group-hover:border-zinc-700 transition-colors">MySQL</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.reveal, .reveal-project {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.delay-100 { animation-delay: 0.1s; }
.reveal-project:nth-child(1) { animation-delay: 0.2s; }
.reveal-project:nth-child(2) { animation-delay: 0.3s; }
.reveal-project:nth-child(3) { animation-delay: 0.4s; }
.reveal-project:nth-child(4) { animation-delay: 0.5s; }
.reveal-project:nth-child(5) { animation-delay: 0.6s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.group:hover {
  box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.5);
}
</style>