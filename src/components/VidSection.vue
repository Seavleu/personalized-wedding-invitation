<template>
  <section class="vid-section">
    <h2 class="title">ទស្សនាដោយមេត្រីភាព</h2>
    <div class="con">
      <video class="vid" autoplay loop muted playsinline>
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VidSection",
});
</script>

<style lang="scss" scoped>
.vid-section {
  padding: 40px 15px;
  text-align: center;
  overflow: hidden;

  .title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #5b7639;
    animation: fadeInDown 1s ease-out;

    @media (max-width: 768px) {
      font-size: 24px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  .con {
    position: relative;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    animation: zoomIn 1.2s ease-in-out;

    .vid {
      width: 350px;
      height: 600px;
      border-radius: 15px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.5s ease, box-shadow 0.5s ease;

      &:hover {
        transform: scale(1.05) rotate(1deg);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
      }

      @media (max-width: 768px) {
        border-radius: 10px;
      }
    }
  }
  /* Keyframes for Animations */
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes zoomIn {
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
      transform: scale(0.9);
      opacity: 1;
    }

    50% {
      transform: scale(1.2);
      opacity: 0.4;
    }

    100% {
      transform: scale(0.9);
      opacity: 1;
    }
  }

  @keyframes bounce {

    0%,
    100% {
      transform: translate(-50%, -50%) translateY(0);
    }

    50% {
      transform: translate(-50%, -50%) translateY(-10px);
    }
  }
}
</style>