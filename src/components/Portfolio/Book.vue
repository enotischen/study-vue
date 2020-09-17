<template>
  <form>
    <h3 class="form-subtitle">作品概要</h3>
    <div class="form-group row">
      <label for="b-example" class="col-sm-2 col-form-label"
        >作品名（英文)<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="b-example"
          name="x"
          placeholder="請輸入作品名（英文)"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="b-example" class="col-sm-2 col-form-label"
        >作品名（中文)<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="b-example"
          name="x"
          placeholder="請輸入作品名（中文)"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="b-example" class="col-sm-2 col-form-label"
        >作者名（英文)<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="b-example"
          name="x"
          placeholder="請輸入作者名（英文)"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="b-example" class="col-sm-2 col-form-label"
        >作者名（中文)<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="b-example"
          name="x"
          placeholder="請輸入作者名（中文)"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="profile-example" class="col-sm-2 col-form-label"
        >作者簡介 (中文)<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <textarea class="form-control" id="profile-example" rows="3" placeholder=""></textarea>
      </div>
    </div>
    <div class="form-group row">
      <label for="profile-example" class="col-sm-2 col-form-label"
        >作者簡介 (英文)<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <textarea class="form-control" id="profile-example" rows="3" placeholder=""></textarea>
      </div>
    </div>
    <div class="form-group row">
      <label for="profile-example" class="col-sm-2 col-form-label">情節概要 (中文)</label>
      <div class="col-sm-10">
        <textarea class="form-control" id="profile-example" rows="3" placeholder=""></textarea>
      </div>
    </div>
    <div class="form-group row">
      <label for="profile-example" class="col-sm-2 col-form-label">情節概要 (英文)</label>
      <div class="col-sm-10">
        <textarea class="form-control" id="profile-example" rows="3" placeholder=""></textarea>
      </div>
    </div>
    <div class="form-group row">
      <label for="profile-example" class="col-sm-2 col-form-label">作品簡介 (中文)</label>
      <div class="col-sm-10">
        <textarea class="form-control" id="profile-example" rows="3" placeholder=""></textarea>
      </div>
    </div>
    <div class="form-group row">
      <label for="profile-example" class="col-sm-2 col-form-label">作品簡介 (英文)</label>
      <div class="col-sm-10">
        <textarea class="form-control" id="profile-example" rows="3" placeholder=""></textarea>
      </div>
    </div>
    <div class="form-group row">
      <label for="a-example" class="col-sm-2 col-form-label">作品的發表/<br />成品時間</label>
      <div class="col-sm-10">
        <div class="input-group">
          <input
            type="text"
            class="form-control datepicker"
            id="datepicker-example"
            name="x"
            placeholder="yyyy/MM/dd"
          />
          <div class="input-group-append">
            <span class="input-group-text"><i class="fas fa-calendar-alt"></i></span>
          </div>
        </div>
      </div>
    </div>

    <h3 class="form-subtitle">版權資訊</h3>
    <div class="form-group row">
      <label for="b-example" class="col-sm-2 col-form-label">版權歸屬</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="b-example"
          name="x"
          placeholder="請輸入版權歸屬"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="b-example" class="col-sm-2 col-form-label">出版版權交易情形</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="b-example"
          name="x"
          placeholder="請輸入出版版權交易情形"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="c-example" class="col-sm-2 col-form-label">版權聯絡人姓名</label>
      <div class="col-sm-10">
        <div class="form-row">
          <div class="col">
            <input type="text" class="form-control" placeholder="請輸入版權聯絡人姓名" />
            <small id="text-example-help" class="form-text text-muted">中文</small>
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="請輸入版權聯絡人姓名" />
            <small id="text-example-help" class="form-text text-muted">英文</small>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="c-example" class="col-sm-2 col-form-label">版權聯絡人單位</label>
      <div class="col-sm-10">
        <div class="form-row">
          <div class="col">
            <input type="text" class="form-control" placeholder="請輸入版權聯絡人單位" />
            <small id="text-example-help" class="form-text text-muted">中文</small>
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="請輸入版權聯絡人單位" />
            <small id="text-example-help" class="form-text text-muted">英文</small>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="c-example" class="col-sm-2 col-form-label">版權聯絡人職稱</label>
      <div class="col-sm-10">
        <div class="form-row">
          <div class="col">
            <input type="text" class="form-control" placeholder="請輸入版權聯絡人職稱" />
            <small id="text-example-help" class="form-text text-muted">中文</small>
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="請輸入版權聯絡人職稱" />
            <small id="text-example-help" class="form-text text-muted">英文</small>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="b-example" class="col-sm-2 col-form-label">版權聯絡人電話</label>
      <div class="col-sm-10">
        <input
          type="tel"
          class="form-control"
          id="b-example"
          name="x"
          placeholder="請輸入版權聯絡人電話"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="b-example" class="col-sm-2 col-form-label">版權聯絡人電話</label>
      <div class="col-sm-10">
        <input
          type="email"
          class="form-control"
          id="b-example"
          name="x"
          placeholder="請輸入版權聯絡人電話"
        />
      </div>
    </div>

    <h3 class="form-subtitle">作品詳細資訊</h3>
    <div class="form-group row">
      <label for="c-example" class="col-sm-2 col-form-label"
        >作品頁數／字數<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <div class="form-row">
          <div class="col">
            <input type="number" class="form-control" placeholder="請輸入作品頁數" />
            <small id="text-example-help" class="form-text text-muted">作品頁數</small>
          </div>
          <div class="col">
            <input type="number" class="form-control" placeholder="請輸入作品字數" />
            <small id="text-example-help" class="form-text text-muted">作品字數</small>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="" class="col-sm-2 col-form-label">出版方式</label>
      <div class="col-sm-10">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label class="form-check-label" for="inlineRadio1">實體出版</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label class="form-check-label" for="inlineRadio2">數位出版</label>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="e-example" class="col-sm-2 col-form-label"
        >文本體裁<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <select class="form-control">
          <option>長篇小說</option>
          <option>短篇小說</option>
          <option>紀實文學</option>
          <option>詩集</option>
          <option>報導文學</option>
          <option>散文</option>
          <option>漫畫</option>
          <option>圖文書</option>
          <option>繪本</option>
          <option>其他</option>
        </select>
        <!--選擇其他 跳出輸入框輸入-->
        <input
          type="text"
          class="form-control mt-2 d-none"
          id="d-example"
          name="x"
          placeholder="其他類型輸入"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="profile-example" class="col-sm-2 col-form-label"
        >作品內容類型（可複選）<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <div class="row">
          <div class="col-md-6">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
              <label class="form-check-label" for="inlineCheckbox1">不知</label>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox5"
                value="option5"
              />
              <label class="form-check-label" for="inlineCheckbox5">不知</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="file-demo" class="col-sm-2 col-form-label"
        >意象圖上傳檔案<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <div class="input-upload mb-1">
          <input type="file" id="file-demo" aria-describedby="text-example-help" />
          <span>請選擇檔案</span>
        </div>
        <small id="text-example-help" class="form-text text-muted"
          >只提供一個檔案上傳，僅限JPG或GIF檔</small
        >
      </div>
    </div>
    <div class="form-group row">
      <label for="profile-example" class="col-sm-2 col-form-label"
        >主要關鍵字<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <div class="row">
          <div class="col">
            <input
              type="text"
              class="form-control"
              id="b-example"
              name="x"
              placeholder="請輸入主要關鍵字"
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              id="b-example"
              name="x"
              placeholder="請輸入主要關鍵字"
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              id="b-example"
              name="x"
              placeholder="請輸入主要關鍵字"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="b-example" class="col-sm-2 col-form-label">其他主要關鍵字</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="b-example"
          name="x"
          placeholder="請輸入其他主要關鍵字"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="" class="col-sm-2 col-form-label">是否為跨國題材</label>
      <div class="col-sm-10">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label class="form-check-label" for="inlineRadio1">是</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label class="form-check-label" for="inlineRadio2">否</label>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="b-example" class="col-sm-2 col-form-label">跨國題材國家</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="b-example"
          name="x"
          placeholder="請輸入跨國題材國家"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="profile-example" class="col-sm-2 col-form-label">期待改編類型（可複選）</label>
      <div class="col-sm-10">
        <div class="row">
          <div class="col">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
              <label class="form-check-label" for="inlineCheckbox1">電影</label>
            </div>
          </div>
          <div class="col">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox5"
                value="option5"
              />
              <label class="form-check-label" for="inlineCheckbox5">劇集</label>
            </div>
          </div>
          <div class="col">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox5"
                value="option5"
              />
              <label class="form-check-label" for="inlineCheckbox5">其他</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="b-example" class="col-sm-2 col-form-label">預計授權改編之新台幣費用</label>
      <div class="col-sm-10">
        <input type="number" class="form-control" id="b-example" name="x" />
      </div>
    </div>
    <div class="form-group row">
      <label for="file-demo" class="col-sm-2 col-form-label"
        >文本試閱或全文檔案上傳<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <div class="input-upload mb-1">
          <input type="file" id="file-demo" aria-describedby="text-example-help" />
          <span>請選擇檔案</span>
        </div>
        <small id="text-example-help" class="form-text text-muted"
          >只提供一個檔案上傳，僅限PDF</small
        >
      </div>
    </div>

    <div class="btn-area">
      <button type="button" class="btn btn-system btn-confirm" data-confirm="儲存完成">
        確認送出
      </button>
    </div>
  </form>
</template>

<script>
// import datePicker from 'vue-bootstrap-datetimepicker'
import { required, maxLength, requiredIf, numeric } from 'vuelidate/lib/validators'

export default {
  // components: { datePicker },
  data() {
    return {
      submitStatus: null,
      forms: {
        title: '',
        etitle: '',
        writer: '',
        ewriter: '',
        writerRemk: '',
        ewriterRemk: '',
        logline: '',
        elogline: '',
        synop: '',
        esynop: '',
        prodMonth: '',
        copyright: '',
        crStatus: '',
        crName: '',
        crCompany: '',
        crTitle: '',
        crTel: '',
        crMail: '',
        pages: '',
        words: '',
        publishCat: '',
        bookStyle: '',
        styleRemk: '',
        bookCat: '',
        bookCatRemk: '',
        keyword: '',
        keywordb: '',
        keywordc: '',
        keywordo: '',
        across: '',
        acrossCountry: '',
        acrossRemk: '',
        bookAdapt: '',
        adaptRemk: '',
        adaptFee: '',
        imageLocation: '',
        imageName: '',
        previewName: '',
        ecrName: '',
        ecrCompany: '',
        ecrTitle: '',
        imageNameFile: '',
        previewNameFile: '',
      },
      basic: {},
      options: {
        format: 'YYYY-MM',
        useCurrent: false,
      },
    }
  },
  validations: {
    forms: {
      title: { required },
      etitle: { required },
      writer: { required },
      ewriter: { required },
      writerRemk: { required },
      ewriterRemk: { required },
      logline: { required },
      elogline: { required },
      synop: { required },
      esynop: { required },
      prodMonth: { required },
      copyright: { required },
      crStatus: { required },
      crName: { required },
      crCompany: { required },
      crTitle: { required },
      crTel: { required },
      crMail: { required },
      pages: { required },
      words: { required },
      publishCat: { required },
      bookStyle: { required },
      styleRemk: { required },
      bookCat: { required },
      bookCatRemk: { required },
      keyword: { required },
      keywordb: { required },
      keywordc: { required },
      keywordo: { required },
      across: { required },
      acrossCountry: { required },
      acrossRemk: { required },
      bookAdapt: { required },
      adaptRemk: { required },
      adaptFee: { required },
      imageLocation: { required },
      imageName: { required },
      previewName: { required },
      ecrName: { required },
      ecrCompany: { required },
      ecrTitle: { required },
      imageNameFile: { required },
      previewNameFile: { required },
    },
  },
  methods: {
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
        this.Send()
      }
    },
    async Send() {
      let loader = this.$loading.show()

      var formData = new FormData()
    },
  },
  mounted() {
    if (this.$store.state.auth.memberType === 'BOOK') {
      // this.getfilmCats()
      // if (this.$route.params.code != '') {
      //   this.getFilm()
      // }
    }
  },
}
</script>
