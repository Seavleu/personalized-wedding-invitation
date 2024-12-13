<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, ref } from "vue";
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
import { useRoute } from "vue-router";
import guests from "@/assets/json/data.json";

export default defineComponent({
  name: "Home", 
  props: {
    guestId: {
      type: String,
      required: false, 
    },
  },
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
  setup(props) {
    const route = useRoute()
    const audioRef = ref<HTMLAudioElement | null>(null)
    const isScrollAllowed = ref(false)
    const isRestricted = ref(false)

    // const guestName = computed (() => {
    //   const id = Number(route.params.guestName)
    //   const guest = guests.Guest.find((g) => g.id === id)
    //   return guest ? guest.name : 'ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា'
    // })
    const guestName = computed(() => {
      const id = Number(route.params.guestId);
      const guest = guests.Guest.find((g) => g.id === id);
      return guest
        ? guest.name
        : "ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា";
    });

    const baseUrls = ["http://localhost:5173/", "http://localhost:4000/", "https://sela-ouktey.netlify.app/"]
    
    const checkIfRestricted = () =>{
      const currentUrl = window.location.href
      if (baseUrls.includes(currentUrl)) {
        isRestricted.value = true
        document.body.style.overflow = 'hidden'
      } else {
        isRestricted.value = false
        document.body.style.overflow = 'hidden'
        setTimeout(enableScroll, 10000)
      }
    }
    
    const enableScroll = () => {
      isScrollAllowed.value = true;
      document.body.style.overflow = "auto";
    };

    const directToInvitation = () => {
      enableScroll();
      const invitationSection = document.getElementById("video");
      if (invitationSection) {
        invitationSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    const pauseBackgroundAudio = () => {
      audioRef.value?.pause();
    };

    const resumeBackgroundAudio = () => {
      audioRef.value?.play();
    };

    const handleVisibilityChange = () => {
      if(audioRef.value) {
        document.hidden ? audioRef.value.pause() : audioRef.value.play()
      }
    }

    onMounted(() => {
      checkIfRestricted()
      document.addEventListener('visibilitychange', handleVisibilityChange)
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        isScrollAllowed.value = true;
        document.body.style.overflow = "auto";
      }, 5000);
    })

    onUnmounted(() => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      document.body.style.overflow = "auto";
    })

    return {
      audioRef,
      checkIfRestricted,
      isScrollAllowed,
      enableScroll,
      pauseBackgroundAudio,
      resumeBackgroundAudio,
      directToInvitation,
      isRestricted,
      guestName
    };
  },
});
</script>

<template>
  <div :class="{ 'no-scroll': !isScrollAllowed }"> 
    <div v-if="isRestricted" class="restricted-message">
      <h1>សូមអភ័យទោស!</h1>
      <p>អ្នកមិនមានការអញ្ជើញទេ។</p>
    </div>

    <template v-else>
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

<style lang="scss">
@import '@/assets/styles/main.scss';

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
  font-family: 'Geist', sans-serif;

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
