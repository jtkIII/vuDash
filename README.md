# v-dash
## Vue3 Dashboard

### I'm going for “UI-complete for mock stage”.

![Alt text](/public/screenshots/1.png)

- ✅ Node.js + npm
- ✅ Vue 3 via Vite
- ✅ Vue Router
- ✅ Minimal Dependencies
- ✅ Simple state (using reactive store — lighter than Pinia/Vuex)

- custom modal system
- composable-based
- slot-driven
- visually flexible
- backend-agnostic
- zero-lock-in
- dark mode / light mode

---

#### For completeness:

Make sure Node.js (LTS) is installed.

Check:
```bash
node -v
npm -v
```

If not installed, get it from: https://nodejs.org/

Then:
```bash
cd v-dash
npm install
npm run dev
```

Open the URL shown in the terminal to confirm it works.

---

##### Project Structure

```
docs/
public/
src/
├── assets/
│   ├── base.css
│   ├── index.css
│   ├── reset.css
│   ├── theme-dark.css
│   ├── theme-light.css
│   ├── variables.css
├── components/
│   ├── blog
│   ├── charts
│   └── layout
│   ├── modals
│   └── search
│   ├── settings
│   └── shared
├── compostables/
│   ├── useDirtyState.js
│   └── useModal.js
│   └── usePosts.js
│   └── useTheme.js
│   └── useUsers.js
├── views/
│   ├── HomeView.vue
│   └── AboutView.vue
│   └── BlogView.vue
│   ├── EvenMore.vue
│   └── Settings.vue
├── router/
│   └── index.js
├── store/
│   └── state.js
├── App.vue
└── main.js
```

- components/ – Reusable UI components, grouped by feature (charts, modals, search, etc.)
- views/ – Route-level views used by Vue Router
- composables/ – Reusable Composition API logic (e.g. modal state, shared behaviors)
- store/ – Application state management
- router/ – Vue Router configuration
- assets/ – Static assets and media

**There is additional incomplete documentation in the /docs directory.**

---

- Alias imports (@) already work via vite.config.
- lucide-vue-next, Vue, and vue-router are the only dependencies