<template>
  <div class="card-heading">
    <h3>{{ props.title }}</h3>
    <p>{{ props.subtitle }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: 'Team Members' },
  subtitle: { type: String, default: 'Overview of the team and their roles.' }
})
</script>

<style scoped>

</style>