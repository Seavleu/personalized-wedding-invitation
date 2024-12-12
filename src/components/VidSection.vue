<script lang="ts">
import { defineComponent, ref } from "vue"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default defineComponent({
  name: "VidSection",
  emits: ["pause-background-audio", "resume-background-audio"],
  setup(_, { emit }) {
    const isFullScreen = ref(false)
    const videoRef = ref<HTMLVideoElement | null>(null)
    const isVideoPlaying = ref(false)

    const toggleFullScreen = () => {
      isFullScreen.value = !isFullScreen.value

      if (isFullScreen.value) {
        emit("pause-background-audio")
        videoRef.value?.play()
        videoRef.value!.muted = false
      } else {
        emit("resume-background-audio")
        videoRef.value?.pause()
        videoRef.value!.muted = true
      }
    }

    const handleVideoPlay = () => {
      emit("pause-background-audio")
    }

    const handleVideoPause = () => {
      emit("resume-background-audio")
    }

    const togglePlay = () => {
      if (isVideoPlaying.value) {
        videoRef.value?.pause();
      } else {
        videoRef.value?.play();
      }
      isVideoPlaying.value = !isVideoPlaying.value;
    }

    return {
      isFullScreen,
      videoRef,
      toggleFullScreen,
      handleVideoPlay,
      handleVideoPause,
      togglePlay,
      isVideoPlaying,
    }
  },
})
</script>

<template>
  <section class="vid-section">
    <h2 class="title">ទស្សនាដោយមេត្រីភាព</h2>
    <div class="con" :class="{ fullscreen: isFullScreen }">
      <video ref="videoRef" class="vid" muted playsinline @click="togglePlay">
        <source
          src="https://cdn.docsie.io/workspace_1Uj8SKn53qXCQCE3L/doc_dfiX2csAgpT6BMmbd/file_WLymMWKTm9LIJ5M8p/videocompressed02_5d14cd9b-db19-edc8-5411-8008413aa6df.mp4"
          type="video/mp4" />
        <div class="play-overlay" v-if="!isVideoPlaying">
          <font-awesome-icon icon="fa-play" style="color: #fff; font-size: 24px;" />
        </div>
      </video>
      <!-- <video
        ref="videoRef"
        class="vid"
        autoplay
        loop
        muted
        playsinline
        @click="toggleFullScreen"
        @play="handleVideoPlay"
        @pause="handleVideoPause"
      >
        <source src="https://cdn.docsie.io/workspace_1Uj8SKn53qXCQCE3L/doc_dfiX2csAgpT6BMmbd/file_WLymMWKTm9LIJ5M8p/videocompressed02_5d14cd9b-db19-edc8-5411-8008413aa6df.mp4" type="video/mp4" />
      </video> -->
    </div>
  </section>
</template>

<style lang="scss" scoped>
.vid-section {
  padding: 80px 15px;
  text-align: center;
  overflow: hidden; 
  height: 60vh;

  .title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #5b7639;
    animation: fadeInDown 1s ease-out;

    @media (max-width: 768px) {
      font-size: 24px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  .con {
    position: relative;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    animation: zoomIn 1.2s ease-in-out;

    .vid {
      width: 100%;
      height: auto;
      border-radius: 15px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.5s ease, box-shadow 0.5s ease;
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
      }

      @media (max-width: 768px) {
        border-radius: 10px;
      }

      @media (max-width: 480px) {
        border-radius: 10px;
      }
    }

    &.fullscreen {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.9);
      z-index: 999;
      display: flex;
      justify-content: center;
      align-items: center;

      .vid {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: auto;
        max-width: 90vw;
        max-height: 90vh;
        border-radius: 0;
        animation: zoomIn 0.5s ease-in-out;
      }
    }
  }

  /* Animations */
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }
}
</style>
