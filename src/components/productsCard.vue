<template>
    <div class="card-container col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2">
        <div class="card">
            <div class="product-img">
                <img src="../assets/img/5257994.jpg" class="card-img-top img-fluid" alt="..." />
            </div>
            <div class="card-body">
                <h5 class="card-title">$Product-descript</h5>
                <div class="info-product">
                    <div class="category-brand">
                        <span>Hombre - Boxer - Brand</span>
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
@import "../assets/css/main.css";

.card-container {
    display: flex;
    height: fit-content;
    justify-content: center;
    margin-top: 15px;
}

.card-container .card {
    border: none;
    padding: 0px 2px;
}

.card-container .card:hover {
    cursor: pointer;
    border-radius: 15px;
    box-shadow: 0px 5px 20px #0000001c;
}

.card .product-img {
    margin-top: 10px;
    padding: 0 calc(100% - 80%);
}

.card-body {
    padding: 0.45rem 0.65rem;
    margin-bottom: 7px;
}

.card-body .card-title {
    font-weight: 700;
    font-size: calc(1rem + 0.25em);
    margin-bottom: 0;
    text-wrap: nowrap;
    text-align: center;
    font-family: 'chewy';
}

.card-body .info-product {
    display: block;
}

.info-product .category-brand {
    color: var(--vt-c-green);
    font-size: calc(0.75rem + .055em);
    display: flex;
    flex-direction: column;
    text-align: center;
}

.info-product .category-brand>span {
    font-weight: 600;
}

.info-product .price {
    color: var(--vt-c-orange);
    text-align: center;
    justify-content: center;
    display: flex;
    font-size: calc(0.75rem + .1em);
}

.info-product .price>span {
    font-weight: 700;
    margin: auto 0;
}

/** Query to tablet */
@media (max-width: 992px) {

    .card .product-img {
        margin-top: 10px;
        padding: 0 calc(100% - 80%);
    }

    .card-body .card-title {
        font-size: calc(1rem + 0.57em);
    }

    .info-product .category-brand {
        font-size: calc(0.9rem + .12em);
    }

    .info-product .category-brand span:first-child {
        margin-right: 10px;
    }

    .info-product .price {
        font-size: calc(0.75rem + .35em);
    }
}

/** Query to phone */
@media (max-width: 768px) {
    .card .product-img {
        padding: 0 calc(100% - 80%);
    }

    .card-body .card-title {
        font-size: calc(1rem + 0.15em);
    }

    .card-body .info-product {
        display: block;
    }

    .info-product .category-brand {
        display: block;
        font-size: calc(0.75rem + .012em);
    }

    .info-product .category-brand span:first-child {
        margin-right: 6px;
    }

    .info-product .price {
        font-size: calc(0.75rem + .045em);
    }
}
</style>

<script setup>
import { ref } from "vue";

const propertiesCard = defineProps(
    ["data"]
);
</script>
