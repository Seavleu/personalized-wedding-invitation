<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'

export default defineComponent({
  name: 'ApoloSection',
  setup() {
    const sectionVisible = ref(false)
    let observer: IntersectionObserver

    const observeSection = () => {
      const section = document.querySelector('.invitation-section')
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

    onMounted(() => {
      observeSection()
    })

    onUnmounted(() => {
      if (observer) observer.disconnect()
    })

    return { sectionVisible }
  }
})
</script>

<template>
  <section
    class="invitation-section"
    :class="{ 'section-visible': sectionVisible }">
    <video class="video-bg" autoplay muted loop playsinline preload="auto"
      poster="https://cdn.docsie.io/workspace_1Uj8SKn53qXCQCE3L/doc_example_poster.jpg"
    >
      <source
        src="https://cdn.docsie.io/workspace_1Uj8SKn53qXCQCE3L/doc_dfiX2csAgpT6BMmbd/file_PeHmLv9Tkbo1mqDcu/wedding_invitation_1_71faa20b-927a-625c-5fee-b8fa84c57ac8.mp4"
        type="video/mp4" />
    </video>
    <div class="title">
      <img src="https://cdn.docsie.io/workspace_1Uj8SKn53qXCQCE3L/doc_dfiX2csAgpT6BMmbd/file_wzJI1p6jjrCa5e48q/logo_62926590-643b-ad68-aaab-9c87b29d0284.jpg" alt="" />
    </div>
    <div class="letter-box">
      <div class="detail">
        <h4>សេចក្តីសូមអភ័យទោស</h4>
        <br />
        <p>
          យើងខ្ញុំជាមាតា បិតា
          កូនប្រុសកូនស្រីសូមអភ័យទោសក្នុងករណីដែលយើងខ្ញុំពុំបានជួបអញ្ជើញដោយផ្ទាល់
          យើងខ្ញុំសង្ឃឹមថា ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាង កញ្ញា
          នឹងផ្តល់កិត្តិយស អញ្ជើញចូលរួមក្នុងកម្មវិធីអាពាហ៍ពិពាហ៍ដោយក្តីអនុគ្រោះ
          សូមអរគុណ។
        </p>
      </div>
      <div class="eng-detail"> 
        <dl>
          <p>
            We, as parents and the bride and groom, sincerely extend our
            apologies for not being able to invite you in person. We earnestly
            hope that His Excellency, Lok Oknha, Ladies and Gentlemen, and
            esteemed guests will graciously honor us with your presence at the
            wedding ceremony. Your presence would bring immense joy and
            blessings to our special day. Thank you for your kind understanding.
          </p>
        </dl>
      </div>

      <div class="detail">
        <h4>សេចក្តីសូមអភ័យទោស</h4>
        <br />
        <p>
          យើងខ្ញុំជាមាតា បិតា
          កូនប្រុសកូនស្រីសូមអភ័យទោសក្នុងករណីដែលយើងខ្ញុំពុំបានជួបអញ្ជើញដោយផ្ទាល់
          យើងខ្ញុំសង្ឃឹមថា ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាង កញ្ញា
          នឹងផ្តល់កិត្តិយស អញ្ជើញចូលរួមក្នុងកម្មវិធីអាពាហ៍ពិពាហ៍ដោយក្តីអនុគ្រោះ
          សូមអរគុណ។
        </p>
      </div>
      <div class="eng-detail"> 
        <dl>
          <p>
            We, as parents and the bride and groom, sincerely extend our
            apologies for not being able to invite you in person. We earnestly
            hope that His Excellency, Lok Oknha, Ladies and Gentlemen, and
            esteemed guests will graciously honor us with your presence at the
            wedding ceremony. Your presence would bring immense joy and
            blessings to our special day. Thank you for your kind understanding.
          </p>
        </dl>
        <img src="../assets/images/ico_divider3.png" alt="" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.invitation-section {
  position: relative;
  text-align: center;  
  overflow-x: hidden;  
  width: 100%; 
  max-width: 100%;

  .video-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 190%;
    height: 100%;
    object-fit: cover;  
    z-index: -1;
    pointer-events: none;
  }
  video::-webkit-media-controls {
      display: none !important;  
  }

  &.section-visible {
    opacity: 1;
    transform: translateY(0);
  }

  img {
    width: 120px;
    height: 120px;
    animation: fadeIn 1.5s ease-out;
  }

  h4 {
    font-size: 16px;
    color: #5b7639;
    margin-bottom: 10px;
    animation: fadeInUp 1.5s ease-out;
  }

  .title {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    img {
      animation: scaleIn 1.5s ease-out;
    }
  }

  .letter-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .detail {
    margin-top: 20px;
    animation: fadeInUp 2s ease-out;
    width: 100%;
    max-width: 350px;
    margin: 20px auto;

    p {
      font-size: 12px;
      color: #5b7639;

      span {
        font-family: 'GeistMono', monospace;
        color: #d6af2d;
      }
    }
  }

  .eng-detail {
    width: 100%;
    max-width: 350px;
    margin: 30px auto;
    animation: fadeIn 2s ease-out;

    dl {
      dt {
        font-size: 24px;
        color: #5b7639;
        font-family: 'ItaliannoReg', monospace;
        animation: fadeInUp 1.5s ease-out;
      }

      p {
        color: #5b7639;
        font-size: 28px;
        font-family: 'ItaliannoReg', monospace;
        margin-bottom: 20px;
        animation: scaleIn 1.5s ease-out;
      }

      .location {
        color: #5b7639;
        font-size: 16px;
        font-family: 'ItaliannoReg', monospace;
        animation: fadeInDown 1.5s ease-out;
      }

      img {
        width: 300px;
        height: auto;
        animation: fadeIn 1.5s ease-out;
      }
    }

    img {
      width: 300px;
      height: auto;
      animation: fadeInUp 1.5s ease-out;
    }
  }
  }

  @media (max-width: 768px) {
    padding: 50px 10px;

    img {
      width: 100px;
      height: 100px;
    }

    h4 {
      font-size: 14px;
    }

    .detail,
    .eng-detail {
      max-width: 300px;

      p {
        font-size: 10px;
      } 
    }
  }

  @media (max-width: 480px) {
    padding: 40px 10px;

    img {
      width: 80px;
      height: 80px;
    }

    h4 {
      font-size: 12px;
    }

    .detail,
    .eng-detail {
      max-width: 280px;

      p {
        font-size: 10px;
      }
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
