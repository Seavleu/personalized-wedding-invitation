<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "HeroSection",
  props: {
    guestName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const videoSrc = ref("../assets/images/video.mp4");
    const videoRef = ref<HTMLVideoElement | null>(null);
    const isVideoPlaying = ref(false);
    const currentGuestName = ref(props.guestName); // Local reactive variable for guestName

    // Watch for changes in the prop
    watch(
      () => props.guestName,
      (newGuestName) => {
        currentGuestName.value = newGuestName;
      }
    );

    const playVideo = () => {
      isVideoPlaying.value = true;
    };

    const stopVideo = () => {
      const video = videoRef.value;
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
      isVideoPlaying.value = false;
    };

    const onBackgroundClick = () => {
      if (isVideoPlaying.value) {
        stopVideo();
      }
    };

    return {
      videoSrc,
      videoRef,
      isVideoPlaying,
      playVideo,
      stopVideo,
      onBackgroundClick,
      currentGuestName,
    };
  },
});
</script>

<template>
  <section class="hero-section" @click="onBackgroundClick">
    <div v-if="!isVideoPlaying" class="hero-content" @click.stop>
      <h1 class="hero-title">សិរីមង្គលអាពាហ៍ពិពាហ៍</h1>
      <dt>
        <img src="../assets/images/logo.png" alt="" />
        <h1 class="hero-title">សូមគោរពអញ្ជើញ {{ currentGuestName }}</h1>
        <img
          src="../assets/images/ico_wlc.png"
          alt="Watch Invitation"
          @click="playVideo"
        />
        <!-- <dd>
          ថ្ងៃសៅរ៍ ទី ២៤ ខែ កុម្ភៈ ឆ្នាំ ២០២៤
          ភោជនីយដ្ឋាន សមភាពថ្មី អាគារ A ក្រុងសៀមរាប
          វេលាម៉ោង ០៥:០០ ល្ងាច
        </dd> -->
      </dt>
    </div>

    <video
      v-else
      ref="videoRef"
      class="video"
      :src="videoSrc"
      @ended="stopVideo"
      autoplay
      controls
    ></video>
  </section>
</template>
 
<style lang="scss" scoped>
.hero-section {
  position: relative;
  text-align: center;
  padding: 4rem 1rem;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .hero-content {
    position: relative;
    z-index: 1;

    .hero-title {
      font-size: 2.5rem; 
      font-weight: bold;
      margin-bottom: 1rem;
      animation: fadeInDown 1s ease-out;

      @media (max-width: 768px) {
        font-size: 1.8rem;  
      }

      @media (max-width: 480px) {
        font-size: 1.5rem;  
      }
    }

    img {
      cursor: pointer;
      width: 50%;
      height: auto;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }

      @media (max-width: 768px) {
        width: 70%; // Adjust image size for mobile view
      }

      @media (max-width: 480px) {
        width: 80%; // Further adjustment for very small screens
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
    background: black;
    z-index: 999;
  }
}
</style>

