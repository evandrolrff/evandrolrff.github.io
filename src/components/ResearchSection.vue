<script setup lang="ts">
import { useI18n } from '../i18n'
import { publications } from '../data'

const { t } = useI18n()
</script>

<template>
  <section id="research" class="section">
    <div class="container">
      <p class="eyebrow reveal">{{ t.research.eyebrow }}</p>
      <h2 class="section-heading reveal d1">{{ t.research.heading }}</h2>

      <div class="research-grid">
        <div v-for="(area, i) in t.research.areas" :key="i" :class="['research-card card reveal', `d${i + 1}`]">
          <div class="card-num">0{{ i + 1 }}</div>
          <h3 class="research-title">{{ area.title }}</h3>
          <p class="research-desc">{{ area.description }}</p>
          <div class="keywords">
            <span v-for="kw in area.keywords" :key="kw" class="tag">{{ kw }}</span>
          </div>
        </div>
      </div>

      <div class="publications reveal d3">
        <h3 class="pub-heading">
          <span class="pub-line"></span>
          {{ t.research.pubHeading }}
          <span class="pub-line"></span>
        </h3>
        <div v-for="(pub, i) in t.research.publications" :key="i" class="pub-item">
          <a v-if="publications[i]?.url" :href="publications[i].url" target="_blank" rel="noreferrer" class="pub-title">
            {{ pub.title }} ↗
          </a>
          <span v-else class="pub-title">{{ pub.title }}</span>
          <div class="pub-meta">
            <span class="tag tag-orange">{{ pub.year }}</span>
            <span class="pub-venue">{{ pub.venue }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.research-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 4rem; }
.research-card { position: relative; }
.card-num { font-family: var(--font-mono); font-size: 0.6rem; letter-spacing: 0.2em; color: var(--orange); margin-bottom: 1rem; }
.research-title { font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; color: var(--ink); margin-bottom: 0.75rem; line-height: 1.3; }
.research-desc { font-size: 0.87rem; color: var(--ink-3); line-height: 1.7; margin-bottom: 1.25rem; flex: 1; }
.keywords { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.publications { border: 1px solid var(--border); border-radius: var(--radius); padding: 2rem; background: var(--bg-2); }
.pub-heading { font-family: var(--font-mono); font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ink-3); display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
.pub-line { flex: 1; height: 1px; background: var(--border); }
.pub-item { display: flex; flex-direction: column; gap: 0.75rem; padding-block: 1.25rem; border-bottom: 1px solid var(--border-2); }
.pub-item:last-child { border-bottom: none; padding-bottom: 0; }
.pub-title { font-family: var(--font-display); font-size: 1rem; font-weight: 600; color: var(--ink-2); line-height: 1.4; transition: color var(--transition); }
a.pub-title:hover { color: var(--orange); }
.pub-meta { display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; }
.pub-venue { font-size: 0.82rem; color: var(--ink-3); }
</style>
