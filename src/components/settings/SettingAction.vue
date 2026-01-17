<template>
  <button
    class="action"
    :class="variant"
    type="button"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'default' // default | danger
  }
})

defineEmits(['click'])
</script>


<style scoped>
.action {
  font-size: 13px;
  padding: 6px 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background-color: #252526;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;
}

.action:hover {
  background-color: #2a2a2a;
}

.action:focus-visible {
  outline: 2px solid #6366f1;
  outline-offset: 2px;
}

/* Danger variant */
.action.danger {
  background-color: var(--red);
  border-color: #ff646159;
  color: #fdbcbc;
}

.action.danger:hover {
  background-color: var(--pink);
}
</style>
