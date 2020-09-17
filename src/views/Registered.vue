<template>
  <main role="main" class="registered">
    <div class="container">
      <logo />

      <div class="step">
        <div class="motion text-center">
          <ul>
            <li class="active"><span>1</span>註冊帳號</li>
            <li class=""><span>2</span>完成</li>
          </ul>
        </div>

        <div class="card" v-if="isForm">
          <div class="card-body">
            <small id="text-example-help" class="form-text text-muted text-center"
              >公司單位請以參展人信箱註冊</small
            >
            <div class="form-group">
              <label for="email">Email帳號</label>
              <input
                type="text"
                class="form-control"
                id="email"
                name="email"
                placeholder="請輸入Email"
                v-model.trim="$v.Register.emailAccount.$model"
                :class="{ 'is-invalid': $v.Register.emailAccount.$error }"
                maxlength="50"
              />
              <div class="invalid-feedback" v-if="!$v.Register.emailAccount.required">
                此欄位為必填
              </div>
              <div class="invalid-feedback" v-if="!$v.Register.emailAccount.email">
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
                placeholder="請輸入8-14碼英文或數字"
                v-model.trim="$v.Register.pwd.$model"
                :class="{ 'is-invalid': $v.Register.pwd.$error }"
                maxlength="14"
              />
              <div class="invalid-feedback" v-if="!$v.Register.pwd.required">此欄位為必填</div>
              <div class="invalid-feedback" v-if="!$v.Register.pwd.minLength">
                密碼至少8碼英文或數字
              </div>
              <div class="invalid-feedback" v-if="!$v.Register.pwd.maxLength">
                密碼至多14碼英文或數字
              </div>
            </div>

            <div class="form-group">
              <label for="checkPwd">再次確認密碼</label>
              <input
                type="password"
                class="form-control"
                id="checkPwd"
                name="checkPwd"
                placeholder="請輸入8-14碼英文或數字"
                v-model.trim="$v.Register.checkPwd.$model"
                :class="{ 'is-invalid': $v.Register.checkPwd.$error }"
                maxlength="14"
              />
              <div class="invalid-feedback" v-if="!$v.Register.checkPwd.sameAsPassword">
                確認密碼輸入需與密碼相符
              </div>
            </div>

            <div class="form-group">
              <label for="companyName">請輸入公司名稱（中）</label>
              <input
                type="text"
                class="form-control"
                id="companyName"
                name="companyName"
                placeholder="請輸入公司名稱（中）"
                v-model.trim="$v.Register.companyName.$model"
                :class="{ 'is-invalid': $v.Register.companyName.$error }"
              />
              <div class="invalid-feedback" v-if="!$v.Register.companyName.required">
                此欄位為必填
              </div>
            </div>

            <div class="form-group">
              <label for="companyNameEng">請輸入公司名稱（英）</label>
              <input
                type="text"
                class="form-control"
                id="companyNameEng"
                name="companyNameEng"
                placeholder="請輸入公司名稱（英）"
                v-model.trim="$v.Register.companyNameEng.$model"
                :class="{ 'is-invalid': $v.Register.companyNameEng.$error }"
              />
              <div class="invalid-feedback" v-if="!$v.Register.companyNameEng.required">
                此欄位為必填
              </div>
            </div>

            <small class="form-text text-muted text-center mt-4"
              ><router-link to="/login">已有帳號？登入</router-link></small
            >
          </div>
        </div>

        <div class="card" v-if="!isForm">
          <div class="verification text-center">
            <h3>已發送驗證連結至您的信箱</h3>
            <p class="email">請至您的信箱收信，並點擊驗證連結以完成信箱驗證。</p>
            <span class="reciprocal" id="cd">
              如未收到信，可於
              <span id="countdown-sec" class="font-weight-bold text-orage mx-1">60</span
              >秒後重新發送
            </span>
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

        <div class="btn-area">
          <button
            type="button"
            class="btn btn-outline-dark"
            @click="clickSubmit"
            :disabled="submitStatus === 'PENDING'"
            v-if="isForm"
          >
            下一步
          </button>
          <button type="button" class="btn btn-outline-dark" v-if="!isForm" @click="Login">
            完成
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { apiRegister, apiValidateMail } from '@/api/index'
import { required, email, minLength, maxLength, sameAs } from 'vuelidate/lib/validators'
import Logo from '@/components/Common/Logo.vue'

export default {
  data() {
    return {
      countdownText: '重新發送驗證連結',
      isCount: false,
      submitStatus: null,
      isForm: true,
      Register: {
        language: 'TC',
        emailAccount: '',
        pwd: '',
        checkPwd: '',
        companyName: '',
        companyNameEng: '',
      },
    }
  },
  validations: {
    Register: {
      emailAccount: {
        required,
        email,
      },
      pwd: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(14),
      },
      checkPwd: {
        sameAsPassword: sameAs('pwd'),
      },
      companyName: {
        required,
      },
      companyNameEng: {
        required,
      },
    },
  },
  methods: {
    Login() {
      this.$router.push('/')
    },
    clickSubmit() {
      this.submitStatus = 'PENDING'
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.Send()
      }
    },
    async SendVerify() {
      this.countdownset()
      await apiValidateMail({ emailAccount: this.Register.emailAccount })
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
      await apiRegister(this.Register)
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
