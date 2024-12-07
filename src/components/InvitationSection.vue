<template>
  <section class="invitation-section">
    <!-- <img src="../assets/images/invitation.png" alt="" /> -->

    <div class="title">
      <div class="left-item">
        <p>
          លោក <span>ហ៊ិន ហេង</span>
          <br />
          លោកស្រី <span>ហ៊ិន សុផានី</span>
        </p>

        <div class="son">
          <p>
            កូនប្រុសនាម <br />
            <span>ហ៊ិន សិលា</span>
          </p>
        </div>
      </div>
      <img src="../assets//images/logo.png" alt="" />
      <div class="right-item">
        <p>
          លោក <span>ហ៊ាង វ៉ាន់ឌី</span>
          <br />
          លោកស្រី <span>ហ៊ាន គឺមហួរ</span>
        </p>

        <div class="daught">
          <p>កូនស្រីនាម <br /><span>ហ៊ាង ស៊ីវហួយ</span></p>
        </div>
      </div>
    </div>

    <div class="detail">
      <h4>យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ</h4>
      <p>
        ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា
        និងប្រិយមិត្តអញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស
        ដើម្បីប្រសិទ្ធិពរជ័យ សិរីសួស្តីមង្គលក្នុងពិធីអាពាហ៍ពិពាហ៍
        របស់យើងខ្ញុំទាំងពីរ ដែលនឹងប្រព្រឹត្តទៅនៅ <span>ថ្ងៃអាទិត្យ ទី ៧កើត ខែបុស្ស
          ឆ្នាំរោង ឆស័ក ព.ស ២៥៦៨ ត្រូវនឹងថ្ងៃទី ៥ ខែមករា ឆ្នាំ២០២៥</span> វេលាម៉ោង <span>៥:០០
            នាទីល្ងាច</span> ស្ថិតនៅ <span>បុរីអាពាហ៍ពិពាហ៍ (អគារ A)</span> ផ្លូវលោកតាខៀវណឺយ
        ដោយមេត្រីភាព សូមអរគុណ។
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InvitationSection'
})
</script>

<style lang="scss" scoped>
.invitation-section {
  text-align: center;
  padding: 2rem 1rem;

  img {
    width: 30%;
    height: 40%;
  }
  h2 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .title {
    display: flex;
    justify-content: center;
    flex-direction: row;

    .left-item,
    .right-item {
      margin-bottom: 30px;
      p {
        margin-bottom: 20px;
        font-size: 14px;
      }
    }
  }

  .detail {
    p {
      font-size: 14px; 

      span {
        font-family: "GeistMono", monospace; 
        color: rgb(245, 241, 33);
      }
    }
  }
}
</style>
