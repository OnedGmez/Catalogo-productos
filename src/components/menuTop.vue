<template>
  <div class="space-menu">
    <div v-if="states.isPhone" class="search-bar-filter">
      <div class="search-bar">
        <searchBar></searchBar>
      </div>
      <div class="filter">
        <filterbutton></filterbutton>
      </div>
    </div>
    <div v-if="!states.isPhone" class="options-menu">
      <div class="options-categories">
        <ul class="options">
          <li>Hombre</li>
          <li>Mujer</li>
          <li>Niño</li>
          <li>Niña</li>
          <li class="selected">Nuevos Productos</li>
          <li>Favoritos</li>
        </ul>
      </div>
      <div class="option-contact">
        <span> Contáctanos </span>
      </div>
    </div>
    <div @click="states.dropdownMenu" :class="[states.activeDropdownMenu == true ? 'selected' : '']" class="profile">
      <span>
        <font-awesome-icon icon="user-tie" />
      </span>
    </div>
  </div>
  <div :class="[states.activeDropdownMenu == true ? ['show-dropdown', routes.name + '-show-dropdown'] : '']"
    class="dropdown-menu-special">
    <ul class="options-dropdown">
      <li v-if="routes.name != 'account-config'" @click="goAccount">Cuenta</li>
      <li v-if="states.isPhone">Favoritos</li>
      <li>Estadísticas</li>
      <li v-if="routes.name != 'shopping-Cart'" @click="goShoppingCart">Carrito de compras</li>
      <li @click="closeSesion">Cerrar sesión</li>
    </ul>
  </div>
  <div class="space-menu-phone">
    <div v-if="states.isPhone" class="options-phone">
      <div class="options-categories">
        <ul class="options">
          <li class="selected">Hombre</li>
          <li>Mujer</li>
          <li class="selected">Niño</li>
          <li>Niña</li>
          <li class="selected">Novedades</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.space-menu {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  background-color: var(--vt-c-white);
  box-shadow: 0px 5px 20px #0000001c;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
}

.space-menu .options-menu {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.options-menu .options-categories {
  display: flex;
  align-items: center;
  width: 100%;
}

.options-categories .options {
  list-style-type: none;
  display: inline-flex;
  align-items: center;
  padding: 0;
  height: 100%;
  margin: 0;
}

.options li {
  margin-right: 35px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  height: 100%;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 15px;
}

.options li:hover,
.options-menu .option-contact:hover,
.space-menu .profile:hover,
.options-dropdown li {
  cursor: pointer;
}

.options-menu .option-contact {
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 30px;
}

.space-menu .profile {
  margin: auto 0;
  width: 48px;
  height: 48px;
  background-color: var(--vt-c-soft-grey);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: calc(1em + .5vw);
}

.dropdown-menu-special {
  position: absolute;
  right: 0;
  z-index: -1;
  background-color: var(--vt-c-white);
  padding: 5px 15px 10px 15px;
  width: fit-content;
  margin-right: 30px;
  top: -100%;
  transition: all 180ms ease-in-out;
}

.show-dropdown {
  top: 54%;
  z-index: 1;
}

.shopping-Cart-show-dropdown {
  top: 80%;
}

.dropdown-menu-special .options-dropdown {
  list-style-type: none;
  padding: 0;
}

.options-dropdown li {
  margin-bottom: 12px;
}

.options-dropdown li:last-child::before {
  content: '';
  width: 100%;
  height: 1px;
  background-color: var(--vt-c-grey);
  display: flex;
  margin-top: 7px;
}

/** Query to tablet */
@media (max-width: 992px) {
  .options li {
    margin-right: 15px;
    padding: 15px;
  }
}

/** Query to phone */
@media (max-width: 768px) {

  .space-menu {
    padding: 0 20px;
    align-items: center;
  }

  .space-menu-phone {
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 3%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .space-menu .search-bar-filter {
    display: block;
    width: 100%;
    position: relative;
  }

  .search-bar-filter .filter {
    position: absolute;
    right: 0%;
    top: 0%;
  }

  .space-menu .profile {
    width: 45px;
    height: 40px;
  }

  .dropdown-menu-special {
    margin-right: 20px;
    top: -200%;
  }

  .show-dropdown {
    top: 80%;
    z-index: 1;
  }

  .options-phone {
    background-color: var(--vt-c-white);
    width: fit-content;
    height: 100%;
    box-shadow: 0px 5px 20px #00000031;
    border-radius: 25px;
  }

  .options-phone .options-categories {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .options li {
    margin-right: 0px;
    border-radius: 25px;
    height: 100%;
    display: flex;
    font-size: calc(.85rem + .05em);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 17px;
  }

  .options li:last-child {
    border-bottom-left-radius: 25px;
    border-top-right-radius: 25px;
    border-top-left-radius: 0;
    border-bottom-right-radius: 25px;
    margin-right: 0px;
  }

  .options li:first-child {
    border-bottom-left-radius: 25px;
    border-top-left-radius: 25px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 25px;
  }
}
</style>

<script setup>
import { useStates } from '../stores/storeStates';
import router from "@/router";
import { useRoute } from "vue-router";

import searchBar from './searchBar.vue';
import filterbutton from './filterbutton.vue';

const routes = useRoute();
const dateV = new Date();
const date = String(dateV.getDate()).padStart(2, '0') + '-' + String(dateV.getMonth() + 1).padStart(2, "0") + '-' + dateV.getFullYear();

const states = useStates();
const user = 'Prueba';

function goAccount() {
  states.modalAccountConfig(date, user)
}

function goShoppingCart() {
  states.dropdownMenu()
  router.push({ name: 'shopping-Cart', params: { date, user } });
}

function closeSesion() {
  states.dropdownMenu()
  router.replace('/');
}
</script>
