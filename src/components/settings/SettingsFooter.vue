<template>
  <div class="settings-footer" :class="{ visible: dirty }">
    <div class="message">
      <slot>
        You have unsaved changes
      </slot>
    </div>
    <div class="actions">
      <button class="btn secondary" type="button" @click="cancelSave">
        Cancel
      </button>
      <button class="btn primary" type="button" @click="onSubmit">
        Save
      </button>
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { confirm, notice } from '@/composables/useModal'
const props = defineProps({
  dirty: {
    type: Boolean,
    default: false
  },
  modelValue: Boolean,
  autoCommit: { type: Boolean, default: true }
})

const emit = defineEmits(['save', 'cancel', 'update:modelValue', 'commit'])

watch(
  () => props.modelValue,
  () => {
    if (props.autoCommit) {
      emit('commit')
    }
  }
)

const cancelSave = async () => {
  emit('cancel')
  return await notice({
    title: 'Canceled Changes',
    message: 'Maybe this is for the best....',
    confirmText: 'Ok Then',
    variant: 'purple'
  })
}

const onSubmit = async () => {
  emit('save')
  return await confirm({
    title: 'Save Changes?',
    message: 'Are you sure you want to save these changes?',
    confirmText: 'Save?',
    cancelText: 'Undo!',
    variant: 'standard'
  })
}

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
  background-color: var(--bg-surface);
  border-top: 1px solid var(--border-subtle);
  backdrop-filter: blur(6px);
  transform: translateY(100%);
  transition: transform 0.2s ease;
}

.settings-footer.visible {
  transform: translateY(0);
}

.message {
  font-size: 13px;
  color: var(--text-heading);
}

.actions {
  display: flex;
  gap: 8px;
}

</style>
