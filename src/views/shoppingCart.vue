<template>
  <div class="content">
    <div id="top-site-bar">
      <div class="top-menu">
        <menuTop></menuTop>
      </div>
      <div class="search-bar-filter">
        <div class="search-bar">
          <searchBar></searchBar>
        </div>
        <div class="filter">
          <filterbutton></filterbutton>
        </div>
      </div>
    </div>
    <div class="content-web">
      <main id="shopping-cart">
        <div class="container-fluid">
          <div class="row">
            <shoppingCartCard></shoppingCartCard>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.content .content-web {
  margin-top: 105px;
  padding: 0 30px;
}
</style>

<script setup>
import { ref } from 'vue'

import { useStates } from '../stores/storeStates';
const states = useStates();


import searchBar from "../components/searchBar.vue";
import filterbutton from "../components/filterbutton.vue";
import menuTop from "../components/menuTop.vue";
import shoppingCartCard from '../components/shoppingCartCard.vue';

</script>
