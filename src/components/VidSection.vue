<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "VidSection",
  emits: ["pause-background-audio", "resume-background-audio"],
  setup(_, { emit }) {
    const isFullScreen = ref(false);
    const videoRef = ref<HTMLVideoElement | null>(null);
    const isVideoPlaying = ref(false);
    const isSectionVisible = ref(false);

    const toggleFullScreen = () => {
      isFullScreen.value = !isFullScreen.value;

      if (isFullScreen.value) {
        emit("pause-background-audio");
        videoRef.value?.play();
        videoRef.value!.muted = false;
        isVideoPlaying.value = true;
      } else {
        videoRef.value?.pause();
        videoRef.value!.muted = true;
        emit("resume-background-audio");
        isVideoPlaying.value = false;
      }
    };

    const handleVideoPlay = () => {
      emit("pause-background-audio");
      isVideoPlaying.value = true;
      videoRef.value!.muted = false;
    };

    const handleVideoPause = () => {
      emit("resume-background-audio");
      isVideoPlaying.value = false;
      videoRef.value!.muted = true;
    };

    const togglePlay = () => {
      const video = videoRef.value;

      if (!video) return;

      if (video.paused) {
        video.play();
        emit("pause-background-audio");
        isVideoPlaying.value = true;
        video.muted = false;
      } else {
        video.pause();
        emit("resume-background-audio");
        isVideoPlaying.value = false;
        video.muted = true;
      }
    };

    // Intersection Observer for triggering animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        isSectionVisible.value = entry.isIntersecting;
        if (isSectionVisible.value && videoRef.value) {
          videoRef.value.play(); // Auto play video when section is visible
          emit("pause-background-audio");
        } else if (videoRef.value) {
          videoRef.value.pause();
          emit("resume-background-audio");
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    onMounted(() => {
      const section = document.querySelector(".vid-section");
      if (section) {
        observer.observe(section);
      }
    });

    onUnmounted(() => {
      observer.disconnect();
    });

    return {
      isFullScreen,
      videoRef,
      toggleFullScreen,
      handleVideoPlay,
      handleVideoPause,
      togglePlay,
      isSectionVisible,
      isVideoPlaying,
    };
  },
});
</script>

<template>
  <section class="vid-section">
    <h2 class="title">ទស្សនាដោយមេត្រីភាព</h2>
    <div class="con" :class="{ fullscreen: isFullScreen }">
      <video
        ref="videoRef"
        class="vid"
        playsinline
        muted
        @play="handleVideoPlay"
        @pause="handleVideoPause"
        @click="togglePlay"
      >
        <source
          src="https://cdn.docsie.io/workspace_1Uj8SKn53qXCQCE3L/doc_dfiX2csAgpT6BMmbd/file_WLymMWKTm9LIJ5M8p/videocompressed02_5d14cd9b-db19-edc8-5411-8008413aa6df.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.vid-section {
  padding: 80px 15px;
  text-align: center;
  height: 100vh; 

  @media (max-width: 768px) {
    padding: 40px 40px;
  }

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
    margin: 0 auto;
    animation: zoomIn 1.2s ease-in-out;
    .vid {
      position: relative;
      z-index: 999;
      width: 20%;
      height: auto;
      border-radius: 15px; 
      transition: transform 0.5s ease, box-shadow 0.5s ease;
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
      }

      @media (max-width: 768px) {
        border-radius: 10px;
        width: 60%;
      }

      @media (max-width: 480px) {
        border-radius: 10px;
        width: 40%;
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

      .vid {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: auto;
        max-width: 90vw;
        border-radius: 15px; 
        max-height: 90vh; 
        animation: zoomIn 0.5s ease-in-out;
        transition: transform 0.5s ease, box-shadow 0.5s ease;
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

  @keyframes borderRun {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
}
</style>
