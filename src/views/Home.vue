<template>
  <div>
    <HeroSection id="hero" :guest-name="guestName" />
    <InvitationSection id="invitation" />
    <ScheduleSection id="schedule" />
    <LocationSection id="location" />
    <GallerySection id="gallery" />
    <WishesSection id="wishes" />
    <MenuComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
import HeroSection from "@/components/HeroSection.vue";
import InvitationSection from "@/components/InvitationSection.vue";
import ScheduleSection from "@/components/ScheduleSection.vue";
import LocationSection from "@/components/LocationSection.vue";
import GallerySection from "@/components/GallerySection.vue";
import WishesSection from "@/components/WishesSection.vue";
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
  },
  setup() {
    const route = useRoute();

    // Ensure route and params are defined
    const guestName = computed(() => {
      if (route && route.params) {
        return Array.isArray(route.params.guestName)
          ? route.params.guestName[0]
          : route.params.guestName || "Guest";
      }
      return "Guest"; // Default value if route or params is undefined
    });

    return {
      guestName,
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
