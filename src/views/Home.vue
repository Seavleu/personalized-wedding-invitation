<template>
  <div>
    <audio ref="audioRef" autoplay loop>
      <source src="/audio.mp3" type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>

    <HeroSection id="hero" :guest-name="guestName" />
    <InvitationSection id="invitation" />
    <ScheduleSection id="schedule" />
    <LocationSection id="location" />
    <GallerySection id="gallery" />
    <WishesSection id="wishes" />
    <ABASection id="aba" />
    <ApologySection id="apology" />
    <MenuComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import HeroSection from "@/components/HeroSection.vue";
import InvitationSection from "@/components/InvitationSection.vue";
import ApologySection from "@/components/ApologySection.vue";
import ScheduleSection from "@/components/ScheduleSection.vue";
import LocationSection from "@/components/LocationSection.vue";
import GallerySection from "@/components/GallerySection.vue";
import WishesSection from "@/components/WishesSection.vue";
import ABASection from "@/components/ABASection.vue";
import MenuComponent from "@/components/MenuComponent.vue";

export default defineComponent({
  name: "Home",
  components: {
    HeroSection,
    InvitationSection,
    ScheduleSection,
    LocationSection,
    GallerySection,
    WishesSection,
    MenuComponent,
    ApologySection,
    ABASection,
  },
  setup() {
    const route = useRoute();
    const audioRef = ref<HTMLAudioElement | null>(null);

    const guestName = computed(() => {
      if (route && route.params) {
        return Array.isArray(route.params.guestName)
          ? route.params.guestName[0]
          : route.params.guestName || "ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា";
      }
      return "ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា";
    });

    onMounted(() => {
      const playAudio = () => {
        if (audioRef.value) {
          audioRef.value.play();
        }
      };

      document.addEventListener("click", playAudio, { once: true });
      document.addEventListener("scroll", playAudio, { once: true });
    });

    return {
      guestName,
      audioRef,
    };
  },
});
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.home {
  margin: 0;
  padding: 0;
}
</style>
