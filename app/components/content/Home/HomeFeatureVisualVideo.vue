<template>
  <UiContainer class="max-w-[85rem] mx-autoflex flex-col items-center justify-center py-16">
    <Vue3Marquee
        :duration="40"
        pause-on-hover
    >
      <template v-for="(item, i) in customers" :key="i">
        <div class="!border-none m-4">
          <NuxtImg :src="item.logo" class="w-[150px]"/>
        </div>
      </template>
    </Vue3Marquee>

  </UiContainer>
  <!--
  <UiContainer class="flex flex-col items-center justify-center py-16">
    <p class="text-center text-sm font-semibold text-primary">{{ feature.headline }}</p>
    <h1 class="mt-6 text-pretty text-center text-3xl font-semibold tracking-tight lg:text-4xl">
      {{ feature?.title }}
    </h1>
    <p class="mx-auto mt-5 max-w-[700px] text-pretty text-center text-lg text-muted-foreground">
      {{ feature?.description }}
    </p>

  </UiContainer>
  -->
<!--  <GlowCapture class="" :size="1000">-->
<!--    <div-->
<!--        v-if="feature.items && feature.items.length"-->
<!--    >-->

<!--    </div>-->
<!--  </GlowCapture>-->

</template>

<script lang="ts">
  export type HomeHero = {
    headline?: string;
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
</script>

<script lang="ts" setup>
  // import Vue3Marquee from "~/plugins/vue3Marquee.client";

  // import Vue3Marquee from "~/plugins/vue3Marquee.client";

  const { page } = useContent();
  const feature = computed<HomeHero>(() => page?.value?.feature);
  const cdnHost = 'https://sikaowa.caixie.top/website'
  const customers = [{
    title: '长安汽车',
    logo: '/customer/changan-auto-logo-150.png'
  }, {
    title: '国家能源集团',
    logo: '/customer/chn-energy-logo-150.png'
  }, {
    title: '京东物流',
    logo: '/customer/jdl-150.png'
  }, {
    title: '小红书',
    logo: '/customer/red-logo-150.png'
  }, {
    title: '四方',
    logo: '/customer/sf-logo-150.png'
  }, {
    title: '索菲亚家居',
    logo: '/customer/sfy-logo-150.png'
  }, {
    title: '上海证劵',
    logo: '/customer/shanghai-securities-logo-150.png'
  }, {
    title: '国家电网',
    logo: '/customer/state-grid-logo-150.png'
  }, {
    title: '伊利',
    logo: '/customer/yili-logo-150.png'
  }, {
    title: '雅戈尔',
    logo: '/customer/youngor-logo-150.png'
  }]

</script>
