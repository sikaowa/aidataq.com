<template>
  <section class="pb-24" id="visual-value-animation">
    <div class="relative overflow-hidden">
      <div class="max-w-[85rem] mx-auto">
        <div class="relative pt-12">
          <!-- Title -->
          <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <div class="inline-block bg-gradient-to-tl from-primary via-transparent to-blue-500 p-px rounded-xl mb-5">
              <div
                  class="rounded-xl py-1.5 px-3 text-3xl font-bold md:text-4xl lg:text-5xl lg:leading-tight bg-neutral-900">
                <span class="bg-clip-text bg-gradient-to-tl from-primary to-blue-500 text-transparent">
                  100+
                </span>
              </div>
            </div>
            <h2 class="text-2xl font-bold lg:text-3xl lg:leading-tight text-white">视觉思维<span
                class="text-primary">动画</span></h2>
            <p class="mt-1 text-neutral-300 font-bold leading-loose">
              当前这个视觉思维集总共包含<strong>10大主题</strong>，<strong>300+视觉内容</strong>，并且内容持续增加中。
              <br/>
              在这个素材专辑中，我们提供了高清的PDF文档、矢量素材、基于Figma的原始设计。<br/>
              您可以将其应用在自己的自媒体创作之中、可以学习理解里面的思维内容促进自身的成长、可以搭建自己的视觉思维库...
            </p>
          </div>
          <!-- End Title -->
        </div>
      </div>
    </div>

    <div class="relative mb-8 lg:mb-16">
      <div class="max-w-[85rem] mx-auto">
        <!-- Grid -->
        <div
            class="relative text-center after:absolute after:inset-x-0 after:-bottom-8 lg:after:-bottom-16 after:z-10 after:w-full after:h-[330px] after:bg-gradient-to-t  after:pointer-events-none after:from-neutral-900 after:via-neutral-900/95">

          <div class="text-start grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-6 px-4 sm:px-6 lg:px-8">
            <!-- Card -->
            <a class="relative rounded-xl before:absolute before:inset-0 before:z-10 before:border before:rounded-xl before:transition before:hover:border-2 before:hover:shadow-lg bg-neutral-800 before:border-neutral-700 before:hover:border-primary"
               v-for="(collection, index) in collections"
               :key="index"
            >
              <div class="py-3.5 px-4 bg-neutral-900 flex justify-between items-center text-xs">
                <p class=" text-gray-900 font-medium dark:text-white">
                  {{ collection.title }}
                </p>
                <p class="text-gray-400 dark:text-neutral-500">{{ collection.count }} 个视觉思维</p>
              </div>
              <div class="relative pt-[100%]">
                <NuxtImg class="size-full absolute top-0 start-0 object-cover rounded-t-xl p-4"
                         :src="'website/thinking-refactoring/' + collection.featured.image"

                         format="webp,avif"
                />
                <!--              <img class="size-full absolute top-0 start-0 object-cover rounded-t-xl dark:hidden" src="./assets/thumbnails/components/accordion.webp" alt="Accordion">-->
                <!--              <img class="hidden size-full absolute top-0 start-0 object-cover rounded-t-xl dark:block" src="./assets/thumbnails/components-dark/accordion.webp" alt="Accordion">-->
              </div>
              <div class="py-3.5 px-4 rounded-b-xl bg-neutral-900 text-center">
                <h3 class="text-sm text-gray-900 font-medium dark:text-white">{{ collection.title }} </h3>
                <p class="mt-0.5 text-xs text-gray-400 dark:text-neutral-500">{{ collection.description }}</p>
              </div>
            </a>
            <!-- End Card -->

          </div>

          <UiButton type="button" id="components-load-more"
                    class="hs-collapse-toggle hs-collapse-open:rounded-full hs-collapse-open:px-3 hs-collapse-open:sticky hs-collapse-open:bottom-10 hs-collapse-open:inset-x-0 -mt-20 relative z-20 group py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-primary bg-neutral-900 text-white hover:bg-cyan-950 hover:text-primary disabled:opacity-50 disabled:pointer-events-none"
          >
          <span class="hs-collapse-open:hidden">
            全部视觉动画
          </span>
          </UiButton>
        </div>
        <!-- End Grid -->
      </div>
    </div>
  </section>

</template>
<script setup lang="ts">
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