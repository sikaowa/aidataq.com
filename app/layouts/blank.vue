<template>
  <div>
    <HomeNav />
<!--    <MainNav />-->
    <slot />
<!--    <MainFooter />-->
    <HomeFooter />
  </div>
</template>

<script lang="ts" setup>

import HomeNav from "~/components/HomeNav.vue";
</script>
