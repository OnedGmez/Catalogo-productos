<template>
  <div :class="type" class="button-space">
    {{ text }}
  </div>
</template>

<style scoped>
.button-space{
  width: fit-content;
  padding: 2px 15px;
  font-size: calc(1rem + .015em);
  border-radius: 25px;
  margin-left: 12px;
  font-weight: 500;
  transition: all 150ms ease-in-out;
}

.button-space:hover{
  cursor: pointer;
  box-shadow: inset 0px 5px 25px #0000006a;
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

/** Query yo phone */
@media (max-width: 768px) {
  .button-space{
  font-size: calc(.8rem + .035em);
}
}
</style>

<script setup>
const propsButton = defineProps(["type", "text"]);
</script>
