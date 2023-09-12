import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/loginPage.vue'
import principalPage from '../views/principalPage.vue'
import shoppingCart from '../views/shoppingCart.vue'
import modalProducts from '../components/modalProducts.vue'

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
      path: '/principal/',
      name: 'principal-Page',
      component: principalPage,
      children:[
        {
          path: ':product',
          name: 'modal-Products',
          component: modalProducts,
        }
      ]
    },
    {
      path: '/shopping-cart/:user/:date/',
      name: 'shopping-Cart',
      component: shoppingCart
    }
  ]
})

export default router
