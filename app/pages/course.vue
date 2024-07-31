<template>
  <div>
    <NuxtLayout name="blank">
      <VisualCourseHero />
      <VisualCourseCurriculum />
      <VisualCourseInstructor />
      <VisualCoursePricing />
      <VisualCourseFAQ />

<!--      <VisualCourseInstructor />-->
<!--      <VisualCoursePricing />-->
<!--      <VisualCourseFAQ />-->
<!--      <ContentDoc :content="page" />-->
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
  // const { data: page } = await useAsyncData("index", () => queryContent("/").findOne());

  // useSeoMeta({
  //   twitterTitle: page.value?.title,
  //   twitterDescription: page.value?.description,
  //   twitterCard: "summary_large_image",
  //   themeColor: "#3b82f6",
  // });
  //
  // useHead({
  //   htmlAttrs: { lang: "en" },
  //   link: [{ rel: "icon", type: "image/png", href: "/icon.png" }],
  // });
  //
  // defineOgImageComponent("Docs", {
  //   title: page.value?.title,
  //   description: page.value?.description,
  // });
import Instructor from "~/components/VisualCourse/Instructor.vue";
</script>
