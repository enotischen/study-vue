<template>
  <main role="main" class="registered">
    <div class="password">
      <div class="card-center">
        <logo />

        <form class="form-signin">
          <div v-if="isForm">
            <h2>忘記密碼</h2>
            <div class="form-group">
              <label for="email">Email帳號</label>
              <input
                type="text"
                class="form-control"
                id="email"
                name="email"
                v-model.trim="$v.Forget.account.$model"
                :class="{ 'is-invalid': $v.Forget.account.$error }"
                maxlength="50"
              />
              <div class="invalid-feedback" v-if="!$v.Forget.account.required">此欄位為必填</div>
              <div class="invalid-feedback" v-if="!$v.Forget.account.email">
                請輸入正確的電子郵件
              </div>
            </div>

            <button
              type="button"
              class="btn btn-block btn-signin"
              @click="clickSubmit"
              :disabled="submitStatus === 'PENDING'"
              v-if="isForm"
            >
              送出
            </button>
            <div class="forgot-register" v-if="isForm">
              <router-link to="/">取消</router-link>
            </div>
          </div>

          <div class="verification text-center" v-if="!isForm">
            <i class="fas fa-envelope-open-text"></i>
            <h3>
              系統會設定一組亂數作為新密碼，請到您註冊的E-Mail信箱取得，登入後請記得更新您的密碼。
            </h3>
            <p class="email">
              The system will send you a set of random numbers as your new password. Please get it
              from your registered E-Mail inbox, and update your password after logging in.
            </p>
            <router-link to="/login" class="btn btn-block btn-signin">回登入頁</router-link>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import { apiForget } from '@/api/index'
import { required, email } from 'vuelidate/lib/validators'
import Logo from '@/components/Common/Logo.vue'

export default {
  data() {
    return {
      submitStatus: null,
      isForm: true,
      Forget: {
        account: '',
      },
    }
  },
  validations: {
    Forget: {
      account: {
        required,
        email,
      },
    },
  },
  methods: {
    clickSubmit() {
      this.submitStatus = 'PENDING'
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.Send()
      }
    },
    async Send() {
      let loader = this.$loading.show()
      await apiForget(this.Forget)
        .then(response => {
          this.submitStatus = null
          this.isForm = false
        })
        .catch(err => {
          this.errorCode(err)
          this.submitStatus = null
        })
      loader.hide()
    },
  },
  components: {
    Logo,
  },
}
</script>
