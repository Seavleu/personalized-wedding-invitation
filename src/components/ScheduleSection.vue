<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ScheduleSection",
  setup() {
    const icons = ["ico_1.png", "ico_2.png", "ico_3.png", "ico_4.png", "ico_5.png", "ico_6.png"];

    const getIconPath = (icon: string) => {
      return new URL(`../assets/images/${icon}`, import.meta.url).href;
    };

    return { icons, getIconPath };
  },
});
</script>

<template>
  <section class="schedule-section">
    <!-- Background video -->
    <video class="background-video" autoplay loop muted playsinline>
      <source src="/invitation.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Content -->
    <h3 class="schedule-title">កម្មវិធីមង្គលអាពាហ៍ពិពាហ៍</h3>
    <div class="schedule-timeline">
      <div
        v-for="(icon, index) in icons"
        :key="index"
        class="schedule-item"
        :style="{ '--delay': index }"
        :class="{ 'schedule-right': index % 2 === 0, 'schedule-left': index % 2 !== 0 }"
      >
        <img :src="getIconPath(icon)" :alt="'Icon ' + (index + 1)" class="schedule-icon" />
        <div class="schedule-marker">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.schedule-section { 
  // background: url('@/assets/images/schedule.gif') no-repeat center center;
  // background-size: cover; 
  min-height: 100vh;

  position: relative; 
  text-align: center;
  padding: 60px 15px;
  height: 100vh;
  overflow: hidden;

  .background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;  
    z-index: -1;  
  }

  @media (max-width: 768px) {
    background-attachment: scroll;
    background-size: cover;
    height: auto;
    min-height: 100vh;
    width: 100%;
  }

  @media (max-width: 480px) {
    background-size: cover;
    height: auto;
    min-height: 100vh;
    background-position: center;
  }

  .schedule-title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px; 
    position: relative;
    z-index: 10;
    animation: fadeInDown 1s ease-out;

    @media (max-width: 768px) {
      font-size: 24px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  .schedule-timeline {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      width: 3px;   
      background: #d6af2d;
      box-shadow: 0 4px 10px rgba(255, 209, 3, 0.5);
      transform: translateX(-50%);
      z-index: 0;
    }
  }

  .schedule-item {
    position: relative; 
    margin-bottom: 40px; 
    display: flex;
    align-items: center;
    width: 50%;
    opacity: 0;
    transform: translateY(50px);
    animation: fadeInUp 1s ease-out forwards;
    animation-delay: calc(var(--delay, 1) * 0.5s);

    &.schedule-left {
        justify-content: center;

        .schedule-icon {
          order: 1;
          margin: 0 35% 15px 0;
          width: 250px;
          height: 250px;
          animation: none;  
        }

        .schedule-marker {
          position: relative;
          margin: 0 auto 0 0;
        }
      }

      &.schedule-right {
        justify-content: center;

        .schedule-icon {
          order: 2;
          margin: 0 60% 15px 0;
          width: 250px;
          height: 250px;
          animation: none;  
        }

        .schedule-marker {
          position: relative;
          margin: 0 auto 0 0;
        }
      }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;

      &.schedule-left {
        justify-content: center;

        .schedule-icon {
          order: 1;
          margin: 0 -200px 15px 0;
          width: 150px;
          height: auto;
          animation: none;  
        }

        .schedule-marker {
          position: relative;
          margin: 0 auto 0 0;
        }
      }

      &.schedule-right {
        justify-content: center;

        .schedule-icon {
          order: 2;
          margin: 0 200px 15px 0;
          width: 150px;
          height: auto;
          animation: none;  
        }

        .schedule-marker {
          position: relative;
          margin: 0 auto 0 0;
        }
      }
    }

    .schedule-marker {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
      width: 15px;
      height: 15px;
      background: #d6af2d; 
      border-radius: 50%;

      // .circle {
      //   width: 10px;
      //   height: 10px;
      //   background: #ebd489;
      //   border-radius: 50%;
      // }
    }

    .schedule-icon {
      width: 150px;
      height: 150px;
      padding: 10px;
      object-fit: cover;
      box-shadow: 0 4px 10px rgba(238, 198, 22, 0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }

      @media (max-width: 480px) {
        width: 80px;
        height: 80px;
      }
    }
  }
}
</style>