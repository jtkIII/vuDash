<template>
    <div class="settings-footer" :class="{ visible: dirty }">
        <div class="message">
            <slot>
                You have unsaved changes
            </slot>
        </div>

        <div class="actions">
            <button class="btn secondary" type="button" @click="$emit('cancel')">
                Cancel
            </button>

            <button class="btn primary" type="button" @click="$emit('save')">
                Save
            </button>
        </div>
    </div>
</template>

<script setup>
defineProps({
  dirty: {
    type: Boolean,
    default: false
  }
})

defineEmits(['save', 'cancel'])
</script>

<style scoped>
.settings-footer {
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 16px;
  background-color: rgba(30, 30, 30, 0.95);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(6px);
  transform: translateY(100%);
  transition: transform 0.2s ease;
}

.settings-footer.visible {
  transform: translateY(0);
}

.message {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.75);
}

.actions {
  display: flex;
  gap: 8px;
}

.btn {
  font-size: 13px;
  padding: 6px 14px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
}

.btn.primary {
  background-color: #6366f1;
  color: white;
}

.btn.secondary {
  background-color: #252526;
  color: rgba(255, 255, 255, 0.85);
}

.btn.secondary:hover {
  background-color: #2a2a2a;
}

.btn.primary:hover {
  background-color: #4f52d8;
}
</style>
