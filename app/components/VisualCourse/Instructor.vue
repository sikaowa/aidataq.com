<template>

  <section
      id="instructor"
      class="relative mt-[80px] overflow-hidden before:absolute before:top-1/2 before:start-1/2 before:bg-no-repeat before:bg-center before:size-full before:-z-[0] before:transform before:-translate-y-1/2 before:-translate-x-1/2 ]  bg-fiber-carbon"
  >

    <!--<div class="absolute top-[80px] w-full flex flex-col items-center justify-center h-full">-->
    <!--  <BorderGradient />-->
    <!--&lt;!&ndash;  <BgGradient />&ndash;&gt;-->
    <!--  <HeroBgGradient class-name=""/>-->
    <!--&lt;!&ndash;  <BlurBackground is-active/>&ndash;&gt;-->
    <!--</div>-->

    <!--    <div class="bg-gradient-to-r from-transparent via-primary to-transparent h-px"></div>-->
    <!--    <div-->
    <!--        class="absolute top-[150px] start-1/2 -z-0 w-[1052px] h-[300px] bg-[radial-gradient(closest-side,#023236,#023236,transparent)] -translate-y-[300px] -translate-x-1/2 dark-bg-radial-gradient "></div>-->
    <div class="relative p-12 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 ">
      <div class="max-w-5xl mx-auto text-center mb-6 lg:mb-12">

        <div class=" flex flex-col lg:flex-row justify-between  items-center w-full">
          <!--        <div class="bg-shape" style="top: 0; left: 50%;"></div>-->
          <div class="flex flex-col  text-left p-10 space-y-4 ">
            <h5 class="text-neutral-600 dark:text-neutral-200">你的导师</h5>
            <h2 class="text-3xl font-bold text-primary">刘佰晟</h2>
            <div class="leading-loose max-w-[600px] text-neutral-600 dark:text-neutral-200">
              你好👋，我是佰晟，你的价值可视设计之旅的向导。<br>
              作为一个全方位的构建者，我富有创造力和创新能力，并热衷于寻找技术和创新两者之间的融合。
              从视觉学习者到视觉传播和创造者，这是一个全新的探索，我创建了这门价值可视化课程来帮助您掌握“价值可视化”设计的方方面面。
            </div>
          </div>
          <div class="relative flex mt-8 max-w-sm rounded-xl border-2 dark:border-neutral-900 text-white backdrop-blur-[3px] hover:backdrop-blur-[1px] text-transparent hover:border-neutral-900 dark:hover:border-primary animate-fadeIn ease-in-out">
            <!--            <GridCard>-->
            <NuxtImg src="/baisheng.png" loading="lazy" class="z-10"/>

            <!--            </GridCard>-->
            <!--            <div class="mt-8 max-w-sm rounded bg-black/10 p-5 text-white backdrop-blur-sm backdrop-opacity-70">-->
            <!--            <div class="w-full h-full absolute top-0 flex rounded-3xl bg-gradient-to-tl from-primary to-neutral-900 text-transparent blur ">-->
            <!--            </div>-->
          </div>

        </div>
      </div>
    </div>

  </section>
</template>
<script setup lang="ts">
</script>

<style scoped>
.bg-shape {
  z-index: 2;
  position: absolute;
  width: 400px;
  height: 400px;
  opacity: .32;
  border-radius: 50%;
  background-color: var(--primary-color);
  filter: blur(128px);
}
</style>