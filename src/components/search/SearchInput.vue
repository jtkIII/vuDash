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
  background-color: #252526;
  border: 1px solid #2f2f2f;
  border-radius: 10px;
  padding: 0 10px;
  height: 40px;
}

.search-input:focus-within {
  background-color: #202020;
  border-color: #58508d45;
  box-shadow: 0 3px 9px rgba(165, 99, 241, 0.15);
}

.icon {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
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
  color: rgba(255, 255, 255, 0.87);
  font-size: 13px;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.clear {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  font-size: 14px;
}

.clear:hover {
  color: rgba(255, 255, 255, 0.8);
}
</style>