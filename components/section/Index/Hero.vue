<script setup>
const main = ref();
let tl = ref();
let ctx = ref();

onMounted(() => {
  ctx = gsap.context((self) => {

    const chars = self.selector('span')

    chars.forEach(item => {
      const tl = gsap.timeline()
      item.addEventListener('mouseenter', () => {
        tl.to(item, {
          y: "-50rem",
          duration: .1,
          ease: 'ease3'

        })
      })

      item.addEventListener('mouseleave', () => {
        tl.to(item, {
          y: "0rem",
          duration: .1
        })
      })
    })

  }, main.value)
})

onUnmounted(() => {
  ctx.revert();
})
</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="top">
        <p>Строим больше 15 лет</p>
        <p class="max-w-[420rem]">
          Группа компаний «Стройград» начала свою историю в 2006 году со
          строительства многоквартирного жилого дома в г. Ставрополь.
        </p>
      </div>

      <div class="mt-[474rem]">
        <h1 ref="main" class="text-[295rem] uppercase index-title font-light gap-0 flex">
          <span class="cursor-default">С</span>
          <span class="cursor-default">т</span>
          <span class="cursor-default">р</span>
          <span class="cursor-default">о</span>
          <span class="cursor-default">й</span>
          <span class="cursor-default">г</span>
          <span class="cursor-default">р</span>
          <span class="cursor-default">а</span>
          <span class="cursor-default">д</span>
        </h1>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  @apply pt-[66rem];
}

.top {
  @apply flex items-start justify-between;
}
</style>
