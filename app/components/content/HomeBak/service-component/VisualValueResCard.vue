<template>
  <!-- Card -->
  <NuxtLink
      class="md:order-1 relative p-6 flex flex-col justify-center items-center md:min-h-[230px] text-center before:absolute before:inset-0 before:z-10 before:border dark:before:border-neutral-800 before:rounded-xl before:transition before:hover:border-2 before:hover:border-primary before:hover:shadow-lg rounded-xl"
  >
    <svg class="shrink-0 size-10 mb-3" width="46" height="46" viewBox="0 0 46 46" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <rect x="14.3592" y="33.9731" width="12.2615" height="12.2615" rx="3"
            transform="rotate(-45 14.3592 33.9731)" stroke="currentColor" stroke-width="2"></rect>
      <rect x="26.2454" y="23.0282" width="12.2615" height="12.2615" rx="3"
            transform="rotate(-45 26.2454 23.0282)" stroke="currentColor" stroke-width="2"></rect>
      <rect x="2.47311" y="23.0282" width="12.2615" height="12.2615" rx="3"
            transform="rotate(-45 2.47311 23.0282)" stroke="currentColor" stroke-width="2"></rect>
      <rect x="14.3592" y="12.0564" width="12.2615" height="12.2615" rx="3"
            transform="rotate(-45 14.3592 12.0564)" stroke="#E74C3C" stroke-width="2"></rect>
    </svg>
    <h3 class="text-lg md:text-xl font-semibold dark:text-neutral-200">
      300+ 视觉思维内容
    </h3>
    <p class="mt-2 text-neutral-400">
      包含了10大主题，300+的原始素材可供使用
    </p>
    <UiButton variant="link" class="mt-2 inline-flex items-center gap-x-1  font-medium text-primary">
      去看看
      <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
           viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
           stroke-linejoin="round">
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </UiButton>
  </NuxtLink>
  <!-- End Card -->
</template>