<template>
  <div class="relative">
    <UiRetroGrid />
    <UiContainer
        class="relative flex flex-col gap-y-5 py-10 md:flex-row md:gap-10 md:py-0 lg:h-[720px]"
    >
<!--      <div-->
<!--          class="absolute inset-0 z-[-2] h-full w-full bg-transparent bg-[linear-gradient(to_right,_theme(colors.border)_1px,_transparent_1px),linear-gradient(to_bottom,_theme(colors.border)_1px,_transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(#000,_transparent_80%)]"-->
<!--      />-->
      <div
          class="absolute inset-y-1/4 right-5 z-[1] hidden h-full md:block md:w-[320px] lg:w-[640px]"
      >
        <img
            class="object-cover  border border-gray-200 p-0.5 lg:rounded-bl-[50px] lg:rounded-tr-[50px]"
            src="/search.gif"
            alt="Hero section one styles"
            loading="eager"
            width="640"
            height="360"
        >
      </div>
      <div class="flex h-full items-center justify-center lg:w-[600px]">
        <div class="space-y-20">
          <div>
            <h1 class="mb-4 text-4xl font-bold md:text-5xl lg:mb-6 lg:mt-5 text-blue-900 leading-10">
              言出数随 一问即答 <br />
              对话式AI数据洞察引擎
            </h1>
            <p class="max-w-[500px] text-xl text-muted-foreground">
              您的7x24小时专属AI数据分析师 <br />
              让数据洞察像搜索对话一样简单
            </p>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-3 md:flex lg:mt-10">
            <UiButton
                size="lg"
                class="items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-6 hidden whitespace-pre md:flex group relative  gap-1 overflow-hidden text-sm font-semibold tracking-tighter transform-gpu rounded-sm ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
            >
            <span class="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-24 dark:bg-black"></span>
              体验 Demo
            </UiButton>
            <UiButton size="lg" variant="outline"
                      class="items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  text-primary hover:text-white  border-blue-500 shadow hover:bg-primary/90 h-10 px-6 hidden whitespace-pre md:flex group relative  gap-1 overflow-hidden text-sm font-semibold tracking-tighter transform-gpu rounded-sm ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
            >
              <span class="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-24 dark:bg-black"></span>

<!--              <Icon name="lucide:user" />-->
            业务咨询</UiButton>
<!--            <UiButton size="lg">Sign up</UiButton>-->
          </div>
<!--          <p class="mt-5 text-sm text-muted-foreground">-->
<!--            We care about your data in our privacy policy.-->
<!--          </p>-->
        </div>
      </div>
      <div class="h-[300px] md:hidden">
        <img
            class="h-full w-full rounded-bl-[40px] rounded-tr-[40px] object-cover"
            src="/search.gif"
            alt="Hero section four styles"
            loading="eager"
            width="700"
            height="300"
        >
      </div>
    </UiContainer>
  </div>
</template>

<script lang="ts" setup>
</script>

<!--
<template>
  <div class="relative">
    <UiRetroGrid />
    <UiContainer class="relative flex flex-col items-center py-16 lg:py-24">

      <UiBadge
        v-if="heroData.headline"
        class="bg-background text-sm font-medium"
        variant="outline"
        >{{ heroData?.headline }}</UiBadge
      >
      <h1 class="
      mt-6 text-3xl text-pretty leading-loose font-bold tracking-tight  lg:font-extrabold lg:text-4xl lg:leading-relaxed text-primary lg:text-center xl:px-36"
      >
        {{heroData?.title}}
        <br/>
        <span>{{ heroData?.highlight}}</span>
      </h1>
      <p class="mx-auto mt-5 max-w-[700px] text-pretty text-center text-lg text-muted-foreground">
        {{ heroData?.description }}
      </p>
      <div
        v-if="heroData?.cta && heroData?.cta.length"
        class="mt-8 flex items-center justify-center gap-3"
      >
        <template v-for="(a, i) in heroData.cta" :key="i">
          <UiButton v-wave v-bind="a">
            <Icon v-if="a.leadingIcon" :name="a.leadingIcon" class="size-5" />
            <span v-if="a.label">{{ a.label }}</span>
            <Icon v-if="a.trailingIcon" :name="a.trailingIcon" class="size-5" />
          </UiButton>
        </template>
      </div>
    </UiContainer>
  </div>
</template>

<script lang="ts">
  export type HomeHero = {
    headline?: string;
    title: string;
    description: string;
    image?: {
      src: string;
      alt: string;
    };
    cta?: {
      leadingIcon?: string;
      trailingIcon?: string;
      label?: string;
      to?: string;
    }[];
  };
</script>

<script lang="ts" setup>
  const { page } = useContent();
  const heroData = computed<HomeHero>(() => page?.value?.hero);
</script>

-->