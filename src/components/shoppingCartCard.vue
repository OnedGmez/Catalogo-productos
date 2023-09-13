<template>
  <div class="card-container col-12 col-sm-6 col-md-6 col-xl-4">
    <div class="card">
        <div class="product-img">
            <img src="../assets/img/5257994.jpg" class="card-img-top img-fluid" alt="..." />
        </div>
        <div class="card-body">
            <div>
                <h5 class="card-title">$Product-descript</h5>
                <div class="info-product">
                    <div class="category-brand">
                        <span>Category - SubCategory - Brand</span>
                    </div>
                    <div class="price-request">
                        <span class="label">
                            Unidades: <input class="control-number" type="number" name="request-qty" id="request-input">
                        </span>
                        <span class="label">
                            Total: <span>$Total</span>
                        </span>
                    </div>
                </div>
            </div>
            <div class="button-delete">
                <span>
                    <font-awesome-icon icon="trash" />
                </span>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/css/main.css";

.card-container {
  height: fit-content;
  justify-content: center;
  margin-top: 15px;
}

.card-container .card {
  border: none;
  display: flex;
  flex-direction: row;
}

.card-container .card:hover {
  cursor: pointer;
  border-radius: 15px;
  box-shadow: 0px 5px 20px #0000001c;
}

.card .product-img {
  margin: 0 10px;
  width: calc(100% - 69%);;
  display: flex;
  align-items: center;
}

.card-body {
  padding: var(--bs-card-spacer-y) 0.65rem;
  display: flex;
  align-items: center;
}

.card-body .card-title {
  font-weight: 800;
  font-size: calc(1rem + 0.2em);
  margin-bottom: 0;
  text-wrap: nowrap;
}

.info-product .category-brand {
  color: var(--vt-c-green);
  font-size: calc(0.75rem + 0.007em);
  display: flex;
  text-align: center;
}

.info-product .category-brand > span {
  font-weight: 600;
}

.info-product .price-request{
    font-size: calc(0.75rem + 0.085em);
    margin-top: 7px;
}

.info-product .price-request .label > span {
  color: var(--vt-c-orange);
}

.control-number{
    border: none;
    width: 13%;
    font-weight: 700;
    margin-right: 10px;
}

.button-delete{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--vt-c-soft-grey);
    margin-right: 15px;
    padding: 20px;
    transition: all 150ms ease-in-out;
}

.button-delete:hover{
    color: var(--vt-c-white);
    background-color: var(--vt-c-orange);
}
</style>

<script setup>

const propertiesCard = defineProps(["data"]);
</script>
