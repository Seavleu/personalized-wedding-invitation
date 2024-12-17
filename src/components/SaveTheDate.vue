<template>
    <section class="save-the-date">
      <div class="content">
        <div class="text-content">
          <h2>Counting down</h2>
          <h3>{{ dayOfWeek }}, {{ formattedDate }}</h3>
          <!-- <p>We joyfully invite you to join us for our wedding celebration.</p> -->
          <div class="countdown">
            <span>{{ countdown.days }} Days </span>
            <span>{{ countdown.hours }} Hours</span>
            <span>{{ countdown.minutes }} Minutes</span>
            <!-- <span>{{ countdown.seconds }} Seconds</span> -->
          </div>
          <!-- <button @click="scrollToInvitation">View Details</button> -->
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted, onUnmounted } from "vue";
  
  export default defineComponent({
    name: "SaveTheDate",
    setup() {
      const weddingDate = new Date("2025-01-05T00:00:00");
      const dayOfWeek = "Sunday";
      const formattedDate = "January 5th, 2025";
  
      const countdown = ref({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
  
      const updateCountdown = () => {
        const now = new Date();
        const difference = weddingDate.getTime() - now.getTime();
  
        countdown.value = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      };
  
      let interval: number | undefined;
  
      onMounted(() => {
        updateCountdown();
        interval = setInterval(updateCountdown, 1000);
      });
  
      onUnmounted(() => {
        clearInterval(interval);
      });
  
      const scrollToInvitation = () => {
        const invitationSection = document.getElementById("invitation");
        if (invitationSection) {
          invitationSection.scrollIntoView({ behavior: "smooth" });
        }
      };
  
      return {
        dayOfWeek,
        formattedDate,
        countdown,
        scrollToInvitation,
      };
    },
  });
  </script>
  
  <style lang="scss" scoped>
  .save-the-date {  
    text-align: center; 
    position: relative;
    overflow: hidden;
    h2,h3, span {
        font-family: 'ItaliannoReg', monospace;
    }  
    .content {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      z-index: 1;
  
      .text-content {
        flex: 1 1 50%;
        padding: 1rem;
        animation: fadeInUp 1.5s ease-out;
  
        // h2 {
        //   font-size: 2.5rem;
        //   margin-bottom: 1rem;
        //   color: #f5b506;
        // }
  
        // h3 {
        //   font-size: 2rem;
        //   margin-bottom: 0.5rem;
        // }
  
        .countdown {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
  
          span {
            font-size: 1.5rem;
            font-weight: bold;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
          }
        }
  
        button {
          background-color: #f8d46d;
          color: #333;
          border: none;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          border-radius: 25px;
          cursor: pointer;
          transition: transform 0.3s ease;
  
          &:hover {
            transform: scale(1.05);
            background-color: #fff;
            color: #f8d46d;
          }
        }
      }
  
      .image-content {
        flex: 1 1 50%;
        display: flex;
        justify-content: center;
  
        img {
          max-width: 100%;
          border-radius: 12px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
          animation: fadeIn 1.5s ease-out;
        }
      }
    }
  }
  
  /* Animations */
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
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  </style>
  