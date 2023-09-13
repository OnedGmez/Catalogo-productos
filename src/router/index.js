import { createRouter, createWebHistory } from "vue-router";
import login from "../views/loginPage.vue";
import principalPage from "../views/principalPage.vue";
import shoppingCart from "../views/shoppingCart.vue";
import modalProducts from "../components/modalProducts.vue";
import modalAccount from "../components/modalAccount.vue";
import contentPP from "../components/contentPP.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: login,
      alias: "/",
    },
    {
      path: "/principal/",
      name: "principal-Page",
      component: principalPage,
      children: [
        {
          path: "Products/:category",
          name: "content-principal-page",
          component: contentPP,
          children: [
            {
              path: ":product",
              name: "modal-Products",
              component: modalProducts,
            },
            {
              path: "Account/:user",
              name: "account-config",
              component: modalAccount,
            },
          ],
        },
      ],
    },
    {
      path: "/shopping-cart/:date/:user",
      name: "shopping-Cart",
      component: shoppingCart,
      children:[
        {
          path: "Account/",
          name: "account-config-shopping",
          component: modalAccount,
        }
      ]
    },
  ],
});

export default router;
