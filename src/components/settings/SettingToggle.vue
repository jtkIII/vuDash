<template>
    <button class="toggle" :class="{ on: modelValue }" role="switch" :aria-checked="modelValue" @click="toggle">
        <span class="thumb" />
    </button>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

function toggle() {
  emit('update:modelValue', !props.modelValue)
}
</script>


<style scoped>
.toggle {
  width: 38px;
  height: 22px;
  border-radius: 999px;
  background-color: var(--mid);
  border: none;
  padding: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.15s ease;
}

.toggle.on {
  background-color: var(--purple);
}

.thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: white;
  transform: translateX(0);
  transition: transform 0.15s ease;
}

.toggle.on .thumb {
  transform: translateX(16px);
}

/* Focus accessibility */
.toggle:focus-visible {
  outline: 2px solid #6366f1;
  outline-offset: 2px;
}
</style>
