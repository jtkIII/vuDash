<template>
  <!-- This and notice modal are similar, can be refactored -->
  <div class="backdrop" @click.self="cancel">
    <div class="modal" role="dialog" aria-modal="true" tabindex="-1" ref="modalRef" @keydown="onKeydown"
      aria-labelledby="modal-title">
      <h3 class="title" id="modal-title">{{ title }}</h3>

      <p v-if="message" class="message">
        {{ message }}
      </p>

      <div class="actions">
        <button ref="cancelBtnRef" class="btn secondary" @click="cancel">
          {{ cancelText }}
        </button>

        <button ref="confirmBtnRef" class="btn primary" :class="variant" @click="confirm">
          {{ confirmText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { close } from '@/composables/useModal'
import { ref, onMounted, onUnmounted } from 'vue'

const modalRef = ref(null)
const confirmBtnRef = ref(null)
const cancelBtnRef = ref(null)
let lastActiveElement = null

defineProps({
  title: { type: String, required: true },
  message: { type: String, default: '' },
  confirmText: { type: String, default: 'Confirm' },
  cancelText: { type: String, default: 'Cancel' },
  variant: {
    type: String,
    default: 'default' // 'danger' | 'standard' | etc
  }
})

function confirm() {
  close(true)
}

function cancel() {
  close(false)
}

function onKeydown(e) {
  if (e.key === 'Escape') {
    e.preventDefault()
    cancel()
    return
  }

  if (e.key === 'Enter') {
    e.preventDefault()
    confirm()
    return
  }

  if (e.key === 'Tab') {
    e.preventDefault()

    const isShift = e.shiftKey
    const active = document.activeElement

    if (isShift && active === confirmBtnRef.value) {
      cancelBtnRef.value?.focus()
    } else if (!isShift && active === cancelBtnRef.value) {
      confirmBtnRef.value?.focus()
    } else {
      confirmBtnRef.value?.focus()
    }
  }
}

onMounted(() => {
  lastActiveElement = document.activeElement
  modalRef.value?.focus()
  confirmBtnRef.value?.focus()
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  lastActiveElement?.focus()
  document.body.style.overflow = ''
})
</script>
