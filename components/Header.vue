<script setup>
import { useNavStore } from "~/store/navigationStore.js";

const isOpen = useNavStore()

</script>

<template>
  <header class="bg-white">
    <div class="container">
      <div class="flex items-center wrap">
        <UiLogo />
        <div class="ml-auto">
          <UiBurger />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.wrap {
  @apply border-b border-grayLight py-[50rem];
}
</style>
