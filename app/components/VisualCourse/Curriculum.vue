<script lang="ts" setup>
import {Navigation, Mousewheel, Pagination, Scrollbar, A11y} from 'swiper/modules';
// import { EffectFade,  } from 'swiper/modules';

import {useMediaQuery} from '@vueuse/core'

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
import {Swiper, SwiperSlide, useSwiper} from 'swiper/vue';
import SwiperType from 'swiper'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
// import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion'
// import {CardContent, CardDescription, CardHeader, CardTitle} from "~/components/ui/card";

const defaultValue = 'item-1'

const accordionItems = [
  {
    value: 'item-1', title: '为什么要进行价值的视觉设计（理论）',
    content: '主要讲解视觉可视化的理论以及我们的主要课程目标'
  },
  {
    value: 'item-2',
    title: '如何价值可视化（实践）',
    content: '使用真实的安全带你快速进入“泳池”，从0到1的完整案例、从抽象图形、事物、物品中创造符号、用视觉工具（比较、隐喻、规模）创造出视觉内容'
  },
  {
    value: 'item-3',
    title: '创造专属于你的可视化内容（应用）',
    content: '这个模块让你拥有“原创”能力，带你一起设计专属的内容系统、专属的版式、专属的风格。'
  },
  {value: 'item-4', title: '无障碍起步！(执行）', content: '提供专属的Figma模板、素材、使用引导。开箱即用！'},
  {
    value: 'item-5',
    title: '让一切都动起来！(进阶）',
    content: '从视觉思维到视觉动画，让我们的视觉内容动起来！用2个真实案例，带你走进视觉动画的世界，从视觉内容到视觉动画的进化入门！'
  },
  {
    value: 'item-6',
    title: '收获',
    content: '沟通更清晰、打造自己的内容品牌、提高您的认知价值、利用视觉设计营销自己的作品'
  },
]

const courses = [{
  title: '理论与目标',
  desc: '重点讲解价值可视化的理论基础以及我们的课程目标',
  lessons: [{
    title: '尽快地开始',
    desc: '学会游泳的最快方式是跳入泳池\n' +
        '\n' +
        '现象是在发生之后才被研究的，它们不是实验室预制的活动。它们只是发生了，如果做得好，就可以事后进行分析。\n' +
        '我们很容易陷入计划和理论的误区，以至于常常忘记实际行动才能创造最大价值。\n' +
        '一个外场手他如何知道什么时候开始跑？'
  }]
}]

// import {graphql} from '~/gql';
// import type {GetCoursesQuery} from '~/gql/graphql';
// import {Collapsible, CollapsibleTrigger} from "~/components/ui/collapsible";

// const { data } = await useAsyncQuery<GetCoursesQuery>(graphql(`
// query LMS_COURSE_LIST{
//   lms_courses{
//     title
//     modules{
//       title
//       lessons{
//         title
//         description
//         content
//       }
//     }
//   }
// }
// `));
// const swiper = useSwiper()
// swiper.value.slideTo()

const swiperRef = ref()

function onSwiper(swiper: SwiperType) {
  // swiper.slides.slideTo(2)
  swiperRef.value = swiper;
}

function handleAccordionTrigger(item, index) {
  swiperRef.value.slideTo(index)
}


</script>

<template>
  <section class="relative py-4  lg:pt-12 lg:pb-16">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center mb-6 lg:mb-12 leading-loose">
        <span class="text-base font-bold text-neutral-600 dark:text-neutral-300">
          课程介绍
        </span>
        <p class="text-3xl font-bold md:text-4xl lg:text-4xl lg:leading-tight text-primary">
          你将会学到什么
        </p>

        <p class="text-base lg:text-lg  mt-2 text-neutral-600 dark:text-neutral-300 leading-loose">
          从课程中你可以理解价值可视化的核心原理，<br />并学会运用 Figma 等设计工具，从实践中一步步创造出自己专属的内容。
        </p>
        <p class="text-base lg:text-lg  mt-2 text-neutral-600 dark:text-neutral-300 leading-loose">
          除此之外还将获得动画内容的基础制作方法和逻辑。完成这些基础课程，你将从视觉思考者蜕变为视觉传播者。成就更好的自己！

        </p>
      </div>
      <div class="flex flex-col lg:flex-row">
        <div class="flex-1 lg:order-none order-last">
          <div class="h-full">
            <UiCard class="mx-auto max-w-sm w-full lg:w-[400px] border-neutral-400 dark:border-neutral-900 dark:hover:border-primary dark">
              <UiCardHeader>
                <UiCardTitle class="text-xl">
                  价值可视化
                </UiCardTitle>
                <UiCardDescription>
                  我们不是不聪明，我们需要更清晰！
                </UiCardDescription>
              </UiCardHeader>
              <UiCardContent class="">
                  <UiAccordion :default-value="defaultValue" type="single" :items="accordionItems" collapsible>
                    <template v-for="(i, k) in accordionItems" :key="k">
                      <UiAccordionItem v-slot="{ open }" class="border-b-0" :value="i.value">
                        <UiAccordionHeader>
                          <UiAccordionTrigger
                              @click="handleAccordionTrigger(i, k)"
                              :class="[open ? '!bg-muted underline hover:!underline text-primary' : '!bg-muted/30 no-underline hover:text-primary']"
                              class="mb-2 rounded-md px-3 text-left text-sm underline-offset-2 hover:bg-muted hover:no-underline"
                          >{{ i.title }}</UiAccordionTrigger>
                        </UiAccordionHeader>
                        <UiAccordionContent>
                          <div class="px-3 py-2 leading-8" v-html="i.content" />
                        </UiAccordionContent>
                      </UiAccordionItem>
                    </template>
                  </UiAccordion>
<!--                <UiAccordion type="single" class="w-full" collapsible :default-value="defaultValue">-->
<!--                  <UiAccordionItem v-for="(item, index) in accordionItems" :key="item.value" :value="item.value"-->
<!--                                 class="border-none">-->
<!--                    <UiAccordionTrigger-->
<!--                        :class="'!bg-muted/50 !no-underline mb-2 rounded-md px-3 text-left text-sm underline-offset-2 hover:bg-muted hover:no-underline'"-->
<!--                        @click="handleAccordionTrigger(item, index)"-->
<!--                    >{{ item.title }}-->
<!--                    </UiAccordionTrigger>-->
<!--                    <UiAccordionContent class="px-3 py-2 leading-8">-->
<!--                      {{ item.content }}-->
<!--                    </UiAccordionContent>-->
<!--                  </UiAccordionItem>-->
<!--                </UiAccordion>-->

              </UiCardContent>
            </UiCard>

          </div>
        </div>
        <div class="flex lg:order-none order-first">
          <UiCard class="border-neutral-800 w-full h-full w-[800px] h-[800px] hover:border-primary">
            <swiper
                :direction="isLargeScreen ? 'vertical' : 'horizontal'"
                :slidesPerView="1"
                :spaceBetween="30"
                :mousewheel="true"
                :pagination="{
      clickable: true,
    }"
                :modules="[Mousewheel, Pagination]"
                @swiper="onSwiper"
                class="mySwiper rounded-md "
                :class="isLargeScreen && '!h-full'"
            >
              <swiper-slide>
                <NuxtImg src="/course/products/p1.png"
                         alt="你并不笨，你只是需要更清晰！"/>
              </swiper-slide>
              <swiper-slide>
                <NuxtImg src="/course/products/p2.png"
                         alt="你的专属工作空间，Figma定制"
                         sizes="100vw sm:50vw"


                ></NuxtImg>

              </swiper-slide>
              <swiper-slide>
                <NuxtImg src="/course/products/p3.png"
                         alt="图文+视觉的讲解"></NuxtImg>

              </swiper-slide>
              <swiper-slide>
                <NuxtImg src="/course/products/p4.png" class="w-full h-full" alt="图文+视觉的讲解"

                ></NuxtImg>
              </swiper-slide>
              <swiper-slide>
                <NuxtImg src="/course/products/p5.png" class="w-full h-full" alt="图文+视觉的讲解"

                ></NuxtImg>

              </swiper-slide>
              <swiper-slide>
                <NuxtImg src="/course/products/p6.png" class="w-full h-full" alt="图文+视觉的讲解"
                ></NuxtImg>
              </swiper-slide>
              <!--              </swiper-slide><swiper-slide>Slide 7</swiper-slide>-->
              <!--              <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>-->
            </swiper>

          </UiCard>

        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.swiper {
  width: 100%;
  height: 100%;
  //height: 800px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #000;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-pagination-bullet-active {
  background: #fff;
  border: none !important;

}

.swiper-pagination-bullet {
  border: 1px solid #fff;
}
</style>