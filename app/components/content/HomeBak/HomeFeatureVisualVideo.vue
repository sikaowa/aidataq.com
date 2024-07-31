<template>
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
  <GlowCapture class="" :size="1000">
    <div
        v-if="feature.items && feature.items.length"
    >
      <Vue3Marquee
          :duration="40"
          pause-on-hover
      >
        <template v-for="(item, i) in feature.items" :key="i">
          <GlowElement color="hsl(var(--primary))">
            <UiCard class="group rounded-xl glow:border-primary dark:glow:bg-primary/10   max-w-[350px]   min-h-[560px] m-4">
              <!--              <UiCardContent>-->
              <VideoCard :video-url="item.video" class="rounded-xl p-0.5"/>
              <!--                <UiFancyIcon class="pointer-events-none bg-transparent" :icon="item.icon" />-->
              <!--                <UiCardTitle class="mb-3 mt-6 text-xl font-semibold">{{ item.title }}</UiCardTitle>-->
              <!--                <UiCardDescription class="text-base">{{ item.description }}</UiCardDescription>-->
              <!--              </UiCardContent>-->
            </UiCard>
          </GlowElement>
        </template>
      </Vue3Marquee>

    </div>
  </GlowCapture>

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
  const { page } = useContent();
  const feature = computed<HomeHero>(() => page?.value?.feature);
  const cdnHost = 'https://sikaowa.caixie.top/website'
  const videoArray = [
    "/media/zilv.mp4",
    "/media/xianshizhuyi.mp4",
    "/media/qingxu.mp4",
    "/media/intention.mp4",
    "/media/realme.mp4",
    "/media/noshadow.mp4",
    "/media/think-change-life.mp4",
    "/media/chongsu.mp4",
    "/media/the-moment.mp4",
    "/media/your.mp4"
  ];


</script>
