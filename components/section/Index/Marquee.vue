<script setup>
import gsap from 'gsap';

const text = 'Мы строим будущее';

const main = ref();
const tl = ref();
const ctx = ref();

onMounted(() => {
  ctx.value = gsap.context((self) => {
    const scrollingText = self.selector('.scrolling-text');

    const textWidth = scrollingText[0].offsetWidth;
    const textHTML = scrollingText[0].innerHTML;
    const windowWidth = window.innerWidth;

    console.log(scrollingText[0]);
    console.log(textWidth, textHTML);

    tl.value = gsap
      .timeline({ repeat: -1 })
      .to(scrollingText, {
        xPercent: -100,
        duration: 20 * ((1 / 1920) * window.innerWidth),
        ease: 'none',
      })
  }, main.value);
});

onUnmounted(() => {
  ctx.value.revert();
})


</script>
<template>
  <section class="py-[250rem] overflow-hidden">
    <div ref="main" class="flex w-full gap-[120rem] items-center">
      <div v-for="i in 5" :key="i" class="flex items-center shrink-0 gap-[120rem] scrolling-text">
        <span class="stroke-text text-white shrink-0 text-[295rem] leading-[85%] font-medium uppercase cursor-default">{{
          text
        }}</span>
        <svg class="shrink-0" width="136rem" height="143rem" viewBox="0 0 136 143" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M0.546875 78.7188L15.8363 69.8914L52.8892 134.069L37.5998 142.896L0.546875 78.7188Z" fill="#1F1F1F" />
          <path d="M64.7266 41.6641L60.2465 64.6365L9.37626 94.0064L0.548933 78.717L64.7266 41.6641Z" fill="#1F1F1F" />
          <path d="M71.3438 37.8477L85.595 29.6197L114.387 80.3709L108.397 102.025L71.3438 37.8477Z" fill="#1F1F1F" />
          <path d="M135.523 0.792969L128.595 26.1314L92.8151 45.8245L85.3875 43.2037L71.3458 37.8459L135.523 0.792969Z"
            fill="#1F1F1F" />
          <path d="M79.6535 98.2338L101.788 105.84L37.6106 142.893L28.7833 127.604L79.6535 98.2338Z" fill="#1F1F1F" />
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
