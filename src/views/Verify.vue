<template>
  <main role="main" class="registered">
    <div class="container">
      <logo />

      <div class="step">
        <div class="motion text-center">
          <ul>
            <li class="done"><span>1</span>註冊帳號</li>
            <li class="active"><span>2</span>完成</li>
          </ul>
        </div>

        <div class="card">
          <div class="success text-center" v-if="isForm">
            <i class="fas fa-check-circle"></i>
            <p>信箱驗證成功！<br />請登入會員並填寫資料</p>
          </div>
          <div class="verification error text-center" v-if="!isForm">
            <i class="fas fa-exclamation-circle"></i>
            <p>信箱驗證失敗！</p>
            <button
              class="btn btn-resend btn-countdown"
              type="button"
              ref="verify"
              @click="SendVerify"
              data-num="60"
              data-text="已發送認證信"
            >
              {{ countdownText }}
            </button>
          </div>
        </div>

        <div class="btn-area" v-if="isForm">
          <button type="button" class="btn btn-outline-dark" @click="Login">確認</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { apiValidate, apiValidateMail } from '@/api/index'
import Logo from '@/components/Common/Logo.vue'

export default {
  data() {
    return {
      countdownText: '重新發送驗證連結',
      isCount: false,
      isForm: true,
      Register: {
        validateCode: '',
      },
      emailAccount: '',
    }
  },
  methods: {
    Login() {
      this.$router.push('/')
    },
    async SendVerify() {
      this.countdownset()
      await apiValidateMail({ emailAccount: this.emailAccount })
    },
    countdownset() {
      if (!this.isCount) {
        this.isCount = true
        let e = this.$(this.$refs.verify)
        var origin = e.text(),
          text = e.data('text'),
          num = parseInt(e.data('num'), 10) || 10
        e.data('origin', origin)
        if (!text) {
          text = origin
        }
        this.countdown(e, num, text)
      }
    },
    countdown(e, s, t) {
      s -= 1
      if (s >= 0) {
        e.prop('disabled', true)
        this.countdownText = t + ' (' + (s + 1) + ')'
        setTimeout(() => this.countdown(e, s, t), 1000)
      } else {
        e.prop('disabled', false)
        this.countdownText = e.data('origin')
        this.isCount = false
      }
    },
    async Send() {
      let loader = this.$loading.show()
      this.Register.validateCode = this.$route.params.code
      this.emailAccount = this.$route.params.mail
      await apiValidate(this.Register)
        .then(response => {})
        .catch(err => {
          this.isForm = false
        })
      loader.hide()
    },
  },
  components: {
    Logo,
  },
  mounted() {
    this.Send()
  },
}
</script>

<style>
.verification,
.error {
  padding: 4.5rem 0;
}

.error i {
  font-size: 6rem;
  margin-bottom: 1rem;
  color: #f35742;
}

.error p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #f35742;
}
</style>
