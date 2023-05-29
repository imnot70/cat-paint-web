import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ViewDesign from '../views/detail/ViewDesign.vue'
import Mine from '../views/mine/mine.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/viewdesign/:key',
      name: 'viewdesign',
      component: ViewDesign,
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
    }
  ]
})

export default router
