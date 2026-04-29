<script setup lang="ts">
import { useI18n } from '../i18n'
import { socials, bio } from '../data'

const { t } = useI18n()
</script>

<template>
  <section id="contact" class="section">
    <div class="container">
      <p class="eyebrow reveal">{{ t.contact.eyebrow }}</p>
      <h2 class="section-heading reveal d1">{{ t.contact.heading }}</h2>

      <div class="contact-layout">
        <div class="contact-left reveal d2">
          <p class="contact-lead">{{ t.contact.lead }}</p>

          <div class="socials-list">
            <a v-for="s in socials" :key="s.label" :href="s.url" target="_blank" rel="noreferrer" class="social-row">
              <div class="social-info">
                <span class="social-label">{{ s.label }}</span>
                <span class="social-handle">{{ s.handle }}</span>
              </div>
              <span class="social-arrow">↗</span>
            </a>
          </div>
        </div>

        <div class="contact-right reveal d3">
          <div class="contact-card card">
            <div class="contact-card-header">
              <span class="status-dot"></span>
              <span class="status-text">{{ t.contact.available }}</span>
            </div>
            <h3 class="contact-cta">
              {{ t.contact.cta[0] }}<br /><em>{{ t.contact.cta[1] }}</em>
            </h3>
            <div class="contact-actions">
              <a href="https://www.linkedin.com/in/evandro-luis-rosa-fensterseifer-filho-912919208/" target="_blank" rel="noreferrer" class="btn btn-primary">
                {{ t.contact.linkedin }}
              </a>
              <a href="https://github.com/evandrolrff" target="_blank" rel="noreferrer" class="btn btn-outline">
                {{ t.contact.github }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="site-footer">
    <div class="container footer-inner">
      <span class="footer-logo">{{ bio.monogram }}</span>
      <span class="footer-name">{{ bio.name }}</span>
      <span class="footer-stack">{{ t.contact.footer }}</span>
    </div>
  </footer>
</template>

<style scoped>
.contact-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
.contact-lead { font-size: 1rem; color: var(--ink-3); line-height: 1.8; margin-bottom: 2.5rem; max-width: 42ch; }
.socials-list { display: flex; flex-direction: column; gap: 0.5rem; }
.social-row { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.25rem; background: var(--bg-2); border: 1px solid var(--border); border-radius: var(--radius); transition: border-color var(--transition), background var(--transition); }
.social-row:hover { border-color: rgba(249,115,22,0.3); background: var(--bg-3); }
.social-info { display: flex; flex-direction: column; gap: 0.15rem; }
.social-label { font-size: 0.9rem; font-weight: 500; color: var(--ink-2); transition: color var(--transition); }
.social-row:hover .social-label { color: var(--orange); }
.social-handle { font-family: var(--font-mono); font-size: 0.65rem; color: var(--ink-3); letter-spacing: 0.05em; }
.social-arrow { color: var(--ink-4); font-size: 1rem; transition: color var(--transition), transform var(--transition); }
.social-row:hover .social-arrow { color: var(--orange); transform: translate(3px, -3px); }
.contact-card { padding: 2.25rem; }
.contact-card-header { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; }
.status-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--orange); animation: pulse 2s infinite; }
.status-text { font-family: var(--font-mono); font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-3); }
.contact-cta { font-family: var(--font-display); font-size: 1.8rem; font-weight: 700; color: var(--ink); line-height: 1.2; margin-bottom: 2rem; }
.contact-cta em { font-style: italic; color: var(--orange); }
.contact-actions { display: flex; flex-direction: column; gap: 0.6rem; }
.contact-actions .btn { justify-content: center; }
.site-footer { border-top: 1px solid var(--border); padding-block: 1.75rem; }
.footer-inner { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
.footer-logo { font-family: var(--font-display); font-size: 0.9rem; font-weight: 700; color: var(--orange); border: 1px solid rgba(249,115,22,0.3); padding: 0.2rem 0.5rem; border-radius: 3px; }
.footer-name { font-size: 0.85rem; color: var(--ink-3); flex: 1; }
.footer-stack { font-family: var(--font-mono); font-size: 0.6rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--ink-4); }
@media (max-width: 768px) {
  .contact-layout { grid-template-columns: 1fr; gap: 2.5rem; }
  .site-footer { padding: 2rem; }
}
</style>
