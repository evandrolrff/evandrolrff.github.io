<script setup lang="ts">
import { skills } from '../data'
</script>

<template>
  <section id="skills" class="section">
    <div class="container">
      <p class="eyebrow reveal">Expertise</p>
      <h2 class="section-heading reveal d1">My Skillset</h2>

      <div class="skills-grid">
        <div
          v-for="(group, i) in skills"
          :key="group.category"
          :class="['skill-group card reveal', `d${(i % 4) + 1}`]"
        >
          <h3 class="group-title">{{ group.category }}</h3>
          <div class="tags-wrap">
            <span v-for="item in group.items" :key="item" class="tag">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
}

.group-title {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border);
}

.tags-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tag {
  font-size: 0.78rem;
  padding: 0.3rem 0.7rem;
}
</style>
