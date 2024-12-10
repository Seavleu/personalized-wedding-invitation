<template>
  <section class="location-section">
    <h2 class="location-title">ទីតាំងកម្មវិធីមង្គល</h2>
    <div class="map-container">
      <img src="../assets/images/map.png" alt="Map Location" class="map-image" />
      <div class="location-marker"></div>
    </div>
    <p class="location-description"> បុរីអាពាហ៍ពិពាហ៍ (អគារ A)</p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LocationSection",
});
</script>

<style lang="scss" scoped>
.location-section {
  padding: 40px 15px;
  text-align: center;
  overflow: hidden;

  /* Title Animation */
  .location-title {
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

  /* Map Animation */
  .map-container {
    position: relative;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    animation: zoomIn 1.2s ease-in-out;

    .map-image {
      width: 350px;
      height: auto;
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

    /* Location Marker Animation */
    .location-marker {
      position: absolute;
      top: 27%;
      left: 65%;
      transform: translate(-50%, -50%);
      width: 15px;
      height: 15px;
      background: #ff6363;
      border: 3px solid #5b7639;
      border-radius: 50%;
      animation: bounce 1s infinite;

      &:before {
        content: "";
        position: absolute;
        top: -12px;
        left: -12px;
        width: 40px;
        height: 40px;
        background: rgba(255, 99, 99, 0.2);
        border-radius: 50%;
        animation: pulse 2s infinite;
      }

      &:after {
        content: "";
        position: absolute;
        top: -8px;
        left: -8px;
        width: 30px;
        height: 30px;
        background: rgba(255, 99, 99, 0.4);
        border-radius: 50%;
        animation: pulse 2s infinite;
      }

      @media (max-width: 768px) {
        top: 28%;
        left: 62%;
        width: 12px;
        height: 12px;

        &:before {
          width: 30px;
          height: 30px;
        }

        &:after {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  /* Description Animation */
  .location-description {
    font-size: 18px;
    color: #5b7639;
    margin-top: 20px;
    animation: fadeInUp 1.5s ease-out 0.5s;
    opacity: 0;
    animation-fill-mode: forwards;

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
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