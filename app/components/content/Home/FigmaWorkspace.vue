<template>
  <div class="relative" id="figma">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Title -->
      <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 class="text-2xl font-bold lg:text-3xl lg:leading-tight dark:text-white">基于<span
            class="text-blue-600 dark:text-primary">Figma</span>的创作空间</h2>
        <p class="mt-1 text-gray-500 dark:text-neutral-400">
          视觉思维内容使用了Figma这个设计工具创作，我们提供开箱即用的创作空间，其中包含了：适用于各自媒体平台发布的模板、专属的配色、专属的版式工、视觉可视化的设计原始文件模板
        </p>
        <div class="mt-6 mb-10 inline-flex flex-wrap justify-center gap-2">
          <NuxtLink
              class="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          >
                <span class="inline-flex justify-center items-center gap-x-2">
                  <svg class="size-4" width="19" height="18"
                       viewBox="0 0 19 18" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.875 18C8.531 18 9.875 16.656 9.875 15V12H6.875C5.219 12 3.875 13.344 3.875 15C3.875 16.656 5.219 18 6.875 18Z"
                        fill="#0ACF83"></path>
                    <path d="M3.875 9C3.875 7.344 5.219 6 6.875 6H9.875V12H6.875C5.219 12 3.875 10.656 3.875 9Z"
                          fill="#A259FF"></path>
                    <path d="M3.875 3C3.875 1.344 5.219 0 6.875 0H9.875V6H6.875C5.219 6 3.875 4.656 3.875 3Z"
                          fill="#F24E1E"></path>
                    <path d="M9.87501 0H12.875C14.531 0 15.875 1.344 15.875 3C15.875 4.656 14.531 6 12.875 6H9.87501V0Z"
                          fill="#FF7262"></path>
                    <path
                        d="M15.875 9C15.875 10.656 14.531 12 12.875 12C11.219 12 9.87501 10.656 9.87501 9C9.87501 7.344 11.219 6 12.875 6C14.531 6 15.875 7.344 15.875 9Z"
                        fill="#1ABCFE"></path>
                  </svg>
                开始创作</span>
            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
      <!-- End Title -->

      <!-- Mockups -->
      <div id="scene" class="relative">

        <img class="rounded-xl md:shadow-[0_10px_70px_0px_rgba(0,0,0,0.08)]"
             src="/website/figma-workspace.jpg" alt="Dashboard Home Page">

        <div class="hidden xl:block absolute -bottom-10 md:-end-24 rounded-xl md:shadow-[0_10px_70px_0px_rgba(0,0,0,0.08)]">
          <!--          <img class="w-[500px] rounded-xl shadow-xl dark:hidden" src="https://preline.co/assets/img/mockups/tokens.png"-->
          <!--               alt="Tokens">-->
          <img class="w-[500px] rounded-xl shadow-xl block" src="/website/type.png" alt="Tokens">
        </div>

        <!--        <div class="hidden md:block absolute -top-6 -end-20">-->
        <!--          <img class="w-48 rounded-xl shadow-xl" src="https://preline.co/assets/img/mockups/dark.png" alt="Dark Layer">-->
        <!--        </div>-->

        <div class="hidden md:block absolute bottom-20 -start-20">
          <img class="w-56 rounded-xl shadow-xl block" src="/website/colors.png" alt="Auto Layout">
        </div>
      </div>
      <!-- End Mockups -->

      <div
          class="absolute top-1/2 start-1/10 -z-[0] w-[722px] h-[588px] bg-[radial-gradient(#2563eb,#a5b4fc)] opacity-10 blur-[700px] -translate-y-1/2 -translate-x-1/2"></div>
      <div
          class="absolute top-1/2 -end-1/3 -z-[0] w-[722px] h-[588px] bg-[radial-gradient(#fb7185,#a78bfa)] opacity-10 blur-[700px] -translate-y-1/2 -translate-x-1/2"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>