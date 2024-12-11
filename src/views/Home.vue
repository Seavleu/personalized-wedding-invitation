<template>
  <div :class="{ 'no-scroll': !isScrollAllowed }">
    <!-- Background Audio -->
    <audio ref="audioRef" autoplay loop>
      <source src="/audio.mp3" type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>

    <!-- Hero Section -->
    <HeroSection id="hero" :guest-name="guestName" @enable-scroll="enableScroll" />

    <!-- Vid Section -->
    <VidSection
      id="video"
      @pause-background-audio="pauseBackgroundAudio"
      @resume-background-audio="resumeBackgroundAudio"
    />

    <!-- Other Sections -->
    <InvitationSection id="invitation" />
    <ScheduleSection id="schedule" />
    <LocationSection id="location" />
    <GallerySection id="gallery" />
    <WishesSection id="wishes" />
    <ABASection id="aba" />
    <ApoloSection id="apology" />
    <MenuComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, onUnmounted, ref } from "vue";
import { useRoute } from "vue-router";
import HeroSection from "@/components/HeroSection.vue";
import VidSection from "@/components/VidSection.vue";
import InvitationSection from "@/components/InvitationSection.vue";
import ScheduleSection from "@/components/ScheduleSection.vue";
import LocationSection from "@/components/LocationSection.vue";
import GallerySection from "@/components/GallerySection.vue";
import WishesSection from "@/components/WishesSection.vue";
import ABASection from "@/components/ABASection.vue";
import ApoloSection from "@/components/ApoloSection.vue";
import MenuComponent from "@/components/MenuComponent.vue";

export default defineComponent({
  name: "Home",
  components: {
    HeroSection,
    InvitationSection,
    ScheduleSection,
    LocationSection,
    VidSection,
    GallerySection,
    WishesSection,
    MenuComponent,
    ApoloSection,
    ABASection,
  },
  setup() {
    const route = useRoute();
    const audioRef = ref<HTMLAudioElement | null>(null);
    const isScrollAllowed = ref(false);

    // Computed guest name
    const guestName = computed(() => {
      if (route && route.params) {
        return Array.isArray(route.params.guestName)
          ? route.params.guestName[0]
          : route.params.guestName || "ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា";
      }
      return "ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា";
    });

    // Scroll control
    const enableScroll = () => {
      isScrollAllowed.value = true;
      document.body.style.overflow = "auto";
    };

    // Background audio control
    const pauseBackgroundAudio = () => {
      if (audioRef.value) {
        audioRef.value.pause();
      }
    };

    const resumeBackgroundAudio = () => {
      if (audioRef.value) {
        audioRef.value.play();
      }
    };

    // Handle visibility change
    const handleVisibilityChange = () => {
      if (audioRef.value) {
        if (document.hidden) {
          audioRef.value.pause();
        } else {
          audioRef.value.play();
        }
      }
    };

    // Lock scroll for 5 seconds on initial load
    onMounted(() => {
      document.body.style.overflow = "hidden"; // Lock scrolling
      setTimeout(enableScroll, 5000);

      document.addEventListener("visibilitychange", handleVisibilityChange);
    });

    onUnmounted(() => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    });

    return {
      guestName,
      audioRef,
      isScrollAllowed,
      enableScroll,
      pauseBackgroundAudio,
      resumeBackgroundAudio,
    };
  },
});
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.no-scroll {
  overflow: hidden;
  height: 100vh;
}

.home {
  overflow-x: hidden;
  max-width: 100%;
}
</style>
