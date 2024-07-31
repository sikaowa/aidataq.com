<template>
  <div class="md:order-1 relative before:absolute before:inset-0 before:border before:rounded-xl before:transition before:hover:border-2 before:hover:shadow-lg
    dark:before:border-neutral-800 dark:before:hover:border-primary rounded-xl hover:ease-in-out">
    <div class="relative overflow-hidden size-full rounded-xl">
      <div
          class="p-6 flex flex-col justify-center items-center md:min-h-[480px] text-center rounded-xl border-neutral-700">
        <!--                  <p class="bg-clip-text bg-gradient-to-l from-purple-400 to-blue-600 text-transparent text-xs font-semibold uppercase">-->
        <!--                  </p>-->
        <span
            class="bg-clip-text bg-gradient-to-l from-cyan-400 to-blue-600 text-transparent text-7xl font-bold">
                  课程
                </span>
        <h3 class="mt-6 text-lg md:text-xl font-semibold dark:text-neutral-200">
          提供基础、进阶、大师课
        </h3>
        <p class="mt-2  text-neutral-400">
          从零开始带你进入价值可视化的世界，从视觉思维的创作、视觉思维动画的生产、自媒体运营、以及陪跑一对一辅导
        </p>
        <NuxtLink to="/course"
                  class="z-[1] mt-6 inline-flex justify-center items-center gap-x-1 text-center bg-neutral-900 hover:bg-cyan-500 hover:border-cyan-800  hover:text-primary border border-primary text-white text-sm font-medium rounded-lg py-3 px-4 ">

          查看课程
<!--          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
<!--            <path d="m9 18 6-6-6-6"></path>-->
<!--          </svg>-->
        </NuxtLink>
<!--          <UiButton-->
<!--              class="z-[1] mt-6 inline-flex justify-center items-center gap-x-1 text-center bg-neutral-900  hover:bg-cyan-950 hover:text-primary border border-primary text-white text-sm font-medium rounded-lg py-3 px-4 ">-->
<!--            <NuxtLink to="/vv">-->

<!--            查看课程-->
<!--            </NuxtLink>-->

<!--      -->
<!--          </UiButton>-->

      </div>

      <div
          class="absolute top-0 start-full -z-[0] w-60 h-20  blur-[100px] -translate-y-full -translate-x-1/2 dark:bg-primary"></div>
      <div
          class="absolute top-0 start-full -z-[0] w-60 h-20  blur-[100px] -translate-y-full -translate-x-1/2 dark:bg-neutral-900/30"></div>
      <div
          class="absolute top-1/2 start-1/2 -z-[0] w-60 h-32  blur-[100px] -translate-y-1/2 -translate-x-1/2 dark:bg-neutral-900/30"></div>
      <div
          class="absolute -bottom-40 -end-24 -z-[0] w-60 h-32 bg-blue-200 blur-[100px] dark:bg-blue-900/70"></div>
      <div
          class="absolute -bottom-[635px] -end-[635px] -z-[0] size-[635px] border border-dashed rounded-full transform -translate-y-[255px] -translate-x-[310px] opacity-40 dark:border-violet-900/60"></div>
      <div
          class="absolute -bottom-[490px] -end-[490px] -z-[0] w-[490px] h-[490px] border border-dashed  rounded-full transform -translate-y-[190px] -translate-x-[240px] opacity-60 dark:border-cyan-950/60"></div>
      <div
          class="absolute -bottom-[340px] -end-[340px] -z-[0] w-[340px] h-[340px] border border-dashed  rounded-full transform -translate-y-[120px] -translate-x-[170px] opacity-80 dark:border-cyan-950/60"></div>
      <div
          class="absolute -bottom-[200px] -end-[200px] -z-[0] w-[200px] h-[200px] border border-dashed  rounded-full transform -translate-y-[60px] -translate-x-[100px] dark:border-cyan-950/60"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>