<template>
  <div>
    <div class="cards-grid">
      <div class="card">
        <div class="card-heading">
          <h3>Team Members</h3>
          <p>Overview of the team and their roles.</p>
        </div>
        <ListUsers />
      </div>
      <div class="card">
        <div class="card-heading">
          <h3>Project Stats</h3>
          <p>Representation of current project metrics.</p>
        </div>
        <LineChart title="Tasks Completed Over Time" />
        <PieChart />

      </div>
      <div class="card">
        <div class="card-heading">
          <h3>Global Search</h3>
          <p>Search users, messages, files, and links.</p>
        </div>
        <GlobalSearch @select="handleSelect" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ListUsers from '../components/charts/ListUsers.vue'
import PieChart from '../components/charts/PieChart.vue'
import LineChart from '../components/charts/LineChart.vue'
import GlobalSearch from '../components/search/GlobalSearch.vue';
function handleSelect({ group, item }) {
  console.log('Selected:', group, item)
  // Later:
  // router.push(...)
  // open modal
  // focus chat
}
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

.card h3 {
  margin-bottom: 0.1rem;
  font-size: small;
  color: #ffffff92;
}
</style>