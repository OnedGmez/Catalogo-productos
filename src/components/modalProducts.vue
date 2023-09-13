<template>
  <div @keyup.esc="states.modalProductsActions()" class="modal fade show" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="display: block">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <span class="favorite">
            <font-awesome-icon icon="heart" />
          </span>
          <div class="img-modal">
            <img class="img-fluid" src="../assets/img/5257994.png" alt="" />
          </div>
          <div class="content-modal">
            <div class="descript-product">$Product-Descript</div>
            <div class="category-brand">Category - Brand</div>
            <div class="stock-price">
              <div class="stock">
                <span class="label">
                  Stock: <span class="stock-label"> $Stock Docenas </span>
                </span>
              </div>
              <div class="price">
                <span class="label">
                  Precio: <span class="price-label"> $Price </span>
                </span>
              </div>
            </div>
            <div class="colors">
              <div>
                <span class="label">Colores disponibles</span>
              </div>
              <div class="colors-review">
                <colorReview color="#c34610"></colorReview>
              </div>
            </div>
          </div>
        </div>
        <div class="buttons">
          <buttonSpecial @click="states.modalProductsActions()" tipe="secondary" text="Cancelar"></buttonSpecial>
          <buttonSpecial tipe="primary" text="Agregar al carrito"></buttonSpecial>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-modal {
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.content-modal .descript-product {
  text-align: center;
  font-weight: 900;
  font-size: calc(1rem + .89em);
}

.content-modal .stock-price {
  display: flex;
  justify-content: space-between;
}

.category-brand, .stock-label{
  color: var(--vt-c-green);
}

.category-brand, .stock-price, .colors{
  margin-top: 12px;
  font-size: calc(1rem + .095em);
}

.price-label{
  color: var(--vt-c-orange);
  font-weight: 700;
}

.content-modal .colors-review {
  display: flex;
  margin-top: 5px;
}

</style>

<script setup>
import { ref } from 'vue'
import buttonSpecial from "./buttonSpecial.vue";
import colorReview from "./colorReview.vue";
import { useStates } from '../stores/storeStates';

const states = useStates()

</script>
