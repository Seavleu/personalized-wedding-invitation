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
  padding: 4rem 1rem;
  background: linear-gradient(to bottom, #f7f7f7, #ffffff);
  text-align: center;
  overflow: hidden;

  /* Title Animation */
  .location-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    color: #333;
    animation: fadeInDown 1s ease-out;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  /* Map Animation */
  .map-container {
    position: relative;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    animation: zoomIn 1.2s ease-in-out;

    .map-image {
      width: 100%;
      height: auto;
      border-radius: 20px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.5s ease, box-shadow 0.5s ease;

      /* Scale-Up Effect on Hover */
      &:hover {
        transform: scale(1.08) rotate(1deg);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
      }
    }

    /* Location Marker Animation */
    .location-marker {
      position: absolute;
      top: 27%;
      left: 65%;
      transform: translate(-50%, -50%);
      width: 20px;
      height: 20px;
      background: #ff6363;
      border: 4px solid #fff;
      border-radius: 50%;
      animation: bounce 1s infinite;

      &:before {
        content: "";
        position: absolute;
        top: -15px;
        left: -15px;
        width: 50px;
        height: 50px;
        background: rgba(255, 99, 99, 0.2);
        border-radius: 50%;
        animation: pulse 2s infinite;
      }

      &:after {
        content: "";
        position: absolute;
        top: -10px;
        left: -10px;
        width: 40px;
        height: 40px;
        background: rgba(255, 99, 99, 0.4);
        border-radius: 50%;
        animation: pulse 2s infinite;
      }
    }
  }

  /* Description Animation */
  .location-description {
    font-size: 1.2rem;
    color: #555;
    margin-top: 1.5rem;
    animation: fadeInUp 1.5s ease-out 0.5s;
    opacity: 0;
    animation-fill-mode: forwards;
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
    0%, 100% {
      transform: translate(-50%, -50%) translateY(0);
    }
    50% {
      transform: translate(-50%, -50%) translateY(-10px);
    }
  }
}

  </style>
  