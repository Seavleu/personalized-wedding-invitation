<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'

export default defineComponent({
  name: 'ABASection',
  setup() {
    const sectionVisible = ref(false)
    const showQR = ref(false)
    let observer: IntersectionObserver

    const observeSection = () => {
      const section = document.querySelector('.aba-section')
      if (section) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                sectionVisible.value = true
                observer.disconnect()
              }
            })
          },
          { threshold: 0.3 }
        )
        observer.observe(section)
      }
    }

    const toggleQR = () => {
      showQR.value = !showQR.value
    }

    onMounted(() => {
      observeSection()
    })

    onUnmounted(() => {
      if (observer) observer.disconnect()
    })

    return { sectionVisible, showQR, toggleQR }
  }
})
</script>

<template>
  <section class="aba-section" :class="{ 'section-visible': sectionVisible }">
    <div class="title">
      <img src="../assets/images/divider2.png" alt="Elegant Divider" />
    </div>
    <div class="detail">
      <h4>ផ្ញើរសេចក្តីអបអរ</h4>
      <p>Share Loves and Joys in celebrating with us</p>

      <!-- Toggle QR Code -->
      <button class="show-qr-btn" @click="toggleQR">
        {{ showQR ? "អរគុណចំពោះសេចក្តីស្រលាញ់" : "ចំណងមាសចំណងប្រាក់" }}
      </button>

      <!-- Transition for QR Code -->
      <transition name="qr-fade">
        <div v-if="showQR" class="qr-container">
          <img
            src="https://cdn.docsie.io/workspace_1Uj8SKn53qXCQCE3L/doc_dfiX2csAgpT6BMmbd/file_cpwXfFGTphLe1GHLU/aba_4f8b6be6-1b4b-79ca-9c32-f6d8a85abf3a.png"
            alt="Bank Account QR Code"
          />
        </div>
      </transition>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.aba-section {
  position: relative;
  text-align: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('@/assets/images/gallery4.jpg') no-repeat center center fixed;
  background-size: cover;
  min-height: 50vh;

  .title img {
    width: 20%;
    animation: fadeIn 1.5s ease-out, pulse 2s infinite;

    @media (max-width: 768px) {
      width: 50%;
    }
  }

  .detail {
    margin-top: 30px;

    h4 {
      font-size: 32px;
    }

    p {
      font-size: 32px;
      font-family: 'ItaliannoReg', sans-serif;
      color: #5b7639;
    }

    .show-qr-btn {
      background: linear-gradient(135deg, #fac34c, #f39c12);
      color: #fff;
      border: none;
      padding: 12px 24px;
      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;
      border-radius: 50px;
      cursor: pointer;
      margin-top: 20px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      animation: fadeIn 1.5s ease-out, pulse 2s infinite;

      &:hover {
        background: linear-gradient(135deg, #f39c12, #e67e22);
        transform: translateY(-2px);
      }
    }

    /* QR Code Animation */
    .qr-container {
      margin-top: 20px;

      img {
        width: 350px;
        height: auto;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

        @media (max-width: 768px) {
          width: 300px;
        }
      }
    }
  }

  /* Vue Transitions for QR Code */
  .qr-fade-enter-active,
  .qr-fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  .qr-fade-enter-from,
  .qr-fade-leave-to {
    opacity: 0;
    transform: scale(0.8);
  }

  /* Keyframes */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>

