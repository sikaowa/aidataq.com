<template>
  <footer class="justify-self-end pt-16 pb-8 lg:pt-24 lg:pb-10">

    <div class="mx-auto max-w-screen-xl px-6 lg:px-0">
      <div class="grid gap-12 lg:grid-cols-6 lg:gap-18">
        <div class="col-span-2">
          <NuxtLink class="flex mb-6" to="/">
            <NuxtImg src="/logo.png" class="w-1/2"/>
            <!--            <span-->
            <!--                style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span-->
            <!--                style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img-->
            <!--                alt="" aria-hidden="true"-->
            <!--                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2733%27/%3e"-->
            <!--                style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img-->
            <!--                alt="Flowbite Logo" src="/icon.png" decoding="async" data-nimg="intrinsic"-->
            <!--                style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"></span><span-->
            <!--              class="self-center ml-3 text-2xl font-semibold text-gray-900 dark:text-white">Flowbite</span>-->
          </NuxtLink>
          <p class="text-gray-600 dark:text-gray-400">
            数话科技通过打造人人可用的AI数据洞察引擎DataGPT，致力于让数据触手可及，成为真正的生产力和创造力。
          </p>
        </div>
        <div>
          <h3 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">产品功能</h3>
          <ul>
            <li class="mb-4">
              <a href=""
                 class="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">
                产品功能
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
            活动资讯
          </h3>
          <ul>
            <li class="mb-4">
              <a
                  class="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  href="">活动中心</a>
            </li>
            <li class="mb-4">
              <a
                  class="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  href="">内容中心</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">联系我们</h3>
          <ul>
            <li class="mb-4"><a href="" rel="noreferrer nofollow"
                                class="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">
              北京北京市朝阳区
            </a>
            </li>
            <li class="mb-4"><a href="" rel="noreferrer nofollow"
                                class="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">
              上海市徐汇区
            </a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="my-8 border-gray-200 dark:border-gray-700 lg:my-12">
      <span class="block font-normal text-center text-gray-600 dark:text-gray-400">
        © 2024 数话科技™ 京ICP备10241024</span>
    </div>
  </footer>
</template>
<script setup lang="ts">
</script>