<template>
  <header>
    <section id="heading">
      <h1><a href="/">v-dash</a></h1>
      <nav>
        <ul class="nav-links">
          <li v-for="link in links" :title="link.alt" :key="link.path">
            <router-link :to="link.path">{{ link.name }}</router-link>
          </li>
        </ul>
      </nav>
    </section>
  </header>
</template>

<script setup>
import { state } from '@/store/state'
state.isLoggedIn = true

const links = [
  { name: 'home', path: '/', alt: 'dashboard' },
  { name: 'about', path: '/about', alt: 'about v-dash' },
  { name: 'more', path: '/even-more', alt: 'even more features' },
  { name: 'settings', path: '/settings', alt: 'application settings' },
]
</script>

<style scoped>
  .nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0 1rem 0 0;
  padding: 0;
}

.nav-links li a {
  text-transform: lowercase;
  font-weight: 500;
  font-size: .66rem;
}
</style>