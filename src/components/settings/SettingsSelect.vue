<template>
    <select class="select" :value="modelValue" @change="onChange">
        <option v-for="option in options" :key="option.value" :value="option.value">
            {{ option.label }}
        </option>
    </select>
</template>

<script setup>
const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: ''
    },
    options: {
        type: Array,
        required: true
        /*
          [{ value: 'dark', label: 'Dark' }]
        */
    }
})

const emit = defineEmits(['update:modelValue'])

function onChange(event) {
    emit('update:modelValue', event.target.value)
}
</script>

<style scoped>
.select {
    appearance: none;
    background-color: var(--bg-input);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-sm);
    padding: 6px 28px 6px 10px;
    font-size: 13px;
    color: var(--text-primary);
    cursor: pointer;
    min-width: 140px;
    background-image:
        linear-gradient(45deg, transparent 50%, rgba(255, 255, 255, 0.6) 50%),
        linear-gradient(135deg, rgba(255, 255, 255, 0.6) 50%, transparent 50%);
    background-position:
        calc(100% - 14px) 50%,
        calc(100% - 9px) 50%;
    background-size: 5px 5px;
    background-repeat: no-repeat;
}

.select:focus-visible {
    outline: 2px solid var(--purple);
    outline-offset: 2px;
}

.select option {
    background-color: var(--bg-input);
}
</style>
