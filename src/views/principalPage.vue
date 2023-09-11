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
      <main>
        <div class="container-fluid">
          <div class="row">
            <productsCard></productsCard>
            <productsCard></productsCard>
            <productsCard></productsCard>
            <productsCard></productsCard>
            <productsCard></productsCard>
            <productsCard></productsCard>
          </div>
        </div>
      </main>
    </div>
  </div>
  <modalProducts></modalProducts>
</template>

<style scoped>
.content .content-web {
  margin-top: 20px;
  padding: 0 30px;
}
</style>

<script setup>
import productsCard from "../components/productsCard.vue";
import searchBar from "../components/searchBar.vue";
import filterbutton from "../components/filterbutton.vue";
import menuTop from "../components/menuTop.vue";
import modalProducts from "../components/modalProducts.vue";
</script>
