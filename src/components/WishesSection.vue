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

    const submitWish = () => {
      if (!newWish.value.trim()) return;
      wishes.value.push({
        name: userName.value || "Anonymous",
        message: newWish.value.trim(),
      });
      lastSender.value = userName.value || "Anonymous";
      newWish.value = "";
      userName.value = "";

      // Show gratitude popup
      showPopup.value = true;
      setTimeout(() => (showPopup.value = false), 2000);
    };

    return {
      wishes,
      newWish,
      userName,
      showPopup,
      lastSender,
      submitWish,
    };
  },
});
</script>

<template>
  <section class="wishes-section">
    <h2 class="wishes-title">ចែករំលែកក្តីស្រលាញ់ទៅកាន់គូរស្នេហ៌ </h2>
    <h2>May we ask for blessing</h2>
    <form @submit.prevent="submitWish" class="wishes-form">
      <input
        type="text"
        v-model="userName"
        placeholder="ឈ្មោះភ្ញៀវកិត្តិយស"
        class="wish-input"
      />
      <textarea
        v-model="newWish"
        placeholder="សារជូនពរ..."
        class="wish-input textarea"
        rows="3"
      ></textarea>
      <button type="submit" class="submit-btn">ជូនពរ</button>
    </form>

    <div class="wishes-list" v-if="wishes.length > 0">
      <div v-for="(wish, index) in wishes" :key="index" class="wish-card">
        <p class="wish-message">💐 {{ wish.message }} 💐</p>
        <p class="wish-sender">- {{ wish.name || "Anonymous" }} 🥰</p>
      </div>
    </div>

    <div v-if="showPopup" class="popup">
      <div class="popup-card">
        <p>សូមថ្លែងអំណរគុណចំពោះ {{ lastSender }} 🥰</p>
        <p>យើងខ្ញុំព្រមទាំងគ្រួសារទទួលបានពរសារជ្រាលជ្រៅនេះហើយ 😊🙏🏻</p>
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
    font-size: 28px;
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
      background-color: rgba(255, 238, 0, 0.1);
      width: 100%;
      max-width: 400px;
      padding: 0.8rem;
      border: 1px solid #fffbfb;
      border-radius: 10px;
      font-size: 1rem;
      resize: none;

      &:focus {
        border-color: #fac34c;
        outline: none;
      }
    }

    .textarea {
      height: auto;
      background-color: rgba(255, 238, 0, 0.1);
      min-height: 80px;
    }

    .submit-btn {
      padding: 0.8rem 2rem;
      background: #fac34c; 
      color: white;
      border: none;
      border-radius: 10px;
      font-size: 1rem;
      cursor: pointer;

      &:hover {
        background: #fac34c;

      }
    }
  }

  .wishes-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 500px;
    margin: 0 auto;

    .wish-card {
      background-color: rgba(255, 238, 0, 0.1);
      padding: 1rem;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: left;
      word-wrap: break-word;
      overflow-wrap: break-word;

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
