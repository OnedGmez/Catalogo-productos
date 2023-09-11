<template>
  <div class="card-container col-xl-2">
    <div class="card">
    <div class="product-img">
        <img src="../assets/img/5257994.png" class="card-img-top img-fluid" alt="..." />
    </div>
    <div class="card-body">
      <h5 class="card-title">$Product-descript</h5>
      <div class="info-product">
        <div class="category-brand">
            <span>Category - Brand</span>
        </div>
        <div class="price">
            <span>$Price</span>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
@import "../assets/css/base.css";
@import "../assets/css/main.css";
@import "../assets/css/animaciones-forms.css";

.card-container{
    display: flex;
    height: fit-content;
    justify-content: center;
}

.card-container .card{
    border: none;
}

.card-container .card:hover{
    cursor: pointer;
    border-radius: 15px;
    box-shadow: 0px 5px 20px #0000001c;
}

.card .product-img{
    margin-top: 10px;
    padding: 0 50px;
}

.card-body{
    padding: var(--bs-card-spacer-y) 0.65rem;
}

.card-body .info-product{
    display: flex;
    justify-content: space-between;
}

.info-product .category-brand{
    color: var(--vt-c-green);
}

.info-product .price{
    color: var(--vt-c-orange);
}
</style>

<script setup>
import { ref } from "vue";

const propertiesCard = defineProps(
    ["data"]
);
</script>
