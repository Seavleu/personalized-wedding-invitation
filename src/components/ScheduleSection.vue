<template>
    <section class="schedule-section">
      <h2 class="schedule-title">កម្មវិធីមង្គលអាពាហ៍ពិពាហ៍</h2>
      <div class="schedule-timeline">
        <div
          v-for="(icon, index) in icons"
          :key="index"
          class="schedule-item"
          :class="{ 'schedule-left': index % 2 === 0, 'schedule-right': index % 2 !== 0 }"
        >
          <img :src="getIconPath(icon)" :alt="'Icon ' + (index + 1)" class="schedule-icon" />
          <div class="schedule-marker">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
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
        background: #ddd;
        transform: translateX(-50%);
        z-index: 1;
      }
    }
  
    .schedule-item {
      position: relative;
      margin-bottom: 2rem;
      display: flex;
      align-items: center;
      width: 100%;
  
      &.schedule-left {
        justify-content: flex-end;
  
        .schedule-marker {
          order: 2;  
          margin-left: 2px
        }
  
        .schedule-icon {
          order: 1;
          margin-right: 150px;
        }
      }
  
      &.schedule-right {
        justify-content: flex-start;
  
        .schedule-marker {
          order: 1; 
          margin-right: 2px;
        }
  
        .schedule-icon {
          order: 2;
          margin-left: 120px;
        }
      }
  
      .schedule-marker {
        position: absolute;
        top: 0;
        left: 280px;
        z-index: 2;
        width: 20px;
        height: 20px;
        background: #d0d312; 
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
  
        .circle {
          width: 10px;
          height: 10px;
          background: #fffb00;
          border-radius: 50%;
        }
      }
  
      .schedule-icon {
        width: 80px;
        height: 80px;
        object-fit: contain;
        border: 4px solid #e7eb25;
        border-radius: 50%;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
  
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
  </style>
  