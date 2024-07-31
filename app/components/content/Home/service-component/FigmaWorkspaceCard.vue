<template>
  <NuxtLink
      class="md:order-1 relative p-6 flex flex-col justify-center items-center md:min-h-[230px] text-center rounded-xl before:absolute before:inset-0 before:z-10 before:border dark:before:border-neutral-800 before:rounded-xl before:transition before:hover:border-2  before:hover:border-primary before:hover:shadow-lg  rounded-xl"
      to="#figma">
    <svg class="size-8 mb-4" width="33" height="32" viewBox="0 0 33 32" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path
          d="M12 31.9999C14.944 31.9999 17.3333 29.6106 17.3333 26.6666V21.3333H12C9.05596 21.3333 6.66663 23.7226 6.66663 26.6666C6.66663 29.6106 9.05596 31.9999 12 31.9999Z"
          fill="#0ACF83"></path>
      <path
          d="M6.66663 16.0001C6.66663 13.0561 9.05596 10.6667 12 10.6667H17.3333V21.3334H12C9.05596 21.3334 6.66663 18.9441 6.66663 16.0001Z"
          fill="#A259FF"></path>
      <path
          d="M6.66663 5.33333C6.66663 2.38933 9.05596 0 12 0H17.3333V10.6667H12C9.05596 10.6667 6.66663 8.27733 6.66663 5.33333Z"
          fill="#F24E1E"></path>
      <path
          d="M17.3333 0H22.6666C25.6106 0 28 2.38933 28 5.33333C28 8.27733 25.6106 10.6667 22.6666 10.6667H17.3333V0Z"
          fill="#FF7262"></path>
      <path
          d="M28 16.0001C28 18.9441 25.6106 21.3334 22.6666 21.3334C19.7226 21.3334 17.3333 18.9441 17.3333 16.0001C17.3333 13.0561 19.7226 10.6667 22.6666 10.6667C25.6106 10.6667 28 13.0561 28 16.0001Z"
          fill="#1ABCFE"></path>
    </svg>
    <h3 class="text-lg md:text-xl font-semibold dark:text-neutral-200">
      开箱即用的 Figma 创作空间
    </h3>
    <p class="mt-2  text-neutral-400">
      提供开箱即用的工作空间模板，提供了自媒体的发布模板、专属版式、专属配色，视觉思绪的创作流程和工具。
    </p>
    <UiButton variant="link" class="mt-2 inline-flex items-center gap-x-1 font-medium text-primary">
      去看看
      <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
           viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
           stroke-linejoin="round">
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </UiButton>
  </NuxtLink>
</template>