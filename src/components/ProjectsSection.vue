<script setup lang="ts">
import { projects } from '../data'
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <p class="eyebrow reveal">Selected Work</p>
      <h2 class="section-heading reveal d1">Featured Projects</h2>

      <div class="projects-grid">
        <a
          v-for="(project, i) in projects"
          :key="i"
          :href="project.url"
          target="_blank"
          rel="noreferrer"
          :class="['project-card card reveal', `d${i + 1}`]"
        >
          <div class="card-top">
            <span class="card-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <div class="card-top-right">
              <span v-if="project.status" :class="['status-badge', { inprogress: project.status === 'In Progress' }]">
                {{ project.status }}
              </span>
              <span class="card-arrow">↗</span>
            </div>
          </div>

          <h3 class="card-title">{{ project.title }}</h3>
          <p class="card-desc">{{ project.description }}</p>

          <div class="card-tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  cursor: pointer;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-num {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  color: var(--ink-4);
}

.card-top-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.status-badge {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--orange);
  background: var(--orange-bg);
  border: 1px solid rgba(249,115,22,0.2);
  padding: 0.2rem 0.55rem;
  border-radius: 100px;
}
.status-badge.inprogress {
  color: #60a5fa;
  background: rgba(96,165,250,0.06);
  border-color: rgba(96,165,250,0.2);
}

.card-arrow {
  font-size: 1rem;
  color: var(--ink-4);
  transition: color var(--transition), transform var(--transition);
}
.project-card:hover .card-arrow {
  color: var(--orange);
  transform: translate(3px, -3px);
}

.card-title {
  font-family: var(--font-display);
  font-size: 1.45rem;
  font-weight: 700;
  color: var(--ink-2);
  line-height: 1.2;
  transition: color var(--transition);
}
.project-card:hover .card-title { color: var(--ink); }

.card-desc {
  font-size: 0.87rem;
  color: var(--ink-3);
  line-height: 1.7;
  flex: 1;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.25rem;
}
</style>
