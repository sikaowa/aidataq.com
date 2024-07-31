<template>
  <div
      id="pricing"
      class="relative overflow-hidden before:absolute before:top-1/2 before:start-1/2 before:bg-no-repeat before:bg-center before:size-full before:-z-[0] before:transform before:-translate-y-1/2 before:-translate-x-1/2 before:bg-[url('~/assets/svg/component/hero-gradient.svg')]">
    <!-- Hero -->
    <div class="max-w-3xl mx-auto relative text-center px-4 sm:px-6 lg:px-8 pt-10 lg:pt-16 space-y-5">
      <h5 class="text-primary text-sm">课程定价</h5>
      <h2 class="text-2xl font-bold lg:text-3xl text-gray-800 dark:text-neutral-200">
        准备好行动了吗？
      </h2>
      <p class="mt-4 sm:text-base text-gray-600 dark:text-neutral-400">
        准备好行动了吗？现在就注册课程，开始学习《价值可视化》
      </p>
    </div>
    <!-- End Hero -->

    <div class="w-[450px] py-16 md:pb-20 px-4 sm:px-6 lg:px-8 mx-auto">
      <!-- START:PRICING_CARD_PLACEHOLDER -->
      <!-- Grid -->
      <div class="flex flex-col justify-center items-center ">
        <!-- Card -->
        <div class=" w-full lg:hw-1/3 flex flex-col rounded-2xl p-0.5 relative z-[1] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-t before:from-gray-200 before:hover:from-primary before:-z-[1] before:transition-all before:opacity-0 before:hover:opacity-100 after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-t after:from-gray-200 after:-z-[1] after:transition-all after:opacity-100 after:hover:opacity-0 dark:before:from-neutral-700 dark:before:hover:from-cyan-500 dark:after:from-neutral-700">
          <div class="min-h-full p-6 md:p-7 bg-white rounded-[14px] dark:bg-neutral-900">
            <div class="flex justify-between items-center mb-3 sm:mb-5">
              <h3 class="font-semibold text-gray-800 dark:text-neutral-200">
                <span class="bg-clip-text bg-gradient-to-tl from- to-cyan-400 text-transparent dark:from-blue-500 dark:to-cyan-500">
                  价值可视化基础课
                </span>
              </h3>
              <!--              <svg class="flex-shrink-0 w-8 h-8 text-gray-400 dark:text-neutral-600" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">-->
              <!--                <path d="M41.1471 33.5C43.2804 30.2182 44.5168 26.3186 44.5168 22.1351C44.5168 10.4625 34.891 1 23.0168 1C11.1427 1 1.51685 10.4625 1.51685 22.1351C1.51685 26.3186 2.7533 30.2182 4.88656 33.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>-->
              <!--                <circle cx="23.0168" cy="19.5" r="6.5" stroke="currentColor" stroke-width="2"></circle>-->
              <!--                <path d="M9.29755 36.8698L9.29762 36.8698L9.30328 36.8581L9.83793 35.752L9.83797 35.7521L9.84174 35.7441C10.9246 33.4526 13.2107 32 15.7455 32H29.6106C32.072 32 34.3311 33.4164 35.45 35.6515L36.0077 36.8026C36.2359 37.3422 36.1887 37.9148 35.8945 38.3327C30.4486 45.6584 20.1377 47.1699 12.8126 41.7562C11.5089 40.7856 10.3724 39.6499 9.4009 38.3468C9.1039 37.8864 9.07552 37.3142 9.29755 36.8698Z" stroke="currentColor" stroke-width="2"></path>-->
              <!--              </svg>-->
            </div>

            <div class="text-gray-800 dark:text-neutral-200 mb-2">
              <h4 class="inline-flex text-5xl font-semibold">
                <div class="inline-flex flex-wrap items-center gap-3">
                  <div class="inline-flex flex-wrap items-center pe-2 border-e border-dashed border-gray-300 dark:border-gray-600 text-primary">
                    <span class="text-2xl self-start me-1">¥</span>99
                  </div>

                  <span class="grid">
                <span class="text-xs leading-tight text-gray-800 dark:text-neutral-200">
<!--                  Limited time only-->
                  课程早鸟价限时
                </span>
                <s class="text-2xl leading-6 font-normal text-gray-400 dark:text-neutral-500">
                  <span>¥</span><span>199</span>
                </s>
              </span>
                </div>
              </h4>
            </div>

            <div class="mb-5">
              <p class="sm:min-h-[40px] text-sm text-gray-700 dark:text-neutral-300">
                <!--                Perfect for Solo Developers with-->
                <!--                unlimited personal and commercial-->
                <!--                projects.-->
                如果您发现课程不适合您，提供7天退款保证。
              </p>
            </div>

            <a class="py-3 px-4 w-full inline-flex justify-center items-center gap-x-1 text-sm font-semibold rounded-lg border  border-primary bg-primary dark:text-neutral-950  text-white hover:border-primary disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-blue-700"
            >
              现在入学即可获得
            </a>


            <ul class="mt-6 space-y-4">
              <li class="flex space-x-4">
                <svg class="flex-shrink-0 mt-0.5 h-4 w-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span class="text-sm text-gray-800 dark:text-neutral-200">
                  汇集所有价值可视化的基础知识
          </span>
              </li>

              <li class="flex space-x-4">
                <svg class="flex-shrink-0 mt-0.5 h-4 w-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span class="text-sm text-gray-800 dark:text-neutral-200">
                  20多节课程、文章、实例等
          </span>
              </li>

              <li class="flex space-x-4">
                <svg class="flex-shrink-0 mt-0.5 h-4 w-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span class="text-sm text-gray-800 dark:text-neutral-200">
                  离线下载素材文件和课程视频
          </span>
              </li>

              <li class="flex space-x-4">
                <svg class="flex-shrink-0 mt-0.5 h-4 w-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span class="text-sm text-gray-800 dark:text-neutral-200">
                  一次付费，免费获得未来所有更新
          </span>
              </li>

              <li class="flex space-x-4">
                <svg class="flex-shrink-0 mt-0.5 h-4 w-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <!--                <svg class="flex-shrink-0 mt-0.5 h-4 w-4 text-red-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
                <!--                  <path d="M18 6 6 18"></path>-->
                <!--                  <path d="m6 6 12 12"></path>-->
                <!--                </svg>-->
                <span class="text-sm text-gray-800 dark:text-neutral-200">
                  我们提供7天退款保证

            <span class="hs-tooltip inline-block ms-0.5 align-middle -mt-0.5">
              <svg class="hs-tooltip-toggle flex-shrink-0 size-3.5 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <path d="M12 17h.01"></path>
              </svg>

              <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 w-60 py-1.5 px-2.5  text-xs text-neutral-600 rounded" role="tooltip" data-popper-placement="top" data-popper-reference-hidden="" data-popper-escaped="" style="position: fixed; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(813.5px, 101px, 0px);">
                如已申请素材下载、Figma工作空间使用授权的学员，将不提供退款！
              </span>
            </span>
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
      <div class="mt-6 md:mt-10 text-center">
        <p class="mb-5 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">
          <!--          Standard local taxes and VAT may apply, following the laws of your country.-->
        </p>

        <div class="flex flex-wrap justify-center items-center gap-2">
          <svg class="flex-shrink-0 size-5 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg"
               width="24" height="24"
               viewBox="0 0 24 24"
               fill="none" stroke="currentColor"
               stroke-width="1.5"
               stroke-linecap="round"
               stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <path d="M12 17h.01"></path>
          </svg>
          <h5 class="text-sm font-medium text-neutral-600 dark:text-neutral-300">
            如已申请素材下载、Figma工作空间使用授权的学员，将不提供退款！
          </h5>
        </div>
      </div>
      <!-- End Footer -->
    </div>
  </div>
</template>
<script setup lang="ts">
</script>

<style scoped lang="scss">
//a.primary-cta {
//  color: var(--primary-text-color);
//  background-color: var(--tertiary-color);
//}
//a[class*='primary'] {
//  background: radial-gradient(50% 100% at top left, rgba(var(--primary-rgb), .72), rgba(var(--tertiary-rgb), 0)), radial-gradient(40% 100% at 60% 100%, rgba(var(--primary-rgb), .72), rgba(var(--tertiary-rgb), 0)), radial-gradient(50% 100% at top right, rgba(var(--primary-rgb), .40), rgba(var(--tertiary-rgb), 0)), var(--tertiary-color);
//  transition: box-shadow 200ms ease-out;
//  box-shadow: 0 0 0 0 rgba(var(--primary-rgb), 0);
//}
</style>