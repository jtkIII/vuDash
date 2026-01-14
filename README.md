# v-dash
## Vue3 Dashboard

### I'm going for “UI-complete for mock stage”.

✅ Node.js + npm
✅ Vue 3 via Vite
✅ Vue Router
✅ Simple state (using reactive store — lighter than Pinia/Vuex)
✅ src/store for simple state

- custom modal system
- composable-based
- slot-driven
- visually flexible
- backend-agnostic
- zero-lock-in


#### For completeness:

Make sure Node.js (LTS) is installed.

Check:
```bash
node -v
npm -v
```

If not installed, get it from:
https://nodejs.org/

Then:
```bash
cd v-dash
npm install
npm run dev
```

Open the URL shown in the terminal to confirm it works.


##### Project Structure

```
docs/
public/
src/
├── assets/
│   ├── style.css
│   ├── variables.css
│   ├── reset.css
├── components/
│   ├── charts
│   └── layout
│   ├── modals
│   └── search
│   ├── settings
│   └── shared
├── compostables/
│   ├── useDirtyState.js
│   └── useModal.js
├── views/
│   ├── HomeView.vue
│   └── AboutView.vue
│   ├── EvenMore.vue
│   └── Settings.vue
├── router/
│   └── index.js
├── store/
│   └── state.js
├── App.vue
└── main.js
└── style.css
```

- components/ – Reusable UI components, grouped by feature (charts, modals, search, etc.)
- views/ – Route-level views used by Vue Router
- composables/ – Reusable Composition API logic (e.g. modal state, shared behaviors)
- store/ – Application state management
- router/ – Vue Router configuration
- assets/ – Static assets and media


##### Simple Global State (No Pinia)
- src/store/state.js

```
import { reactive } from 'vue'

- export const state = reactive({
  user: null,
  isLoggedIn: false
})
```

- Usage in components:

```
import { state } from '@/store/state'
state.isLoggedIn = true
```

##### Optional Nice-to-Haves
Install devtools:
Vue Devtools browser extension

##### Vite Config
Alias imports (@) already work via vite.config.