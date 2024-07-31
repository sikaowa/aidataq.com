<template>
  <div class="relative overflow-hidden lg:px-14  lg:block" id="service">
    <!--    <div class="max-w-[85rem] mx-auto ">-->
    <div class=" bg-blue-50 lg:rounded-[50px]">

      <UiContainer class="max-w-[85rem] mx-autoflex flex-col items-center justify-center py-16 ">

        <p class="text-center text-sm font-semibold text-primary">{{ feature.headline }}</p>
        <h1 class="mt-6 text-pretty text-center text-3xl font-semibold tracking-tight lg:text-4xl text-blue-900">
          {{ feature?.title }}
        </h1>
        <p class="mx-auto mt-5 max-w-[700px] text-pretty text-center text-lg text-muted-foreground">
          {{ feature?.description }}
        </p>
        <div class="lg:min-h-[600px]">
          <ClientOnly>

            <div class=" pt-10 flex flex-col items-center">
              <div class="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 justify-center ">
                <div class="space-y-2 px-6 lg:px-0">
                  <UiCard
                      @click="handleAccordionTrigger(item, index)"
                      class="w-full lg:w-[400px] h-[125px] p-0 rounded-2xl bg-blue-50 cursor-pointer  transition-all  box-border "
                      :class="defaultValue === item.value ? 'border-t-blue-500  border-t-4 shadow-lg bg-white' : 'hover:shadow-xl hover:bg-white/50 hover:border-t-4'"
                      v-for="(item, index) in accordionItems" :key="index">
                    <UiCardHeader class="font-bold text-blue-900 px-4 ">
                      {{item.title}}
                    </UiCardHeader>
                    <UiCardContent class="text-sm text-muted-foreground">
                      {{ item.content }}
                    </UiCardContent>
                  </UiCard>
                </div>
                <UiCard class=" lg:w-auto h-[520px] "
                        :class="isLargeScreen ? 'w-auto h-[520px]' : 'w-[22rem] h-max-[520px]'"
                >
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
                      <NuxtImg src="/service/p1.png"
                               class="w-full h-full"
                               sizes="100vw sm:50vw"
                               alt="你并不笨，你只是需要更清晰！"/>
                    </swiper-slide>
                    <swiper-slide>
                      <NuxtImg src="/service/p2.png"
                               alt="你的专属工作空间，Figma定制"
                               class="w-full h-full"
                               sizes="100vw sm:50vw"

                      ></NuxtImg>

                    </swiper-slide>
                    <swiper-slide>
                      <NuxtImg src="/service/p3.png"
                               class="w-full h-full"
                               sizes="100vw sm:50vw"

                               alt="图文+视觉的讲解"></NuxtImg>

                    </swiper-slide>
                    <swiper-slide>
                      <NuxtImg src="/service/p4.png"
                               sizes="100vw sm:50vw"
                               class="w-full h-full" alt="图文+视觉的讲解"

                      ></NuxtImg>
                    </swiper-slide>
                  </swiper>

                </UiCard>
              </div>
            </div>
          </ClientOnly>

        </div>

      </UiContainer>

    </div>
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
import {Mousewheel, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide, useSwiper} from 'swiper/vue';
import SwiperType from 'swiper'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import {useMediaQuery} from '@vueuse/core'
const {page} = useContent();
const feature = computed<HomeHero>(() => page?.value?.feature);
const isLargeScreen = useMediaQuery('(min-width: 1024px)')
import {Navigation, Mousewheel, Pagination, Scrollbar, A11y} from 'swiper/modules';

const defaultValue = ref('item-1')


const accordionItems = [
  {
    value: 'item-1', title: '对话即分析，0门槛使用',
    content: 'AI 理解你的言外之意，如同与数据专家 1V1 对话'
  },
  {
    value: 'item-2',
    title: 'AI 智能洞察，复刻 3-5 年专业分析师',
    content: '一次性了解数据是什么、为什么、怎么办'
  },
  {
    value: 'item-3',
    title: '多端随时使用，无缝融入工作流',
    content: '支持PC、手机端，嵌入办公软件聊天机器人'
  },
  {
    value: 'item-4', title: '一键连接您自己的大语言模型',
    content: '支持 OpenAI、文心一言、百川智能等大模型'
  },
]

const swiperRef = ref()

function onSwiper(swiper: SwiperType) {
  // swiper.slides.slideTo(2)
  swiperRef.value = swiper;
}

function handleAccordionTrigger(item, index) {
  swiperRef.value.slideTo(index)
  defaultValue.value = item.value
}



</script>
<style lang="scss">
.swiper {
  width: 100%;
  height: 100%;
  //height: 800px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  //background: #000;
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
  background: #002aff;
  border: none !important;

}

//.swiper-pagination-bullet {
  //border: 1px solid #000;
//}
</style>