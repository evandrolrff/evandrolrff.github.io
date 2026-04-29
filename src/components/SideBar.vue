<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { socials } from '../data'

const activeSection = ref('about')
const sections = ['about', 'formation', 'projects', 'skills', 'contact']
const navLabels: Record<string, string> = {
  about: 'About',
  formation: 'Formation',
  projects: 'Projects',
  skills: 'Skills',
  contact: 'Contact',
}

function onScroll() {
  for (const id of [...sections].reverse()) {
    const el = document.getElementById(id)
    if (el && window.scrollY >= el.offsetTop - 200) {
      activeSection.value = id
      break
    }
  }
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <aside class="sidebar">
    <!-- Top: Identity -->
    <div class="sidebar-top">
      <a href="#about" class="wordmark">EF</a>
      <div class="identity">
        <span class="identity-name">Evandro<br />Fensterseifer</span>
        <span class="identity-role">Computer Scientist</span>
      </div>
    </div>

    <!-- Middle: Navigation -->
    <nav class="sidebar-nav">
      <a
        v-for="id in sections"
        :key="id"
        :href="`#${id}`"
        :class="['nav-item', { active: activeSection === id }]"
      >
        <span class="nav-indicator"></span>
        {{ navLabels[id] }}
      </a>
    </nav>

    <!-- Bottom: Socials + location -->
    <div class="sidebar-bottom">
      <div class="socials">
        <a
          v-for="s in socials"
          :key="s.icon"
          :href="s.url"
          target="_blank"
          rel="noreferrer"
          class="social-item"
        >
          {{ s.label }} ↗
        </a>
      </div>
      <p class="location">Santa Maria, BR</p>
    </div>
  </aside>

  <!-- Mobile top bar -->
  <header class="mobile-header">
    <a href="#about" class="wordmark">EF</a>
    <nav class="mobile-nav">
      <a v-for="id in sections" :key="id" :href="`#${id}`" :class="['mobile-nav-item', { active: activeSection === id }]">
        {{ navLabels[id] }}
      </a>
    </nav>
  </header>
</template>

<style scoped>
/* ─── Sidebar (desktop) ───────────────────────────────── */
.sidebar {
  width: var(--sidebar-w);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem 2rem;
  border-right: 1px solid var(--border);
  background: var(--bg);
  z-index: 100;
}

.sidebar-top {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.wordmark {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--accent);
  width: 36px;
  height: 36px;
  border: 1px solid var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s;
}
.wordmark:hover {
  background: var(--accent);
  color: var(--bg);
}

.identity { display: flex; flex-direction: column; gap: 0.3rem; }
.identity-name {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 400;
  color: var(--ink-soft);
  line-height: 1.3;
  letter-spacing: 0.01em;
}
.identity-role {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-muted);
}

/* ─── Nav ─────────────────────────────────────────────── */
.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-muted);
  padding: 0.5rem 0;
  transition: color 0.25s;
  position: relative;
}

.nav-indicator {
  width: 16px;
  height: 1px;
  background: var(--ink-faint);
  transition: width 0.3s cubic-bezier(0.22, 1, 0.36, 1),
              background 0.25s;
  flex-shrink: 0;
}

.nav-item.active,
.nav-item:hover { color: var(--ink); }

.nav-item.active .nav-indicator,
.nav-item:hover .nav-indicator {
  width: 28px;
  background: var(--accent);
}

/* ─── Bottom ──────────────────────────────────────────── */
.sidebar-bottom {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.socials {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.social-item {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-muted);
  transition: color 0.2s;
}
.social-item:hover { color: var(--accent); }

.location {
  font-family: var(--font-mono);
  font-size: 0.58rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--ink-faint);
}

/* ─── Mobile header ───────────────────────────────────── */
.mobile-header {
  display: none;
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(13,13,13,0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  padding: 1rem 1.5rem;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.mobile-nav {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
}

.mobile-nav-item {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-muted);
  white-space: nowrap;
  transition: color 0.2s;
  padding-bottom: 2px;
  border-bottom: 1px solid transparent;
}
.mobile-nav-item.active,
.mobile-nav-item:hover {
  color: var(--accent);
  border-color: var(--accent);
}

@media (max-width: 860px) {
  .sidebar { display: none; }
  .mobile-header { display: flex; }
}
</style>
