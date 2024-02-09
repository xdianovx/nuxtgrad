<script setup>
let tl
let ctx
const main = ref()

const store = useNavStore();

const links = [
  { id: 1, title: "Привет", link: "/" },
  { id: 2, title: "Привет", link: "/" },
  { id: 3, title: "Привет", link: "/" },
  { id: 4, title: "Привет", link: "/" },
];

onMounted(() => {
  ctx = gsap.context((self) => {
    const nav = self.selector('.navigation')

    gsap.set(nav, {
      top: '-100vh'
    })

    tl = gsap.timeline({
      paused: true,
      defaults: {
        ease: "power4.inOut"
      }
    })

    tl.to(nav, {
      top: 0
    })

  }, main.value)
})

watch(store, () => {
  if (store.isOpen) {
    tl.play()
  } else {
    tl.reverse()
  }
})

onUnmounted(() => {
  ctx.revert();
})

</script>


<template>
  <div class="" ref="main">
    <div class="navigation z-20" @click="store.setClose">
      <NuxtLink :to="item.link" v-for="item in links">{{ item.title }}</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">
.navigation {
  @apply left-0 bottom-0 right-0 bg-black h-screen absolute transition-transform;

  &.active {
    @apply top-0;
  }
}
</style>
