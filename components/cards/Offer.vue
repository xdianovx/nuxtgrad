import type { NuxtLink } from '#build/components';
<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <NuxtLink
      :to="data.link"
      class="flex flex-col h-[476px] w-[535px] rounded-[4px] overflow-hidden border border-grayLight p-[42px_45px_70px] transition-all top-0  ease-in-out group duration-300 hover:bg-black hover:border-none hover:top-[-64rem] relative"
  >
    <h3
        class="text-[32px] leading-[120%] transition-colors ease-in-out group relative z-10 duration-300 group-hover:text-white"
        v-html="data.title"
    ></h3>

    <div class="mt-auto min-h-[100px] relative z-10 ">
      <div
          class="w-full h-[1px] bg-grayLight transition-opacity ease-in-out group duration-200 group-hover:opacity-0"
      ></div>

      <p
          class="mt-[32px] text-grayText transition-colors ease-in-out group duration-300 group-hover:text-white"
          v-html="data.description"
      ></p>


    </div>
    <img :src="data.image"
         class="absolute w-full block h-full object-cover transition-all duration-300 ease-in-out  left-0 top-0 opacity-0 group-hover:opacity-100"/>
  </NuxtLink>
</template>
