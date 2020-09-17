<template>
  <main role="main" class="registered">
    <div class="login">
      <div class="card-center">
        <logo />
        <form class="form-signin">
          <h2>會員登入</h2>
          <div class="form-group">
            <label for="email">帳號</label>
            <input
              type="text"
              class="form-control"
              id="email"
              name="email"
              placeholder="請輸入帳號"
              v-model.trim="$v.login.emailAccount.$model"
              :class="{ 'is-invalid': $v.login.emailAccount.$error }"
              maxlength="50"
              autofocus
            />
            <div class="invalid-feedback" v-if="!$v.login.emailAccount.required">此欄位為必填</div>
            <div class="invalid-feedback" v-if="!$v.login.emailAccount.email">
              請輸入正確的電子郵件
            </div>
          </div>
          <div class="form-group">
            <label for="pwd">密碼</label>
            <input
              type="password"
              class="form-control"
              id="pwd"
              name="pwd"
              placeholder="請輸入密碼"
              v-model.trim="$v.login.pwd.$model"
              :class="{ 'is-invalid': $v.login.pwd.$error }"
              @keyup.enter="clickSubmit"
              maxlength="14"
            />
            <div class="invalid-feedback" v-if="!$v.login.pwd.required">此欄位為必填</div>
            <div class="invalid-feedback" v-if="!$v.login.pwd.minLength">密碼至少8碼英文或數字</div>
            <div class="invalid-feedback" v-if="!$v.login.pwd.maxLength">
              密碼至多14碼英文或數字
            </div>
          </div>

          <button
            class="btn btn-lg btn-block btn-signin"
            type="button"
            @click="clickSubmit"
            :disabled="submitStatus === 'PENDING'"
          >
            登入
          </button>

          <div class="forgot-register">
            <router-link to="/registered">註冊</router-link>
            <router-link to="/forgetpw">忘記密碼</router-link>
          </div>
        </form>
        <p class="text-center mt-4">
          <img src="@/assets/images/guide-taicca.png" alt="TAICCA文化內容策進院" />
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import { apiLogin } from '@/api/index'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import Logo from '@/components/Common/Logo.vue'

export default {
  data() {
    return {
      submitStatus: null,
      login: {
        emailAccount: '',
        pwd: '',
      },
    }
  },
  validations: {
    login: {
      pwd: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(14),
      },
      emailAccount: {
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
      await apiLogin(this.login)
        .then(response => {
          this.submitStatus = null
          this.$store.dispatch('auth/setAuth', {
            token: response.data.loginToken,
            isLogin: true,
            memberCategory: response.data.memberCategory,
            memberKind: response.data.memberKind,
            memberType: response.data.memberType,
          })
          this.$router.push({ path: 'member' })
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
