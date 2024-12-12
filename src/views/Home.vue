<template>
  <div :class="{ 'no-scroll': !isScrollAllowed }">
    <!-- If user is not authorized -->
    <div v-if="isRestricted" class="restricted-message">
      <h1>សូមអភ័យទោស!</h1>
      <p>អ្នកមិនមានការអញ្ជើញទេ។</p>
    </div>

    <!-- If authorized, show sections -->
    <template v-else>
      <!-- <audio ref="audioRef" muted autoplay loop>
        <source src="/audio.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio> -->

      <HeroSection
        id="hero"
        :guest-name="guestName"
        @enable-scroll="enableScroll"
        @direct-to-invitation="directToInvitation"
      />
      <VidSection
        id="video"
        @pause-background-audio="pauseBackgroundAudio"
        @resume-background-audio="resumeBackgroundAudio"
      />
      <InvitationSection id="invitation" />
      <ScheduleSection id="schedule" />
      <LocationSection id="location" />
      <GallerySection id="gallery" />
      <WishesSection id="wishes" />
      <ABASection id="aba" />
      <ApoloSection id="apology" />
      <MenuComponent />
    </template>
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
    const isRestricted = ref(false);

    const guestName = computed(() => {
      if (route && route.params) {
        return Array.isArray(route.params.guestName)
          ? route.params.guestName[0]
          : route.params.guestName || "ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា";
      }
      return "ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា";
    });

    const enableScroll = () => {
      isScrollAllowed.value = true;
      document.body.style.overflow = "auto";
    };

    const directToInvitation = () => {
      enableScroll();
      const invitationSection = document.getElementById('video')
      if (invitationSection) {
        invitationSection.scrollIntoView({ behavior: "smooth" });
      }
    };

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

    const handleVisibilityChange = () => {
      if (audioRef.value) {
        if (document.hidden) {
          audioRef.value.pause();
        } else {
          audioRef.value.play();
        }
      }
    };

    onMounted(() => { 
      const baseUrl = "https://selaandseavhuoy-warm-invitations.netlify.app/";
      if (window.location.href === baseUrl) {
        isRestricted.value = true;
        document.body.style.overflow = "hidden";  
      } else {
        document.body.style.overflow = "hidden";
        setTimeout(enableScroll, 5000);
      }

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
      directToInvitation,
      isRestricted,
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

.restricted-message {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f8f9fa;
  color: #5b7639;
  text-align: center;
  font-family: "Geist", sans-serif;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #777;
  }
}
</style>
