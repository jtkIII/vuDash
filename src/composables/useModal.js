import { shallowRef } from 'vue'
import ConfirmModal from '@/components/modals/ConfirmModal.vue'
import NoticeModal from '@/components/modals/NoticeModal.vue'

export const modal = shallowRef(null)
// let resolver = null

export function open(component, props = {}) {
  return new Promise((resolve) => {
    modal.value = { component, props, _resolve: resolve }
  })
}

export function close(result) {
  const r = modal.value?._resolve
  try {
    r?.(result)
  } catch (err) {
    console.error('Modal resolver threw an error:', err)
  } finally {
    modal.value = null
  }
}

export function notice(options) {
  return open(NoticeModal, options)
}

export function confirm(options) {
  return open(ConfirmModal, options)
}
