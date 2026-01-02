<template>
  <section id="contact" class="relative bg-zinc-950 py-32 border-t border-zinc-900 overflow-hidden">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-10 md:px-16 relative z-10 text-center">
      <div class="reveal">
        <h3 class="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
          Have a Project Idea? <br/>
          <span class="custom-gradient-text">Let's Build It Together.</span>
        </h3>
        
        <p class="text-zinc-400 text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
          I'm always open to discussing system architecture, web applications, 
          or freelance collaborations. Currently available for 
          <span class="text-white font-medium italic underline decoration-indigo-500/50 underline-offset-8">Remote</span> opportunities.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:yusufarasronisah@gmail.com"
            class="group relative w-full sm:w-auto px-10 py-6 bg-indigo-600 text-white rounded-2xl font-bold transition-all duration-300 shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:shadow-[0_0_50px_rgba(79,70,229,0.5)] hover:-translate-y-1 flex flex-col items-center justify-center overflow-hidden"
          >
            <span class="relative z-10 text-lg">Send Email Now</span>
            <span class="text-xs font-medium opacity-60 tracking-wider relative z-10 group-hover:opacity-100 transition-opacity">
              yusufarasronisah@gmail.com
            </span>
            <div class="shimmer-effect"></div>
          </a>

          <a 
            href="https://www.linkedin.com/in/yusuf-aras-ronisah" 
            target="_blank"
            class="group w-full sm:w-auto px-10 py-6 text-zinc-300 hover:text-white font-bold transition-all duration-300 border border-zinc-800 hover:border-zinc-600 bg-zinc-900/40 backdrop-blur-md rounded-2xl flex items-center justify-center gap-3"
          >
            <span>Connect on LinkedIn</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>

        <div class="mt-24 flex items-center justify-center gap-4">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <p class="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em]">
            Available for new projects — 2026
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 1. Gradient Text consistent with Hero */
.custom-gradient-text {
  background: linear-gradient(to right, #818cf8, #c084fc, #34d399, #818cf8);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: flow 6s linear infinite;
  display: inline-block;
}

@keyframes flow {
  to { background-position: 200% center; }
}

/* 2. Reveal Animation */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 3. Shimmer Effect on Primary Button */
.shimmer-effect {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.15),
    transparent
  );
}

.group:hover .shimmer-effect {
  left: 100%;
  transition: all 0.8s ease-in-out;
}

/* Mobile Adjustment */
@media (max-width: 640px) {
  h3 { font-size: 2.5rem; }
}
</style>