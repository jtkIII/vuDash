<template>
  <div class="cards-grid">
    <div class="card">
      <CardHeader title="Team Members" subtitle="Overview of the team and their roles." />
      <ListUsers />
    </div>

    <div class="card">
      <CardHeader title="Project Stats" subtitle="Key metrics and performance over time." />
      <LineChart title="Tasks Completed Over Time" />
      <PieChart />
    </div>

    <div class="card">
      <CardHeader title="Global Search" subtitle="Find users, messages, files, and more." />
      <GlobalSearch @select="handleSelect" />
      <ContentSep />
      <CardHeader title="Activity Feed" subtitle="Recent activity in the workspace." />
      <ActivityFeed @select="handleSelect" />
    </div>
  </div>
</template>

<script setup>
import ListUsers from '../components/shared/ListUsers.vue'
import PieChart from '../components/charts/PieChart.vue'
import LineChart from '../components/charts/LineChart.vue'
import GlobalSearch from '../components/search/GlobalSearch.vue';
import ActivityFeed from '../components/shared/ActivityFeed.vue';
import CardHeader from '../components/shared/CardHeader.vue';
import ContentSep from '../components/shared/ContentSep.vue';
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
</style>
