<template>
  <UiNavbar class="shrink-0" sticky>
    <UiContainer class="flex h-16 items-center justify-between">

    <div class="flex w-full items-center justify-center">
      <div class="flex flex-1 items-center gap-2">
        <UiButton
            size="icon-sm"
            variant="outline"
            class="size-9 md:hidden"
            @click="mobileNav = true"
        >
          <Icon name="heroicons:bars-2" class="h-4 w-4"/>
        </UiButton>
        <NuxtLink class="text-lg font-semibold" to="/">
          <SikaowaLogo/>
        </NuxtLink>
      </div>

      <UiNavigationMenu>
        <UiNavigationMenuList >
          <UiNavigationMenuItem>
            <UiNavigationMenuLink asChild>
              <UiButton variant="ghost">

                <NuxtLink to="/" :class="useRoute().path === '/' ? 'text-primary' : ''">
                  首页

                </NuxtLink>
              </UiButton>

            </UiNavigationMenuLink>
          </UiNavigationMenuItem>

          <UiNavigationMenuItem>
            <UiNavigationMenuLink asChild>
              <UiButton variant="ghost">

                <NuxtLink to="/course" :class="useRoute().path === '/course' ? 'text-primary' : ''">
                  课程
                </NuxtLink>
              </UiButton>

            </UiNavigationMenuLink>
          </UiNavigationMenuItem>
<!--
          <UiNavigationMenuItem>
            <UiNavigationMenuLink asChild>
              <UiButton variant="ghost">

                <NuxtLink to="#">
                  文章
                </NuxtLink>
              </UiButton>

            </UiNavigationMenuLink>
          </UiNavigationMenuItem>

          <UiNavigationMenuItem>
            <UiNavigationMenuLink asChild>
              <UiButton variant="ghost">

                <NuxtLink to="#">
                  价值可视化资源
                </NuxtLink>
              </UiButton>

            </UiNavigationMenuLink>
          </UiNavigationMenuItem>
-->
          <!--
          <UiNavigationMenuItem>
            <UiNavigationMenuTrigger title="服务" class="bg-transparent"/>
            <UiNavigationMenuContent>
              <div class="grid w-[600px] grid-cols-2 gap-5 p-4">
                <img
                    src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                    alt="Beach"
                    class="h-full w-full rounded-md object-cover"
                />
                <ul class="flex flex-col gap-2">
                  <li
                      v-for="(item, i) in beachAmenities"
                      :key="i"
                      class="rounded-md p-3 text-sm hover:bg-muted"
                  >
                    <p class="mb-1 font-semibold leading-none text-foreground">{{ item.title }}</p>
                    <p class="line-clamp-2 text-muted-foreground">{{ item.description }}</p>
                  </li>
                </ul>
              </div>
            </UiNavigationMenuContent>
          </UiNavigationMenuItem>
          <UiNavigationMenuItem>
            <UiNavigationMenuTrigger title="课程" class="bg-transparent"/>
            <UiNavigationMenuContent>
              <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <DocsNavigationMenuListItem
                    v-for="item in components"
                    :key="item.title"
                    :title="item.title"
                    :href="item.href"
                >
                  {{ item.description }}
                </DocsNavigationMenuListItem>
              </ul>
            </UiNavigationMenuContent>
          </UiNavigationMenuItem>
          <UiNavigationMenuItem>
            <UiNavigationMenuTrigger title="Learn more" class="bg-transparent"/>
            <UiNavigationMenuContent>
              <div class="grid w-[500px] grid-cols-2 place-items-center gap-5 p-3">
                <img
                    src="https://www.radix-vue.com/logo.svg"
                    alt="Radix Vue Logo"
                    class="h-full w-full"
                />
                <div>
                  <p class="text-lg font-semibold text-foreground">Radix Vue</p>
                  <p class="mt-2 text-muted-foreground">
                    Unstyled, accessible components for building high-quality design systems and web
                    apps in Vue.
                  </p>
                </div>
              </div>
            </UiNavigationMenuContent>
          </UiNavigationMenuItem>
          <UiNavigationMenuItem>
            <UiNavigationMenuLink asChild>
              <UiButton variant="ghost">

              <NuxtLink to="/vv">
                  视觉思维课
              </NuxtLink>
              </UiButton>

            </UiNavigationMenuLink>
          </UiNavigationMenuItem>
          -->
        </UiNavigationMenuList>
      </UiNavigationMenu>
      <div class="flex flex-1 justify-end gap-2  gap-2">

        <UiDropdownMenu>
          <UiDropdownMenuTrigger as-child>
            <UiButton class="size-9" variant="ghost" size="icon">
              <ClientOnly>
                <Icon :name="currentIcon || 'heroicons:sun'" class="size-5"/>
              </ClientOnly>
            </UiButton>
          </UiDropdownMenuTrigger>
          <UiDropdownMenuContent align="end" :side-offset="5">
            <UiDropdownMenuItem
                v-for="(m, i) in modes"
                :key="i"
                class="cursor-pointer"
                :icon="m.icon"
                :title="m.title"
                @click="setTheme(m.value)"
            />
          </UiDropdownMenuContent>
        </UiDropdownMenu>

<!--        <UiButton-->
<!--            to="https://github.com/BayBreezy/ui-doc-starter"-->
<!--            target="_blank"-->
<!--            class="size-9"-->
<!--            variant="ghost"-->
<!--            size="icon"-->
<!--        >-->
<!--          登录-->
<!--          &lt;!&ndash;          <Icon name="radix-icons:github-logo" class="size-5"/>&ndash;&gt;-->
<!--        </UiButton>-->
<!--        <NuxtLink to="#services" class="text-sm px-3 py-2 mb-1 hover:bg-muted rounded-md  block gap-2 transition-all">登录</NuxtLink>-->
        <NuxtLink to="https://course.sikaowa.cn/auth/login">
          <UiButton variant="ghost" class="flex gap-2">登录</UiButton>
        </NuxtLink>
      </div>

    </div>
    </UiContainer>
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
