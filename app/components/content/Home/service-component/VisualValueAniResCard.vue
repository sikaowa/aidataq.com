<template>
  <NuxtLink
      class="md:order-2 relative p-6 flex flex-col justify-center items-center md:min-h-[230px] text-center rounded-xl before:absolute before:inset-0 before:z-10 before:border dark:before:border-neutral-800 before:rounded-xl before:transition before:hover:border-2 before:hover:border-primary before:hover:shadow-lg rounded-xl"
  >
    <svg class="shrink-0 size-10 mb-3" width="46" height="46" viewBox="0 0 46 46" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path d="M21 25H32C33.6569 25 35 26.3431 35 28V37C35 38.6569 33.6569 40 32 40H21V25Z" stroke="currentColor"
            stroke-width="2"></path>
      <path d="M9 11H18C19.6569 11 21 12.3431 21 14V25H6V14C6 12.3431 7.34315 11 9 11Z" stroke="currentColor"
            stroke-width="2"></path>
      <path d="M6 25H21V40H9C7.34315 40 6 38.6569 6 37V25Z" stroke="currentColor" stroke-width="2"></path>
      <rect x="27" y="4" width="14" height="14" rx="3" stroke="#E74C3C" stroke-width="2"></rect>
    </svg>
    <h3 class="text-lg md:text-xl font-semibold dark:text-neutral-200">
      100+ 动画资源
    </h3>
    <p class="mt-2 text-neutral-400">
      提供 Rive 绘制的动画素材，可以自行创作和编辑。
    </p>
    <UiButton variant="link" class="mt-2 inline-flex items-center gap-x-1 text-primary font-medium ">
      了解更多
      <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
           viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
           stroke-linejoin="round">
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </UiButton>
  </NuxtLink>
</template>