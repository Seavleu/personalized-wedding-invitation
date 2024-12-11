<template>
  <section class="vid-section">
    <h2 class="title">ទស្សនាដោយមេត្រីភាព</h2>
    <div class="con" :class="{ fullscreen: isFullScreen }">
      <video
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
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "VidSection",
  emits: ["pause-background-audio", "resume-background-audio"],
  setup(_, { emit }) {
    const isFullScreen = ref(false);
    const videoRef = ref<HTMLVideoElement | null>(null);

    const toggleFullScreen = () => {
      isFullScreen.value = !isFullScreen.value;

      if (isFullScreen.value) {
        emit("pause-background-audio");
        videoRef.value?.play();
        videoRef.value!.muted = false;
      } else {
        emit("resume-background-audio");
        videoRef.value?.pause();
        videoRef.value!.muted = true;
      }
    };

    const handleVideoPlay = () => {
      emit("pause-background-audio");
    };

    const handleVideoPause = () => {
      emit("resume-background-audio");
    };

    return {
      isFullScreen,
      videoRef,
      toggleFullScreen,
      handleVideoPlay,
      handleVideoPause,
    };
  },
});
</script>

<style lang="scss" scoped>
.vid-section {
  padding: 40px 15px;
  text-align: center;
  overflow: hidden;
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
      width: 350px;
      height: auto;
      max-height: 600px;
      border-radius: 15px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.5s ease, box-shadow 0.5s ease;
      cursor: pointer;

      &:hover {
        transform: scale(1.05) rotate(1deg);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
      }

      @media (max-width: 768px) {
        border-radius: 10px;
        max-height: 400px;
      }

      @media (max-width: 480px) {
        border-radius: 10px;
        max-height: 300px;
      }
    }

    &.fullscreen {
      position: fixed;
      top: 50%;
      left: 50%;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.9);
      z-index: 999;
      display: flex;
      justify-content: center;
      align-items: center;

      .vid {
        width: 90vw;
        height: auto;
        max-height: 90vh;
        transform: none;
        box-shadow: none;
        border-radius: 0;
        animation: zoomIn 0.5s ease-in-out;
      }
    }
  }

  /* Keyframes for Animations */
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

  @keyframes pulse {
    0% {
      transform: scale(0.9);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.8;
    }
    100% {
      transform: scale(0.9);
      opacity: 1;
    }
  }
}
</style>
