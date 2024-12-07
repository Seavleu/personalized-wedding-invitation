<template>
    <section class="wishes-section">
      <h2 class="wishes-title">Share Your Wishes</h2>
      <form @submit.prevent="submitWish" class="wishes-form">
        <input
          type="text"
          v-model="newWish"
          placeholder="Write your wish here..."
          class="wish-input"
        />
        <button type="submit" class="submit-btn">Submit</button>
      </form>
      <div class="wishes-list" :class="{ animate: wishes.length >= 5 }">
        <div v-for="(wish, index) in wishes" :key="index" class="wish-item">
          {{ wish }}
        </div>
      </div>
  
      <!-- Pop-up image with sparkling effect -->
      <div v-if="showPopup" class="popup">
        <img src="../assets/images/ico_1.png" alt="Success" class="popup-image" />
        <div class="sparkles"></div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    name: "WishesSection",
    setup() {
      const wishes = ref<string[]>([]);
      const newWish = ref("");
      const showPopup = ref(false);
  
      const submitWish = () => {
        if (!newWish.value.trim()) return; // Prevent empty submissions
        wishes.value.push(newWish.value.trim());
        newWish.value = "";
  
        // Show popup with sparkling effect
        showPopup.value = true;
        setTimeout(() => {
          showPopup.value = false;
        }, 2000);
      };
  
      return { wishes, newWish, showPopup, submitWish };
    },
  });
  </script>
  
  <style lang="scss" scoped>
  .wishes-section {
    padding: 4rem 1rem;
    text-align: center;
    background: #f7f7f7;
  
    .wishes-title {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 2rem;
      color: #333;
    }
  
    .wishes-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
  
      .wish-input {
        width: 100%;
        max-width: 400px;
        padding: 0.8rem;
        border: none;
        border-radius: 10px;
        background: #eaeaea;
        font-size: 1rem;
        outline: none;
        transition: background 0.3s ease;
  
        &:focus {
          background: #dcdcdc;
        }
      }
  
      .submit-btn {
        padding: 0.8rem 2rem;
        background: #ff6363;
        color: white;
        border: none;
        border-radius: 10px;
        font-size: 1rem;
        cursor: pointer;
        transition: background 0.3s ease;
  
        &:hover {
          background: #ff4a4a;
        }
      }
    }
  
    .wishes-list {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      overflow: hidden;
      max-height: 300px;
  
      &.animate {
        flex-direction: row;
        justify-content: flex-start;
        animation: scrollLeft 10s linear infinite;
      }
  
      .wish-item {
        background: #fff;
        padding: 0.8rem 1.2rem;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        font-size: 1rem;
        color: #333;
        white-space: nowrap;
      }
    }
  
    /* Pop-up styling */
    .popup {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1000;
      display: flex;
      flex-direction: column;
      align-items: center;
  
      .popup-image {
        width: 100px;
        height: auto;
        margin-bottom: 1rem;
        animation: fadeIn 0.5s ease-in-out;
      }
  
      .sparkles {
        position: absolute;
        width: 120px;
        height: 120px;
        background: radial-gradient(circle, rgba(255, 215, 0, 0.6), rgba(255, 215, 0, 0));
        border-radius: 50%;
        animation: sparkle 1.5s infinite;
      }
    }
  
    /* Animations */
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: scale(0.8);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  
    @keyframes sparkle {
      0% {
        transform: scale(1);
        opacity: 0.8;
      }
      50% {
        transform: scale(1.5);
        opacity: 0.4;
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }
  
    @keyframes scrollLeft {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  }
  </style>
  