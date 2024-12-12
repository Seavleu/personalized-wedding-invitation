<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";

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

    const isFirstVisit = ref(!localStorage.getItem("visitedHeroPage"));

    const enableScroll = () => {
      isScrollAllowed.value = true;
      document.body.style.overflow = "auto";
      localStorage.setItem("visitedHeroPage", "true");
    };

    const redirectToInvitation = () => {
      enableScroll();
      const invitationSection = document.getElementById("invitation");
      if (invitationSection) {
        invitationSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    onMounted(() => {
      if (isFirstVisit.value) {
        document.body.style.overflow = "hidden";
        setTimeout(enableScroll, 5000);
      } else {
        enableScroll(); 
      }
    });

    watch(
      () => props.guestName,
      (newGuestName) => {
        currentGuestName.value = newGuestName;
      }
    );

    return {
      currentGuestName,
      redirectToInvitation,
    };
  },
});
</script>

<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">សិរីមង្គលអាពាហ៍ពិពាហ៍</h1>
      <div class="hero-details">
        <img class="logo" src="../assets/images/logo.jpg" alt="Logo" />
        <h5 class="hero-invite">សូមគោរពអញ្ជើញ</h5>
        <div class="holder">
          <img src="../assets/images/ico_hold1.png" alt="">
          <p class="guest-name">{{ currentGuestName }}</p>
          <img src="../assets/images/ico_hold2.png" alt="">
        </div>
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
  width: 100%;
  height: 100vh; 
  overflow: hidden;
  background: url('@/assets/images/intro.gif') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
 
  @media (max-width: 768px) {
    background-size: contain; 
    background-attachment: scroll; 
  }

  img {
    width: 100%;
    height: auto;
    animation: fadeInUp 1.5s ease-out;
  }

  .hero-content {
    position: relative;
    z-index: 1;

    .hero-title {
      font-size: 48px;
      font-size: 48px;
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

      animation: fadeInUp 1.5s ease-out;

      .logo {
        margin-bottom: 10px;
        width: 350px;
        height: 350px;
        animation: scaleIn 1.5s ease-out;

        @media (max-width: 768px) {
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

      .holder {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column; 
        margin-top: 5%;
        img {
          width: 50%;
          height: 30%;
        }
        .guest-name {
        font-size: 30px; 
        width: 350px; 
        animation: scaleIn 1.5s ease-out;  

        @media (max-width: 768px) {
          font-size: 24px;
        }

        @media (max-width: 480px) {
          font-size: 14px;
        }
      }
      }
    }

    .wlc {
      cursor: pointer;
      width: 450px;
      max-width: 450px;
      height: auto;
      transition: transform 0.3s ease; 
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
