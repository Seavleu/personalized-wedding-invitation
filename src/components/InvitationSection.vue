<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'

export default defineComponent({
  name: 'InvitationSection',
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
  <section class="invitation-section"
  :class="{ 'section-visible': sectionVisible }"
  >
  <video class="video-bg" autoplay muted loop playsinline>
      <source
        src="https://cdn.docsie.io/workspace_1Uj8SKn53qXCQCE3L/doc_dfiX2csAgpT6BMmbd/file_QdbYJzuYIp23p1P2A/wedding_invitation_b6cad23a-4581-aa90-b493-1dd06c22a641.mp4"
        type="video/mp4" />
    </video>
    <div class="title">
      <div class="left-item">
        <p>
          លោក <span><strong>ហ៊ិន ហេង</strong></span>
          <br />
          លោកស្រី <span><strong>ហ៊ិន សុផានី</strong></span>
        </p>

        <div class="son">
          <p>
            កូនប្រុសនាម <br />
            <span><strong>ហ៊ិន សិលា</strong></span>
          </p>
        </div>
      </div>
      <img src="https://cdn.docsie.io/workspace_1Uj8SKn53qXCQCE3L/doc_dfiX2csAgpT6BMmbd/file_wzJI1p6jjrCa5e48q/logo_62926590-643b-ad68-aaab-9c87b29d0284.jpg" alt="" />
      <div class="right-item">
        <p>
          លោក <span><strong>ហ៊ាង វ៉ាន់ឌី</strong></span>
          <br />
          លោកស្រី <span><strong>ហ៊ាន គឹមហួរ</strong></span>
        </p>

        <div class="daught">
          <p>កូនស្រីនាម <br /><span><strong>ហ៊ាង ស៊ីវហួយ</strong></span></p>
        </div>
      </div>
    </div>

    <div class="detail">
      <h4>យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ</h4>
      <br />
      <p>
        ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា
        និងប្រិយមិត្តអញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស
        ដើម្បីប្រសិទ្ធិពរជ័យ សិរីសួស្តីមង្គលក្នុងពិធីអាពាហ៍ពិពាហ៍
        របស់យើងខ្ញុំទាំងពីរ ដែលនឹងប្រព្រឹត្តទៅនៅ <br /><span>ថ្ងៃអាទិត្យ ទី ៧កើត ខែបុស្ស ឆ្នាំរោង ឆស័ក ព.ស ២៥៦៨
          ត្រូវនឹងថ្ងៃទី ៥
          ខែមករា ឆ្នាំ២០២៥</span>
        <br />វេលាម៉ោង <span>៥:០០ នាទីល្ងាច</span> ស្ថិតនៅ
        <span>បុរីអាពាហ៍ពិពាហ៍ (អគារ A)</span> ផ្លូវលោកតាខៀវណឺយ ដោយមេត្រីភាព
        សូមអរគុណ។
      </p>
    </div>

    <div class="eng-detail">
      <img src="../assets/images/ico_divider02.png" alt="" />
      <dl>
        <dt>
          We warmly invite you to grace the auspicious occasion of our Wedding
          Reception with your presence.
        </dt>
        <p><br><strong>05 January 2025 </strong><br></p> 
        <dt class="location">
          <br>
          At Borey Apea Pipea (Building A) Lok Ta Khieu Neuy Street,
          <br />
          Thank you!
        </dt>
      </dl>
      <img src="../assets/images/ico_divider2.png" alt="" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.invitation-section {
  position: relative;
  text-align: center; 
  padding: 30px; 
  .video-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;  
    z-index: -1;
  }

  @media (max-width: 768px) {
    background-size: cover; 
    background-attachment: scroll; 
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

    .left-item,
    .right-item {
      animation: slideInLeft 1s ease-out;

      p {
        font-size: 12px;
        color: #5b7639;
        margin-bottom: 5px;
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
        font-family: "ItaliannoReg", monospace;
        animation: fadeInUp 1.5s ease-out;
      }

      p {
        color: #5b7639;
        font-size: 28px;
        font-family: "ItaliannoReg", monospace;
        margin-bottom: 20px;
        animation: scaleIn 1.5s ease-out;
      }

      .location {
        color: #5b7639;
        font-size: 16px;
        font-family: "ItaliannoReg", monospace;
        animation: fadeInDown 1.5s ease-out;
      }

      img {
        width: 250px;
        height: auto;
        animation: fadeIn 1.5s ease-out;
      }
    }

    img {
      width: 150px;
      height: auto;
      animation: fadeInUp 1.5s ease-out;
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
