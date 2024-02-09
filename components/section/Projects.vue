<template>
  <section class="pt-[265rem]">
    <div class="container">
      <div class="top">
        <h2 class="text-[64rem] leading-[110%]">
          Наши <br />
          проекты
        </h2>
        <div class="ml-auto flex gap-[140rem] mt-[90rem] items-start">
          <UiDropdown class="w-[420rem]" title="Выберите статус постройки" :list="['Jlby', 'asd', 'asdas']" />
          <UiDropdown class="w-[420rem]" title="Выберите статус постройки" :list="['Jlby', 'asd', 'asdas']" />
          <!-- <UiDropdown class="w-[420rem]" title="Выберите город" :list="{}" /> -->
        </div>
      </div>

      <div class="image mt-[80rem] h-[800rem]">
        <img src="/img/project1.jpg" alt="" />
      </div>

      <div class="info flex items-start pt-[90rem]">
        <h3 class="text-[32rem] leading-[120%] w-[560rem]">
          Дворянская усадьба
        </h3>
        <p class="w-[560rem] text-grayText">
          «Семейный квартал» — это экологичный проект рядом с Дубковским и
          Подушкинским лесами. Он сочетает близость к природным комплексам,
          престижный статус западного направления и возможность удобно добраться
          до столицы.
        </p>
        <div class="flex flex-col gap-[18rem] ml-[140rem]">
          <p>г. Ростов-на-Дону</p>
          <p>Заселение до 31.03.2023</p>
        </div>

        <UiLinkUnderline class="ml-auto" link="/">от 3,3 млн. руб.</UiLinkUnderline>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.top {
  @apply flex items-start;
}

.drop {
  @apply w-[420rem] mr-[140rem];
}
</style>
<script setup lang="ts"></script>
