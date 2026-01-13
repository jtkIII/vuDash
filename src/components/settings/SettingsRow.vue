<template>
    <div class="settings-row">
        <div class="info">
            <div class="label">
                {{ label }}
            </div>
            <div v-if="description" class="description">
                {{ description }}
            </div>
        </div>

        <div class="control">
            <slot />
        </div>
    </div>
</template>

<script setup>
defineProps({
    label: {
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
.settings-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.settings-row:last-child {
    border-bottom: none;
}

.info {
    flex: 1;
    min-width: 0;
}

.label {
    font-size: 14px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
}

.description {
    margin-top: 2px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.55);
}

.control {
    flex-shrink: 0;
    display: flex;
    align-items: center;
}

/* Hover affordance */
.settings-row:hover {
    background-color: rgba(255, 255, 255, 0.02);
}

/* Mobile stacking */
@media (max-width: 640px) {
    .settings-row {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }

    .control {
        align-self: flex-end;
    }
}
</style>
