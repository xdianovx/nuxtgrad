<script setup>
onMounted(() => {
  useSmoothScroll();
});
</script>

<template>
  <div class="relative z-[20] bg-white">
    <Navigation />
    <Header />
    <slot />
    <Footer />
  </div>
</template>
