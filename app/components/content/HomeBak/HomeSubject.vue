<template>

  <div id="visual-value-graph" class="max-w-[85rem] lg:pt-10 pb-16 sm:pb-14 lg:pb-20 px-4 sm:px-6 lg:px-8 mx-auto">
    <!-- Heading -->
    <div class="max-w-2xl mx-auto text-center mb-6 md:mb-14">
      <!--      <p class="text-3xl font-bold md:text-4xl lg:text-5xl lg:leading-tight bg-clip-text bg-gradient-to-tl from-primary to-blue-500 text-transparent">-->
      <!--        300+ 内容-->
      <!--      </p>-->
      <div class="inline-block bg-gradient-to-tl from-blue-600 via-transparent to-cyan-400 p-px rounded-xl mb-5">
        <div
            class="bg-white rounded-xl py-1.5 px-3 min-w-20 text-3xl font-bold md:text-4xl lg:text-5xl lg:leading-tight dark:bg-neutral-900">
                <span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-cyan-500 text-transparent">
                  300+
                </span>
        </div>
      </div>
      <h2 class="text-2xl font-bold lg:text-3xl lg:leading-tight dark:text-white">
        10 大主题, 300+ 价值可视化内容
      </h2>
      <p class="mt-1 text-gray-500 dark:text-neutral-400">
        视觉思维集现包含10大主题，300+视觉内容，并且内容持续创作中。<br/>
        在这个专辑之中，我们提供了高清的PDF文档、矢量素材、基于Figma的原始设计。
        可以将其应用在自己的自媒体创作之中、可以学习理解里面的思维内容促进自身的成长、可以搭建自己的视觉思维库...
      </p>
    </div>
    <!-- End Heading -->

    <div class="space-y-10 text-center">
      <!-- Card -->
      <div id="dashboard" class="scroll-mt-12"
           v-for="(collection, index) in [collections[0], collections[1], collections[2], collections[3]]"
           :key="index"
      >
        <div
            class="relative p-0.5 bg-gradient-to-tl from-gray-100 via-transparent to-gray-100 rounded-xl overflow-hidden dark:from-neutral-950 dark:via-cyan-950 hover:dark:via-cyan-900 dark:to-neutral-950">
          <div
              class="p-5 lg:p-8 bg-gradient-to-bl from-gray-200 via-white to-gray-50 rounded-xl dark:from-neutral-950 dark:via-black/50 dark:to-neutral-950">
            <!-- Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-3 items-center gap-5">
              <div class="lg:order-2 lg:col-span-1 lg:col-span-2">
                <div class="grid grid-cols-1 space-y-5 lg:space-y-0 sm:grid-cols-3 items-center gap-x-2 sm:gap-x-5 ">
                  <div
                      v-for="(featuredItem, featuredIndex) in collection.featured"
                      :key="`featured_` + featuredIndex"
                      class="hs-tooltip inline-block">
                    <a class="hs-tooltip-toggle relative z-10 block transition hover:-translate-y-1"
                    >
                      <img class="block rounded-lg shadow-md" :src="'/website' + featuredItem.image"
                           :alt="featuredItem.desc">
                    </a>
                    <span
                        class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700 hidden"
                        role="tooltip" data-popper-placement="top"
                        style="position: fixed; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(1205.5px, -418px, 0px);">
<!--                        Main Page-->
                      {{ featuredItem.title }}
                      </span>
                  </div>
                </div>
              </div>
              <!-- End Col -->

              <div class="lg:order-1 lg:col-span-1 lg:col-span-1 text-center lg:text-start">
                  <span
                      class="mb-2 inline-flex items-center gap-x-1.5 py-1 px-1.5 sm:py-1.5 sm:px-2 rounded-md text-xs font-medium bg-white border text-gray-800 dark:bg-cyan-500/20 dark:border-cyan-900 dark:text-white">
                    25 个
                  </span>
                <h3 class="text-xl lg:text-2xl font-semibold text-gray-800 dark:text-white">
                  {{ collection.title }}
<!--                  <span class="inline bg-blue-50 border border-blue-300 text-blue-600 text-[11px] uppercase align-middle rounded-full py-1 px-2 dark:bg-blue-900/40 dark:border-blue-700 dark:text-blue-400">+6 New</span>-->
                </h3>
                <p class="mt-1 text-sm md:text-base text-gray-600 dark:text-neutral-400">
                  {{ collection.description }}
                </p>

                <div class="relative z-10 mt-5 flex justify-center lg:justify-start items-center gap-2.5">
                  <!--
                  <NuxtLink
                      class="group py-2.5 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    预览
                    <svg class="flex-shrink-0 size-4 group-hover:translate-x-0.5 group-hover:translate-x-0 transition"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </NuxtLink>
                -->
                  <NuxtLink type="button"
                            class="group py-2.5  inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg focus:outline-none focus:bg-gray-50 dark:text-primary dark:focus:bg-neutral-800 cursor-pointer"
                  >
                    获得全部
                    <svg class="flex-shrink-0 size-4 group-hover:translate-x-0.5 transition"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path
                          class="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition"
                          d="M5 12h14"></path>
                      <path
                          class="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition"
                          d="m12 5 7 7-7 7"></path>
                    </svg>
                  </NuxtLink>
                </div>
              </div>
              <!-- End Col -->
            </div>
            <!-- End Grid -->
          </div>

          <!--          <a class="before:absolute before:inset-0 before:z-[9]" href="../pro/dashboard/index.html"></a>-->
        </div>
      </div>
      <!-- End Card -->

      <a
          class="relative block w-full cursor-auto rounded-lg focus:outline-none disabled:opacity-50 disabled:pointer-events-none after:absolute after:inset-x-0 after:-bottom-8 lg:after:-bottom-16 after:z-10 after:w-full after:h-[330px] after:bg-gradient-to-t after:from-white after:via-white/90 after:pointer-events-none dark:after:from-black dark:after:via-black/95"
      >
          <span
              class="relative z-20 py-3 px-4 cursor-pointer inline-flex items-center gap-x-2 text-sm font-medium border border-transparent bg-primary text-white dark:bg-primary dark:text-black rounded-lg hover:bg-blue-7000">
            获取全部主题
          </span>
      </a>
    </div>
  </div>

</template>
<script setup lang="ts">

const collections = [{
  title: '思维重构',
  description: '这个主题包含思维的提升和反思，偏重于逆向思维的探索。',
  count: 20,
  featured: [{
    title: '正常是一种幻觉',
    desc: '对蜘蛛正常的事，对苍蝇来讲就是混乱',
    image: '/thinking-refactoring/thinking-refactoring_1.png'
  }, {
    title: '好或不好只是视角不同',
    desc: '那些看似不好的事情，往往有着有更好的变化',
    image: '/thinking-refactoring/thinking-refactoring_2.png'
  }, {
    title: '困难是相对的',
    desc: '不要认为对你来说难以掌握的东西是人类不可能做到的。\n' +
        '如果是人类可能做到的，就要认为是你力所能及的。',
    image: '/thinking-refactoring/thinking-refactoring_3.png'
  }],
}, {
  title: '行动、纪律、目标',
  description: '这个主题包含我们要主动行动，设定自我的可持续性，对目标方向保持一致性。',
  count: 15,
  featured: [{
    title: '选择纪律还是悔恨？',
    desc: '我们必须承受两种痛苦中的一种：纪律之痛或悔恨与失望之痛。',
    image: '/action/action_1.png'
  }, {
    title: '耐心是成功基础',
    desc: '成功的底层逻辑，就是敢于真的付出时间',
    image: '/action/action_2.png'
  }, {
    title: '困难是相对的',
    desc: '不要认为对你来说难以掌握的东西是人类不可能做到的。\n' +
        '如果是人类可能做到的，就要认为是你力所能及的。',
    image: '/action/action_3.png'
  }],
},
  {
    title: '专注、痴迷',
    description: '这个主题内容探索的是关于痴迷于专注的重要性，痴迷是终极的专注。痴迷是关于一万个细节。',
    count: 20,
    featured: [{
      title: '专注，更多地专注',
      desc: '不要认为对你来说难以掌握的东西是人类不可能做到的。\n' +
          '如果是人类可能做到的，就要认为是你力所能及的。',
      image: '/focus/focus_1.png'
    }, {
      title: '痴迷的专注',
      desc: '痴迷是关于 1万个细节而非 1 万个小时的堆砌',
      image: '/focus/focus_2.png'
    }, {
      title: '专注于过程',
      desc: '只关心结果的预期将让你止步不前，专注于过程的构建才会达成目的',
      image: '/focus/focus_4.png'
    }]
  },
  {
    title: '信念，强大与脆弱',
    description: '这个主题是针对于信念以及反脆弱的提示，不要恐惧困难，一切都在我们的掌控之中。',
    count: 15,
    featured: [{
      title: '钥匙在你手中',
      desc: '任何事情最初的推动都是困难的，我们要做的就是不停地行动',
      image: '/belief/belief_1.png'
    }, {
      title: '困难之下不反击，不会更坚强',
      desc: '如果你不反击，艰苦的岁月并不会让你变得更坚强，事实上，只有被动的承受只会让你变得软弱，只会让你忘记你的勇敢。',
      image: '/belief/belief_2.png'
    }, {
      title: '全力付出渴望',
      desc: '全力付出你的渴望\n' +
          '就像从未期待过一样',
      image: '/belief/belief_3.png'
    }]
  },
  {
    title: '自我关爱',
    description: '你不爱自己，还有谁能更爱你？关爱自我从来不是奢侈品而是必备品。',
    count: 20,
    featured: [{
      title: '自我关爱的时刻',
      desc: '关爱自我是必须品，而非奢侈品',
      image: '/self_care/self_care_1.png'
    }, {
      title: '爱自己',
      desc: '你不爱自己谁还能更爱你',
      image: '/self_care/self_care_2.png'
    }, {
      title: '学会说不',
      desc: '不要试图取悦他人，请坦率地表达自己的想法',
      image: '/self_care/self_care_3.png'
    }]
  },
  {
    title: '原则',
    description: '原则在于永远按自己的规划节奏，坚持目标不要被任何与目标无关的事情影响。',
    count: 15,
    featured: [{
      title: '通过真实性来避免竞争',
      desc: '',
      image: '/principles/principles_1.png'
    }, {
      title: '不要自我设限',
      desc: '不能发挥能力的原因大多都来自于自我限制。',
      image: '/principles/principles_2.png'
    }, {
      title: '打破常规',
      desc: '利用你所有可能获取的一切资金、人力和物料\n' +
          '发挥创造力，打破常规，完成目标',
      image: '/principles/principles_3.png'
    }]
  },
  {
    title: '机遇、幸福与坚忍',
    description: '一切都在路上，一切都是幸福。伟大的种子在出发时就已种下，所以我们一定要追求自己的伟大。',
    count: 30,
    featured: [{
      title: '不要惊慌',
      desc: '当你惊慌时，你开始引起烦恼，引起恐惧\n' +
          '你将不能发挥自己真实的能力。',
      image: '/happy/happy_1.png'
    }, {
      title: '不要可怜自己',
      desc: '所有人都会受苦，但并非所有人都会可怜自己。\n' +
          '可怜自己就是为无所作为的辩解，是为了证明不采取行动是正当的。要用行动去关爱自己，解决问题！',
      image: '/happy/happy_2.png'
    }, {
      title: '不要对自己撒谎',
      desc: '不要撒谎，更重要的是，不要对自己撒谎。我认为寻求真相，不对自己撒谎是成长最快的方式，因为你知道自己应该做什么，不应该做什么。',
      image: '/happy/happy_3.png'
    }]
  },
  {
    title: '当下与自我',
    description: '是你看到的这一切组成了你？还是因为你看见了所以才有了这一切?活在当下才是最重要的。',
    count: 15,
    featured: [{
      title: '你决定未来',
      desc: '反过想，永远反过来想。\n' +
          '不会有永远的顺利，但我们永远有能力将问题转化为机遇。',
      image: '/moment/moment_1.png'
    }, {
      title: '当你凝视深渊时，深渊也会凝视你',
      desc: '',
      image: '/moment/moment_2.png'
    }, {
      title: '珍惜当下，创造你心灵的平静之旅',
      desc: '',
      image: '/moment/moment_3.png'
    }]
  },
  {
    title: '工作与生活',
    description: '我们要在工作和生活之间保持微妙的平衡，并理解工作只是整体的一部分，而不是超集。生活和工作有更多的维度留给我们。',
    count: 15,
    featured: [{
      title: '工作是生活的子集',
      desc: '生活是由各种组成部分构成的一整体，在它们之间取得平衡才是实现长期幸福和成功的关键。',
      image: '/work/work_1.png'
    }, {
      title: '为一人就是为千万人',
      desc: '当我们满足所有人需求时，就等于无法满足任何人的需求。所以要专注于解决一个关键问题，实现重要目标，就可以满足千万人的需求。',
      image: '/work/work_2.png'
    }, {
      title: '我们都在努力生活',
      desc: '每个在生活中都在抵御各种压力，关键的差异在于真正面对时的反应，那才是真实的你。',
      image: '/work/work_3.png'
    }]
  },
  {
    title: '学习与数字经济',
    description: '在数字经济时代，一切都在变化，一切都在意料之外，又在预期之中。要在这个时代生存，必须成为超级个体，这里有必须要关注的一切。',
    count: 10,
    featured: [{
      title: '关于财富的积累',
      desc: '来自于纳瓦尔对财富如何积累的定义',
      image: '/business/business_1.png'
    }, {
      title: '品牌成长金字塔',
      desc: '建立个人品牌是一个循序渐进的过程，每个步骤都有其关键目标',
      image: '/business/business_2.png'
    }, {
      title: '技能的应用之路',
      desc: '习得技能带来成长，从自我的成长逐渐形成自己的商业之路',
      image: '/business/business_3.png'
    }]
  }]

// function filterItems(items) {
//   return items.filter(function(item) {
//     return item.price < 10;
//   })
// }
</script>