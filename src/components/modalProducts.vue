<template>
<div class="modal fade show" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="display: block;">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
        <div class="img-modal">
            <img class="img-fluid" src="../assets/img/5257994.png" alt="">
        </div>
        <div class="content-modal">
            <div class="descript-product">
                $Product-Descript
            </div>
            <div class="category-brand">
                Category - Brand
            </div>
            <div class="stock-price">
                <div class="stock">
                    <span class="label">
                        Stock: <span class="stock-label">
                            $Stock Docenas
                        </span>
                    </span>
                </div>
                <div class="price">
                    <span class="label">
                        Precio: <span class="price-label">
                            $Price
                        </span>
                    </span>
                </div>
            </div>
            <div class="colors">
                <div class="label">
                    <span>Colores disponibles</span>
                </div>
                <div class="colors-review">
                    <colorReview color="#c34610"></colorReview>
                    <colorReview color="#a33520"></colorReview>
                    <colorReview color="#b32430"></colorReview>
                    <colorReview color="#d31340"></colorReview>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.img-modal{
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
}

.content-modal .descript-product{
    text-align: center;
}

.content-modal .stock-price{
    display: flex;
    justify-content: space-between;
}

.content-modal .colors-review{
    display: flex;
}
</style>

<script setup>
import colorReview from './colorReview.vue';
</script>