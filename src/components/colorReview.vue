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

/** Query to phone */
@media (max-width: 768px) {
    .color{
    width: 30px;
    height: 30px;
}
}
</style>

<script setup>
const propertiesColor = defineProps([
    'color'
])
</script>