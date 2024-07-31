<template>
  <UiContainer class="max-w-[85rem] mx-autoflex flex-col items-center justify-center py-16 ">
    <div
        class="relative overflow-hidden before:absolute before:top-1/2 before:start-1/2 before:bg-[url('~/assets/svg/component/hero-gradient.svg')] before:bg-no-repeat before:bg-center before:size-full before:-z-[1] before:transform before:-translate-y-1/2 before:-translate-x-1/2 dark:before:bg-[url('../../assets/svg/component-dark/hero-gradient.svg')]">
      <div class="pt-16">
        <!-- Title -->
        <div class="max-w-2xl mx-auto text-center mb-10">
          <h2 class="text-2xl font-bold lg:text-3xl lg:leading-tight dark:text-white">
            能快速落地的AI应用
          </h2>
          <p class="mt-1 text-gray-500 dark:text-neutral-400">
            用更智慧、更安全的AI应用助力企业全面释放数据价值
          </p>
        </div>
        <!-- End Title -->
      </div>

      <div class="max-w-6xl pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 mx-auto">
        <!-- START:PRICING_CARD_PLACEHOLDER -->
        <!-- Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
          <!-- Card -->
          <div
              class="flex flex-col rounded-2xl p-0.5 relative z-[1] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-t before:from-gray-200 before:hover:from-blue-400 before:-z-[1] before:transition-all before:opacity-0 before:hover:opacity-100 after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-t after:from-gray-200 after:-z-[1] after:transition-all after:opacity-100 after:hover:opacity-0 dark:before:from-neutral-700 dark:before:hover:from-purple-400 dark:after:from-neutral-700">
            <div class="min-h-full p-6 md:p-7 bg-white rounded-[14px] dark:bg-neutral-900">
              <div class="flex justify-between items-center mb-3 sm:mb-5">
                <h3 class="font-semibold text-gray-800 dark:text-neutral-200">
                  <span
                      class="bg-clip-text bg-gradient-to-tl from-blue-600 to-purple-400 text-transparent dark:from-blue-500 dark:to-purple-600">Pro</span>
                </h3>
                <svg class="flex-shrink-0 w-8 h-8 text-gray-400 dark:text-neutral-600" width="46" height="46"
                     viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M41.1471 33.5C43.2804 30.2182 44.5168 26.3186 44.5168 22.1351C44.5168 10.4625 34.891 1 23.0168 1C11.1427 1 1.51685 10.4625 1.51685 22.1351C1.51685 26.3186 2.7533 30.2182 4.88656 33.5"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                  <circle cx="23.0168" cy="19.5" r="6.5" stroke="currentColor" stroke-width="2"></circle>
                  <path
                      d="M9.29755 36.8698L9.29762 36.8698L9.30328 36.8581L9.83793 35.752L9.83797 35.7521L9.84174 35.7441C10.9246 33.4526 13.2107 32 15.7455 32H29.6106C32.072 32 34.3311 33.4164 35.45 35.6515L36.0077 36.8026C36.2359 37.3422 36.1887 37.9148 35.8945 38.3327C30.4486 45.6584 20.1377 47.1699 12.8126 41.7562C11.5089 40.7856 10.3724 39.6499 9.4009 38.3468C9.1039 37.8864 9.07552 37.3142 9.29755 36.8698Z"
                      stroke="currentColor" stroke-width="2"></path>
                </svg>
              </div>

              <div class="text-gray-800 dark:text-neutral-200 mb-2">
                <h4 class="inline-flex text-5xl font-semibold">
                  <div class="inline-flex flex-wrap items-center gap-3">
                    <div
                        class="inline-flex flex-wrap items-center pe-2  border-gray-300 dark:border-gray-600">
                    <span class="text-2xl self-start me-1">
                    简单智慧，人人随时能用
                    </span>
                    </div>
                  </div>
                </h4>
              </div>

              <div class="mb-5">
                <p class="sm:min-h-[40px] text-sm text-gray-700 dark:text-neutral-300">
                  无需专门学习，就能轻松洞察数据
                </p>
              </div>



              <UiButton
                  size="lg"
                  class="items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-6 w-full hidden whitespace-pre md:flex group relative  gap-1 overflow-hidden text-sm font-semibold tracking-tighter transform-gpu rounded-sm ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
              >
                <span class="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-24 dark:bg-black"></span>
                预约演示
              </UiButton>

              <ul class="mt-6 space-y-4">
                <li class="flex space-x-4">
                  <svg class="flex-shrink-0 mt-0.5 h-4 w-4 text-gray-500 dark:text-neutral-500"
                       xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span class="text-sm text-gray-800 dark:text-neutral-200">
                    业务人员自助分析不求人
          </span>
                </li>

                <li class="flex space-x-4">
                  <svg class="flex-shrink-0 mt-0.5 h-4 w-4 text-gray-500 dark:text-neutral-500"
                       xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span class="text-sm text-gray-800 dark:text-neutral-200">
                    全员、全场景随时洞察
          </span>
                </li>

                <li class="flex space-x-4">
                  <svg class="flex-shrink-0 mt-0.5 h-4 w-4 text-gray-500 dark:text-neutral-500"
                       xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span class="text-sm text-gray-800 dark:text-neutral-200">
                    从“人等数据”到“数据追人”
          </span>
                </li>

              </ul>
            </div>
          </div>
          <!-- End Card -->

          <!-- Card -->
          <div
              class="flex flex-col rounded-2xl p-0.5 relative z-[1] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-t before:from-gray-200 before:hover:from-blue-400 before:-z-[1] before:transition-all before:opacity-0 before:hover:opacity-100 after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-t after:from-gray-200 after:-z-[1] after:transition-all after:opacity-100 after:hover:opacity-0 dark:before:from-neutral-700 dark:before:hover:from-purple-400 dark:after:from-neutral-700">
            <div class="min-h-full p-6 md:p-7 bg-white rounded-[14px] dark:bg-neutral-900">
              <div class="flex justify-between items-center mb-3 sm:mb-5">
                <h3 class="font-semibold text-green-600">
                  Team
                </h3>
                <svg class="flex-shrink-0 w-8 h-8 text-gray-400 dark:text-neutral-600" width="46" height="46"
                     viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M41.1471 33.5C43.2804 30.2182 44.5168 26.3186 44.5168 22.1351C44.5168 10.4625 34.891 1 23.0168 1C11.1427 1 1.51685 10.4625 1.51685 22.1351C1.51685 26.3186 2.7533 30.2182 4.88656 33.5"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                  <path
                      d="M32.9165 26.9999C35.6591 26.9999 37.8825 24.7614 37.8825 21.9999C37.8825 19.5713 36.1628 17.5471 33.8825 17.0945"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                  <path
                      d="M13.146 26.9999C10.4034 26.9999 8.18 24.7614 8.18 21.9999C8.18 19.5713 9.89974 17.5471 12.18 17.0945"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                  <circle cx="23.0168" cy="19.5" r="6.5" stroke="currentColor" stroke-width="2"></circle>
                  <path
                      d="M9.29755 36.8698L9.29762 36.8698L9.30328 36.8581L9.83793 35.752L9.83797 35.7521L9.84174 35.7441C10.9246 33.4526 13.2107 32 15.7455 32H29.6106C32.072 32 34.3311 33.4164 35.45 35.6515L36.0077 36.8026C36.2359 37.3422 36.1887 37.9148 35.8945 38.3327C30.4486 45.6584 20.1377 47.1699 12.8126 41.7562C11.5089 40.7856 10.3724 39.6499 9.4009 38.3468C9.1039 37.8864 9.07552 37.3142 9.29755 36.8698Z"
                      stroke="currentColor" stroke-width="2"></path>
                </svg>
              </div>

              <div class="text-gray-800 dark:text-neutral-200 mb-2">
                <h4 class="inline-flex text-5xl font-semibold">
                  <span class="text-2xl align-top me-1">开箱即用，效果立竿见影</span>
                </h4>
              </div>

              <div class="mb-5">
                <p class="sm:min-h-[40px] text-sm text-gray-700 dark:text-neutral-300">
                  轻量化部署配置，价值立等可见
                </p>
              </div>

<!--              <a class="py-3 px-4 w-full inline-flex justify-center items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-500 dark:hover:bg-blue-900/50 dark:focus:bg-blue-900/50"-->
<!--                 href="https://preline.co/pro/checkout/7e9c0b89-dbc5-47b9-9a1f-3a5f4d21c6b2">-->
<!--                预约演示-->
<!--              </a>-->
              <UiButton
                  size="lg"
                  class="items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-6 w-full hidden whitespace-pre md:flex group relative  gap-1 overflow-hidden text-sm font-semibold tracking-tighter transform-gpu rounded-sm ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
              >
                <span class="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-24 dark:bg-black"></span>
                预约演示
              </UiButton>

              <ul class="mt-6 space-y-4">
                <li class="flex space-x-4">
                  <svg class="flex-shrink-0 mt-0.5 h-4 w-4 text-gray-500 dark:text-neutral-500"
                       xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span class="text-sm text-gray-800 dark:text-neutral-200">
                    快速部署，可视化配置
          </span>
                </li>

                <li class="flex space-x-4">
                  <svg class="flex-shrink-0 mt-0.5 h-4 w-4 text-gray-500 dark:text-neutral-500"
                       xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span class="text-sm text-gray-800 dark:text-neutral-200">
     AI自动建模，解放IT生产力
          </span>
                </li>

                <li class="flex space-x-4">
                  <svg class="flex-shrink-0 mt-0.5 h-4 w-4 text-gray-500 dark:text-neutral-500"
                       xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span class="text-sm text-gray-800 dark:text-neutral-200">
     一次配置，终身复用
          </span>
                </li>
              </ul>
            </div>
          </div>
          <!-- End Card -->

          <!-- Card -->
          <div
              class="flex flex-col rounded-2xl p-0.5 relative z-[1] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-t before:from-gray-200 before:hover:from-blue-400 before:-z-[1] before:transition-all before:opacity-0 before:hover:opacity-100 after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-t after:from-gray-200 after:-z-[1] after:transition-all after:opacity-100 after:hover:opacity-0 dark:before:from-neutral-700 dark:before:hover:from-purple-400 dark:after:from-neutral-700">
            <div class="min-h-full p-6 md:p-7 bg-white rounded-[14px] dark:bg-neutral-900">
              <div class="flex justify-between items-center mb-3 sm:mb-5">
                <h3 class="font-semibold text-blue-600 dark:text-blue-500">
                  Enterprise
                </h3>
                <svg class="flex-shrink-0 w-8 h-8 text-gray-400 dark:text-neutral-600" width="46" height="45"
                     viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M17.1634 31.4363C23.7206 33.5616 27.2514 35.1555 28.7645 33.5616C31.7909 30.3737 24.7294 26.1232 17.6678 24.5292C10.6063 22.9353 2.03152 25.0605 2.03152 29.3111C2.03152 33.5616 1.52713 36.7495 4.55351 37.8121C7.57988 38.8747 16.0637 41 21.703 41C29.7733 41 42.3272 35.1555 43.8964 27.7171C44.9052 22.9353 38.3481 25.0605 32.7997 30.3737"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                  <path d="M8 18.3659V3.5C8 3.22386 8.22386 3 8.5 3H36.5C36.7761 3 37 3.22386 37 3.5V21"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                  <path
                      d="M16.8823 4V9.5C16.8823 9.77614 17.1062 10 17.3823 10H26.3823C26.6585 10 26.8823 9.77614 26.8823 9.5V4"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
              </div>

              <div class="text-gray-800 dark:text-neutral-200 mb-2">
                <h4 class="inline-flex text-4xl leading-[1.33] font-semibold">
                  <span class="text-2xl align-top me-1">安全可信，企业级AI产品</span>
                </h4>
              </div>

              <div class="mb-5">
                <p class="sm:min-h-[40px] text-sm text-gray-700 dark:text-neutral-300">
                  数据结果准确、可信，保障企业级安全
                </p>
              </div>
              <UiButton
                  size="lg"
                  class="items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-6 w-full hidden whitespace-pre md:flex group relative  gap-1 overflow-hidden text-sm font-semibold tracking-tighter transform-gpu rounded-sm ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
              >
                <span class="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-24 dark:bg-black"></span>
                预约演示
              </UiButton>


              <ul class="mt-6 space-y-4">
                <li class="flex space-x-4">
                  <svg class="flex-shrink-0 mt-0.5 h-4 w-4 text-gray-500 dark:text-neutral-500"
                       xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span class="text-sm text-gray-800 dark:text-neutral-200">
                    精准模型分析数据，避免“幻觉”
          </span>
                </li>

                <li class="flex space-x-4">
                  <svg class="flex-shrink-0 mt-0.5 h-4 w-4 text-gray-500 dark:text-neutral-500"
                       xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span class="text-sm text-gray-800 dark:text-neutral-200">
                    多管齐下保障数据安全
          </span>
                </li>

                <li class="flex space-x-4">
                  <svg class="flex-shrink-0 mt-0.5 h-4 w-4 text-gray-500 dark:text-neutral-500"
                       xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span class="text-sm text-gray-800 dark:text-neutral-200">
                    信创产品，支持国产替代
          </span>
                </li>
              </ul>
            </div>
          </div>
          <!-- End Card -->
        </div>
        <!-- End Grid -->

        <!-- END:PRICING_CARD_PLACEHOLDER -->

        <!-- Footer -->
        <!--
        <div class="mt-6 md:mt-10 text-center">
          <p class="mb-5 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">
            Standard local taxes and VAT may apply, following the laws of your country.
          </p>

          <div class="flex flex-wrap justify-center items-center gap-2">
            <svg class="shrink-0 size-5 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                 stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <path d="M12 17h.01"></path>
            </svg>
            <h5 class="text-sm font-medium text-gray-800 dark:text-neutral-200">
              Have pricing or license questions?
            </h5>
            <button type="button"
                    class="inline-flex items-center gap-x-1 text-sm font-medium text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline dark:text-blue-500"
                    onclick="$crisp.push(['do', 'chat:open'])">
              Contact us
              <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                   fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>
        -->
        <!-- End Footer -->
      </div>
    </div>
  </UiContainer>
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