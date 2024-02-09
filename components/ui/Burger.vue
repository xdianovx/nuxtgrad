<script setup>
const main = ref();
let ctx;
let tl;

const hoverIn = () => {
  tl.play();
};

const hoverOut = () => {
  tl.reverse();
};

onMounted(() => {
  ctx = gsap.context((self) => {
    const top = self.selector(".top");
    const bottom = self.selector(".bottom");
    console.log(top)

    tl = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.2,
      },
      yoyo: true,
    });

    tl.to(
      bottom,
      {
        width: "100%",
      },
      ""
    );

    tl.to(
      top,
      {
        top: "50%",
      },
      ">"
    );

    tl.to(
      bottom,
      {
        bottom: "24rem",
      },
      "<"
    );

    tl.to(
      top,
      {
        // top: '50%',
        rotate: 90,
      },
      ">"
    );

    tl.to(
      bottom,
      {
        // top: '50%',
        rotate: 90,
      },
      "<"
    );

    tl.to(
      top,
      {
        left: 0,
      },
      ">"
    );

    tl.to(
      bottom,
      {
        right: 0,
      },
      "<"
    );

    tl.to(
      top,
      {
        left: "4rem",
      },
      ">"
    );

    tl.to(
      bottom,
      {
        right: "4rem",
      },
      "<"
    );
  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <div class="burger" ref="main" @mouseenter="hoverIn" @mouseleave="hoverOut">
    <span class="top"></span>
    <span class="bottom"></span>
  </div>
</template>

<style lang="scss" scoped>
.burger {
  @apply w-[50rem] h-[50rem] relative cursor-pointer;

  span {
    @apply absolute h-[2rem] bg-black;
  }

  .top {
    @apply w-full top-[21rem] right-0;
  }

  .bottom {
    @apply w-[30rem] bottom-[21rem] right-0;
  }
}
</style>
