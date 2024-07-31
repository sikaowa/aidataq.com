<template>

  <div class="max-w-[85rem] lg:pt-10 pb-16 sm:pb-28 px-4 sm:px-6 lg:px-8 mx-auto">
    <div class="max-w-4xl mx-auto">
      <!-- Heading -->
      <div class="max-w-2xl mx-auto text-center mb-6 lg:mb-12">
        <h2 class="text-2xl font-bold lg:text-3xl text-gray-800 dark:text-neutral-200">
          常见问题
        </h2>
        <p class="text-sm sm:text-base text-gray-600 mt-2 dark:text-neutral-400">
          关于课程的常见问题
        </p>
      </div>
      <!-- End Heading -->

      <!-- List -->
      <div class="space-y-10">
<!--        <UiAccordion type="single" class="w-full" collapsible :default-value="defaultValue">-->
        <UiAccordion :default-value="defaultValue" type="single" :items="accordionItems">
          <template v-for="(i, k) in accordionItems" :key="k">
                  <UiAccordionItem v-slot="{ open }" class="border-b-0" :value="i.value">
                    <UiAccordionHeader>
                      <UiAccordionTrigger
                          :class="[open ? 'bg-muted underline hover:!underline text-primary' : 'bg-muted/50 no-underline']"
                          class="mb-2 rounded-md px-3 text-left text-sm underline-offset-2 hover:bg-muted hover:no-underline hover:text-primary"
                      >
                        {{ i.title }}
                        <template #icon>
                          <Icon v-if="!open" name="lucide:plus" class="size-4 shrink-0" />
                          <Icon v-else name="lucide:minus" class="size-4 shrink-0" />
                        </template>
                      </UiAccordionTrigger>
                    </UiAccordionHeader>
                    <UiAccordionContent>
                      <div class="px-3 py-2 leading-8 " v-html="i.content" />
                    </UiAccordionContent>
                  </UiAccordionItem>
            </template>
        </UiAccordion>
        <!-- List -->
        <!-- End List -->


      </div>
      <!-- End List -->

      <!-- Card -->
      <div class="flex justify-center mt-12 md:mt-16">
        <div class="relative inline-flex">
          <div class="grid gap-5 sm:flex sm:items-center">
            <span class="text-gray-600 dark:text-neutral-400">仍有疑问?</span>
            <a  type="button" class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                href="mailto:sikaowa@qq.com">
              <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
              </svg>
              联系我们
            </a>
          </div>

          <svg class="absolute top-full end-0 -me-12" width="95" height="55" viewBox="0 0 95 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.3484 17.7278L94.0311 9.15294C94.22 9.12034 94.3349 9.35417 94.1936 9.48377L70.849 30.9044C70.8348 30.9174 70.8201 30.9277 70.8025 30.9355C68.8182 31.8155 60.7307 28.5256 56.7228 26.6755C56.6147 26.6255 56.4904 26.6862 56.4588 26.801C55.4512 30.4622 54.1873 33.8785 53.6171 35.2901C53.5831 35.3744 53.4923 35.4249 53.413 35.3804C52.1218 34.6544 51.9767 27.6172 52.0736 23.9118C52.0762 23.8134 52.0052 23.7319 51.908 23.7163C48.8902 23.2336 44.6436 20.4303 42.8682 19.0642" stroke="currentColor" class="stroke-gray-600 dark:stroke-neutral-400"></path>
            <path d="M57.042 26.1479C62.1467 23.7143 75.0605 17.619 85.8781 12.7074" stroke="currentColor" class="stroke-gray-600 dark:stroke-neutral-400"></path>
            <path d="M53.1318 35.4342L62.6624 29.3248" stroke="currentColor" class="stroke-gray-600 dark:stroke-neutral-400"></path>
            <path d="M55.3313 21.5049L68.5275 16.8618" stroke="currentColor" class="stroke-gray-600 dark:stroke-neutral-400"></path>
            <path d="M47.9354 43.6444C43.0885 46.2633 29.857 49.0618 15.7055 39.3048" stroke="currentColor" class="stroke-gray-600 dark:stroke-neutral-400"></path>
            <path d="M40.7571 37.6396C32.6774 36.4332 13.4793 29.2187 1.32465 10.0121" stroke="currentColor" class="stroke-gray-600 dark:stroke-neutral-400"></path>
          </svg>
        </div>
      </div>
      <!-- End Card -->
    </div>
  </div>
</template>
<script setup lang="ts">
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const defaultValue = 'item-1'

const accordionItems = [
  { value: 'item-1', title: '我需要有设计的基础吗?', content: '不需要，您不需要有软件和设计的使用基础，只需要在课程中多加练习即可。' },
  { value: 'item-2', title: '我有哪些付款方式?', content: '您可以使用微信、支付宝、企业汇款' },
  { value: 'item-3', title: '课程中所用的软件需要付费吗?', content: '不需要，课程中应用的所有软件都是免费的。' },
  { value: 'item-4', title: '课程结束后，我能够做出视觉内容吗？', content: '是的，您将在实践中学习，整个课程中都有资源和练习，此外，在课程的最后还提供相应的模板和设计资源，开箱即用！' },
  { value: 'item-5', title: '如果我不喜欢课程，可以退款吗?', content: '是的，课程在支付后的7天内都可以进行申请退款，但如果在过程中已申请了设计资源和Figma工作空间的使用，将不予以退款！因为这些资源本身属于课程的核心付费内容。' },
]
</script>
