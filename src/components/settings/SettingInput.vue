<template>
  <input class="input" :type="type" :value="modelValue" :placeholder="placeholder" @input="onInput" />
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

function onInput(event) {
  emit('update:modelValue', event.target.value)
}
</script>

<style scoped>
.input {
  background-color: var(--bg-input);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  padding: 6px 10px;
  font-size: 13px;
  color: var(--text-primary);
  min-width: 180px;
}

.input::placeholder {
  color: var(--mid);
}

.input:focus-visible {
  outline: 2px solid var(--border-card);
  outline-offset: 2px;
}
</style>
