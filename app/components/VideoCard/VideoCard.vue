<script setup lang="ts">
  const video = ref<HTMLVideoElement | null>(null);
  const videoElement = ref(null);
  const paused = ref(null);
  defineProps<{
    videoUrl: string
  }>()
  const playVideo = () => {
    if (video.value) {
      video.value.play();
    }
  };
  const stopVideo = () => {
    if (video.value) {

      video.value.pause();
      video.value.currentTime = 0;
    }
  };
</script>

<template>
  <video
    ref="video"
    :src="videoUrl"
    @mouseover="playVideo"
    @mouseleave="stopVideo"
    muted
    autoplay
  />

</template>

<style scoped>

</style>