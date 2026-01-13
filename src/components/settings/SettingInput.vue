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
  background-color: #252526;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
  min-width: 180px;
}

.input::placeholder {
  color: rgba(255, 255, 255, 0.35);
}

.input:focus-visible {
  outline: 2px solid #6366f1;
  outline-offset: 2px;
}
</style>
