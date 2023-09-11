import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/loginPage.vue'
import principalPage from '../views/principalPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/principal',
      name: 'principal Page',
      component: principalPage
    }
  ]
})

export default router
