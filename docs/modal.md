# Modals
I used to use NPM packages to do pop-up windows; but I decided that this time I wanted to roll my own. 

## Goals
Keyboard support, Accessibility, Clean Architecture

### Files
```
├── modals/
│   ├── ConfirmModal.vue
│   ├── ModalHost.vue
│   ├── NoticeModal.vue

├── composables/
│   ├── useModal.js
```

#### Details
Confirm and Notice are basically the same thing, although confirm has 2 buttons (Multi-button confirm modal) and notice one - no choice.  The idea was to separate the different types of modals into their own files although this is far from perfect and could certainly be refactored, duplication eliminated, etc.

##### Implementation
```
import { confirm, notice } from '@/composables/useModal'

const jtkClick = async () => {
  return await notice({
    title: 'jtkIII',
    message: 'Dashboard coded by Jtk using Vue 3 and Vite.',
    confirmText: 'Ok Then',
    variant: 'purple'
  })
}
```

###### Notes
- ✔️ Prevent background scroll
- ✔️ Screen-reader friendly
- ✔️ Keyboard events are scoped
- ✔️ No global listeners needed
- ✔️ Escape closes modal
- ✔️ Enter confirms (with text-input guard)
- ✔️ Click backdrop to cancel
- ✔️ Keyboard listeners added/removed on mount
- ✔️ ARIA role + aria-modal
- ✔️ Autofocus on primary action
- ✔️ Single-button modal works cleanly