<script setup>
const props = defineProps(["tag"]);
</script>

<template>
  <h1 v-if="tag === 'h1'" class="h1">
    <slot />
  </h1>
</template>

<style scoped lang="scss">
.h1 {
  @apply uppercase text-[295rem] leading-[85%];
}
</style>
