<script setup>
const props = defineProps(["size"]);
</script>

<template>
  <p v-if="size === 'md'" class="p">
    <slot />
  </p>
</template>

<style scope lang="scss">
.p {
  @apply text-[46rem] leading-[120%];
}
</style>
