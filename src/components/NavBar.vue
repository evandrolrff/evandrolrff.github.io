<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { bio } from '../data'

const scrolled = ref(false)
const active = ref('home')
const menuOpen = ref(false)

const links = [
  { id: 'home',       label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'research',   label: 'Research' },
  { id: 'skills',     label: 'Skills' },
  { id: 'projects',   label: 'Projects' },
  { id: 'contact',    label: 'Contact' },
]

function onScroll() {
  scrolled.value = window.scrollY > 20
  for (const l of [...links].reverse()) {
    const el = document.getElementById(l.id)
    if (el && window.scrollY >= el.offsetTop - 140) { active.value = l.id; break }
  }
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header :class="['navbar', { scrolled }]">
    <div class="container nav-inner">
      <!-- Logo -->
      <a href="#home" class="logo">{{ bio.monogram }}</a>

      <!-- Desktop nav -->
      <nav class="nav-links">
        <a
          v-for="l in links" :key="l.id"
          :href="`#${l.id}`"
          :class="['nav-link', { active: active === l.id }]"
        >{{ l.label }}</a>
      </nav>

      <!-- CTA -->
      <a href="#contact" class="btn btn-primary nav-cta">Let's Talk</a>

      <!-- Mobile hamburger -->
      <button class="hamburger" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <div :class="['mobile-menu', { open: menuOpen }]">
      <a
        v-for="l in links" :key="l.id"
        :href="`#${l.id}`"
        :class="['mobile-link', { active: active === l.id }]"
        @click="menuOpen = false"
      >{{ l.label }}</a>
      <a href="#contact" class="btn btn-primary" @click="menuOpen = false" style="margin-top:0.5rem;justify-content:center;">Let's Talk</a>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 200;
  transition: background 0.3s, box-shadow 0.3s;
  padding-block: 1rem;
}
.navbar.scrolled {
  background: rgba(10,10,10,0.92);
  backdrop-filter: blur(16px);
  box-shadow: 0 1px 0 var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.logo {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--orange);
  width: 38px; height: 38px;
  border: 1.5px solid var(--orange);
  border-radius: var(--radius);
  display: flex; align-items: center; justify-content: center;
  transition: background var(--transition), color var(--transition);
  flex-shrink: 0;
}
.logo:hover { background: var(--orange); color: #000; }

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex: 1;
}

.nav-link {
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--ink-3);
  padding: 0.4rem 0.75rem;
  border-radius: 4px;
  transition: color var(--transition), background var(--transition);
}
.nav-link:hover { color: var(--ink); background: var(--bg-3); }
.nav-link.active { color: var(--orange); }

.nav-cta { margin-left: auto; }

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none; border: none; cursor: pointer;
  padding: 4px; margin-left: auto;
}
.hamburger span {
  display: block; width: 22px; height: 1.5px;
  background: var(--ink-2);
  transition: var(--transition);
}

/* Mobile menu — hidden everywhere by default */
.mobile-menu {
  display: none;
}

.mobile-link {
  font-size: 0.9rem;
  color: var(--ink-3);
  padding: 0.6rem 0;
  border-bottom: 1px solid var(--border-2);
  transition: color var(--transition);
}
.mobile-link:hover, .mobile-link.active { color: var(--orange); }

@media (max-width: 860px) {
  .nav-links, .nav-cta { display: none; }
  .hamburger { display: flex; }

  /* Only show the menu when explicitly open */
  .mobile-menu.open {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 1rem 1.5rem 1.5rem;
    background: var(--bg-2);
    border-top: 1px solid var(--border);
    animation: slideDown 0.25s cubic-bezier(0.4, 0, 0.2, 1) both;
  }
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
