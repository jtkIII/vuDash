<template>
  <div class="backdrop" @click.self="cancel">
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-desc"
      tabindex="-1" ref="modalRef" @keydown="onKeydown">

      <h3 class="title" :id="`modal-title`">{{ title }}</h3>

      <p v-if="message" class="message" id="modal-desc">
        {{ message }}
      </p>

      <div class="actions">
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
let lastActiveElement = null

defineProps({
  title: { type: String, required: true },
  message: { type: String, default: '' },
  confirmText: { type: String, default: 'Ok Then' },
  variant: {
    type: String,
    default: 'standard' // 'danger' | 'default' | 'purple' etc
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
    // trap focus inside modal
    e.preventDefault()
    confirmBtnRef.value?.focus()
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
