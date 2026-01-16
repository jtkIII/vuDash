<template>
  <footer>
    <div class="footer-content">
      <div class="footer-left">
        <ThemeToggle />
      </div>
      <div class="footer-center">
        <Heart class="inline-icon" /> <span> &nbsp; JTk Coded This in 2026</span>
      </div>
      <div class="footer-right">
        <a href="https://github.com/jtkIII/v-dash">
          <GitBranch class="inline-icon" />
        </a>
        <a href="https://buymeacoffee.com/jtkiii">
          <Coffee class="inline-icon" />
        </a>
        <a href="https://jtk3.com">
          <HatGlasses class="inline-icon" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {
  HatGlasses, Coffee, GitBranch, Heart
} from 'lucide-vue-next'

import ThemeToggle from '../shared/ThemeToggle.vue';
</script>

<style scoped>
footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: var(--footer-height);
  width: 100%;
  text-align: center;
  font-size: 0.66rem;
  margin-top: 0;
  border-top: 1px solid #7a7a7a31;
  box-shadow: 0 -6px 18px rgba(0, 0, 0, 0.12);
  z-index: 1000;
}

.footer-content,
.footer-center {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  color: var(--text-primary);
  font-size: 14px;
  text-align: center;
}

.footer-right {
  display: flex;
  margin-right: 12px;
  gap: 12px;
}

.footer-left {
  margin-left: 10px;
}

.inline-icon {
  width: 16px;
  height: 16px;
  margin-left: 4px;
  vertical-align: middle;
  color: var(--mid);
}

.inline-icon:hover {
  color: var(--pink);
}
</style>