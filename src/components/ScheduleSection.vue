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
    <!-- <img class="div" src="../assets/images/divider.png" alt=""> -->
    <h3 class="schedule-title">កម្មវិធីមង្គលអាពាហ៍ពិពាហ៍</h3>
    <div class="schedule-timeline">
      <div v-for="(icon, index) in icons" :key="index" class="schedule-item" :style="{ '--delay': index }"
        :class="{ 'schedule-right': index % 2 === 0, 'schedule-left': index % 2 !== 0 }">
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
  padding: 4rem 1rem;
  background: #f7f7f7;
  text-align: center;

  .schedule-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    color: #111;
    position: relative;
    z-index: 10;
    animation: fadeInDown 1s ease-out;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
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
      width: 2px;
      background: #d6af2d;
      transform: translateX(-50%);
    }
  }

  .schedule-item {
    position: relative;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    width: 100%;
    opacity: 0;
    transform: translateY(50px);
    animation: fadeInUp 1s ease-out forwards;
    animation-delay: calc(var(--delay) * 0.5s); 

    &.schedule-left {
      justify-content: flex-end;

      .schedule-marker {
        order: 2;
        margin-left: 38px;
      }

      .schedule-icon {
        order: 1;
        margin-right: 40px;
        animation: slideInLeft 1s ease-out forwards;
      }
    }

    &.schedule-right {
      justify-content: flex-start;

      .schedule-marker {
        order: 2;
        margin-left: 38px;
      }

      .schedule-icon {
        order: 1;
        margin-left: 40px;
        animation: slideInRight 1s ease-out forwards;
      }
    }

    .schedule-marker {
      position: absolute;
      top: 0;
      left: 215px;
      z-index: 2;
      width: 20px;
      height: 20px;
      background: #d6af2d;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      .circle {
        width: 10px;
        height: 10px;
        background: #ebd489;
        border-radius: 50%;
      }
    }

    .schedule-icon {
      width: 120px;
      height: 120px;
      padding: 15px;
      object-fit: cover;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  /* Keyframe Animations */
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
      transform: translateY(50px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
}
</style>