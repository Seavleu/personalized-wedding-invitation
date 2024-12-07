<script lang="ts">
import { defineComponent, ref, watch, onMounted, onBeforeUnmount } from "vue";

export default defineComponent({
  name: "HeroSection",
  props: {
    guestName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const youtubeUrl = ref("https://www.youtube.com/embed/kxpZEELOI-A?autoplay=1&rel=0");
    const isVideoPlaying = ref(false);
    const currentGuestName = ref(props.guestName);
    const iframeRef = ref<HTMLIFrameElement | null>(null);

    watch(
      () => props.guestName,
      (newGuestName) => {
        currentGuestName.value = newGuestName;
      }
    );

    // Play video and request fullscreen
    const playVideo = () => {
      isVideoPlaying.value = true;

      setTimeout(() => {
        if (iframeRef.value) {
          iframeRef.value.requestFullscreen?.();
        }
      }, 300);
    };

    // Stop video and close iframe
    const stopVideo = () => {
      isVideoPlaying.value = false;

      // Exit fullscreen if active
      if (document.fullscreenElement) {
        document.exitFullscreen?.();
      }
    };

    // Listen for fullscreen exit
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        stopVideo(); // Exit video if fullscreen is exited
      }
    };

    onMounted(() => {
      document.addEventListener("fullscreenchange", handleFullscreenChange);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    });

    return {
      youtubeUrl,
      isVideoPlaying,
      playVideo,
      stopVideo,
      currentGuestName,
      iframeRef,
    };
  },
});
</script>


<template>
  <section class="hero-section">
    <!-- Main Content -->
    <div v-if="!isVideoPlaying" class="hero-content" @click.stop>
      <h1 class="hero-title">សិរីមង្គលអាពាហ៍ពិពាហ៍</h1>
      <div class="hero-details">
        <img class="logo" src="../assets/images/logo.jpg" alt="Logo" />
        <h5 class="hero-invite">សូមគោរពអញ្ជើញ</h5>
        <p class="guest-name">{{ currentGuestName }}</p>
      </div>
      <img
        class="wlc"
        src="../assets/images/ico_wlc.png"
        alt="Watch Invitation"
        @click="playVideo"
      />
    </div>

    <!-- YouTube Video -->
    <div v-if="isVideoPlaying" class="video-container">
      <iframe
        ref="iframeRef"
        class="youtube-video"
        :src="youtubeUrl"
        title="YouTube video player"
        frameborder="0"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  text-align: center;
  padding: 80px 20px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('@/assets/images/intro1.jpg') no-repeat center center;
  background-size: cover;
  backdrop-filter: blur(5px);

  .hero-content {
    position: relative;
    z-index: 1;

    .hero-title {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 1rem;
      animation: fadeInDown 2s ease-out;

      @media (max-width: 768px) {
        font-size: 36px;
      }

      @media (max-width: 480px) {
        font-size: 1.5rem;
      }
    }

    .hero-details {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      animation: fadeInUp 1.5s ease-out;

      .logo {
        margin-bottom: 10px;
        width: 220px;
        height: 220px;
        animation: scaleIn 1.5s ease-out;

        @media (max-width: 768px) {
          width: 220px;
          height: 220px;
        }

        @media (max-width: 480px) {
          width: 100px;
          height: 100px;
        }
      }
      
      .hero-invite {
        font-size: 36px;
        animation: fadeIn 2s ease-out;

        @media (max-width: 768px) {
          font-size: 34px;
        }

        @media (max-width: 480px) {
          font-size: 0.9rem;
        }
      }

      .guest-name {
        font-size: 36px;
        margin-bottom: 1.5rem;
        width: 350px;
        font-family: "KantumruyReg", monospace;
        animation: fadeInUp 1.5s ease-out;

        @media (max-width: 768px) {
          font-size: 28px;
        }

        @media (max-width: 480px) {
          font-size: 28px;
        }
      }
    }

    .wlc {
      cursor: pointer;
      width: 200px;
      max-width: 200px;
      height: auto;
      transition: transform 0.3s ease;
      margin-top: 20px;
      animation: fadeIn 1.5s ease-out, pulse 2s infinite;  

      &:hover {
        transform: scale(1.1);
      }

      @media (max-width: 768px) {
        width: 70%;
      }

      @media (max-width: 480px) {
        width: 80%;
      }
    }
    @keyframes pulse {
      0% {
        transform: scale(1);
      }

      50% {
        transform: scale(1.05); 
      }

      100% {
        transform: scale(1); 
      }
    }

  }

  .video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 999;
    animation: fadeIn 1.5s ease-out;
  }

  /* Keyframes for Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes scaleIn {
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
