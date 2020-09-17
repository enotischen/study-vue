<template>
  <div class="col-md-9">
    <div class="card">
      <div class="card-body">
        <h2 class="form-title">識別證填寫</h2>

        <form>
          <div class="form-group row">
            <label for="c-example" class="col-sm-2 col-form-label"
              >姓名<span class="text-danger">*</span></label
            >
            <div class="col-sm-10">
              <div class="form-row">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    v-model.trim="$v.forms.name.$model"
                    :class="{ 'is-invalid': $v.forms.name.$error }"
                  />
                  <small id="text-example-help" class="form-text text-muted">中文</small>
                  <div class="invalid-feedback" v-if="!$v.forms.name.required">此欄位為必填</div>
                  <div class="invalid-feedback" v-if="!$v.forms.name.maxLength">最多30字</div>
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    name="eName"
                    v-model.trim="$v.forms.eName.$model"
                    :class="{ 'is-invalid': $v.forms.eName.$error }"
                  />
                  <small id="text-example-help" class="form-text text-muted"
                    >Name (Last Name/ First Name)</small
                  >
                  <div class="invalid-feedback" v-if="!$v.forms.eName.required">
                    Field is required.
                  </div>
                  <div class="invalid-feedback" v-if="!$v.forms.eName.maxLength">
                    Must have at most 30 letters.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="form-group row">
            <label for="c-example" class="col-sm-2 col-form-label">職稱</label>
            <div class="col-sm-10">
              <div class="form-row">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    name="title"
                    v-model.trim="$v.forms.title.$model"
                    :class="{ 'is-invalid': $v.forms.title.$error }"
                  />
                  <small id="text-example-help" class="form-text text-muted">中文</small>
                  <div class="invalid-feedback" v-if="!$v.forms.title.maxLength">最多30字</div>
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    name="eTitle"
                    v-model.trim="$v.forms.eTitle.$model"
                    :class="{ 'is-invalid': $v.forms.eTitle.$error }"
                  />
                  <small id="text-example-help" class="form-text text-muted">Job Title</small>
                  <div class="invalid-feedback" v-if="!$v.forms.eTitle.maxLength">
                    Must have at most 30 letters.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <label for="phone" class="col-sm-2 col-form-label"
              >聯絡電話<span class="text-danger">*</span></label
            >
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                name="phone"
                v-model.trim="$v.forms.phone.$model"
                :class="{ 'is-invalid': $v.forms.phone.$error }"
              />
              <div class="invalid-feedback" v-if="!$v.forms.phone.required">此欄位為必填</div>
              <div class="invalid-feedback" v-if="!$v.forms.phone.maxLength">最多20字</div>
            </div>
          </div>
          <div class="form-group row">
            <label for="email" class="col-sm-2 col-form-label"
              >電子信箱<span class="text-danger">*</span></label
            >
            <div class="col-sm-10">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="請輸入Email"
                v-model.trim="$v.forms.email.$model"
                :class="{
                  'is-invalid': $v.forms.email.$error,
                  'form-control-plaintext': isEdit,
                  'form-control': !isEdit,
                }"
                :readonly="isEdit"
                maxlength="50"
              />
              <div class="invalid-feedback" v-if="!$v.forms.email.required">此欄位為必填</div>
              <div class="invalid-feedback" v-if="!$v.forms.email.maxLength">最多20字</div>
              <div class="invalid-feedback" v-if="!$v.forms.email.email">請輸入正確的電子郵件</div>
            </div>
          </div>

          <div class="btn-area">
            <button
              type="button"
              class="btn btn-system btn-confirm"
              @click="clickSubmit"
              :disabled="submitStatus === 'PENDING'"
            >
              確認送出
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { apiIdentificationDetail, apiIdentificationPost, apiIdentificationPut } from '@/api/index'
import { stateMerge } from 'vue-object-merge'
import { required, email, maxLength } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      isEdit: false,
      submitStatus: null,
      forms: {
        name: '',
        eName: '',
        title: '',
        eTitle: '',
        phone: '',
        email: '',
        language: 'TC',
      },
    }
  },
  validations: {
    forms: {
      name: { required, maxLength: maxLength(30) },
      eName: { required, maxLength: maxLength(30) },
      title: { maxLength: maxLength(30) },
      eTitle: { maxLength: maxLength(30) },
      phone: { required, maxLength: maxLength(20) },
      email: { required, email, maxLength: maxLength(50) },
    },
  },
  methods: {
    async getContent() {
      let loader = this.$loading.show()
      await apiIdentificationDetail(this.$route.params.code).then(response => {
        stateMerge(this.forms, response.data)
        loader.hide()
      })
    },
    clickSubmit() {
      this.submitStatus = 'PENDING'
      this.$v.$touch()
      if (this.$v.$invalid) {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft
        this.submitStatus = 'ERROR'
        this.$nextTick(() => {
          let domRect = document.querySelector('.is-invalid').getBoundingClientRect()
          window.scrollTo(domRect.left + scrollLeft, domRect.top + scrollTop)
        })
      } else {
        if (this.isEdit) {
          this.UpdateData()
        } else {
          this.AddData()
        }
      }
    },
    async UpdateData() {
      let loader = this.$loading.show()
      await apiIdentificationPut(this.$route.params.code, this.forms)
        .then(response => {
          loader.hide()
          this.submitStatus = ''
          this.$router.push({ path: '/member/identification' })
          this.$swal('', '資料儲存完成。', 'success')
        })
        .catch(err => {
          this.errorCode(err)
          this.submitStatus = ''
          loader.hide()
        })
    },
    async AddData() {
      let loader = this.$loading.show()
      await apiIdentificationPost(this.forms)
        .then(response => {
          this.submitStatus = ''
          this.$router.push({ path: '/member/identification' })
          this.$swal('', '資料儲存完成。', 'success')
        })
        .catch(err => {
          this.errorCode(err)
          this.submitStatus = ''
        })
      loader.hide()
    },
  },
  mounted() {
    if (this.$route.params.code) {
      this.isEdit = true
      this.getContent()
    }
  },
}
</script>
