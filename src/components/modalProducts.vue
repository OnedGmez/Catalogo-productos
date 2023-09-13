<template>
  <div @keyup.esc="states.modalProductsActions()" class="modal fade show" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true" style="display: block">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <span class="favorite favorite-modal">
            <font-awesome-icon icon="heart" />
          </span>
          <div class="img-modal">
            <img class="img-fluid" src="../assets/img/5257994.jpg" alt="" />
          </div>
          <div class="content-modal">
            <div class="descript-product">$Product-Descript</div>
            <div class="category-brand">Category - Subcategory - Brand</div>
            <div class="stock-price">
              <div class="stock">
                <span class="label">
                  Stock: <span class="stock-label"> $Stock</span>
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
          <buttonSpecial @click="states.modalProductsActions(routeParams.params.category)" type="secondary" text="Cancelar"></buttonSpecial>
          <buttonSpecial type="primary" text="Agregar al carrito"></buttonSpecial>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-modal {
  width: calc(100% - 35%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
}

.content-modal .descript-product {
  text-align: center;
  font-weight: 900;
  font-family: 'chewy';
  font-size: calc(1rem + .65em);
}

.content-modal .stock-price {
  display: flex;
  justify-content: space-between;
}

.category-brand,
.stock-label {
  color: var(--vt-c-green);
}

.category-brand,
.stock-price,
.colors {
  margin-top: 3px;
  font-size: calc(1rem + .05em);
}

.price-label {
  color: var(--vt-c-orange);
  font-weight: 700;
}

.content-modal .colors-review {
  display: flex;
  margin-top: 5px;
}

.modal-dialog {
  justify-content: center !important;
}

.modal-content {
  width: 90% !important;
}

/** Query to tablet */
@media (max-width: 992px) {
  .img-modal {
    width: calc(100% - 40%);
  }

  .content-modal .descript-product {
    font-size: calc(1rem + .7em);
  }

  .category-brand,
  .stock-price,
  .colors {
    font-size: calc(1rem + .045em);
  }

  .modal-content {
  width: 85% !important;
}
}

/** Query to phone */
@media (max-width: 768px) {
  .img-modal {
    width: calc(100% - 45%);
  }

  .content-modal .descript-product {
    font-size: calc(1rem + .55em);
  }

  .category-brand,
  .stock-price,
  .colors {
    font-size: calc(1rem + .01em);
  }

  .modal-content {
  width: 80% !important;
}

}
</style>

<script setup>
import { useRoute } from "vue-router";

import buttonSpecial from "./buttonSpecial.vue";
import colorReview from "./colorReview.vue";
import { useStates } from '../stores/storeStates';

const states = useStates()
const routeParams = useRoute();

</script>
