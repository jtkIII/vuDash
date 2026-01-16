<template>
  <div class="search-input">
    <span class="icon"><Search class="search-icon" /></span>

    <input type="text" :placeholder="placeholder" :value="modelValue" @input="onInput" @focus="$emit('focus')"
      @keydown.escape="$emit('escape')" />

    <button v-if="modelValue" class="clear" @click="clear" aria-label="Clear search">
      ✕
    </button>
  </div>
</template>

<script setup>
    import {
  Search
} from 'lucide-vue-next'
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'Search…'
  }
})

const emit = defineEmits([
  'update:modelValue',
  'focus',
  'escape'
])

function onInput(event) {
  emit('update:modelValue', event.target.value)
}

function clear() {
  emit('update:modelValue', '')
}
</script>


<style scoped>
.search-input {
  position: relative;
  display: flex;
  align-items: center;
  background-color: var(--bg-input);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  padding: 0 10px;
  height: 40px;
}

.search-input:focus-within {
  background-color: none;
  border-color: transparent;
  box-shadow: 0 3px 9px var(--shadow-button);
}

.icon {
  font-size: 14px;
  color: var(--mid);
}

.search-icon {
  width: 16px;
  height: 16px;
}

input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: var(--text-primary);
  font-size: 13px;
}

input::placeholder {
  color: var(--text-primary);
}

.clear {
  background: none;
  border: none;
  color: var(--mid);
  cursor: pointer;
  font-size: 14px;
}

.clear:hover {
  color: var(--text-muted);
}
</style>