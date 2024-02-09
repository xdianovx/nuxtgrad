<template>
  <section class="video">
    <video
      autoplay
      loop
      playsinline
      muted
      controls="false"
      class="h-[110%] w-full object-cover pointer-events-none"
    >
      <source src="/video/jigsaw.mp4" type="video/mp4" />
    </video>
  </section>
</template>

<style lang="scss" scoped>
.video {
  @apply h-[900rem]  pt-[70rem] cursor-pointer;
}
</style>
