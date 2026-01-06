<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import koiImg from "@/assets/koi.png"; 

// --- LOGIKA ANIMASI IKAN KOI ---
const mouseX = ref(0);
const mouseY = ref(0);
const fishX = ref(0);
const fishY = ref(0);
const rotation = ref(0);
const swimPhase = ref(0);
let rafId = null;

function onMouseMove(e) {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
}

function animate() {
  const dx = mouseX.value - fishX.value;
  const dy = mouseY.value - fishY.value;
  
  fishX.value += dx * 0.03;
  fishY.value += dy * 0.03;

  const targetRot = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
  let diff = targetRot - rotation.value;
  while (diff < -180) diff += 360;
  while (diff > 180) diff -= 360;

  if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
    rotation.value += diff * 0.05;
  }

  swimPhase.value += 0.08;
  rafId = requestAnimationFrame(animate);
}

const koiStyle = computed(() => ({
  position: 'fixed',
  left: 0,
  top: 0,
  transform: `translate3d(${fishX.value}px, ${fishY.value}px, 0) translate(-50%, -50%) rotate(${rotation.value + Math.sin(swimPhase.value) * 5}deg)`,
  zIndex: 9999,
  pointerEvents: 'none',
  transition: 'none'
}));

// --- LIFECYCLE ---
onMounted(() => {
  fishX.value = window.innerWidth / 2;
  fishY.value = window.innerHeight / 2;
  window.addEventListener("mousemove", onMouseMove);
  animate();

  // Load TikTok Script secara dinamis
  if (!document.getElementById('tiktok-script')) {
    const script = document.createElement('script');
    script.id = 'tiktok-script';
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }
});

onUnmounted(() => {
  window.removeEventListener("mousemove", onMouseMove);
  cancelAnimationFrame(rafId);
});
</script>

<template>
  <section class="relative min-h-screen bg-zinc-950 text-white overflow-hidden flex items-center justify-center py-10">
    <img :src="koiImg" :style="koiStyle" class="w-24 md:w-32 opacity-80" />

    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.1),transparent)] pointer-events-none"></div>

    <div class="relative z-10 max-w-6xl mx-auto px-6 md:px-16 w-full">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
        
        <div class="flex-1 space-y-8 reveal">
          <h1 class="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1]">
            Building <br />
            <span class="custom-gradient-text">Scalable</span> <br />
            <span class="custom-gradient-text">Web Systems</span>
          </h1>

          <p class="text-zinc-400 text-lg max-w-md leading-relaxed">
            Fullstack Developer specializing in <span class="text-white italic underline decoration-indigo-500 font-medium">high-performance systems and scalable end-to-end solutions.</span>
          </p>

          <div class="flex gap-4">
            <a href="https://drive.google.com/file/d/1k-JimgbKFya1OKinZneYjXt1rd0R3Ik8/view?usp=sharing" target="_blank" class="px-8 py-4 bg-indigo-600 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20">
              Download CV
            </a>
            <a href="#contact" class="px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl font-bold text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all duration-300">
              Contact Me
            </a>
          </div>
        </div>

        <div class="reveal delay-300 mt-15">
          <div class="relative w-[300px] h-[480px] bg-zinc-900 rounded-[2.5rem] p-2 border border-zinc-800 shadow-2xl flex flex-col">
            
            <div class="flex-1 rounded-[2rem] overflow-hidden bg-white relative flex flex-col">
              
              <div class="w-full h-full tiktok-wrapper">
                <blockquote 
                  class="tiktok-embed" 
                  cite="https://www.tiktok.com/@yusuf.aras156" 
                  data-unique-id="yusuf.aras156" 
                  data-embed-type="creator"
                >
                  <section>
                    <a target="_blank" href="https://www.tiktok.com/@yusuf.aras156">@yusuf.aras156</a>
                  </section>
                </blockquote>
              </div>

            </div>

            <div class="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full border border-zinc-800 z-20"></div>
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
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards;
}

.delay-300 { animation-delay: 0.3s; }

@keyframes fadeInUp {
  to { opacity: 1; transform: translateY(0); }
}

/* --- TIKTOK FULL HEIGHT FIX --- */

.tiktok-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Menghilangkan scrollbar pada wrapper jika ada */
.tiktok-wrapper::-webkit-scrollbar {
  display: none;
}

/* Menggunakan :deep untuk menjangkau iframe yang dibuat script TikTok */
:deep(.tiktok-embed) {
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;
  height: 100% !important; /* Paksa blockquote jadi full */
  width: 100% !important;
  display: flex !important;
  flex-direction: column !important;
}

:deep(.tiktok-embed iframe) {
  flex: 1 !important; /* Paksa iframe mengambil seluruh ruang sisa di bawah profile */
  height: 100% !important;
  width: 100% !important;
}
</style>