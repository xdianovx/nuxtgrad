<script setup>
const props = defineProps(["link"]);
</script>

<template>
  <NuxtLink
    :to="link"
    class="relative before:transition-all before:left-0 before:absolute before:duration-300 before:w-full before:h-[1px] before:bg-black before:bottom-0 hover:before:w-0 hover:before:left-auto hover:before:right-0"
  >
    <slot />
  </NuxtLink>
</template>
