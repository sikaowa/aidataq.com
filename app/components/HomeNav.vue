<template>
  <UiNavbar
      class="shrink-0 supports-backdrop-blur:bg-background/90 sticky top-0 z-40 w-full bg-background/40 backdrop-blur-l"
      sticky>
    <UiContainer class="flex h-16 items-center justify-between">
      <div class="mr-4 hidden md:flex">
        <NuxtLink class="mr-6 flex items-center space-x-2" to="/">
          <img src="/logo.png"
               alt="AI DATA GPT"
               class="h-14 w-full">
        </NuxtLink>
      </div>
      <button
          class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R29nhla:"
          data-state="closed">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
          <path d="M9 3v18"></path>
          <path d="m14 9 3 3-3 3"></path>
        </svg>
        <span class="sr-only">Toggle Menu</span>
      </button>
      <div class="flex flex-1 items-center justify-between space-x-8 md:justify-end">
        <nav class="hidden items-center space-x-6 text-sm font-medium xl:flex">
          <NuxtLink
              class="flex items-center justify-center transition-colors hover:text-foreground/80 text-foreground/60"
          >首页</NuxtLink>
          <NuxtLink
              class="flex items-center justify-center transition-colors hover:text-foreground/80 text-foreground/60"
          >产品功能</NuxtLink>
          <NuxtLink
              class="flex items-center justify-center transition-colors hover:text-foreground/80 text-foreground/60"
          >客户案例</NuxtLink>
          <NuxtLink target="_blank"
             class="flex items-center justify-center transition-colors hover:text-foreground/80 text-foreground/60"
          >
            资源中心
          </NuxtLink>
          <NuxtLink target="_blank"
             class="flex items-center justify-center transition-colors hover:text-foreground/80 text-foreground/60"
          >
            生态合作
            <!--            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"-->
            <!--                 class="ml-2 size-4">-->
            <!--              <path-->
            <!--                  d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z"-->
            <!--                  fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>-->
            <!--            </svg>-->
          </NuxtLink>
          <NuxtLink target="_blank"
             class="flex items-center justify-center transition-colors hover:text-foreground/80 text-foreground/60"
          >
            关于我们
          </NuxtLink>
        </nav>

        <nav class="flex items-center gap-2">

          <NuxtLink
              class="items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-6 hidden whitespace-pre md:flex group relative w-full gap-1 overflow-hidden text-sm font-semibold tracking-tighter transform-gpu rounded-sm ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
          >
            <span
                class="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-24 dark:bg-black"></span>
            免费体验
          </NuxtLink>
        </nav>
      </div>
    </UiContainer>
    <hr class="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0">

  </UiNavbar>
</template>

<script lang="ts" setup>
const route = useRoute();

const mobileNav = ref(false);
const modes = [
  {icon: "heroicons:sun", title: "亮色", value: "light"},
  {icon: "heroicons:moon", title: "暗色", value: "dark"},
  {icon: "heroicons:computer-desktop", title: "跟随系统", value: "system"},
];

const colorMode = useColorMode();
const setTheme = (val: string) => {
  colorMode.preference = val;
};

const currentIcon = computed(() => {
  return modes.find((m) => m.value === colorMode?.preference)?.icon;
});

const searchOpen = ref(false);

const {metaSymbol} = useShortcuts();

defineShortcuts({
  meta_k: () => {
    searchOpen.value = !searchOpen.value;
  },
});
const beachAmenities = [
  {
    title: "Sun",
    description: "The Sun is the star at the center of the Solar System.",
  },
  {
    title: "Sand",
    description:
        "Sand is a granular material composed of finely divided rock and mineral particles.",
  },
  {
    title: "Water",
    description:
        "Water is an inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance.",
  },
];
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/components/alertdialog",
    description:
        "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/components/hovercard",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/components/progress",
    description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/components/scrollarea",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/components/tabs",
    description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/components/tooltip",
    description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];
</script>
