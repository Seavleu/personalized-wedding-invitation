<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'

export default defineComponent({
  name: 'ABASection',
  setup() {
    const sectionVisible = ref(false);
    let observer: IntersectionObserver;

    const observeSection = () => {
      const section = document.querySelector('.invitation-section');
      if (section) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                sectionVisible.value = true;
                observer.disconnect();
              }
            });
          },
          { threshold: 0.3 }
        );
        observer.observe(section);
      }
    };

    onMounted(() => {
      observeSection();
    });

    onUnmounted(() => {
      if (observer) observer.disconnect();
    });

    return { sectionVisible };
  },
});
</script>

<template>
  <section class="invitation-section" :class="{ 'section-visible': sectionVisible }">
    <div class="title">
      <img src="../assets//images/aba.png" alt="" />
    </div>

    <div class="detail">
      <h4>ផ្ញើរសេចក្តីអបអរ</h4>
      <p>Share Loves and Joys in celebrating with us</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.invitation-section {
  text-align: center;
  padding: 5rem 1rem;
  background: url('@/assets/images/apo.jpg') no-repeat center center;
  background-size: cover;

  &.section-visible {
    opacity: 1;
    transform: translateY(0);
  }

  img {
    width: 320px;
    height: 320px;
    animation: fadeIn 1.5s ease-out;
  }

  h4 {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 1rem;
    animation: fadeInUp 1.5s ease-out;
  }

  .title {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    text-wrap: nowrap;

    .left-item,
    .right-item {
      animation: slideInLeft 1s ease-out;

      p {
        font-size: 14px;
        color: #555;
      }

      span {
        font-family: 'GeistMono', monospace;
      }
    }

    img {
      animation: scaleIn 1.5s ease-out;
    }
  }

  .detail {
    margin-top: 30px;
    animation: fadeInUp 2s ease-out;
    width: 500px;
    margin: 30px auto;

    p {
      font-size: 34px;
      color: #555;
      font-family: 'ItaliannoReg', monospace;

      span {
        color: #fac34c;
      }

    }

    .eng {
      font-family: "ItaliannoReg", monospace;
      font-size: 26px;
    }
  }

  .eng-detail {
    width: 500px;
    margin: 30px auto;
    margin-top: 60px;
    animation: fadeIn 2s ease-out;

    dl {
      dt {
        font-size: 30px;
        color: #555;
        font-family: "ItaliannoReg", monospace;
        animation: fadeInUp 1.5s ease-out;
      }

      p {
        color: #555;
        font-size: 50px;
        font-family: "ItaliannoReg", monospace;
        margin-bottom: 30px;
        animation: scaleIn 1.5s ease-out;
      }

      .location {
        color: #555;
        font-size: 20px;
        font-family: "ItaliannoReg", monospace;
        animation: fadeInDown 1.5s ease-out;
      }

      img {
        width: 300px;
        height: auto;
        animation: fadeIn 1.5s ease-out;
      }
    }

    img {
      width: 200px;
      height: auto;
      animation: fadeInUp 1.5s ease-out;
    }
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

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

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
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

  @keyframes scaleIn {
    from {
      transform: scale(0.8);
      opacity: 0;
    }

    to {
      transform: scale(1);
      opacity: 1;
    }
  }
}
</style>
