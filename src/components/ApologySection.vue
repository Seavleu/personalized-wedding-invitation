<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'

export default defineComponent({
  name: 'ApologySection',
  setup() {
    const sectionVisible = ref(false);
    let observer: IntersectionObserver;

    const observeSection = () => {
      const section = document.querySelector('.apology-section');
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
  <section class="apology-section"
  :class="{ 'section-visible': sectionVisible }"
  >
    <div class="title">
      <img src="../assets//images/logo.jpg" alt="" />
    </div>
    <div class="detail-top">
      <h4>សេចក្តីសូមអភ័យទោស</h4>
      <br />
      <p>
        យើងខ្ញុំជាមាតា បិតា កូនប្រុសកូនស្រីសូមអភ័យទោសក្នុងករណីដែលយើងខ្ញុំពុំបានជួបអញ្ជើញដោយផ្ទាល់ យើងខ្ញុំសង្ឃឹមថា
        ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាង កញ្ញា នឹងផ្តល់កិត្តិយស
        អញ្ជើញចូលរួមក្នុងកម្មវិធីអាពាហ៍ពិពាហ៍ដោយក្តីអនុគ្រោះ សូមអរគុណ។
      </p>
      <p class="eng">
        We, as parents and the bride and groom, sincerely extend our apologies for not being able to invite you in
        person.
        We earnestly hope that His Excellency, Lok Oknha, Ladies and Gentlemen, and esteemed guests will graciously
        honor us
        with your presence at the wedding ceremony. Your presence would bring immense joy and blessings to our special
        day.
        Thank you for your kind understanding.
      </p>
    </div>
    <div class="detail-bottom">
      <br />
      <h4>សេចក្តីថ្លែងអំណរគុណ</h4>
      <br />
      <p>
        យើងខ្ញុំជាមាតា បិតា កូនប្រុសកូនស្រីសូមថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅចំពោះវត្តមាន ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក
        លោកស្រី អ្នកនាង កញ្ញា ដែលបានផ្តល់កិត្តិយស ដ៏ខ្ពង់ខ្ពស់ និង ឧដុង្គឧត្តមដល់គ្រួសារយើងខ្ញុំ
        សូមគោរពជូនពរជួបតែសេចក្តីសុខ និងជ័យជំនះគ្រប់ភារកិច្ច សូមអរគុណ។
      </p>
      <p class="eng">
        We, as parents and the bride and groom, would like to express our deepest gratitude for the gracious presence
        of His Excellency, Lok Oknha, Ladies and Gentlemen, and all esteemed guests who have honored our family
        with your precious time and presence. Your blessings and kindness mean the world to us.
        We wish you all happiness, prosperity, and success in every endeavor.
        Thank you.
      </p>
    </div>
    <div class="eng-detail">
      <img src="../assets/images/ico_divider3.png" alt="" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.apology-section {
  text-align: center;
  padding: 80px 20px; 
  background: url('@/assets/images/bg_invit.png') no-repeat center center;
  background-size: cover;

  &.section-visible {
    opacity: 1;
    transform: translateY(0);
  }

  img {
    width: 320px;
    height: 320px;
    animation: fadeIn 1.5s ease-out;

    @media (max-width: 768px) {
      width: 220px;
      height: 220px;
    }
  }

  h4 {
    font-size: 26px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 20px;
    animation: fadeInUp 1.5s ease-out;

    @media (max-width: 768px) {
      font-size: 20px; 
   }
  }

  .title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    img {
      animation: scaleIn 1.5s ease-out;
      margin: 10px 0;
    }
  }

  .detail-bottom {
    margin-top: 30px;
  }
  .detail-top, .detail-bottom { 
    animation: fadeInUp 2s ease-out;
    width: 90%;
    max-width: 500px;
    margin: 20px auto;

    p {
      font-size: 18px;
      color: #555;
      line-height: 1.6;

      @media (max-width: 768px) {
        font-size: 16px;
        line-height: 1.6;
      }

      span {
        font-family: 'GeistMono', monospace;
        color: #fac34c;
      }
    }

    .eng {
      font-family: "ItaliannoReg", monospace;
      font-size: 26px;

      @media (max-width: 768px) {
        font-size: 26px;
        line-height: 1.6;
      }
    }
  }

  .eng-detail {
    width: 100%;
    max-width: 500px;
    margin: 20px auto;
    animation: fadeIn 2s ease-out;
    img {
      width: 90%;
      height: auto;
      animation: fadeInUp 1.5s ease-out;

      @media (max-width: 768px) {
        width: 70%;
      }
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

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleIn {
    from {
      transform: scale(0.9);
      opacity: 0;
    }

    to {
      transform: scale(1);
      opacity: 1;
    }
  }
}
</style>
