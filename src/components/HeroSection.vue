<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "HeroSection",
  props: {
    guestName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const isKhmerName = computed(() => {
      const khmerPattern = /[\u1780-\u17FF]+/;
      return khmerPattern.test(props.guestName);
    });

    const fontClass = computed(() => (isKhmerName.value ? "khmer-font" : "english-font"));

    return {
      fontClass,
    };
  },
});
</script>
<template>
  <section class="hero-section no-scroll"> 
    <video
      class="video-bg"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      poster="https://cdn.docsie.io/workspace_1Uj8SKn53qXCQCE3L/doc_example_poster.jpg"
    >
      <source
        src="https://cdn.docsie.io/workspace_1Uj8SKn53qXCQCE3L/doc_dfiX2csAgpT6BMmbd/file_e0pCZSVRr1KIzYIkB/wedding_invitation_2_aafdeea9-6f8f-3479-75b7-51b9cade3dcb.mp4"
        type="video/mp4"
      />
    </video>
    <div class="hero-content">
      <h1 class="hero-title">សិរីមង្គលអាពាហ៍ពិពាហ៍</h1>
      <div class="hero-details">
        <img class="logo" src="https://cdn.docsie.io/workspace_1Uj8SKn53qXCQCE3L/doc_dfiX2csAgpT6BMmbd/file_wzJI1p6jjrCa5e48q/logo_62926590-643b-ad68-aaab-9c87b29d0284.jpg" alt="Logo" />
        <h5 class="hero-invite">សូមគោរពអញ្ជើញ</h5>
        <div class="holder">
          <img src="https://cdn.docsie.io/workspace_1Uj8SKn53qXCQCE3L/doc_dfiX2csAgpT6BMmbd/file_HoWxW4AmdXxunbhMh/ico_hold1_8b61ab25-9cb4-89ee-1996-cd9bba3c96aa.png" alt="">
          <p class="guest-name" :class="fontClass">{{ guestName }}</p>
          <img src="https://cdn.docsie.io/workspace_1Uj8SKn53qXCQCE3L/doc_dfiX2csAgpT6BMmbd/file_1WqzjsgrHWQqeqtnZ/ico_hold2_65aff8a6-b100-b722-11eb-5e8d0f66ff0f.png" alt="">
        </div>
      </div>
      <img
        class="wlc"
        src="https://cdn.docsie.io/workspace_1Uj8SKn53qXCQCE3L/doc_dfiX2csAgpT6BMmbd/file_SWn74epVjiWzbdYQz/ico_wlc_44d01bc6-fb39-c173-9a0c-5eacd4022580.png"
        alt="Watch Invitation"
        @click="$emit('direct-to-invitation')"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero-section { 
  padding: 20px 0;
  width: 100vw;
  height: 100vh;
  position: relative;
  text-align: center;  

  .video-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;  
    z-index: -1;
    pointer-events: none; 
  }

  video::-webkit-media-controls {
  display: none !important;  
}
 
  @media (max-width: 768px) {
    padding: 80px 12px;
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
      font-size: 30px;
      font-weight: bold;
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
        width: 300px;
        height: 300px;
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
          font-size: 26px;
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
        img {
          width: 25%;
          height: 25%;
        }

        .guest-name {
          margin: 1rem;
          font-size: 28px;
          width: 550px;
          animation: scaleIn 1.5s ease-out;

          @media (max-width: 768px) {
            font-size: 30px;
            width: 350px;
             img {
              width: 30%;
              height: 30%;
            }
          }

          @media (max-width: 480px) {
            font-size: 14px;
          }
        }

        .english-font {
          // font-family: 'ItaliannoReg', cursive;
          font-family: 'Clarendon MT Std', sans-serif;      
          font-size: 50px!important;
        }
      }
    }

    .wlc {
      cursor: pointer;
      width: 300px;  
      margin-top: -20px;

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
