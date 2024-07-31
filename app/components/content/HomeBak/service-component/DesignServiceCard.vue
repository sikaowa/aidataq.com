<template>
  <NuxtLink
      class="md:order-2 relative focus:outline-none before:absolute before:inset-0 before:z-10 before:border before:border-gray-200 before:rounded-xl before:transition before:hover:border-2 before:hover:border-primary before:focus:border-2 before:focus:border-blue-600 before:hover:shadow-lg after:absolute after:inset-x-0.5 after:bottom-0.5 after:z-10 after:w-[calc(100%-4px)] after:h-24 after:rounded-b-xl after:bg-gradient-to-t after:from-white after:via-white/90 after:to-white/40 dark:after:from-neutral-900 dark:after:via-neutral-900/90 dark:after:to-neutral-900/40 dark:before:border-neutral-800 before:hover:border-blue-500 dark:before:focus:border-blue-500 dark:rounded-xl"
  >
    <div class="relative overflow-hidden size-full rounded-xl">
      <div class="flex flex-col justify-between md:min-h-[480px] text-center rounded-xl border-neutral-700">
        <div class="p-6">
          <svg class="shrink-0 size-10 mb-3 mx-auto" width="46" height="46" viewBox="0 0 46 46" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M16 17V39" stroke="#E74C3C" stroke-width="2"></path>
            <path d="M6 17H40" stroke="#E74C3C" stroke-width="2"></path>
            <rect x="6" y="6" width="34" height="34" rx="5" stroke="currentColor" stroke-width="2"></rect>
          </svg>
          <h3 class="text-lg md:text-xl font-semibold dark:text-neutral-200">
            动画、插画定制
          </h3>
          <p class="mt-2 text-neutral-400 dark:text-neutral-300">
            不满足于简单重复的相似内容？要突出自己的品牌？要彰显自己的形象？这里有专业的插画设计师，可以提供更专业的素材和品牌创意。
          </p>
          <UiButton variant="link" class="mt-2 inline-flex items-center gap-x-1 font-medium text-primary">
            查看服务项
            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </UiButton>
        </div>

        <img class="w-10/12 ms-auto dark:hidden" src="https://preline.co/assets/others/templates.webp"
             alt="Image Description">
        <img class="w-10/12 ms-auto hidden dark:block" src="https://preline.co/assets/others-dark/templates.webp"
             alt="Image Description">
      </div>

      <div
          class="absolute top-1/2 -start-1/2 -z-[1] w-60 h-32 bg-purple-200 blur-[100px] -translate-y-1/2 dark:bg-violet-900/30"
      ></div>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
</script>