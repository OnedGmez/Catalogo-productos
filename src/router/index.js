import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/loginPage.vue'
import principalPage from '../views/principalPage.vue'
import shoppingCart from '../views/shoppingCart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
      alias: '/'
    },
    {
      path: '/principal/:user/',
      name: 'principal-Page',
      component: principalPage
    },
    {
      path: '/shopping-cart/:user/:date/',
      name: 'shopping-Cart',
      component: shoppingCart
    }
  ]
})

export default router
