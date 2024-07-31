  <template>
    <div class="relative bg-blue-50 w-full h-full py-20 flex justify-center items-center" id="cta" >
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Title -->
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-2xl leading-loose font-bold lg:text-3xl lg:leading-tight dark:text-white text-blue-900">
            立即体验对话式的数据分析，全面释放数据价值
          </h2>
          <div class="mt-6  lg:inline-flex  flex-wrap justify-center gap-2">
            <div class=" grid grid-cols-1 gap-3 md:flex lg:mt-10">
              <UiButton
                  size="lg"
                  class="items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-6  whitespace-pre md:flex group relative  gap-1 overflow-hidden text-sm font-semibold tracking-tighter transform-gpu rounded-sm ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
              >
                <span class="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-24 dark:bg-black"></span>
               了解更多
              </UiButton>
              <UiButton size="lg" variant="outline"
                        class="items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  text-primary hover:text-white  border-blue-500 shadow hover:bg-primary/90 h-10 px-6  whitespace-pre md:flex group relative  gap-1 overflow-hidden text-sm font-semibold tracking-tighter transform-gpu rounded-sm ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
              >
                <span class="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-24 dark:bg-black"></span>
                立即体验
              </UiButton>
              <!--            <UiButton size="lg">Sign up</UiButton>-->
            </div>
          </div>
        </div>
        <!-- End Title -->
      </div>
    </div>
  </template>

  <script lang="ts" setup></script>

