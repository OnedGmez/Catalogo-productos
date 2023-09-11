<template>
    <div class="container-search-filter d-flex">
        <input id="bar" class="form-control" type="text" placeholder=" ">
        <label class="icon" for="bar">
            <span>
                <font-awesome-icon icon="search"></font-awesome-icon>
            </span>
        </label>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const searching = ref('');

function search(){
    console.log(searching.value)
}

</script>

<style scoped>
@import "../assets/css/main.css";

.container-search-filter{
    position: relative;
}

.icon{
    position:absolute;
    height: 100%;
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px 25px 25px 25px;
    background-color: var(--vt-c-soft-grey);
    color: var(--vt-c-black);
    transition: all 250ms ease-in-out;
}

.icon:hover{
    cursor: pointer;
}

.form-control {
    border-radius: 25px 25px 25px 25px;
    background-color: var(--vt-c-soft-grey);
    filter: none;
    font-size: calc(.9em + 0.04vw) !important;
    padding-left: 40px;
}

.form-control:focus{
   border: var(--bs-border-width) solid var(--bs-border-color);
   background-color: var(--vt-c-soft-grey);
}

.form-control:focus ~ .icon{
   background-color: var(--vt-c-orange);
   color: var(--vt-c-white);
}

.form-control:not(:placeholder-shown) + .icon{
    background-color: var(--vt-c-orange);
    color: var(--vt-c-white);
  }

</style>