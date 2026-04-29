<script setup lang="ts">
import { bio, stats, socials } from '../data'
</script>

<template>
  <section id="home" class="hero">
    <!-- Background grid texture -->
    <div class="hero-grid" aria-hidden="true"></div>
    <!-- Orange glow -->
    <div class="hero-glow" aria-hidden="true"></div>

    <div class="container hero-inner">
      <div class="hero-text">
        <!-- Status badge -->
        <div class="status-badge" style="animation: fadeIn 0.5s ease 0.1s both">
          <span class="status-dot"></span>
          <span>Available for collaboration</span>
        </div>

        <p class="hero-hi" style="animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both">
          Hi, I'm Evandro
        </p>

        <h1 class="hero-headline" style="animation: fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.3s both">
          <span>Computer</span>
          <span class="outline-text">Scientist</span>
          <span>& <em>Engineer</em></span>
        </h1>

        <p class="hero-tagline" style="animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.5s both">
          {{ bio.tagline }}
        </p>

        <div class="hero-actions" style="animation: fadeIn 0.7s ease 0.7s both">
          <a href="#contact" class="btn btn-primary">Get in Touch ↗</a>
          <a href="#projects" class="btn btn-outline">View Projects</a>
        </div>
      </div>

      <!-- Stats -->
      <div class="hero-stats" style="animation: fadeIn 0.8s ease 0.6s both">
        <div v-for="(s, i) in stats" :key="i" class="stat-item">
          <span class="stat-value">{{ s.value }}</span>
          <span class="stat-label">{{ s.label }}</span>
        </div>
      </div>
    </div>

    <!-- Scroll cue -->
    <div class="scroll-cue" style="animation: fadeIn 1s ease 1.2s both">
      <span class="scroll-line"></span>
      <span class="scroll-text">scroll</span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: var(--nav-h);
  border-bottom: 1px solid var(--border-2);
}

/* Grid texture */
.hero-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(var(--border-2) 1px, transparent 1px),
    linear-gradient(90deg, var(--border-2) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
  animation: fadeIn 1.5s ease both;
}

.hero-glow {
  position: absolute;
  top: 20%; right: -5%;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 65%);
  pointer-events: none;
}

.hero-inner {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-block: 5rem;
  position: relative;
  z-index: 1;
}

/* Status badge */
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  color: var(--orange);
  background: var(--orange-bg);
  border: 1px solid rgba(249,115,22,0.2);
  padding: 0.4rem 0.9rem;
  border-radius: 100px;
  width: fit-content;
  margin-bottom: 2rem;
}
.status-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--orange);
  animation: pulse 2s infinite;
}

.hero-hi {
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--ink-2);
  margin-bottom: 0.75rem;
  letter-spacing: 0.02em;
}

.hero-headline {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 8vw, 7rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.03em;
  color: var(--ink);
  display: flex;
  flex-direction: column;
  gap: 0.05em;
  margin-bottom: 2rem;
}
.outline-text {
  -webkit-text-stroke: 1.5px var(--ink);
  color: transparent;
}
.hero-headline em {
  font-style: italic;
  font-weight: 700;
  color: var(--orange);
}

.hero-tagline {
  font-size: 1rem;
  color: var(--ink-3);
  max-width: 50ch;
  line-height: 1.75;
  margin-bottom: 2.5rem;
}

.hero-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; }

/* Stats */
.hero-stats {
  display: flex;
  gap: 0;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg-2);
  overflow: hidden;
  width: fit-content;
}
.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1.5rem 2.5rem;
  border-right: 1px solid var(--border);
  transition: background var(--transition);
}
.stat-item:last-child { border-right: none; }
.stat-item:hover { background: var(--bg-3); }
.stat-value {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  color: var(--orange);
  line-height: 1;
}
.stat-label {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-3);
}

/* Scroll cue */
.scroll-cue {
  position: absolute;
  bottom: 2rem; left: 50%;
  transform: translateX(-50%);
  display: flex; flex-direction: column;
  align-items: center; gap: 0.5rem;
}
.scroll-line {
  width: 1px; height: 48px;
  background: linear-gradient(to bottom, transparent, var(--ink-4));
}
.scroll-text {
  font-family: var(--font-mono);
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-4);
}

@media (max-width: 768px) {
  .hero-stats { flex-wrap: wrap; width: 100%; }
  .stat-item { flex: 1; min-width: 120px; padding: 1.25rem 1.5rem; }
  .scroll-cue { display: none; }
}
</style>
