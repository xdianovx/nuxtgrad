<script setup>
import gsap from 'gsap';

defineProps(["title", "list"]);

const isOpen = ref(false)

const main = ref();
let tl;
let ctx;

function toggle() {
  isOpen.value = !isOpen.value

  if (!isOpen.value) {
    tl.reverse()
  } else {
    tl.play()
  }
}

onMounted(() => {
  ctx = gsap.context((self) => {
    const top = self.selector('.head');
    const list = self.selector('.list');
    const caret = self.selector('.caret');

    gsap.set(list, {
      height: 0,
      paddingTop: 0
    })




    tl = gsap.timeline({
      paused: true,
      defaults: {
        // ease: 'power1.inOut',
        duration: .3
      }
    })

    tl.to(list, {
      height: 'auto',
    })

    tl.to(caret, {
      rotate: 180
    }, "<")
  }, main.value);



});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <div ref="main" class="border-b border-grayLight">
    <div class="py-[10rem] head flex justify-between items-center cursor-pointer" @click="toggle">
      <div :class="{ 'text-grayLight': isOpen === true, 'text-black': isOpen === false }">{{ title }}</div>
      <svg width="19rem" height="10rem" viewBox="0 0 19 10" fill="none" class="caret" xmlns="http://www.w3.org/2000/svg">
        <line x1="1.12858" y1="0.919627" x2="9.76066" y2="9.25553" stroke="#1F1F1F" />
        <line x1="9.06673" y1="9.25459" x2="17.6988" y2="0.918687" stroke="#1F1F1F" />
      </svg>
    </div>

    <div class="overflow-hidden list">
      <div class="py-[32rem] flex flex-col gap-[12rem]">
        <div v-for="li in list">{{ li }}</div>
      </div>
    </div>
  </div>
</template>
