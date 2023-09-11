<template>
    <div class="filter-button">
        <span class="button">
            <font-awesome-icon icon="sliders" />
        </span>
    </div>
</template>

<style scoped>
    .filter-button{
        height: 100%;
        background-color: var(--vt-c-soft-grey);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        border-radius: 25px 25px 25px 25px;
        transition: all 250ms ease-in-out;
    }

    .filter-button:hover{
        background-color: var(--vt-c-orange);
        color: var(--vt-c-white);
    }
</style>

<script setup>

</script>