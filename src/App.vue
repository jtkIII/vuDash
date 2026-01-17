<template>
  <div class="app-shell">
    <AppHeader />
    <main id="main">
      <router-view />
      <ModalHost />
    </main>
    <AppFooter />
  </div>
</template> 

<script setup>
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import ModalHost from '@/components/modals/ModalHost.vue'
import { useTheme } from '@/composables/useTheme'

useTheme() // no destructuring needed
document.documentElement.dataset.theme = 'dark'
</script>
