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
<!--      <img-->
<!--        v-if="heroData?.image"-->
<!--        loading="eager"-->
<!--        :src="heroData?.image.src"-->
<!--        :alt="heroData?.image.alt"-->
<!--        class="mx-auto mt-12 size-full h-full max-w-[900px] rounded-lg object-cover shadow lg:max-h-[500px]"-->
<!--      />-->
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
