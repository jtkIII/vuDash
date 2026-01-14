<template>
  <header>
    <section id="heading">
      <h1><a href="/">v-dash</a></h1>
      <nav>
        <ul class="nav-links">
          <li><router-link to="/">home</router-link></li>
          <li><router-link to="/about">about</router-link></li>
          <li><router-link to="/even-more">more</router-link></li>
          <li><router-link to="/settings">settings</router-link></li>
        </ul>
      </nav>
    </section>
  </header>
</template>

<script>
import { state } from '@/store/state'
state.isLoggedIn = true
</script>
