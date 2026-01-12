Big Picture (What We’re Setting Up)


✅ Node.js + npm
✅ Vue 3 via Vite
✅ Vue Router


✅ Simple state (using reactive store — lighter than Pinia/Vuex)


✅ Clean directory structure


✅ Components folder with Header + Footer


✅ src/views for pages


✅ src/store for simple state



📘 Vue 3 Project Setup Guide (Vite)
# Vue 3 Project Setup (Vite)

This guide walks through setting up a fresh Vue 3 project using Vite,
with Vue Router, simple global state, and a clean directory structure.

---

## 1. Install Node.js

Make sure Node.js (LTS) is installed.

Check:
```bash
node -v
npm -v

If not installed, get it from:
https://nodejs.org/

2. Create a New Vue 3 Project (Vite)
From the directory where you want the project:
npm create vite@latest my-vue-app

Choose:


Framework: Vue


Variant: JavaScript (or TypeScript if you prefer)


Then:
cd my-vue-app
npm install
npm run dev

Open the URL shown in the terminal to confirm it works.

3. Install Vue Router
npm install vue-router@4


4. Project Structure
We’ll use this structure:
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


5. Configure Vue Router
src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView }
  ]
})

export default router


6. Register Router
src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)
  .mount('#app')


7. Simple Global State (No Pinia)
src/store/state.js
import { reactive } from 'vue'

export const state = reactive({
  user: null,
  isLoggedIn: false
})

Usage in components:
import { state } from '@/store/state'

state.isLoggedIn = true


8. Header & Footer Components
src/components/AppHeader.vue
<template>
  <header>
    <h1>My Vue App</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </header>
</template>

src/components/AppFooter.vue
<template>
  <footer>
    <p>© 2026</p>
  </footer>
</template>


9. Views
src/views/HomeView.vue
<template>
  <div>
    <h2>Home</h2>
  </div>
</template>

src/views/AboutView.vue
<template>
  <div>
    <h2>About</h2>
  </div>
</template>


10. App.vue Layout
src/App.vue
<template>
  <AppHeader />
  <main>
    <router-view />
  </main>
  <AppFooter />
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>


11. Optional Nice-to-Haves
Install devtools:


Vue Devtools browser extension


Alias imports (@) already work via Vite.

12. Run the App
npm run dev


Done 🎉
You now have:


Vue 3


Router


Simple global state


Clean directory layout


Header/Footer layout



---

## Next Steps (If You Want)

I can:
- Convert the state to **Pinia** (if the project grows)
- Add **auth scaffolding**
- Add **API service layer**
- Add **ESLint / Prettier**
- Add **Tailwind or basic CSS setup**

Just tell me what kind of job this is (marketing site, dashboard, CRUD app, etc.), and we’ll optimize for **speed → money → minimal pain** 😄

