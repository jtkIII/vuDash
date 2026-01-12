<template>
  <div>
    <h2>Home</h2>
    <div class="cards-grid">
      <div class="card">
        <h3>Team Members</h3>
        <p>A quick overview of your team and their roles.</p>
        <ListUsers />
      </div>
      <div class="card">
        <h3>Quick Links</h3>
        <p>Links and shortcuts to common areas of the app.</p>
      </div>
      <div class="card">
        <h3>Stats</h3>
        <p>Summary metrics and recent activity.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import ListUsers from '../components/ListUsers.vue'
</script>

<style>
  .cards-grid {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
  }

  .card {
    padding: .5rem;
    border-radius: 8px;
    background: #262626;
  }
</style>