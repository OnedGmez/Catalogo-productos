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
      <div v-if="rol == 'admin'" class="new-product">
        <buttonSpecial text="Nuevo producto" type="primary"></buttonSpecial>
      </div>
    </div>
    <div :class="[rol == 'admin' ? 'content-web-admin': '']" class="content-web">
      <main id="principal-page">
        <!--Here the modals and content with vue router (all specified childrens) is opened-->
        <!--Aqui se abre los modales y contenido con vue router (todos los hijos indicados)-->
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped>
.content .content-web {
  margin-top: 105px;
  padding: 0 30px;
}

.content-web-admin{
  margin-top: 160px!important;
}

.new-product{
  margin: 15px 0;
  padding: 0 30px;
}

/** Query to tablet */
@media (max-width: 992px) {
  .content .content-web {
    padding: 0 25px;
  }
}

/** Query to phone */
@media (max-width: 768px) {
  .content .content-web {
    margin-top: 60px;
    padding: 0 20px;
  }

  .search-bar-filter {
    display: none;
  }

  .admin{
  margin-top: 105px!important;
}
}
</style>

<script setup>
import { ref } from 'vue'

import searchBar from "../components/searchBar.vue";
import filterbutton from "../components/filterbutton.vue";
import menuTop from "../components/menuTop.vue";
import buttonSpecial from '../components/buttonSpecial.vue';

const rol = ref('admin')

</script>
