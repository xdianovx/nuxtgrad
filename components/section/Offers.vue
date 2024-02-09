<script setup>
const data = [
  {
    id: 1,
    title: "Ипотека для <br> IT-специалистов",
    description:
      "По программе «IT ипотека» от Стройград можно приобрести строящееся жилье по субсидированной ставке 2,99% на срок кредита до 30 лет.",
    link: "/",
    image: "/img/mk.jpg",
  },
  {
    id: 2,
    title: "Ипотека 3,99% до 30 лет <br> на сданные квартиры",
    description:
      "В проекте Семейный Квартал  Стройград предлагает покупателем субсидированную семейную ипотеку 3,99%.",
    link: "/",
    image: "/img/mk2.jpg",

  },
  {
    id: 3,
    title: "Скидка 50% на полную чистовую отделку",
    description: "Скидка 50% на полную чистовую отделку",
    link: "",
    image: "",
  },
];
</script>

<template>
  <section class="pt-[275rem]">
    <div class="container">
      <div class="flex gap-[25rem]">
        <CardsOffer v-for="item in data" :data="item" />
      </div>

      <div class="flex justify-end mt-[60rem]">
        <UiLinkUnderline link="/">Все акции и скидки</UiLinkUnderline>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.item {
  @apply w-[535rem] rounded-[4rem] border border-grayLight p-[42rem_45rem_65rem];
}
</style>
