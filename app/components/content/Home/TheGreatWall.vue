<template>

  <div class="relative overflow-hidden">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-gradient-to-r from-transparent via-cyan-400 to-transparent h-px"></div>

      <div
          class="absolute top-[150px] start-1/2 -z-[1] w-[1052px] h-[300px] bg-[radial-gradient(closest-side,#f5f3ff,#fdfbff,transparent)] -translate-y-[300px] -translate-x-1/2 dark-bg-radial-gradient"></div>
      <!--    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">-->
      <div
          class="relative pt-12 pb-24 md:pt-24 text-center after:absolute after:inset-x-0 after:-bottom-8 lg:after:-bottom-16 after:pointer-events-none after:z-10 after:w-full after:h-[330px] after:bg-gradient-to-t after:from-white after:via-white/90 dark:after:from-black dark:after:via-black/95">

        <div class="max-w-2xl mx-auto text-center mb-10">
          <h2 class="text-2xl font-bold lg:text-3xl lg:leading-tight dark:text-white">
            大家<span
              class="text-primary dark:text-cyan-500">说</span></h2>
<!--          <p class="mt-1 text-gray-500 dark:text-neutral-400">Thoughts from those who've experienced Preline UI in-->
<!--            action.</p>-->
                  <p class="mt-1 text-lg text-neutral-400 dark:text-neutral-300 leading-loose">价值可视化是一个全新的赛道，未来不仅有
                    AI，更是视觉思维的时代。
                    <br/>用视觉可视的形式传播价值对于个人、商业，都将大有可为。</p>
        </div>
        <!-- Title -->
        <!--      <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14 space-y-10">-->
        <!--        <h2 class="text-3xl font-bold lg:text-3xl lg:leading-tight dark:text-white">大家<span-->
        <!--            class=" text-primary">说</span></h2>-->
        <!--        <p class="mt-1 text-lg text-neutral-400 dark:text-neutral-300 leading-loose">价值可视化是一个全新的赛道，未来不仅有-->
        <!--          AI，更是视觉思维的时代。-->
        <!--          <br/>用视觉可视的形式传播价值无论是个人应用还是在商业领域，在未来都将大有可为。</p>-->
        <!--      </div>-->
        <!-- End Title -->

        <!-- Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6">
          <!-- Col -->
          <div class="space-y-4 xl:space-y-6">
            <!-- Card -->
            <div
                class="flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-transparent dark:border-primary/15 dark:hover:border-primary"
            >
              <div class="p-4 md:p-6">
                <div class="flex justify-between">
                  <div class="flex items-center gap-x-3 mb-5">
                    <NuxtImg :src="list[0].avatar"
                             class="inline-block size-9 rounded-full"
                    />
                    <div class="grow">
                      <p class="font-semibold text-gray-800 dark:text-white">{{ list[0].name }}</p>
                    </div>
                  </div>
                </div>
                <p class="text-start leading-7 text-gray-600 dark:text-neutral-400">
                  {{ list[0].comment }}
                </p>
              </div>
            </div>
            <!-- End Card -->

            <!-- Card -->
            <div
                class="flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-transparent dark:border-primary/15 dark:hover:border-primary">

              <div class="p-4 md:p-6">
                <div class="flex justify-between">
                  <div class="flex items-center gap-x-3 mb-5">
                    <NuxtImg :src="list[6].avatar"
                             class="inline-block size-9 rounded-full"
                    />
                    <div class="grow">
                      <p class="font-semibold text-gray-800 dark:text-white">{{ list[6].name }}</p>
                    </div>
                  </div>

                </div>
                <p class="text-start leading-7 text-gray-600 dark:text-neutral-400">

                  {{ list[6].comment }}
                </p>
              </div>
            </div>
            <!-- End Card -->

            <!-- Card -->
            <div
                class="flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-transparent dark:border-primary/15 dark:hover:border-primary">

              <div class="p-4 md:p-6">
                <div class="flex justify-between">
                  <div class="flex items-center gap-x-3 mb-5">
                    <NuxtImg :src="list[1].avatar"
                             class="inline-block size-9 rounded-full"
                    />
                    <div class="grow">
                      <p class="font-semibold text-gray-800 dark:text-white">{{ list[1].name }}</p>

                    </div>
                  </div>

                </div>
                <p class="text-start leading-7 text-gray-600 dark:text-neutral-400">

                  {{ list[1].comment }}
                </p>
              </div>
            </div>
            <!-- End Card -->

            <!-- Card -->
            <div
                class="flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-transparent dark:border-primary/15 dark:hover:border-primary">

              <div class="p-4 md:p-6">
                <div class="flex justify-between">
                  <div class="flex items-center gap-x-3 mb-5">
                    <NuxtImg :src="list[2].avatar"
                             class="inline-block size-9 rounded-full"
                    />
                    <div class="grow">
                      <p class="font-semibold text-gray-800 dark:text-white">{{ list[2].name }}</p>
                    </div>
                  </div>
                </div>
                <p class="text-start leading-7 text-gray-600 dark:text-neutral-400">

                  {{ list[2].comment }}
                </p>
              </div>
            </div>
            <!-- End Card -->

          </div>
          <!-- End Col -->

          <!-- Col -->
          <div class="space-y-4 xl:space-y-6">
            <!-- Card -->
            <div
                class="flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-transparent dark:border-primary/15 dark:hover:border-primary">

              <div class="p-4 md:p-6">
                <div class="flex justify-between">
                  <div class="flex items-center gap-x-3 mb-5">
                    <NuxtImg :src="list[5].avatar"
                             class="inline-block size-9 rounded-full"
                    />
                    <div class="grow">
                      <p class="font-semibold text-gray-800 dark:text-white">{{ list[5].name }}</p>

                    </div>
                  </div>

                </div>
                <p class="text-start leading-7 text-gray-600 dark:text-neutral-400">

                  {{ list[5].comment }}
                </p>
              </div>
            </div>
            <!-- End Card -->

            <!-- Card -->
            <div
                class="flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-transparent dark:border-primary/15 dark:hover:border-primary">

              <div class="p-4 md:p-6">
                <div class="flex justify-between">
                  <div class="flex items-center gap-x-3 mb-5">
                    <NuxtImg :src="list[13].avatar"
                             class="inline-block size-9 rounded-full"
                    />
                    <div class="grow">
                      <p class="font-semibold text-gray-800 dark:text-white">{{ list[13].name }}</p>

                    </div>
                  </div>

                </div>
                <p class="text-start leading-7 text-gray-600 dark:text-neutral-400">

                  {{ list[13].comment }}
                </p>
              </div>
            </div>
            <!-- End Card -->

            <!-- Card -->
            <div
                class="flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-transparent dark:border-primary/15 dark:hover:border-primary">

              <div class="p-4 md:p-6">
                <div class="flex justify-between">
                  <div class="flex items-center gap-x-3 mb-5">
                    <NuxtImg :src="list[7].avatar"
                             class="inline-block size-9 rounded-full"
                    />
                    <div class="grow">
                      <p class="font-semibold text-gray-800 dark:text-white">{{ list[7].name }}</p>

                    </div>
                  </div>

                </div>
                <p class="text-start leading-7 text-gray-600 dark:text-neutral-400">

                  {{ list[7].comment }}
                </p>
              </div>
            </div>
            <!-- End Card -->

            <!-- Card -->
            <div
                class="flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-transparent dark:border-primary/15 dark:hover:border-primary">

              <div class="p-4 md:p-6">
                <div class="flex justify-between">
                  <div class="flex items-center gap-x-3 mb-5">
                    <NuxtImg :src="list[8].avatar"
                             class="inline-block size-9 rounded-full"
                    />
                    <div class="grow">
                      <p class="font-semibold text-gray-800 dark:text-white">{{ list[8].name }}</p>

                    </div>
                  </div>
                </div>
                <p class="text-start leading-7 text-gray-600 dark:text-neutral-400">

                  {{ list[8].comment }}
                </p>
              </div>
            </div>
            <!-- End Card -->

            <div class="hidden sm:block xl:hidden">
              <!-- Card -->
              <div
                  class="flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-transparent dark:border-primary/15 dark:hover:border-primary">

                <div class="p-4 md:p-6">
                  <div class="flex justify-between">
                    <div class="flex items-center gap-x-3 mb-5">
                      <NuxtImg :src="list[9].avatar"
                               class="inline-block size-9 rounded-full"
                      />
                      <div class="grow">
                        <p class="font-semibold text-gray-800 dark:text-white">{{ list[9].name }}</p>

                      </div>
                    </div>
                  </div>
                  <p class="text-start leading-7 text-gray-600 dark:text-neutral-400">

                    {{ list[9].comment }}
                  </p>
                </div>
              </div>
              <!-- End Card -->
            </div>

            <div class="hidden sm:block xl:hidden">
              <!-- Card -->
              <div
                  class="flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-transparent dark:border-primary/15 dark:hover:border-primary">

                <div class="p-4 md:p-6">
                  <div class="flex justify-between">
                    <div class="flex items-center gap-x-3 mb-5">
                      <NuxtImg :src="list[10].avatar"
                               class="inline-block size-9 rounded-full"
                      />
                      <div class="grow">
                        <p class="font-semibold text-gray-800 dark:text-white">{{ list[10].name }}</p>

                      </div>
                    </div>
                  </div>
                  <p class="text-start leading-7 text-gray-600 dark:text-neutral-400">

                    {{ list[10].comment }}
                  </p>
                </div>
              </div>
              <!-- End Card -->
            </div>
          </div>
          <!-- End Col -->

          <!-- Col -->
          <div class="space-y-4 xl:space-y-6 sm:hidden xl:block">
            <!-- Card -->
            <div
                class="flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-transparent dark:border-primary/15 dark:hover:border-primary">

              <div class="p-4 md:p-6">
                <div class="flex justify-between">
                  <div class="flex items-center gap-x-3 mb-5">
                    <NuxtImg :src="list[11].avatar"
                             class="inline-block size-9 rounded-full"
                    />
                    <div class="grow">
                      <p class="font-semibold text-gray-800 dark:text-white">{{ list[11].name }}</p>

                    </div>
                  </div>
                </div>
                <p class="text-start leading-7 text-gray-600 dark:text-neutral-400">

                  {{ list[11].comment }}
                </p>
              </div>
            </div>
            <!-- End Card -->

            <!-- Card -->
            <div
                class="flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-transparent dark:border-primary/15 dark:hover:border-primary">

              <div class="p-4 md:p-6">
                <div class="flex justify-between">
                  <div class="flex items-center gap-x-3 mb-5">
                    <NuxtImg :src="list[12].avatar"
                             class="inline-block size-9 rounded-full"
                    />
                    <div class="grow">
                      <p class="font-semibold text-gray-800 dark:text-white">{{ list[12].name }}</p>

                    </div>
                  </div>

                </div>
                <p class="text-start leading-7 text-gray-600 dark:text-neutral-400">

                  {{ list[12].comment }}
                </p>
              </div>
            </div>
            <!-- End Card -->

            <!-- Card -->
            <div
                class="flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-transparent dark:border-primary/15 dark:hover:border-primary">

              <div class="p-4 md:p-6">
                <div class="flex justify-between">
                  <div class="flex items-center gap-x-3 mb-5">
                    <NuxtImg :src="list[13].avatar"
                             class="inline-block size-9 rounded-full"
                    />
                    <div class="grow">
                      <p class="font-semibold text-gray-800 dark:text-white">{{ list[13].name }}</p>

                    </div>
                  </div>
                </div>
                <p class="text-start leading-7 text-gray-600 dark:text-neutral-400">
                  {{ list[13].comment }}
                </p>
              </div>
            </div>
            <!-- End Card -->

            <!-- Card -->
            <div
                class="flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-transparent dark:border-primary/15 dark:hover:border-primary">

              <div class="p-4 md:p-6">
                <div class="flex justify-between">
                  <div class="flex items-center gap-x-3 mb-5">
                    <NuxtImg :src="list[14].avatar"
                             class="inline-block size-9 rounded-full"
                    />
                    <div class="grow">
                      <p class="font-semibold text-gray-800 dark:text-white">{{ list[14].name }}</p>
                    </div>
                  </div>
                </div>
                <p class="text-start leading-7 text-gray-600 dark:text-neutral-400">

                  {{ list[14].comment }}
                </p>
              </div>
            </div>
            <!-- End Card -->
          </div>
          <!-- End Col -->
        </div>
        <!-- End Grid -->
      </div>


    </div>
    <!--    </div>-->
  </div>
</template>

<script setup lang="ts">
const host = 'https://sikaowa.co'
const list = [{
  name: '文浩鸭4032',
  avatar: 'https://sikaowa.co/images/wenhaoya.png',
  comment: '“每一个图都值得普通人花一天时间去思考，感谢作者。”\n',
  like: 80
}, {
  name: '奚声',
  avatar: 'https://sikaowa.co/images/xisheng.png',
  comment: '“希望自己每隔一段时间都能重新想起这个视频，不忘初衷，坚持专注，走出舒适区。”',
  like: 12
}, {
  name: '知之心理咨询',
  avatar: 'https://sikaowa.co/images/zhixin.png',
  comment: '“这个就有点高级了，我得掰着脚趾头好好悟一悟。[捂脸]”',
  like: 10
}, {
  name: '冰冰-Ally',
  avatar: 'https://sikaowa.co/images/bingbing.png',
  comment: '“你的视频太励志了，发的内容通俗易懂，简单易看懂，而且不乏味！你做到了！”',
  like: 25
}, {
  name: 'bictlo',
  avatar: 'https://sikaowa.co/images/bictlo.png',
  comment: '“上了高三后成绩一直不好，这可能就是中等生的痛，因为曾经发过光，很不满意现在的自己，但是怎么都回不到以前的排名，很难过，很无力，无数次想要放弃，但是又不甘心，到现在都对未来感到迷茫[叹气]，感觉看完视频后好像又有了力量，不知道能够支撑多久”',
  like: 88
}, {
  name: '曌',
  avatar: '/avatars/zhao.jpeg',
  comment: '看了作者的视频，每次都会受益匪浅，感觉很形象，很具体化，不是那么呆呆板板的文字[爱心][爱心][爱心]',
  like: 5,
}, {
  name: '0.0',
  avatar: '/avatars/0-0.jpeg',
  comment: '每次看到你的作品都感觉自己的人生并非无可救药[拥抱][拥抱][拥抱]，希望这样的希望和期盼可以一直持续下去',
  like: 15
}, {
  name: '卷无需多严',
  avatar: '/avatars/juan.jpeg',
  comment: '蛙蛙什么时候把这些内容整理成一本实体书哇，我一定会买！在脱离手机的时间里翻一翻又是全新的自己更深刻的价值观[爱心][拥抱]',
  like: 55
}, {
  name: '低姿匍匐向前',
  avatar: '/avatars/pufu.png',
  comment: '这一段话深深的刺激到我，我反复看了好多遍并读了好多遍仿佛要刻印在我脑子里，不知道为什么我看这几段文字常常眼含泪水，触直心灵的破碎，很喜欢这段文字！向优秀的思考蛙学习如同人生路上指引者[强]',
  like: 35,
}, {
  name: '北觅2462',
  avatar: '/avatars/beimi2462.png',
  comment: '从你这里我学会了逆向思维定式',
  like: 24,
}, {
  name: '小王今日心情ao',
  avatar: '/avatars/xiaowang.png',
  comment: '很喜欢你的视频 感觉很高级 以一种形象化图像呈现',
  like: 10
}, {
  name: '我是杰杰杰杰杰',
  avatar: '/avatars/jiejie.png',
  comment: '非常喜欢博主的内容[强]让一切简单又深刻。',
  like: 50
}, {
  name: 'Brad',
  avatar: '/avatars/brad.jpeg',
  comment: '很棒的频道 视频制作的很精致 果断订阅',
  like: 16
}, {
  name: '月之七面',
  avatar: '/avatars/moon7.jpeg',
  comment: '做的好好！！每次看到都想感叹一次！',
  like: 12
}, {
  name: '宁晧网',
  avatar: '/avatars/ninghao.jpeg',
  comment: '这个视频做得厉害，可以录个教程啊。[捂脸]',
  like: 8,
}]
</script>
<style>
.dark .dark-bg-radial-gradient {
  background-image: radial-gradient(closest-side, rgba(16, 87, 96, 0.4), rgba(19, 95, 104, 0.1), transparent) !important;
}
</style>