<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "HeroSection",
  props: {
    guestName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const currentGuestName = ref(props.guestName);
    const isScrollAllowed = ref(false);

    const enableScroll = () => {
      isScrollAllowed.value = true;
      document.body.style.overflow = "auto";
    };

    const redirectToInvitation = () => {
      enableScroll();
      const invitationSection = document.getElementById("invitation");
      if (invitationSection) {
        invitationSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    onMounted(() => {
      document.body.style.overflow = "hidden";  
      setTimeout(enableScroll, 5000);  
    });

    return {
      currentGuestName,
      redirectToInvitation,
    };
  },
});
</script>

<template>
  <section class="hero-section"> 
    <!-- <img src="../assets/images//introTop.png" alt="intro_top"> -->
    <div class="hero-content">
      <h1 class="hero-title">សិរីមង្គលអាពាហ៍ពិពាហ៍</h1>
      <div class="hero-details">
        <img class="logo" src="../assets/images/logo.jpg" alt="Logo" />
        <h2 class="hero-invite">សូមគោរពអញ្ជើញ</h2>
        <p class="guest-name">{{ currentGuestName }}</p>
      </div>
      <img
        class="wlc"
        src="../assets/images/ico_wlc.png"
        alt="Watch Invitation"
        @click="redirectToInvitation"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  text-align: center;
  padding: 40px 15px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  background: url('@/assets/images/intro.gif') no-repeat center center fixed;
  background-size: cover;
  background-attachment: fixed; 
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center; 

  img {
    width: 100%;
    height: auto;
    animation: fadeInUp 1.5s ease-out;
  }

  .hero-content {
    position: relative;
    z-index: 1;

    .hero-title {
      font-size: 36px;
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 20px;
      animation: fadeInDown 2s ease-out;

      @media (max-width: 768px) {
        font-size: 28px;
      }

      @media (max-width: 480px) {
        font-size: 24px;
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
        width: 280px;
        height: 280px;
        animation: scaleIn 1.5s ease-out;

        @media (max-width: 768px) {
          width: 220px;
          height: 220px;
          width: 220px;
          height: 220px;
        }

        @media (max-width: 480px) {
          width: 200px;
          height: 200px;
        }
      }

      .hero-invite {
        font-size: 30px;
        animation: fadeIn 2s ease-out;

        @media (max-width: 768px) {
          font-size: 24PX;
        }

        @media (max-width: 480px) {
          font-size: 20px;
        }
      }

      .guest-name {
        font-size: 18px;
        margin-bottom: 20px;
        width: 350px;
        font-family: "GeistMono", monospace;
        animation: fadeInUp 1.5s ease-out;

        @media (max-width: 768px) {
          font-size: 16px;
        }

        @media (max-width: 480px) {
          font-size: 14px;
        }
      }
    }

    .wlc {
      cursor: pointer;
      width: 250px;
      max-width: 250px;
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
  }

  /* Keyframe Animations */
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

</style>
