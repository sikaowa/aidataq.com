<template>
  <div class="relative overflow-hidden" id="service">
<!--    <div class="max-w-[85rem] mx-auto ">-->
  <UiContainer class="max-w-[85rem] mx-autoflex flex-col items-center justify-center py-16">
    <p class="text-center text-sm font-semibold text-primary">{{ feature.headline }}</p>
    <h1 class="mt-6 text-pretty text-center text-3xl font-semibold tracking-tight lg:text-4xl">
      {{ feature?.title }}
    </h1>
    <p class="mx-auto mt-5 max-w-[700px] text-pretty text-center text-lg text-muted-foreground">
      {{ feature?.description }}
    </p>
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:pt-20 md:pb-24" id="services">

      <!--    <GlowCapture class="pb-10 pt-12" :size="600">-->
      <!-- Grid -->
      <div class="grid grid-cols-12 gap-4 xl:gap-6">
        <div class="col-span-12 md:col-span-6 md:order-2 lg:col-span-4 grid gap-4 xl:gap-6">
          <!-- Card -->
          <CourseCard />
          <!-- End Card -->

          <!-- Card -->
          <VisualValueAniResCard />
          <!-- End Card -->
        </div>
        <!-- End Col -->

        <div class="col-span-12 md:col-span-6 lg:col-span-4 md:order-1 grid gap-4 xl:gap-6">


          <!-- Card -->
          <TechServiceCard />
          <!-- End Card -->

          <VisualValueResCard />
          <!-- Card -->
          <!-- End Card -->
        </div>
        <!-- End Col -->

        <div class="col-span-12 lg:col-span-4 md:order-3 grid md:grid-cols-2 lg:grid-cols-1 gap-4 xl:gap-6">
          <!-- Card -->
          <DesignServiceCard />
          <!-- End Card -->

          <!-- Card -->
          <FigmaWorkspaceCard />
          <!-- End Card -->
        </div>
        <!-- End Col -->
      </div>

      <!--    </GlowCapture>-->
    </div>
  </UiContainer>
    </div>
<!--  </div>-->
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
import VisualValueResCard from "~/components/content/Home/service-component/VisualValueResCard.vue";
import DesignServiceCard from "~/components/content/Home/service-component/DesignServiceCard.vue";
import FigmaWorkspaceCard from "~/components/content/Home/service-component/FigmaWorkspaceCard.vue";
import TechServiceCard from "~/components/content/Home/service-component/TechServiceCard.vue";
import VisualValueAniResCard from "~/components/content/Home/service-component/VisualValueAniResCard.vue";

const {page} = useContent();
const feature = computed<HomeHero>(() => page?.value?.feature);
</script>
