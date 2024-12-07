<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "WishesSection",
  setup() {
    const wishes = ref<{ name: string; message: string }[]>([]);
    const newWish = ref("");
    const userName = ref("");
    const showPopup = ref(false);
    const lastSender = ref("");
    const carousel = ref<HTMLElement | null>(null);

    const submitWish = () => {
      if (!newWish.value.trim()) return;
      wishes.value.push({
        name: userName.value || "Anonymous",
        message: newWish.value.trim(),
      });
      console.log("Updated Wishes List:", wishes.value); // Debugging log
      lastSender.value = userName.value || "Anonymous";
      newWish.value = "";
      userName.value = "";

      // Show gratitude popup
      showPopup.value = true;
      setTimeout(() => (showPopup.value = false), 2000);
    };


    const scrollLeft = () => {
      if (carousel.value) {
        carousel.value.scrollBy({ left: -300, behavior: "smooth" });
      }
    };

    const scrollRight = () => {
      if (carousel.value) {
        carousel.value.scrollBy({ left: 300, behavior: "smooth" });
      }
    };

    return {
      wishes,
      newWish,
      userName,
      showPopup,
      lastSender,
      scrollLeft,
      scrollRight,
      carousel,
      submitWish,
    };
  },
});
</script>


<template>
  <section class="wishes-section">
    <h2 class="wishes-title">សារជូនពរ</h2>
    <form @submit.prevent="submitWish" class="wishes-form">
      <input type="text" v-model="userName" placeholder="Your Name" class="wish-input" />
      <input type="text" v-model="newWish" placeholder="Write your wish here..." class="wish-input" />
      <button type="submit" class="submit-btn">ជូនពរ</button>
    </form>

    <div class="wishes-carousel" v-if="wishes.length > 0">
      <button @click="scrollLeft" class="arrow left-arrow" v-if="wishes.length > 5">‹</button>
      <div class="wishes-list" ref="carousel" :class="{ animate: wishes.length > 5 }">
        <div v-for="(wish, index) in wishes" :key="index" class="wish-card">
          <p class="wish-message">💐{{ wish.message }}💐</p>
          <p class="wish-sender">- {{ wish.name || 'Anonymous' }}🥰</p>
        </div>
      </div>
      <button @click="scrollRight" class="arrow right-arrow" v-if="wishes.length > 5">›</button>
    </div>

    <div v-if="showPopup" class="popup">
      <div class="popup-card">
        <p>Thank you, {{ lastSender }}! 🎉</p>
        <p>Your message has been sent successfully.</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.wishes-section {
  padding: 4rem 1rem;
  text-align: center;
  background: #fdfdfd;

  .wishes-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 2rem;
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
      border: 1px solid #ccc;
      border-radius: 10px;
      font-size: 1rem;

      &:focus {
        border-color: #ff6363;
        outline: none;
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

      &:hover {
        background: #ff4a4a;
      }
    }
  }

  .wishes-carousel {
    position: relative;

    .arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: #ff6363;
      color: white;
      border: none;
      font-size: 2rem;
      cursor: pointer;
      border-radius: 50%;
      width: 40px;
      height: 40px;

      &.left-arrow {
        left: -20px;
      }

      &.right-arrow {
        right: -20px;
      }
    }
  }

  .wishes-list {
    display: flex;
    gap: 1rem;
    overflow-x: auto; /* Horizontal scrolling */
    white-space: nowrap; /* Prevent wrapping */
    padding: 1rem;
    background: #f9f9f9;
    border-radius: 10px;
    max-width: 600px;
    margin: 0 auto;
  }

  .wish-card {
    background: #fff;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: left;
    min-width: 250px; /* Ensure cards are visible */
    word-wrap: break-word;

    .wish-message {
      font-size: 1rem;
      margin-bottom: 0.5rem;
      color: #555;
    }

    .wish-sender {
      font-size: 0.9rem;
      font-weight: bold;
      color: #333;
    }
  }

  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffefc1;
    border-radius: 10px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    animation: fadeIn 0.5s ease-in-out;

    .popup-card {
      font-size: 1.2rem;
      color: #333;
      font-weight: bold;
    }
  }

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
}
</style>