<template>
  <div :class="tipe" class="button-space">
    {{ text }}
  </div>
</template>

<style scoped>
.button-space{
  width: fit-content;
  padding: 6px 24px;
  border-radius: 25px;
  margin-left: 12px;
  font-weight: 500;
  box-shadow: inset 0px 5px 25px #000000ab;
  transition: all 150ms ease-in-out;
}

.button-space:hover{
  cursor: pointer;
  box-shadow: inset 0px 5px 25px #0000006d;
}

.primary{
  color: var(--vt-c-white);
  background-color: var(--vt-c-orange);
}

.secondary{
  color: var(--vt-c-orange);
  border: 1px solid var(--vt-c-orange);
  box-shadow: none;
}

.secondary:hover{
  box-shadow: none;
}
</style>

<script setup>
const propsButton = defineProps(["tipe", "text"]);
</script>
