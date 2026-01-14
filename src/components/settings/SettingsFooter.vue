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

const emit = defineEmits(['save', 'cancel','update:modelValue', 'commit'])

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
