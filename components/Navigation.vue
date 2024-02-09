<script setup>
const links = [
  { id: 1, title: "Привет", link: "/" },
  { id: 1, title: "Привет", link: "/" },
  { id: 1, title: "Привет", link: "/" },
  { id: 1, title: "Привет", link: "/" },
];
</script>
<template>
  <div class="navigation">
    <NuxtLink :to="item.link" v-for="item in links">{{ item.title }}</NuxtLink>
  </div>
</template>

<style lang="scss">
.navigation {
  @apply -top-full left-0 bottom-0 right-0 bg-black h-screen absolute transition-transform;

  &.active {
    @apply top-0;
  }
}
</style>
