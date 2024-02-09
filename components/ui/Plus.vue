<script setup>
const props = defineProps(['isOpen'])


</script>



<template>
    <div class="relative w-[21rem] h-[21rem]">
        <div class="v bg-black absolute w-[1px] h-full left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 "
            :class="{ 'rotate-90': isOpen }"></div>
        <div class="h bg-black absolute w-full h-[1px] left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2"></div>
    </div>
</template>