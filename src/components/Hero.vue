<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import koiImg from "@/assets/koi.png"; 

const mouseX = ref(0);
const mouseY = ref(0);
const fishX = ref(0);
const fishY = ref(0);
const rotation = ref(0);
const swimPhase = ref(0);
let rafId = null;

// Mengambil posisi mouse global layar agar sinkron dengan fixed position ikan
function onMouseMove(e) {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
}

function animate() {
  const dx = mouseX.value - fishX.value;
  const dy = mouseY.value - fishY.value;
  
  // LOGIKA: Jarak nempel & jalan slow
  // Ikan akan terus bergerak selama jaraknya > 0.1px (pasti nempel)
  // 0.03 membuat jalannya sangat santai/slow
  fishX.value += dx * 0.03;
  fishY.value += dy * 0.03;

  const targetRot = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
  let diff = targetRot - rotation.value;
  while (diff < -180) diff += 360;
  while (diff > 180) diff -= 360;

  // Rotasi hanya aktif jika ikan bergerak agar tidak bergetar
  if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
    rotation.value += diff * 0.05;
  }

  swimPhase.value += 0.08;
  rafId = requestAnimationFrame(animate);
}

const koiStyle = computed(() => ({
  position: 'fixed', // Fixed agar koordinatnya sama persis dengan kursor di layar
  left: 0,
  top: 0,
  transform: `translate3d(${fishX.value}px, ${fishY.value}px, 0) translate(-50%, -50%) rotate(${rotation.value + Math.sin(swimPhase.value) * 5}deg)`,
  zIndex: 9999, // Di atas segalanya
  pointerEvents: 'none',
  transition: 'none'
}));

onMounted(() => {
  // Set posisi awal ikan ke tengah kursor saat pertama gerak
  fishX.value = window.innerWidth / 2;
  fishY.value = window.innerHeight / 2;
  window.addEventListener("mousemove", onMouseMove);
  animate();
});

onUnmounted(() => {
  window.removeEventListener("mousemove", onMouseMove);
  cancelAnimationFrame(rafId);
});
</script>

<template>
  <section class="relative min-h-screen bg-zinc-950 text-white overflow-hidden flex items-center justify-center py-20">
    <img :src="koiImg" :style="koiStyle" class="w-24 md:w-32 opacity-80" />

    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.1),transparent)] pointer-events-none"></div>

    <div class="relative z-10 max-w-6xl mx-auto px-6 md:px-16 w-full">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-16">
        
        <div class="flex-1 space-y-8 reveal">
          <h1 class="text-6xl md:text-7xl font-black tracking-tighter leading-[1.1]">
            Building <br />
            <span class="custom-gradient-text">Scalable</span> <br />
            <span class="custom-gradient-text">Web Systems</span>
          </h1>

          <p class="text-zinc-400 text-lg max-w-md leading-relaxed">
            Fullstack Developer specializing in <span class="text-white italic underline decoration-indigo-500">high-performance systems and scalable end-to-end solutions.</span>
          </p>

          <div class="flex gap-4">
            <a 
              href="https://drive.google.com/file/d/1k-JimgbKFya1OKinZneYjXt1rd0R3Ik8/view?usp=sharing" target="_blank" class="px-8 py-4 bg-indigo-600 rounded-2xl font-bold hover:bg-indigo-700 transition-all">Donwload CV</a>
            <a 
              href="#contact" 
              class="inline-block px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl font-bold text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div class="reveal delay-300">
          <div class="relative w-[300px] aspect-[9/16] bg-zinc-900 rounded-[3rem] p-3 border border-zinc-800 shadow-2xl">
            <div class="w-full h-full rounded-[2.2rem] overflow-hidden bg-black">
              <iframe
                src="https://www.tiktok.com/@yusuf.aras156?_r=1&_t=ZS-92jKktLQvvr"
                class="w-full h-full"
                frameborder="0"
                allow="autoplay; encrypted-media"
              ></iframe>
            </div>
            <div class="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-4 bg-zinc-950 rounded-full border border-zinc-800"></div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.custom-gradient-text {
  background: linear-gradient(to right, #818cf8, #c084fc, #34d399);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

.reveal {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease forwards;
}

.delay-300 { animation-delay: 0.3s; }

@keyframes fadeInUp {
  to { opacity: 1; transform: translateY(0); }
}
</style>