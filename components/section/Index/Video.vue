<script setup>

const main = ref();
let ctx;

const isO = ref(false)

function op() {
  isO.value = true
}

onMounted(() => {

  ctx = gsap.context((self) => {
    const tag = self.selector('video')
    gsap.to(tag, {
      scrollTrigger: {
        trigger: tag,
        scrub: 1,
        start: 'top 50%',
        end: 'bottom 50%',
        markers: true
      },
    });
  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
})
</script>

<template>
  <section class="video" ref="main">
    <div class="flex flex-col">
      <p @click="op">open</p>
      <div class="h-[200rem] bg-black" v-show="isO"></div>
    </div>
    <video autoplay loop playsinline muted controls="false" class="h-[110%] w-full object-cover pointer-events-none">
      <source src="/video/jigsaw.mp4" type="video/mp4" />
    </video>
  </section>
</template>

<style lang="scss" scoped>
.video {
  @apply h-[900rem] pt-[70rem] cursor-pointer;
}
</style>
