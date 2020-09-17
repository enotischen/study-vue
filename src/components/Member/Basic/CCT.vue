<template>
  <form>
    <div class="form-group row">
      <label for="email" class="col-sm-2 col-form-label">帳號</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control-plaintext"
          id="email"
          name="email"
          readonly
          v-model.trim="$v.forms.mbrNo.$model"
          maxlength="50"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="pwrd" class="col-sm-2 col-form-label">密碼</label>
      <div class="col-sm-10">
        <input
          type="password"
          class="form-control"
          id="pwrd"
          v-model.trim="$v.forms.pwrd.$model"
          :class="{ 'is-invalid': $v.forms.pwrd.$error }"
          maxlength="14"
        />
        <small class="form-text text-muted">若需要重設密碼可填此欄，不需要可保持空白。</small>
        <div class="invalid-feedback" v-if="!$v.forms.pwrd.minLength">密碼至少8碼英文或數字</div>
        <div class="invalid-feedback" v-if="!$v.forms.pwrd.maxLength">密碼至多14碼英文或數字</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="cpwrd" class="col-sm-2 col-form-label">再次確認密碼</label>
      <div class="col-sm-10">
        <input
          type="password"
          class="form-control"
          id="cpwrd"
          v-model.trim="$v.basic.cpwrd.$model"
          :class="{ 'is-invalid': basic.cpwrd !== forms.pwrd }"
          maxlength="14"
        />
        <small class="form-text text-muted">若需要重設密碼可填此欄，不需要可保持空白。</small>
        <div class="invalid-feedback" v-if="basic.cpwrd !== forms.pwrd">
          確認密碼輸入需與密碼相符
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">公司名稱<span class="text-danger">*</span></label>
      <div class="col-sm-10">
        <div class="form-row">
          <div class="col">
            <input
              type="text"
              name="company"
              class="form-control"
              placeholder="請輸入公司名稱"
              v-model.trim="$v.forms.company.$model"
              :class="{ 'is-invalid': $v.forms.company.$error }"
              maxlength="50"
            />
            <small class="form-text text-muted">公司名稱中文</small>
            <div class="invalid-feedback" v-if="!$v.forms.company.required">此欄位為必填</div>
          </div>
          <div class="col">
            <input
              type="text"
              name="ecompany"
              class="form-control"
              placeholder="請輸入公司名稱"
              v-model.trim="$v.forms.ecompany.$model"
              :class="{ 'is-invalid': $v.forms.ecompany.$error }"
              maxlength="800"
            />
            <small class="form-text text-muted">公司名稱英文</small>
            <div class="invalid-feedback" v-if="!$v.forms.ecompany.required">此欄位為必填</div>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="add-example" class="col-sm-2 col-form-label"
        >公司地址 (中文)<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <div class="form-row">
          <div class="col">
            <select
              class="form-control"
              id="city"
              name="city"
              v-model.trim="isSelectCity"
              :class="{ 'is-invalid': $v.isSelectCity.$error }"
              @change="onCityChange($event)"
            >
              <option value="">縣市</option>
              <option v-for="(city, index) in citys" :key="index" :value="city.cityID">
                {{ city.cityName }}
              </option>
            </select>
            <div class="invalid-feedback" v-if="!$v.isSelectCity.required">請選擇</div>
          </div>
          <div class="col">
            <select
              class="form-control"
              id="zip"
              name="zip"
              v-model.trim="isSelectZip"
              :class="{ 'is-invalid': $v.isSelectZip.$error }"
            >
              <option value="">鄉鎮市區</option>
              <option v-for="(zip, index) in pickzips" :key="index" :value="zip.id">
                {{ zip.item }}
              </option>
            </select>
            <div class="invalid-feedback" v-if="!$v.isSelectZip.required">請選擇</div>
          </div>
          <div class="col-6">
            <input
              type="text"
              class="form-control"
              placeholder="請輸入地址"
              name="addr"
              v-model.trim="$v.forms.addr.$model"
              :class="{ 'is-invalid': $v.forms.addr.$error }"
              maxlength="50"
            />
            <div class="invalid-feedback" v-if="!$v.forms.addr.required">此欄位為必填</div>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="add-example" class="col-sm-2 col-form-label"
        >公司地址 (英文)<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          name="eaddr"
          v-model.trim="$v.forms.eaddr.$model"
          :class="{ 'is-invalid': $v.forms.eaddr.$error }"
          maxlength="800"
        />
        <div class="invalid-feedback" v-if="!$v.forms.eaddr.required">此欄位為必填</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="c-example" class="col-sm-2 col-form-label"
        >公司負責人<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <div class="form-row">
          <div class="col">
            <input
              type="text"
              class="form-control"
              name="owner"
              v-model.trim="$v.forms.owner.$model"
              :class="{ 'is-invalid': $v.forms.owner.$error }"
              maxlength="20"
            />
            <small class="form-text text-muted">公司負責人中文</small>
            <div class="invalid-feedback" v-if="!$v.forms.owner.required">此欄位為必填</div>
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              name="eowner"
              v-model.trim="$v.forms.eowner.$model"
              :class="{ 'is-invalid': $v.forms.eowner.$error }"
              maxlength="800"
            />
            <small class="form-text text-muted">公司負責人英文</small>
            <div class="invalid-feedback" v-if="!$v.forms.eowner.required">此欄位為必填</div>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="c-example" class="col-sm-2 col-form-label"
        >聯絡人姓名<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <div class="form-row">
          <div class="col">
            <input
              type="text"
              class="form-control"
              name="pname"
              v-model.trim="$v.forms.pname.$model"
              :class="{ 'is-invalid': $v.forms.pname.$error }"
              maxlength="20"
            />
            <small class="form-text text-muted">聯絡人姓名中文</small>
            <div class="invalid-feedback" v-if="!$v.forms.pname.required">此欄位為必填</div>
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              name="epname"
              v-model.trim="$v.forms.epname.$model"
              :class="{ 'is-invalid': $v.forms.epname.$error }"
              maxlength="800"
            />
            <small class="form-text text-muted">聯絡人姓名英文</small>
            <div class="invalid-feedback" v-if="!$v.forms.epname.required">此欄位為必填</div>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="c-example" class="col-sm-2 col-form-label"
        >聯絡人職稱<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <div class="form-row">
          <div class="col">
            <input
              type="text"
              class="form-control"
              name="ptitle"
              v-model.trim="$v.forms.ptitle.$model"
              :class="{ 'is-invalid': $v.forms.ptitle.$error }"
              maxlength="20"
            />
            <small class="form-text text-muted">聯絡人職稱中文</small>
            <div class="invalid-feedback" v-if="!$v.forms.ptitle.required">此欄位為必填</div>
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              name="eptitle"
              v-model.trim="$v.forms.eptitle.$model"
              :class="{ 'is-invalid': $v.forms.eptitle.$error }"
              maxlength="800"
            />
            <small class="form-text text-muted">聯絡人職稱英文</small>
            <div class="invalid-feedback" v-if="!$v.forms.eptitle.required">此欄位為必填</div>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="tel" class="col-sm-2 col-form-label"
        >聯絡電話<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <input
          type="tel"
          class="form-control"
          id="tel"
          name="tel"
          v-model.trim="$v.forms.tel.$model"
          :class="{ 'is-invalid': $v.forms.tel.$error }"
          placeholder="請輸入聯絡電話"
          maxlength="20"
        />
        <div class="invalid-feedback" v-if="!$v.forms.tel.required">此欄位為必填</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="website" class="col-sm-2 col-form-label">公司網站</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="website"
          name="website"
          placeholder="https://"
          v-model.trim="forms.website"
          maxlength="200"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="intro" class="col-sm-2 col-form-label"
        >公司簡介(中文)<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <textarea
          class="form-control"
          id="intro"
          rows="3"
          name="intro"
          v-model.trim="$v.forms.intro.$model"
          :class="{ 'is-invalid': $v.forms.intro.$error }"
        ></textarea>
        <small class="form-text text-muted" v-if="$v.forms.intro.maxLength">最多200字</small>
        <div class="invalid-feedback" v-if="!$v.forms.intro.required">此欄位為必填</div>
        <div class="invalid-feedback" v-if="!$v.forms.intro.maxLength">最多200字</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="eintro" class="col-sm-2 col-form-label"
        >公司簡介(英文)<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <textarea
          class="form-control"
          id="eintro"
          rows="3"
          v-model.trim="$v.forms.eintro.$model"
          :class="{ 'is-invalid': $v.forms.eintro.$error }"
        ></textarea>
        <small class="form-text text-muted" v-if="$v.forms.eintro.maxLength">最多300字</small>
        <div class="invalid-feedback" v-if="!$v.forms.eintro.required">此欄位為必填</div>
        <div class="invalid-feedback" v-if="!$v.forms.eintro.maxLength">最多300字</div>
      </div>
    </div>
    <div v-if="forms.mbrType === 'FILM'">
      <hr />
      <div class="form-group row">
        <label for="industry" class="col-sm-2 col-form-label"
          >公司行業別 Business Type(可複選)</label
        >
        <div class="col-sm-10">
          <div class="form-row">
            <div
              class="form-check col-md-6"
              v-for="(industry, index) in industrys"
              :key="index"
              :class="{ 'is-invalid': $v.forms.industry.$error }"
            >
              <input
                class="form-check-input"
                type="checkbox"
                name="industry"
                :id="'ind-' + industry.id"
                :value="industry.id"
                v-model="basic.industry"
                @change="clickIndustry"
              />
              <label class="form-check-label" :for="'ind-' + industry.id">{{
                industry.item
              }}</label>
              <!--勾選其他跳出輸入框-->
              <div class="form-group row mt-2" v-if="industry.id === 'FILMIND99'">
                <div v-if="isFILMIND99">
                  <textarea
                    class="form-control"
                    id="indRemk"
                    name="indRemk"
                    rows="3"
                    placeholder="請輸入文字"
                    v-model.trim="$v.forms.indRemk.$model"
                    :class="{ 'is-invalid': $v.forms.indRemk.$error }"
                  ></textarea>
                  <small class="form-text text-muted" v-if="$v.forms.indRemk.maxLength"
                    >最多200字</small
                  >
                  <div class="invalid-feedback" v-if="!$v.forms.indRemk.maxLength">最多200字</div>
                  <div class="invalid-feedback" v-if="!$v.forms.indRemk.required">
                    若勾選其他，則此欄位為必填
                  </div>
                </div>
              </div>
            </div>
            <div class="invalid-feedback" v-if="$v.forms.industry.$error">請至少勾選一項</div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="forms.mbrType === 'FILM'">
      <!--貴公司主要業務-->
      <hr />
      <div class="form-group row">
        <label for="service" class="col-sm-2 col-form-label"
          >貴公司的主要業務 Primary Service(可複選)</label
        >
        <div class="col-sm-10">
          <div class="form-row">
            <div
              class="form-check col-md-6"
              v-for="(service, index) in services"
              :key="index"
              :class="{ 'is-invalid': $v.forms.service.$error }"
            >
              <input
                class="form-check-input"
                type="checkbox"
                name="service"
                :id="'srv-' + service.id"
                :value="service.id"
                v-model="basic.service"
                @change="clickService"
              />
              <label class="form-check-label" :for="'srv-' + service.id">{{ service.item }}</label>
            </div>
            <div class="invalid-feedback" v-if="$v.forms.service.$error">請至少勾選一項</div>
          </div>
        </div>
      </div>
    </div>

    <hr />
    <div class="form-group row" v-if="forms.mbrKnd.indexOf('MBRKND02') >= 0">
      <label for="buyRemk" class="col-sm-2 col-form-label"
        >想購買作品類型或媒合公司類型(中文)<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <textarea
          class="form-control"
          id="buyRemk"
          rows="3"
          name="buyRemk"
          v-model.trim="$v.forms.buyRemk.$model"
          :class="{ 'is-invalid': $v.forms.buyRemk.$error }"
        ></textarea>
        <small class="form-text text-muted" v-if="$v.forms.buyRemk.maxLength">最多300字</small>
        <div class="invalid-feedback" v-if="!$v.forms.buyRemk.required">此欄位為必填</div>
        <div class="invalid-feedback" v-if="!$v.forms.buyRemk.maxLength">最多300字</div>
      </div>
    </div>
    <div class="form-group row" v-if="forms.mbrKnd.indexOf('MBRKND02') >= 0">
      <label for="ebuyRemk" class="col-sm-2 col-form-label"
        >想購買作品類型或媒合公司類型(英文)<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <textarea
          class="form-control"
          id="ebuyRemk"
          rows="3"
          name="ebuyRemk"
          v-model.trim="$v.forms.ebuyRemk.$model"
          :class="{ 'is-invalid': $v.forms.ebuyRemk.$error }"
        ></textarea>
        <small class="form-text text-muted" v-if="$v.forms.ebuyRemk.maxLength">最多450字</small>
        <div class="invalid-feedback" v-if="!$v.forms.ebuyRemk.required">此欄位為必填</div>
        <div class="invalid-feedback" v-if="!$v.forms.ebuyRemk.maxLength">最多450字</div>
      </div>
    </div>
    <div class="form-group row" v-if="forms.mbrKnd.indexOf('MBRKND02') >= 0">
      <label for="buyRecord" class="col-sm-2 col-form-label">歷年購買外國電視節目實績(中文)</label>
      <div class="col-sm-10">
        <textarea
          class="form-control"
          id="buyRecord"
          rows="3"
          name="buyRecord"
          v-model.trim="$v.forms.buyRecord.$model"
          :class="{ 'is-invalid': $v.forms.buyRecord.$error }"
        ></textarea>
        <small class="form-text text-muted" v-if="$v.forms.buyRecord.maxLength">最多300字</small>
        <div class="invalid-feedback" v-if="!$v.forms.buyRecord.maxLength">最多300字</div>
      </div>
    </div>
    <div class="form-group row" v-if="forms.mbrKnd.indexOf('MBRKND02') >= 0">
      <label for="ebuyRecord" class="col-sm-2 col-form-label">歷年購買外國電視節目實績(英文)</label>
      <div class="col-sm-10">
        <textarea
          class="form-control"
          id="ebuyRecord"
          rows="3"
          name="ebuyRecord"
          v-model.trim="$v.forms.ebuyRecord.$model"
          :class="{ 'is-invalid': $v.forms.ebuyRecord.$error }"
        ></textarea>
        <small class="form-text text-muted" v-if="$v.forms.ebuyRecord.maxLength">最多450字</small>
        <div class="invalid-feedback" v-if="!$v.forms.ebuyRecord.maxLength">最多450字</div>
      </div>
    </div>
    <div class="form-group row" v-if="forms.mbrKnd.indexOf('MBRKND01') >= 0">
      <label for="salesRemk" class="col-sm-2 col-form-label"
        >銷售作品/希望洽談公司類型(中文)<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <textarea
          class="form-control"
          id="salesRemk"
          rows="3"
          name="salesRemk"
          v-model.trim="$v.forms.salesRemk.$model"
          :class="{ 'is-invalid': $v.forms.salesRemk.$error }"
        ></textarea>
        <small class="form-text text-muted" v-if="$v.forms.salesRemk.maxLength">最多300字</small>
        <div class="invalid-feedback" v-if="!$v.forms.salesRemk.required">此欄位為必填</div>
        <div class="invalid-feedback" v-if="!$v.forms.salesRemk.maxLength">最多300字</div>
      </div>
    </div>
    <div class="form-group row" v-if="forms.mbrKnd.indexOf('MBRKND01') >= 0">
      <label for="esalesRemk" class="col-sm-2 col-form-label"
        >銷售作品/希望洽談公司類型(英文)<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <textarea
          class="form-control"
          id="esalesRemk"
          rows="3"
          name="esalesRemk"
          v-model="$v.forms.esalesRemk.$model"
          :class="{ 'is-invalid': $v.forms.esalesRemk.$error }"
        ></textarea>
        <small class="form-text text-muted" v-if="$v.forms.esalesRemk.maxLength">最多450字</small>
        <div class="invalid-feedback" v-if="!$v.forms.esalesRemk.required">此欄位為必填</div>
        <div class="invalid-feedback" v-if="!$v.forms.esalesRemk.maxLength">最多450字</div>
      </div>
    </div>
    <div class="form-group row" v-if="forms.mbrKnd.indexOf('MBRKND01') >= 0">
      <label for="salesRecord" class="col-sm-2 col-form-label"
        >歷年優良作品事蹟(含歷年得獎紀錄及銷售播送實績) (無則免填)(中文)</label
      >
      <div class="col-sm-10">
        <textarea
          class="form-control"
          id="salesRecord"
          rows="3"
          name="salesRecord"
          v-model.trim="$v.forms.salesRecord.$model"
          :class="{ 'is-invalid': $v.forms.salesRecord.$error }"
        ></textarea>
        <small class="form-text text-muted" v-if="$v.forms.salesRecord.maxLength">最多300字</small>
        <div class="invalid-feedback" v-if="!$v.forms.salesRecord.maxLength">最多300字</div>
      </div>
    </div>
    <div class="form-group row" v-if="forms.mbrKnd.indexOf('MBRKND01') >= 0">
      <label for="esalesRecord" class="col-sm-2 col-form-label"
        >歷年優良作品事蹟(含歷年得獎紀錄及銷售播送實績) (無則免填)(英文)</label
      >
      <div class="col-sm-10">
        <textarea
          class="form-control"
          id="esalesRecord"
          rows="3"
          name="esalesRecord"
          v-model.trim="$v.forms.esalesRecord.$model"
          :class="{ 'is-invalid': $v.forms.esalesRecord.$error }"
        ></textarea>
        <small class="form-text text-muted" v-if="$v.forms.esalesRecord.maxLength">最多450字</small>
        <div class="invalid-feedback" v-if="!$v.forms.esalesRecord.maxLength">最多450字</div>
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
</template>

<script>
import { apiInfo, apiInfoSend, apiCity, apiZip, apiIndustry, apiBusiness } from '@/api/index'
import { required, email, minLength, maxLength, requiredIf } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      submitStatus: null,
      citys: [],
      zips: [],
      pickzips: [],
      industrys: [],
      services: [],
      isSelectCity: '',
      isSelectZip: '',
      isFILMIND99: false,
      forms: {
        addr: '',
        buyRecord: '',
        buyRemk: '',
        cell: '',
        company: '',
        eaddr: '',
        ecompany: '',
        eintro: '',
        eowner: '',
        epname: '',
        eptitle: '',
        indRemk: '',
        industry: '',
        intro: '',
        language: 0,
        mbrCat: '',
        mbrKnd: '',
        mbrNo: '',
        mbrType: '',
        owner: '',
        pname: '',
        ptitle: '',
        pwrd: '',
        salesRecord: '',
        salesRemk: '',
        service: '',
        tel: '',
        website: '',
        zipId: '',
        ebuyRecord: '',
        ebuyRemk: '',
        esalesRemk: '',
        esalesRecord: '',
      },
      basic: {
        cpwrd: '',
        industry: [],
        service: [],
      },
    }
  },
  validations: {
    forms: {
      mbrNo: {},
      pwrd: {
        minLength: minLength(8),
        maxLength: maxLength(14),
      },
      company: { required },
      ecompany: { required },
      addr: { required },
      eaddr: { required },
      owner: { required },
      eowner: { required },
      pname: { required },
      epname: { required },
      ptitle: { required },
      eptitle: { required },
      indRemk: {
        required: requiredIf(function () {
          return this.basic.industry.indexOf('FILMIND99') > -1 ? true : false
        }),
        maxLength: maxLength(200),
      },
      tel: { required },
      intro: { required, maxLength: maxLength(200) },
      eintro: { required, maxLength: maxLength(8000) },
      buyRemk: {
        required: requiredIf(function () {
          return this.forms.mbrKnd.indexOf('MBRKND02') >= 0 ? true : false
        }),
        maxLength: maxLength(300),
      }, //MBRKND02
      ebuyRemk: {
        required: requiredIf(function () {
          return this.forms.mbrKnd.indexOf('MBRKND02') >= 0 ? true : false
        }),
        maxLength: maxLength(8000),
      }, //MBRKND02
      buyRecord: { maxLength: maxLength(300) }, //MBRKND02
      ebuyRecord: { maxLength: maxLength(8000) }, //MBRKND02
      salesRemk: {
        required: requiredIf(function () {
          return this.forms.mbrKnd.indexOf('MBRKND01') >= 0 ? true : false
        }),
        maxLength: maxLength(300),
      }, //MBRKND01
      esalesRemk: {
        required: requiredIf(function () {
          return this.forms.mbrKnd.indexOf('MBRKND01') >= 0 ? true : false
        }),
        maxLength: maxLength(8000),
      }, //MBRKND01
      salesRecord: { maxLength: maxLength(300) }, //MBRKND01
      esalesRecord: { maxLength: maxLength(8000) }, //MBRKND01
      industry: {
        checked(val) {
          return this.forms.mbrType !== 'FILM' ? true : val
        },
      },
      service: {
        checked(val) {
          return this.forms.mbrType !== 'FILM' ? true : val
        },
      },
    },
    basic: {
      cpwrd: {},
    },
    isSelectCity: {
      checked(val) {
        return val
      },
    },
    isSelectZip: {
      checked(val) {
        return val
      },
    },
  },
  methods: {
    async Load() {
      let loader = this.$loading.show()
      this.getCity()
      this.getIndustry()
      this.getBusiness()
      await this.getZip()
      this.getInfo(loader)
    },
    async getCity() {
      await apiCity().then(response => {
        this.citys = response.data.filter(city => city.cityID != '0')
      })
    },
    async getZip() {
      await apiZip().then(response => {
        this.zips = response.data
      })
    },
    async getIndustry() {
      await apiIndustry().then(response => {
        this.industrys = response.data
      })
    },
    async getBusiness() {
      await apiBusiness().then(response => {
        this.services = response.data
      })
    },
    async getInfo(loader) {
      await apiInfo().then(response => {
        this.forms = response.data
        this.forms.pwrd = ''
        // 郵遞區號處理
        if (this.forms.zipId != '') {
          this.isSelectZip = this.forms.zipId
          let pick = this.zips.find(city => city.id == response.data.zipId)
          this.isSelectCity = pick.cityId
          this.pickzips = this.zips.filter(s => s.cityId == pick.cityId)
        }
        // 行業別
        this.basic.industry = this.forms.industry.split(',')
        // 主要業務
        this.basic.service = this.forms.service.split(',')
      })
      loader.hide()
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
        this.Send()
      }
    },
    async Send() {
      let loader = this.$loading.show()
      this.forms.zipId = this.isSelectZip
      await apiInfoSend(this.forms)
        .then(response => {
          this.submitStatus = ''
          this.$swal('', '資料修改完成。', 'success')
          this.scrollToTop()
          loader.hide()
        })
        .catch(err => {
          this.errorCode(err)
          this.submitStatus = ''
          loader.hide()
        })
    },
    onCityChange(event) {
      this.pickzips = this.zips.filter(s => s.cityId == event.target.value)
      this.isSelectZip = ''
    },
    clickIndustry() {
      this.isFILMIND99 = this.basic.industry.indexOf('FILMIND99') > -1 ? true : false
      this.forms.industry = this.basic.industry.join(',')
      this.$v.forms.industry.$touch()
      console.log(this.forms.industry)
    },
    clickService() {
      this.forms.service = this.basic.service
        .filter(function (val) {
          if (val) return val
        })
        .join(',')
      this.$v.forms.service.$touch()
      console.log(this.forms.service)
    },
    scrollToTop() {
      let body = window.opera
        ? document.compatMode == 'CSS1Compat'
          ? this.$('html')
          : this.$('body')
        : this.$('html,body')
      body.stop().animate(
        {
          scrollTop: 0,
        },
        800
      )
    },
  },
  mounted() {
    if (this.$store.state.auth.memberCategory === 'CCT') {
      this.Load()
    }
  },
}
</script>
