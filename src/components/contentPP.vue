<template>
    <div class="container-fluid">
        <div class="row">
            <productsCard @click="states.modalProductsActions(paramsRoute.params.category)"></productsCard>
            <productsCard @click="states.modalProductsActions(paramsRoute.params.category)"></productsCard>
            <productsCard @click="states.modalProductsActions(paramsRoute.params.category)"></productsCard>
            <productsCard @click="states.modalProductsActions(paramsRoute.params.category)"></productsCard>
            <productsCard @click="states.modalProductsActions(paramsRoute.params.category)"></productsCard>
            <productsCard @click="states.modalProductsActions(paramsRoute.params.category)"></productsCard>
        </div>
    </div>
    <router-view />
</template>

<script setup>
import { ref } from 'vue';
import { useStates } from '../stores/storeStates';
import { useRoute } from 'vue-router';

import productsCard from "../components/productsCard.vue";

const states = useStates();
const paramsRoute = useRoute()
</script>