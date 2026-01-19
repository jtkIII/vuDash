import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: 'Vue Dashboard' } },
    { path: '/about', name: 'about', component: AboutView, meta: { title: 'About' } },
    { path: '/even-more', name: 'even-more', meta: { title: 'Even More Vue Dashboard' }, component: () => import('../views/EvenMore.vue') },
    { path: '/settings', name: 'settings', meta: { title: 'Dashboard Settings' }, component: () => import('../views/SettingsView.vue') },
    {
      path: '/blog/:name',
      name: 'BlogView',
      component: () => import('../views/BlogView.vue'),
      meta: {
        title: (route) => `Post ${route.params.name}`
      }
    },
  ]
})

router.afterEach((to) => {
  const baseTitle = 'v-dash'

  if (typeof to.meta.title === 'function') {
    document.title = `${to.meta.title(to)} · ${baseTitle}`
  } else if (to.meta.title) {
    document.title = `${to.meta.title} · ${baseTitle}`
  } else {
    document.title = baseTitle
  }
})


export default router