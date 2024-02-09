<script setup>
defineProps(["title", "list"]);
import gsap from "gsap";
const dropdown = ref();
// let tl;
// let ctx;

function toggle() {
  console.log("sads");
}

onMounted(() => {
  let ctx = gsap.context((self) => {
    const top = self.selector;
    console.log(top);
  });
}, dropdown.value);
</script>

<template>
  <div>
    <div
      ref="dropdown"
      class="py-[10rem] border-b border-grayLight flex justify-between items-center cursor-pointer"
      @click="toggle"
      id="head"
    >
      <div>{{ title }}</div>
      <svg
        width="19rem"
        height="10rem"
        viewBox="0 0 19 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="1.12858"
          y1="0.919627"
          x2="9.76066"
          y2="9.25553"
          stroke="#1F1F1F"
        />
        <line
          x1="9.06673"
          y1="9.25459"
          x2="17.6988"
          y2="0.918687"
          stroke="#1F1F1F"
        />
      </svg>
    </div>

    <div class="h-0 overflow-hidden">{{ list }}</div>
  </div>
</template>
