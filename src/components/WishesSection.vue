<script lang="ts">
import { databases, Models } from "@/lib/appwrite";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "WishesSection",
  setup() {
    const wishes = ref<{ name: string; message: string }[]>([]);
    const newWish = ref("");
    const userName = ref("");
    const showPopup = ref(false);
    const lastSender = ref("");
    showPopup.value = true;
    setTimeout(() => (showPopup.value = false), 2000);

    const submitWish = async () => {
      if (!newWish.value.trim()) return;

      try {
        console.log("Submitting wish...");

        const response = await databases.createDocument(
          "67543c840032f8f28d75", // Database ID
          "67543c9b002b18cca0e0", // Collection ID
          "unique()", // Document ID
          {
            name: userName.value || "Anonymous",
            message: newWish.value.trim(),
          }
        );

        console.log("Wish submitted successfully:", response);

        // Add to the top of the local list
        wishes.value.unshift({
          name: response.name || "Anonymous",
          message: response.message || "",
        });

        lastSender.value = userName.value || "Anonymous";
        newWish.value = "";
        userName.value = "";

        // Show the popup
        showPopup.value = true;
        console.log("Popup triggered");
        setTimeout(() => (showPopup.value = false), 2000);

      } catch (error: any) {
        console.error("Error saving wish:", error.message || error);
      }
    };
    const fetchWishes = async () => {
      try {
        const response = await databases.listDocuments(
          "67543c840032f8f28d75",
          "67543c9b002b18cca0e0"
        );

        wishes.value = response.documents.map((doc: any) => ({
          name: doc.name || "Anonymous",
          message: doc.message || "",
        }));
      } catch (error: any) {
        console.error("Error fetching wishes:", error.message || error);
      }
    };

    onMounted(fetchWishes);

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
    <h2 class="wishes-title">ចែករំលែកក្តីស្រលាញ់ទៅកាន់គូរស្នេហ៌</h2>
    <form @submit.prevent="submitWish" class="wishes-form">
      <input type="text" v-model="userName" placeholder="ឈ្មោះភ្ញៀវកិត្តិយស" class="wish-input" />
      <textarea v-model="newWish" placeholder="ដោយក្តីស្រលាញ់..." class="wish-input textarea" rows="3"></textarea>
      <button type="submit" class="submit-btn">ជូនពរ</button>
    </form>

    <div class="wishes-list">
      <div v-for="(wish, index) in wishes" :key="index" class="wish-card">
        <p class="wish-message">💐 {{ wish.message }} 💐</p>
        <p class="wish-sender">- {{ wish.name }} 🥰</p>
      </div>
    </div>

    <div v-if="showPopup" class="popup">
      <div class="popup-card">
        <p>សូមថ្លែងអំណរគុណចំពោះ {{ lastSender }}! 🎉</p>
        <p>យើងខ្ញុំព្រមទាំងគ្រួសារទទួលបានពរសារជ្រាលជ្រៅនេះហើយ 😊🙏🏻</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.wishes-section {
  padding: 40px 15px;
  text-align: center;
  background: #fdfdfd;

  /* Title */
  .wishes-title {
    font-size: 28px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;

    @media (max-width: 480px) {
      font-size: 22px;
    }
  }

  /* Form */
  .wishes-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;

    .wish-input,
    .textarea {
      background-color: rgba(255, 238, 0, 0.1);
      width: 100%;
      max-width: 400px;
      padding: 12px;
      border: 1px solid #fffbfb;
      border-radius: 10px;
      font-size: 1rem;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;

      &:focus {
        border-color: #fac34c;
        box-shadow: 0 0 5px rgba(250, 195, 76, 0.5);
        outline: none;
      }
    }

    .textarea {
      height: auto;
      min-height: 100px;
      resize: vertical;
    }

    .submit-btn {
      padding: 12px 24px;
      background: #fac34c;
      color: white;
      border: none;
      border-radius: 10px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: darken(#fac34c, 10%);
      }
    }
  }

  /* Wishes List */
  .wishes-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 450px;
    margin: 0 auto;

    .wish-card {
      background-color: rgba(255, 238, 0, 0.1);
      padding: 12px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: left;
      word-wrap: break-word;
      overflow-wrap: break-word;
      opacity: 0;
      animation: fadeInCard 0.8s ease-out forwards;

      &:nth-child(odd) {
        animation-delay: 0.2s;
      }

      &:nth-child(even) {
        animation-delay: 0.4s;
      }

      .wish-message {
        font-size: 1rem;
        margin-bottom: 6px;
        color: #555;
      }

      .wish-sender {
        font-size: 0.9rem;
        font-weight: bold;
        color: #333;
      }
    }
  }

  /* Popup */
  .popup {
    position: fixed; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;  
    background: rgba(0, 0, 255, 0.1); 
    border: 3px solid rgba(0, 0, 255, 0.3); 
    border-radius: 15px;
    backdrop-filter: blur(8px); 
    padding: 1.5rem 2rem;
    text-align: center;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.5s ease-out;

    .popup-card {
      font-size: 1.2rem;
      color: #333;
      font-weight: bold;

      p {
        margin: 0.5rem 0;
      }
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate(-50%, -60%);
    }

    to {
      opacity: 1;
      transform: translate(-50%, -50%);
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

  @keyframes fadeInCard {
    from {
      opacity: 0;
      transform: translateY(20px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
