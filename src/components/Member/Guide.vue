<template>
  <div class="col-md-9">
    <div class="card">
      <div class="card-body">
        <h2 class="form-title">會員導引</h2>

        <div class="welcome">
          <img src="@/assets/images/welcome.png" alt="歡迎圖" />
        </div>

        <ul class="mt-4">
          <li>需以中英文雙語填寫。</li>
          <li>系統開放時間為9 月14 日（一）至9 月30 日（三），逾期恕不受理。</li>
          <li>
            本表資料將用於大會行銷宣傳，包括大會手冊、官網等等，請詳細填寫，以確保貴公司權益。
          </li>
          <li>一家公司至多可申請4 張參展證。</li>
          <li>
            請詳讀簡章後再進行填寫。<a href="https://taicca.tw/article/0431f8db" target="_blank"
              >https://taicca.tw/article/0431f8db</a
            >
          </li>
          <li>
            閣林文創【2020 創意內容大會 – 台北內容交易會】工作小組<br />
            聯絡信箱：<a href="mailto:cct2020taipei@gmail.com">cct2020taipei@gmail.com</a><br />
            聯絡電話：(02) 5558-1860 籌備小組
          </li>
        </ul>

        <b-alert
          show
          fade
          dismissible
          variant="warning"
          v-if="card.indexOf('NotFillBasicInfo') >= 0"
        >
          <strong>尚未完成基本資料填寫！</strong> <br />
          您好，為能提高媒合需請您提供更多公司資訊，請先至「會員基本資料」填寫公司基本資料。
        </b-alert>
        <b-alert show fade dismissible variant="warning" v-if="card.indexOf('NotUpPortfolio') >= 0">
          <strong>作品集沒有資料！</strong> <br />
          作品集沒有任何作品，請點擊「作品集」登錄您的作品訊息。
        </b-alert>
        <b-alert show fade dismissible variant="warning" v-if="card.indexOf('NotApplyIDCard') >= 0">
          <strong>尚未申請識別證！</strong> <br />
          您尚未申請活動識別證，點擊「活動識別證管理」進行申請與活動報名。
        </b-alert>
      </div>
      <div class="card-footer text-muted text-center bg-transparent">
        <img
          class="rounded mx-auto d-block m-3"
          src="@/assets/images/ticcalogo.png"
          alt="TAICCA"
          style="width: 300px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { apiGuide } from '@/api/index'

export default {
  data() {
    return {
      card: [],
    }
  },
  methods: {
    async Send() {
      let loader = this.$loading.show()
      await apiGuide()
        .then(response => {
          this.card = response.data
        })
        .catch(err => {})
      loader.hide()
    },
  },
  mounted() {
    this.Send()
  },
}
</script>
