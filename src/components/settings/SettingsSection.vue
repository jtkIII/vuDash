<template>
  <section class="settings-section">
    <header class="header">
      <h2 class="title">{{ title }}</h2>
      <p v-if="description" class="description">
        {{ description }}
      </p>
    </header>

    <div class="rows">
      <slot />
    </div>
  </section>
</template>


<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
})
</script>


<style scoped>
.settings-section {
  padding: 16px 0;
}

.settings-section .header{
    background-color: var(--bg-surface);
    padding: 5px;
}

.header {
  margin-bottom: 8px;
}

.title {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-heading);
}

.description {
  margin-top: 2px;
  font-size: 13px;
  color: var(--text-muted);
}

.rows {
  margin-top: 8px;
  background-color: var(--bg-list);
  border-radius: 12px;
  padding: 0;
  border: 1px solid var(--border-subtle);
}
</style>
