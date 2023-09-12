<template>
  <div class="content">
    <div id="top-site-bar">
      <div class="top-menu">
        <menuTop></menuTop>
      </div>
    </div>
    <div class="content-web">
      <main id="shopping-cart">
        <div class="container-fluid">
          <div class="row">
            <div class="welcome-client">
              <span class="label-welcome">
                $NombreUsuario, <span>Tu carrito de compras</span>
              </span>
            </div>
            <shoppingCartCard></shoppingCartCard>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.content .content-web {
  margin-top: 55px;
  padding: 0 30px;
  position: relative;
}

.welcome-client {
  margin-top: 30px;
  font-size: calc(1em + 1.05vw);
}

.welcome-client .label-welcome {
  font-weight: bold;
  color: var(--vt-c-orange);
}

.welcome-client .label-welcome > span {
  color: var(--vt-c-black);
}
</style>

<script setup>
import { ref } from "vue";

import { useStates } from "../stores/storeStates";
const states = useStates();

import menuTop from "../components/menuTop.vue";
import shoppingCartCard from "../components/shoppingCartCard.vue";
</script>
