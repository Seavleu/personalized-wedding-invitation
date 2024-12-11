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
  <section
    class="aba-section"
    :class="{ 'section-visible': sectionVisible }">
    <div class="title">
      <img src="../assets/images/divider2.png" alt="Elegant Divider" />
    </div>
    <div class="detail">
      <h4>ផ្ញើរសេចក្តីអបអរ</h4>
      <p>Share Loves and Joys in celebrating with us</p>
      <button class="show-qr-btn" @click="toggleQR">ចំណងមាសចំណងប្រាក់</button>
      <div v-if="showQR" class="qr-container">
        <img src="@/assets/images/aba.png" alt="Bank Account QR Code" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.aba-section {
  position: relative;
  text-align: center;
  padding: 0; 
  margin: 0;
  width: 100%;
  height: 100vh; 
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('@/assets/images/gallery4.jpg') no-repeat center center fixed;
  background-size: cover;  
  background-attachment: fixed;  
  min-height: 50vh;
 
  @media (max-width: 768px) {
    background-size: contain;
    background-attachment: scroll;
  }

  @media (max-width: 480px) {
    background-size: cover; 
    background-attachment: scroll;
  }
  .title {
    img {
      width: 20%;
      height: auto;
      animation:
        fadeIn 1.5s ease-out,
        pulse 2s infinite;

        @media (max-width: 768px) {
        width: 50%;
      }

    }
  }
  .detail {
    margin-top: 30px;
    h4 {
      font-size: 32px;
    }
    p {
      font-size:32px;
      font-family: 'ItaliannoReg', sans-serif;
      color: #5b7639;
    }

    .show-qr-btn {
      position: relative;
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
      box-shadow:
        0 4px 6px rgba(0, 0, 0, 0.1),
        0 1px 3px rgba(0, 0, 0, 0.06);
      transition: all 0.3s ease;
      &:hover {
        background: linear-gradient(135deg, #f39c12, #e67e22);
        transform: translateY(-2px);
        box-shadow:
          0 10px 15px rgba(0, 0, 0, 0.2),
          0 4px 6px rgba(0, 0, 0, 0.1);
      }
      &:active {
        transform: translateY(1px);
        box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.2);
      }
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        background: rgba(250, 195, 76, 0.5);
        border-radius: 50px;
        transform: translate(-50%, -50%) scale(1);
        z-index: -1;
        opacity: 0;
        animation: pulse 2s infinite;
      }

      @keyframes pulse {
        0% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 0.6;
        }
        50% {
          transform: translate(-50%, -50%) scale(1.1);
          opacity: 0;
        }
        100% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 0;
        }
      }
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
      }

      @keyframes ripple {
        0% {
          transform: scale(0);
          opacity: 0.8;
        }
        100% {
          transform: scale(10);
          opacity: 0;
        }
      }
    }
    .qr-container {
      margin-top: 20px;

      img {
        width: 200px;
        height: auto;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        animation: fadeIn 0.5s ease-in-out;
      }
    }
  }

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
