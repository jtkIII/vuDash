# vudash
## Vue3 Dashboard

### I'm going for “UI-complete for mock stage”.

✅ Node.js + npm
✅ Vue 3 via Vite
✅ Vue Router
✅ Simple state (using reactive store — lighter than Pinia/Vuex)
✅ src/store for simple state
✅ Clean directory structure
✅ Components folder
✅ src/views for pages


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
cd vudash
npm install
npm run dev
```

Open the URL shown in the terminal to confirm it works.


##### Project Structure

```
src/
├── assets/
├── components/
│   ├── AppHeader.vue
│   └── AppFooter.vue
├── views/
│   ├── HomeView.vue
│   └── AboutView.vue
├── router/
│   └── index.js
├── store/
│   └── state.js
├── App.vue
└── main.js
```

##### Simple Global State (No Pinia)
- src/store/state.js
- import { reactive } from 'vue'

- export const state = reactive({
  user: null,
  isLoggedIn: false
})

Usage in components:
import { state } from '@/store/state'

state.isLoggedIn = true


##### Optional Nice-to-Haves
Install devtools:
Vue Devtools browser extension

##### Vite Config
Alias imports (@) already work via Vite.