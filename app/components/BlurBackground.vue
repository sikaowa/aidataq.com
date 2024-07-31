<template>
  <div
    :class="isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'"
    class="transform duration-200 z-10 fixed inset-0 w-full h-full bg-black/20 backdrop-blur-sm"
  ></div>
</template>

<script lang="ts" setup>

  defineProps<{
    isActive: boolean
  }>()
</script>