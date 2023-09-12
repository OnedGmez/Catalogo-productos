<template>
    <div class="color" :style="{ 'background-color': color }">

    </div>
</template>

<style scoped>
.color{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 5px;
}
</style>

<script setup>
const propertiesColor = defineProps([
    'color'
])
</script>