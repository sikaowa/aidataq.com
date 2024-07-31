<template>
  <section class="relative py-4  lg:pt-12 lg:pb-16">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

      <div class="px-4 mx-auto max-w-3xl lg:px-4 lg:text-center space-y-8">
        <NuxtLink
            class="inline-flex items-center justify-between px-1 py-1 pr-4 mb-5 text-sm  rounded-full bg-gray-800 text-white hover:bg-cyan-950"
            role="alert"
        >
        <span
            class="text-xs border-2 border-primary dark:bg-cyan-950 rounded-full text-white px-4 py-1.5 mr-3">最新</span><span
            class="mr-2 text-sm font-medium">视觉思维课早鸟特惠中</span>
          <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 9 4-4-4-4"></path>
          </svg>
        </NuxtLink>
        <h1 class="mb-4 text-2xl font-bold tracking-tight  lg:font-extrabold lg:text-4xl lg:leading-relaxed text-primary lg:text-center lg:mb-7">
          <span class="">如何可视化价值？</span>
        </h1>
        <p class="text-primary/90 text-base lg:text-2xl ">
          教你将想法转化为<span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-[#00EBFF] text-transparent">极具冲击力</span>、令人难忘的<span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-[#00EBFF] text-transparent">视觉效果</span>，<br />从那些混乱的信息中<span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-[#00EBFF] text-transparent">脱颖而出！</span>
        </p>
        <!--        <p class="mb-10 text-base font-normal text-gray-300 lg:text-center lg:text-xl">-->
        <!--          本课程可以将你从零开始带入设计领域, 并学习如何更好地利用设计来传达价值，<br />成为出色的视觉思维表达者!-->
        <!--        </p>-->
        <p class="mx-auto mt-5 max-w-[700px] text-pretty text-center text-lg text-muted-foreground">
          这个世界奖励的是最善于传播思想的人，而不是拥有最好思想的人。<br/>本课程将带你更好的运用视觉传播，创造巨大的优势!
        </p>
        <div class="flex flex-col mb-8 md:flex-row lg:justify-center">
          <UiButton v-wave>
            现在入学 ¥99

          </UiButton>
<!--          <NuxtLink-->
<!--              href="#pricing"-->
<!--              class="text-primary bg-primary border-2 border-primary focus:ring-4 focus:ring-cyan-950 hover:bg-cyan-950 hover:text-primary focus:border-primary font-medium rounded-lg text-base px-6 py-2.5 text-center md:mr-5 mb-3 md:mb-0 inline-flex items-center justify-center">-->
<!--            现在入学 ¥99-->
<!--          </NuxtLink>-->
          <!--          <a href="#components"-->
          <!--             class="text-gray-900 bg-white-100 hover:bg-gray-100 hover:text-blue-700 border border-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-600 dark:bg-gray-800 font-medium rounded-lg text-base px-6 py-2.5 text-center inline-flex justify-center items-center">-->
          <!--                                <span class="ml-2">-->
          <!--                                  观看课程预告-->
          <!--                                </span>-->
          <!--          </a>-->


        </div>
      </div>
    </div>
    <div class="pt-20">
      <Vue3Marquee
          :duration="40"
          pause-on-hover
      >
<!--      <Marquee :fade="true">-->
        <div class="relative  w-[280px] m-3"
             v-for="(collection, index) in collections"
             :key="index"
        >

          <!-- Card -->
          <a class="w-full rounded-xl before:absolute before:inset-0 before:z-10 before:border before:rounded-xl before:transition before:hover:border-2 before:hover:shadow-lg bg-neutral-800 before:border-neutral-700 before:hover:border-primary"

          >
            <div class="relative pt-[100%] ">
              <NuxtImg class="size-full absolute top-0 start-0 object-cover rounded-lg p-4"
                       :src="'website/thinking-refactoring/' + collection.featured.image"

                       format="webp,avif"
              />
              <!--              <img class="size-full absolute top-0 start-0 object-cover rounded-t-xl dark:hidden" src="./assets/thumbnails/components/accordion.webp" alt="Accordion">-->
              <!--              <img class="hidden size-full absolute top-0 start-0 object-cover rounded-t-xl dark:block" src="./assets/thumbnails/components-dark/accordion.webp" alt="Accordion">-->
            </div>
<!--            <div class="py-3.5 px-4 rounded-b-xl bg-neutral-900 text-center">-->
              <!--            <h3 class="text-sm text-gray-900 font-medium dark:text-white">{{ collection.title }} </h3>-->
<!--              <p class="mt-0.5 text-xs text-gray-400 dark:text-neutral-500">{{ collection.description }}</p>-->
<!--            </div>-->
          </a>
        </div>
        <!-- End Card -->
<!--      </Marquee>-->
      </Vue3Marquee>


    </div>

  </section>
</template>
<script setup lang="ts">
// import {Marquee} from "@selemondev/vue3-marquee";
// import "@selemondev/vue3-marquee/dist/style.css"
// import {createApp} from 'vue'
// import Vue3Marquee from "~/plugins/vue3Marquee.client";

const collections = [{
  featured: {
    title: '正常是一种幻觉',
    desc: '对蜘蛛正常的事，对苍蝇来讲就是混乱',
    image: 'thinking-refactoring_1.png'
  },
  title: '思维重构',
  description: '这个主题包含思维的提升和反思，偏重于逆向思维的探索。',
  count: 20,
}, {
  title: '行动、纪律、目标',
  description: '这个主题包含我们要主动行动，设定自我的可持续性，对目标方向保持一致性。',
  count: 15,
  featured: {
    title: '好或不好只是视角不同',
    desc: '那些看似不好的事情，往往有着有更好的变化',
    image: 'thinking-refactoring_2.png'
  }
},
  {
    title: '专注、痴迷',
    description: '这个主题内容探索的是关于痴迷于专注的重要性，痴迷是终极的专注。痴迷是关于一万个细节。',
    count: 20,
    featured: {
      title: '困难是相对的',
      desc: '不要认为对你来说难以掌握的东西是人类不可能做到的。\n' +
          '如果是人类可能做到的，就要认为是你力所能及的。',
      image: 'thinking-refactoring_3.png'
    }
  },
  {
    title: '信念，强大与脆弱',
    description: '这个主题是针对于信念以及反脆弱的提示，不要恐惧困难，一切都在我们的掌控之中。',
    count: 15,
    featured: {
      title: '完成看似不可能的任务',
      desc: '任何事情最初的推动都是困难的，我们要做的就是不停地行动',
      image: 'thinking-refactoring_4.png'
    }
  },
  {
    title: '自我关爱',
    description: '你不爱自己，还有谁能更爱你？关爱自我从来不是奢侈品而是必备品。',
    count: 20,
    featured: {
      title: '生命的力量在于不顺从',
      desc: '大家说的都是对的，因为那是他们的生活。\n' +
          '而你只需要做到的展示自己的价值、改变自己。',
      image: 'thinking-refactoring_5.png'
    }
  },
  {
    title: '原则',
    description: '原则在于永远按自己的规划节奏，坚持目标不要被任何与目标无关的事情影响。',
    count: 15,
    featured: {
      title: '从 1 - 100 的比例，作为一个评估维度',
      desc: '我们总是将情况标签化为好或坏，但如果将情况的评估放更大标准尺度上。\n' +
          '那么“失败”就可以重新定义为部分成功。',
      image: 'thinking-refactoring_6.png'
    }
  },
  {
    title: '机遇、幸福与坚忍',
    description: '一切都在路上，一切都是幸福。伟大的种子在出发时就已种下，所以我们一定要追求自己的伟大。',
    count: 30,
    featured: {
      title: '破旧立新',
      desc: '你必须停止做一些旧的事情，才能开始做一些新的事情。',
      image: 'thinking-refactoring_7.png'
    }
  },
  {
    title: '当下与自我',
    description: '是你看到的这一切组成了你？还是因为你看见了所以才有了这一切?活在当下才是最重要的。',
    count: 15,
    featured: {
      title: '问题即机遇',
      desc: '反过想，永远反过来想。\n' +
          '不会有永远的顺利，但我们永远有能力将问题转化为机遇。',
      image: 'thinking-refactoring_8.png'
    }
  },
  {
    title: '工作与生活',
    description: '我们要在工作和生活之间保持微妙的平衡，并理解工作只是整体的一部分，而不是超集。生活和工作有更多的维度留给我们。',
    count: 15,
    featured: {
      title: '专注于你的表演',
      desc: '表演者能够犯的最大错误，就是盯着观众看。因为一个表演者最重要的目标是展现自己的价值，而不是将观众的反应视为主要目的。',
      image: 'thinking-refactoring_9.png'
    }
  },
  {
    title: '学习与数字经济',
    description: '在数字经济时代，一切都在变化，一切都在意料之外，又在预期之中。要在这个时代生存，必须成为超级个体，这里有必须要关注的一切。',
    count: 10,
    featured: {
      title: '打破旧思',
      desc: '困难不在于新的思维，而在于摆脱旧思维的束缚',
      image: 'thinking-refactoring_10.png'
    }
  }]
</script>