<script setup>
const props = defineProps(['data'])
</script>

<template>
    <div class="border-b border-grayLight cursor-pointer">
        <div class="container">
            <div class="grid grid-cols-[560rem_980rem_140rem] py-[40rem]">
                <div class="text-[14rem] leading-[100%]">{{ data.num }}</div>
                <div class="text-[40rem] leading-[100%]">{{ data.title }}</div>
                <UiPlus class="" :isOpen="false" />
            </div>
        </div>
    </div>
</template>