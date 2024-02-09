<script setup>
const items = [
  { id: 1, title: "Опыт компании", num: "10", label: "лет" },
  { id: 2, title: "Во время сданных проектов", num: "4512", label: "" },
  { id: 3, title: "Построенного жилья", num: "16", label: "" },
  { id: 4, title: "Заселенных квартир", num: "20203", label: "м²" },
];

let tl;
let ctx;

onMounted(() => {
  tl = gsap.timeline();
});
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="grid grid-cols-[280rem_980rem] gap-[280rem]">
        <div class="left">
          <UiSpanTitle>Миссия</UiSpanTitle>
        </div>
        <div class="right">
          <UiText size="md">
            Мы стремимся стать одним из крупнейших строительно-инвестиционных
            холдингов федерального и международного уровня.
          </UiText>

          <div class="flex gap-[140rem] mt-[70rem] text-grayText">
            <p>
              Все это время «Стройград» стремительно развивался, выходил на
              новые рынки, наращивал собственную производственную базу, осваивал
              новые направления бизнеса.
            </p>
            <p>
              Все это время «Стройград» стремительно развивался, выходил на
              новые рынки, наращивал собственную производственную базу, осваивал
              новые направления бизнеса.
            </p>
          </div>

          <div class="grid mt-[90rem] gap-[140rem_90rem]  grid-cols-2">
            <div class="item flex flex-col dimbut" v-for="item in items" :key="item.id">
              <div class="h-[1px] w-full bg-grayLight"></div>
              <h2 class="mt-[30rem]">
                {{ item.title }}
              </h2>
              <div class="num mt-[60rem] flex items-end">
                <p class="text-[128rem] leading-[100%]">{{ item.num }}</p>
                <p v-if="item.label" class="text-[40rem] leading-[100%] mb-[8rem]">
                  {{ item.label }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  @apply pt-[156rem] font-light;
}
</style>
