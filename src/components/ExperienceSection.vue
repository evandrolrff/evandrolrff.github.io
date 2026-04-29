<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '../i18n'
import { education } from '../data'

const { t } = useI18n()
const tab = ref<'experience' | 'education'>('experience')
</script>

<template>
  <section id="experience" class="section">
    <div class="container">
      <p class="eyebrow reveal">{{ t.experience.eyebrow }}</p>
      <h2 class="section-heading reveal d1">{{ t.experience.heading }}</h2>

      <div class="tabs reveal d2">
        <button :class="['tab-btn', { active: tab === 'experience' }]" @click="tab = 'experience'">
          {{ t.experience.tabExp }}
        </button>
        <button :class="['tab-btn', { active: tab === 'education' }]" @click="tab = 'education'">
          {{ t.experience.tabEdu }}
        </button>
      </div>

      <div v-show="tab === 'experience'" class="exp-list">
        <div v-for="(exp, i) in t.experience.items" :key="i" :class="['exp-item', `d${i + 1}`]">
          <div class="exp-header">
            <div>
              <h3 class="exp-role">{{ exp.role }}</h3>
              <p class="exp-company">{{ exp.company }}</p>
            </div>
            <div class="exp-meta">
              <span class="tag tag-orange">{{ exp.period }}</span>
              <span class="exp-location">{{ exp.location }}</span>
            </div>
          </div>
          <ul class="exp-bullets">
            <li v-for="(b, j) in exp.bullets" :key="j" class="bullet-item">
              <span class="bullet-arrow">▹</span>{{ b }}
            </li>
          </ul>
        </div>
      </div>

      <div v-show="tab === 'education'" class="edu-list">
        <a
          v-for="(edu, i) in t.experience.education"
          :key="i"
          :href="education[i]?.url"
          target="_blank" rel="noreferrer"
          :class="['edu-item card', `d${i + 1}`]"
        >
          <div class="edu-inner">
            <div>
              <h3 :class="['edu-degree', { orange: edu.highlight }]">{{ edu.degree }}</h3>
              <p class="edu-inst">{{ edu.institution }}</p>
            </div>
            <div class="edu-right">
              <span class="tag">{{ edu.period }}</span>
              <span class="edu-arrow">↗</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.exp-list, .edu-list { animation: fadeUp 0.35s cubic-bezier(0.22, 1, 0.36, 1) both; }
.tabs {
  display: flex; gap: 0.25rem;
  background: var(--bg-2); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 0.25rem;
  width: fit-content; margin-bottom: 3rem;
}
.tab-btn {
  font-family: var(--font-mono); font-size: 0.72rem; font-weight: 500;
  letter-spacing: 0.08em; text-transform: uppercase;
  color: var(--ink-3); background: transparent; border: none;
  padding: 0.55rem 1.25rem; border-radius: 4px; cursor: pointer;
  transition: var(--transition);
}
.tab-btn:hover { color: var(--ink); }
.tab-btn.active { background: var(--bg-4); color: var(--orange); }
.exp-list { display: flex; flex-direction: column; gap: 0.75rem; }
.exp-item {
  background: var(--bg-2); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 1.75rem;
  transition: border-color var(--transition), background var(--transition);
}
.exp-item:hover { border-color: rgba(249,115,22,0.25); background: var(--bg-3); }
.exp-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 1.5rem; margin-bottom: 1.25rem; flex-wrap: wrap; }
.exp-role { font-family: var(--font-display); font-size: 1.2rem; font-weight: 700; color: var(--ink); margin-bottom: 0.2rem; }
.exp-company { font-size: 0.88rem; color: var(--orange); font-weight: 500; }
.exp-meta { display: flex; flex-direction: column; align-items: flex-end; gap: 0.4rem; flex-shrink: 0; }
.exp-location { font-family: var(--font-mono); font-size: 0.62rem; letter-spacing: 0.1em; color: var(--ink-3); text-transform: uppercase; }
.exp-bullets { display: flex; flex-direction: column; gap: 0.6rem; padding-left: 0; }
.bullet-item { display: flex; gap: 0.75rem; font-size: 0.88rem; color: var(--ink-2); line-height: 1.65; }
.bullet-arrow { color: var(--orange); flex-shrink: 0; font-size: 0.75rem; margin-top: 0.3rem; }
.edu-list { display: flex; flex-direction: column; gap: 0.75rem; }
.edu-item { display: block; }
.edu-inner { display: flex; justify-content: space-between; align-items: center; gap: 1.5rem; flex-wrap: wrap; }
.edu-degree { font-family: var(--font-display); font-size: 1.1rem; font-weight: 600; color: var(--ink-2); margin-bottom: 0.25rem; transition: color var(--transition); }
.edu-degree.orange { color: var(--orange); }
.edu-item:hover .edu-degree { color: var(--ink); }
.edu-inst { font-size: 0.85rem; color: var(--ink-3); }
.edu-right { display: flex; align-items: center; gap: 1rem; flex-shrink: 0; }
.edu-arrow { color: var(--ink-4); transition: color var(--transition), transform var(--transition); }
.edu-item:hover .edu-arrow { color: var(--orange); transform: translate(3px, -3px); }
</style>
