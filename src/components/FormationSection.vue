<script setup lang="ts">
import { education } from '../data'
</script>

<template>
  <section id="formation" class="section-wrap">
    <header class="sec-header reveal">
      <span class="section-label">Academic Path</span>
      <h2 class="section-title">Formation</h2>
    </header>

    <ol class="edu-list">
      <li
        v-for="(edu, i) in education"
        :key="i"
        :class="['edu-item reveal', `reveal-delay-${Math.min(i + 1, 4)}`]"
      >
        <a :href="edu.url" target="_blank" rel="noreferrer" class="edu-link">
          <span class="edu-period">{{ edu.period }}</span>
          <div class="edu-body">
            <h3 :class="['edu-degree', { accent: edu.highlight }]">{{ edu.degree }}</h3>
            <p class="edu-institution">{{ edu.institution }}</p>
          </div>
          <span class="edu-arrow">↗</span>
        </a>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.section-wrap {
  padding: 7rem 5rem;
  border-bottom: 1px solid var(--border-soft);
  max-width: 900px;
}

.sec-header { margin-bottom: 3.5rem; }

.edu-list { list-style: none; }

.edu-item { border-top: 1px solid var(--border-soft); }
.edu-item:last-child { border-bottom: 1px solid var(--border-soft); }

.edu-link {
  display: grid;
  grid-template-columns: 8rem 1fr auto;
  align-items: center;
  gap: 2rem;
  padding-block: 1.75rem;
  transition: background 0.2s;
  padding-inline: 1rem;
  margin-inline: -1rem;
}
.edu-link:hover { background: var(--bg-hover); }

.edu-period {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  color: var(--ink-faint);
  white-space: nowrap;
  padding-right: 1.5rem;
  border-right: 1px solid var(--border-soft);
}

.edu-degree {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 400;
  color: var(--ink-soft);
  margin-bottom: 0.3rem;
  line-height: 1.3;
  transition: color 0.2s;
}
.edu-degree.accent { color: var(--accent); }
.edu-link:hover .edu-degree { color: var(--ink); }

.edu-institution {
  font-size: 0.82rem;
  color: var(--ink-muted);
}

.edu-arrow {
  color: var(--ink-faint);
  font-size: 1rem;
  transition: color 0.2s, transform 0.2s;
  flex-shrink: 0;
}
.edu-link:hover .edu-arrow {
  color: var(--accent);
  transform: translate(3px, -3px);
}

@media (max-width: 860px) {
  .section-wrap { padding: 5rem 2rem; }
}
@media (max-width: 600px) {
  .edu-link { grid-template-columns: 1fr auto; gap: 1rem; }
  .edu-period {
    grid-column: 1 / -1;
    border-right: none;
    padding-right: 0;
    border-bottom: 1px solid var(--border-soft);
    padding-bottom: 0.5rem;
  }
}
</style>
