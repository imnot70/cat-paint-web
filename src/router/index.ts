import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ViewDesign from '../views/ViewDesign.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // children:[
      //   {
      //     name: 'viewdesign',
      //     path: 'viewdesign/:key',
      //     component: ViewDesign,
      //   }
      // ]
    },
    {
      path: '/viewdesign/:key',
      name: 'viewdesign',
      component: ViewDesign,
    }
  ]
})

export default router
