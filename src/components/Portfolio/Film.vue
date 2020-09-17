<template>
  <form>
    <div class="form-group row">
      <label for="title" class="col-sm-2 col-form-label"
        >節目名稱 (中文)<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          name="title"
          v-model.trim="$v.forms.title.$model"
          :class="{ 'is-invalid': $v.forms.title.$error }"
          maxlength="50"
        />
        <div class="invalid-feedback" v-if="!$v.forms.title.required">此欄位為必填</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="etitle" class="col-sm-2 col-form-label"
        >節目名稱 (英文)<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          name="etitle"
          v-model.trim="$v.forms.etitle.$model"
          :class="{ 'is-invalid': $v.forms.etitle.$error }"
          maxlength="800"
        />
        <div class="invalid-feedback" v-if="!$v.forms.etitle.required">此欄位為必填</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="filmStatus" class="col-sm-2 col-form-label"
        >作品狀態<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <div class="form-row">
          <select
            class="form-control"
            name="filmStatus"
            id="filmStatus"
            v-model.trim="$v.forms.filmStatus.$model"
            :class="{ 'is-invalid': $v.forms.filmStatus.$error }"
            @change="$v.forms.filmStatus.$touch()"
          >
            <option value="">請選擇</option>
            <option v-for="(item, index) in filmStatuss" :key="index" :value="item.id">
              {{ item.item }}
            </option>
          </select>
          <div class="invalid-feedback" v-if="!$v.forms.filmStatus.required">必須選擇</div>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="c-example" class="col-sm-2 col-form-label"
        >類型<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <div class="form-row">
          <select
            class="form-control"
            name="filmCat"
            id="filmCat"
            v-model.trim="$v.forms.filmCat.$model"
            :class="{ 'is-invalid': $v.forms.filmCat.$error }"
            @change="changeCat($event)"
          >
            <option value="">請選擇</option>
            <option v-for="(item, index) in filmCats" :key="index" :value="item.id">
              {{ item.item }}
            </option>
          </select>
          <div class="invalid-feedback" v-if="!$v.forms.filmCat.required">必須選擇</div>
        </div>
        <div class="form-row">
          <div
            class="form-check col-md-6"
            v-for="(item, index) in filmKnds"
            :key="index"
            :class="{ 'is-invalid': $v.forms.filmKnd.$error }"
          >
            <input
              class="form-check-input"
              type="checkbox"
              name="filmKnd"
              :id="'srv-' + item.id"
              :value="item.id"
              v-model="basic.filmKnd"
              @change="clickfilmKnd"
            />
            <label class="form-check-label" :for="'srv-' + item.id">{{ item.item }}</label>
            <div class="form-group row mt-2" v-if="item.id === 'FILMCAT0199'">
              <div v-if="isFILMCAT0199">
                <textarea
                  class="form-control"
                  id="kndRemk"
                  name="kndRemk"
                  rows="3"
                  placeholder="請輸入文字"
                  v-model.trim="$v.forms.kndRemk.$model"
                  :class="{ 'is-invalid': $v.forms.kndRemk.$error }"
                ></textarea>
                <small class="form-text text-muted" v-if="$v.forms.kndRemk.maxLength"
                  >最多50字</small
                >
                <div class="invalid-feedback" v-if="!$v.forms.kndRemk.maxLength">最多50字</div>
                <div class="invalid-feedback" v-if="!$v.forms.kndRemk.required">
                  若勾選其他，則此欄位為必填
                </div>
              </div>
            </div>
          </div>
          <div class="invalid-feedback" v-if="$v.forms.filmKnd.$error">請至少勾選一項</div>
        </div>
      </div>
    </div>

    <hr />
    <div class="form-group row">
      <label for="e-example" class="col-sm-2 col-form-label"
        >風格<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <div class="form-row">
          <div
            class="form-check col-md-6"
            v-for="(item, index) in filmStyles"
            :key="index"
            :class="{ 'is-invalid': $v.forms.filmStyle.$error }"
          >
            <input
              class="form-check-input"
              type="checkbox"
              name="filmStyle"
              :id="'style-' + item.id"
              :value="item.id"
              v-model="basic.filmStyle"
              @change="clickfilmStyle"
            />
            <label class="form-check-label" :for="'style-' + item.id">{{ item.item }}</label>
            <div class="form-group row mt-2" v-if="item.id === 'FILMSTYLE99'">
              <div v-if="isFILMSTYLE99">
                <textarea
                  class="form-control"
                  id="styleRemk"
                  name="styleRemk"
                  rows="3"
                  placeholder="請輸入文字"
                  v-model.trim="$v.forms.styleRemk.$model"
                  :class="{ 'is-invalid': $v.forms.styleRemk.$error }"
                ></textarea>
                <small class="form-text text-muted" v-if="$v.forms.styleRemk.maxLength"
                  >最多50字</small
                >
                <div class="invalid-feedback" v-if="!$v.forms.styleRemk.maxLength">最多50字</div>
                <div class="invalid-feedback" v-if="!$v.forms.styleRemk.required">
                  若勾選其他，則此欄位為必填
                </div>
              </div>
            </div>
          </div>
          <div class="invalid-feedback" v-if="$v.forms.filmStyle.$error">請至少勾選一項</div>
        </div>
      </div>
    </div>

    <hr />
    <div class="form-group row">
      <label for="e-example" class="col-sm-2 col-form-label"
        >題材<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <div class="form-row">
          <div
            class="form-check col-md-6"
            v-for="(item, index) in filmThemes"
            :key="index"
            :class="{ 'is-invalid': $v.forms.filmTheme.$error }"
          >
            <input
              class="form-check-input"
              type="checkbox"
              name="filmTheme"
              :id="'theme-' + item.id"
              :value="item.id"
              v-model="basic.filmTheme"
              @change="clickfilmTheme"
            />
            <label class="form-check-label" :for="'theme-' + item.id">{{ item.item }}</label>
            <div class="form-group row mt-2" v-if="item.id === 'FILMTHEME99'">
              <div v-if="isFILMTHEME99">
                <textarea
                  class="form-control"
                  id="themeRemk"
                  name="themeRemk"
                  rows="3"
                  placeholder="請輸入文字"
                  v-model.trim="$v.forms.themeRemk.$model"
                  :class="{ 'is-invalid': $v.forms.themeRemk.$error }"
                ></textarea>
                <small class="form-text text-muted" v-if="$v.forms.themeRemk.maxLength"
                  >最多50字</small
                >
                <div class="invalid-feedback" v-if="!$v.forms.themeRemk.maxLength">最多50字</div>
                <div class="invalid-feedback" v-if="!$v.forms.themeRemk.required">
                  若勾選其他，則此欄位為必填
                </div>
              </div>
            </div>
          </div>
          <div class="invalid-feedback" v-if="$v.forms.filmTheme.$error">請至少勾選一項</div>
        </div>
      </div>
    </div>

    <hr />
    <div class="form-group row">
      <label for="e-example" class="col-sm-2 col-form-label"
        >觀眾<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <div class="form-row">
          <div
            class="form-check col-md-6"
            v-for="(item, index) in filmAudiences"
            :key="index"
            :class="{ 'is-invalid': $v.forms.filmAudience.$error }"
          >
            <input
              class="form-check-input"
              type="checkbox"
              name="filmAudience"
              :id="'theme-' + item.id"
              :value="item.id"
              v-model="basic.filmAudience"
              @change="clickfilmAudience"
            />
            <label class="form-check-label" :for="'theme-' + item.id">{{ item.item }}</label>
            <div class="form-group row mt-2" v-if="item.id === 'FILMAUDIENCE99'">
              <div v-if="isFILMAUDIENCE99">
                <textarea
                  class="form-control"
                  id="audienceRemk"
                  name="audienceRemk"
                  rows="3"
                  placeholder="請輸入文字"
                  v-model.trim="$v.forms.audienceRemk.$model"
                  :class="{ 'is-invalid': $v.forms.audienceRemk.$error }"
                ></textarea>
                <small class="form-text text-muted" v-if="$v.forms.audienceRemk.maxLength"
                  >最多50字</small
                >
                <div class="invalid-feedback" v-if="!$v.forms.audienceRemk.maxLength">最多50字</div>
                <div class="invalid-feedback" v-if="!$v.forms.audienceRemk.required">
                  若勾選其他，則此欄位為必填
                </div>
              </div>
            </div>
          </div>
          <div class="invalid-feedback" v-if="$v.forms.filmAudience.$error">請至少勾選一項</div>
        </div>
      </div>
    </div>

    <hr />
    <div class="form-group row">
      <label for="ep" class="col-sm-2 col-form-label">集數<span class="text-danger">*</span></label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          name="ep"
          v-model.trim="$v.forms.ep.$model"
          :class="{ 'is-invalid': $v.forms.ep.$error }"
          maxlength="6"
        />
        <div class="invalid-feedback" v-if="!$v.forms.ep.required">此欄位為必填</div>
        <div class="invalid-feedback" v-if="!$v.forms.ep.numeric">此欄位需輸入數字</div>
        <div class="invalid-feedback" v-if="!$v.forms.ep.maxLength">最多6位數</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="lenth" class="col-sm-2 col-form-label"
        >長度<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          name="lenth"
          v-model.trim="$v.forms.lenth.$model"
          :class="{ 'is-invalid': $v.forms.lenth.$error }"
          maxlength="6"
        />
        <div class="invalid-feedback" v-if="!$v.forms.lenth.required">此欄位為必填</div>
        <div class="invalid-feedback" v-if="!$v.forms.lenth.numeric">此欄位需輸入數字</div>
        <div class="invalid-feedback" v-if="!$v.forms.lenth.maxLength">最多6位數</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="direc" class="col-sm-2 col-form-label"
        >導演<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <div class="form-row">
          <div class="col">
            <input
              type="text"
              class="form-control"
              name="direc"
              v-model.trim="$v.forms.direc.$model"
              :class="{ 'is-invalid': $v.forms.direc.$error }"
              maxlength="30"
            />
            <small class="form-text text-muted">導演(中文)</small>
            <div class="invalid-feedback" v-if="!$v.forms.direc.required">此欄位為必填</div>
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              name="edirec"
              v-model.trim="$v.forms.edirec.$model"
              :class="{ 'is-invalid': $v.forms.edirec.$error }"
              maxlength="800"
            />
            <small class="form-text text-muted">導演(英文)</small>
            <div class="invalid-feedback" v-if="!$v.forms.edirec.required">此欄位為必填</div>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="actor" class="col-sm-2 col-form-label"
        >主演<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <div class="form-row">
          <div class="col">
            <input
              type="text"
              class="form-control"
              name="actor"
              v-model.trim="$v.forms.actor.$model"
              :class="{ 'is-invalid': $v.forms.actor.$error }"
              maxlength="50"
            />
            <small class="form-text text-muted">主演(中文)</small>
            <div class="invalid-feedback" v-if="!$v.forms.actor.required">此欄位為必填</div>
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              name="eactor"
              v-model.trim="$v.forms.eactor.$model"
              :class="{ 'is-invalid': $v.forms.eactor.$error }"
              maxlength="800"
            />
            <small class="form-text text-muted">主演(英文)</small>
            <div class="invalid-feedback" v-if="!$v.forms.eactor.required">此欄位為必填</div>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="prodMonth" class="col-sm-2 col-form-label"
        >完成年月<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <div class="input-group">
          <date-picker
            :config="options"
            class="form-control monthpicker"
            id="prodMonth"
            name="prodMonth"
            maxlength="7"
            placeholder="請選擇日期 yyyy-MM"
            v-model.trim="$v.forms.prodMonth.$model"
            :class="{ 'is-invalid': $v.forms.prodMonth.$error }"
          ></date-picker>
          <div class="input-group-append">
            <span class="input-group-text"><i class="fas fa-calendar-alt"></i></span>
          </div>
        </div>
        <div class="invalid-feedback" v-if="!$v.forms.prodMonth.required">此欄位為必填</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="synop" class="col-sm-2 col-form-label"
        >劇情簡介 (中文)<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <textarea
          class="form-control"
          id="synop"
          rows="3"
          name="synop"
          v-model.trim="$v.forms.synop.$model"
          :class="{ 'is-invalid': $v.forms.synop.$error }"
        ></textarea>
        <small class="form-text text-muted" v-if="$v.forms.synop.maxLength">最多200字</small>
        <div class="invalid-feedback" v-if="!$v.forms.synop.required">此欄位為必填</div>
        <div class="invalid-feedback" v-if="!$v.forms.synop.maxLength">最多200字</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="esynop" class="col-sm-2 col-form-label"
        >劇情簡介 (英文)<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <textarea
          class="form-control"
          id="esynop"
          rows="3"
          v-model.trim="$v.forms.esynop.$model"
          :class="{ 'is-invalid': $v.forms.esynop.$error }"
        ></textarea>
        <small class="form-text text-muted" v-if="$v.forms.esynop.maxLength">最多300字</small>
        <div class="invalid-feedback" v-if="!$v.forms.esynop.required">此欄位為必填</div>
        <div class="invalid-feedback" v-if="!$v.forms.esynop.maxLength">最多300字</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="award" class="col-sm-2 col-form-label">獲獎紀錄(中文)</label>
      <div class="col-sm-10">
        <textarea
          class="form-control"
          id="award"
          rows="3"
          name="award"
          v-model.trim="$v.forms.award.$model"
          :class="{ 'is-invalid': $v.forms.award.$error }"
        ></textarea>
        <small class="form-text text-muted" v-if="$v.forms.award.maxLength">最多300字</small>
        <div class="invalid-feedback" v-if="!$v.forms.award.maxLength">最多300字</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="eaward" class="col-sm-2 col-form-label">獲獎紀錄(英文)</label>
      <div class="col-sm-10">
        <textarea
          class="form-control"
          id="eaward"
          rows="3"
          v-model.trim="$v.forms.eaward.$model"
          :class="{ 'is-invalid': $v.forms.eaward.$error }"
        ></textarea>
        <small class="form-text text-muted" v-if="$v.forms.eaward.maxLength">最多450字</small>
        <div class="invalid-feedback" v-if="!$v.forms.eaward.maxLength">最多450字</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="actorRemk" class="col-sm-2 col-form-label"
        >節目主要演員(中文)<span class="text-danger">*</span><br /><span class="badge badge-warning"
          >含獲獎紀錄</span
        ></label
      >
      <div class="col-sm-10">
        <textarea
          class="form-control"
          id="actorRemk"
          rows="3"
          name="actorRemk"
          v-model.trim="$v.forms.actorRemk.$model"
          :class="{ 'is-invalid': $v.forms.actorRemk.$error }"
        ></textarea>
        <small class="form-text text-muted" v-if="$v.forms.actorRemk.maxLength">最多300字</small>
        <div class="invalid-feedback" v-if="!$v.forms.actorRemk.required">此欄位為必填</div>
        <div class="invalid-feedback" v-if="!$v.forms.actorRemk.maxLength">最多300字</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="eactorRemk" class="col-sm-2 col-form-label"
        >節目主要演員(英文)<span class="text-danger">*</span><br /><span class="badge badge-warning"
          >含獲獎紀錄</span
        ></label
      >
      <div class="col-sm-10">
        <textarea
          class="form-control"
          id="eactorRemk"
          rows="3"
          v-model.trim="$v.forms.eactorRemk.$model"
          :class="{ 'is-invalid': $v.forms.eactorRemk.$error }"
        ></textarea>
        <small class="form-text text-muted" v-if="$v.forms.eactorRemk.maxLength">最多450字</small>
        <div class="invalid-feedback" v-if="!$v.forms.eactorRemk.required">此欄位為必填</div>
        <div class="invalid-feedback" v-if="!$v.forms.eactorRemk.maxLength">最多450字</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="producer" class="col-sm-2 col-form-label"
        >製作人(中文)<span class="text-danger">*</span><br /><span class="badge badge-warning"
          >含獲獎紀錄</span
        ></label
      >
      <div class="col-sm-10">
        <textarea
          class="form-control"
          id="producer"
          rows="3"
          name="producer"
          v-model.trim="$v.forms.producer.$model"
          :class="{ 'is-invalid': $v.forms.producer.$error }"
        ></textarea>
        <small class="form-text text-muted" v-if="$v.forms.producer.maxLength">最多300字</small>
        <div class="invalid-feedback" v-if="!$v.forms.producer.required">此欄位為必填</div>
        <div class="invalid-feedback" v-if="!$v.forms.producer.maxLength">最多300字</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="eproducer" class="col-sm-2 col-form-label"
        >製作人(英文)<span class="text-danger">*</span><br /><span class="badge badge-warning"
          >含獲獎紀錄</span
        ></label
      >
      <div class="col-sm-10">
        <textarea
          class="form-control"
          id="eproducer"
          rows="3"
          v-model.trim="$v.forms.eproducer.$model"
          :class="{ 'is-invalid': $v.forms.eproducer.$error }"
        ></textarea>
        <small class="form-text text-muted" v-if="$v.forms.eproducer.maxLength">最多450字</small>
        <div class="invalid-feedback" v-if="!$v.forms.eproducer.required">此欄位為必填</div>
        <div class="invalid-feedback" v-if="!$v.forms.eproducer.maxLength">最多450字</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="direcRemk" class="col-sm-2 col-form-label"
        >導演(中文)<span class="text-danger">*</span><br /><span class="badge badge-warning"
          >含獲獎紀錄</span
        ></label
      >
      <div class="col-sm-10">
        <textarea
          class="form-control"
          id="direcRemk"
          rows="3"
          name="direcRemk"
          v-model.trim="$v.forms.direcRemk.$model"
          :class="{ 'is-invalid': $v.forms.direcRemk.$error }"
        ></textarea>
        <small class="form-text text-muted" v-if="$v.forms.direcRemk.maxLength">最多300字</small>
        <div class="invalid-feedback" v-if="!$v.forms.direcRemk.required">此欄位為必填</div>
        <div class="invalid-feedback" v-if="!$v.forms.direcRemk.maxLength">最多300字</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="edirecRemk" class="col-sm-2 col-form-label"
        >導演(英文)<span class="text-danger">*</span><br /><span class="badge badge-warning"
          >含獲獎紀錄</span
        ></label
      >
      <div class="col-sm-10">
        <textarea
          class="form-control"
          id="edirecRemk"
          rows="3"
          v-model.trim="$v.forms.edirecRemk.$model"
          :class="{ 'is-invalid': $v.forms.edirecRemk.$error }"
        ></textarea>
        <small class="form-text text-muted" v-if="$v.forms.edirecRemk.maxLength">最多450字</small>
        <div class="invalid-feedback" v-if="!$v.forms.edirecRemk.required">此欄位為必填</div>
        <div class="invalid-feedback" v-if="!$v.forms.edirecRemk.maxLength">最多450字</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="writer" class="col-sm-2 col-form-label"
        >編劇(中文)<span class="text-danger">*</span><br /><span class="badge badge-warning"
          >含獲獎紀錄</span
        ></label
      >
      <div class="col-sm-10">
        <textarea
          class="form-control"
          id="writer"
          rows="3"
          name="writer"
          v-model.trim="$v.forms.writer.$model"
          :class="{ 'is-invalid': $v.forms.writer.$error }"
        ></textarea>
        <small class="form-text text-muted" v-if="$v.forms.writer.maxLength">最多300字</small>
        <div class="invalid-feedback" v-if="!$v.forms.writer.required">此欄位為必填</div>
        <div class="invalid-feedback" v-if="!$v.forms.writer.maxLength">最多300字</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="ewriter" class="col-sm-2 col-form-label"
        >編劇(英文)<span class="text-danger">*</span><br /><span class="badge badge-warning"
          >含獲獎紀錄</span
        ></label
      >
      <div class="col-sm-10">
        <textarea
          class="form-control"
          id="ewriter"
          rows="3"
          v-model.trim="$v.forms.ewriter.$model"
          :class="{ 'is-invalid': $v.forms.ewriter.$error }"
        ></textarea>
        <small class="form-text text-muted" v-if="$v.forms.ewriter.maxLength">最多450字</small>
        <div class="invalid-feedback" v-if="!$v.forms.ewriter.required">此欄位為必填</div>
        <div class="invalid-feedback" v-if="!$v.forms.ewriter.maxLength">最多450字</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="video" class="col-sm-2 col-form-label">片花/提案影片</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          name="video"
          v-model.trim="forms.video"
          maxlength="50"
        />
      </div>
    </div>
    <div class="form-group row" v-if="forms.filmStatus === 'B' || forms.filmStatus === 'C'">
      <label for="proposalFile" class="col-sm-2 col-form-label">提案簡報</label>
      <div class="col-sm-10">
        <div class="input-upload mb-3">
          <input
            type="file"
            ref="proposalFile"
            id="proposalFile"
            name="proposalFile"
            accept=".pdf"
            @change="proposalFileChange"
          />
          <span>請選擇 PDF 檔案</span>
        </div>
        <a
          :href="$conf.FILE_URL + forms.imageLocation + forms.proposal"
          class="form-text text-muted"
          target="_blank"
          v-if="forms.proposal"
          ><small>{{ $conf.FILE_URL + forms.imageLocation + forms.proposal }}</small></a
        >
      </div>
    </div>

    <div class="form-group row">
      <label for="file-demo" class="col-sm-2 col-form-label"
        >劇照<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <div class="input-upload mb-3">
          <input
            type="file"
            id="photo1"
            ref="photo1"
            name="photos"
            accept="image/*"
            @change="photoChange"
          />
          <span>請選擇檔案</span>
        </div>
        <div class="input-upload mb-3">
          <input
            type="file"
            id="photo2"
            ref="photo2"
            name="photos"
            accept="image/*"
            @change="photoChange"
          />
          <span>請選擇檔案</span>
        </div>
        <div class="input-upload mb-3">
          <input
            type="file"
            id="photo3"
            ref="photo3"
            name="photos"
            accept="image/*"
            @change="photoChange"
          />
          <span>請選擇檔案</span>
        </div>
        <div class="input-upload mb-3">
          <input
            type="file"
            id="photo4"
            ref="photo4"
            name="photos"
            accept="image/*"
            @change="photoChange"
          />
          <span>請選擇檔案</span>
        </div>
        <div class="input-upload mb-3" :class="{ 'is-invalid': !isPickerPhotos }">
          <input
            type="file"
            id="photo5"
            ref="photo5"
            name="photos"
            accept="image/*"
            @change="photoChange"
          />
          <span>請選擇檔案</span>
        </div>
        <div class="clearfix invalid-feedback" v-if="!isPickerPhotos">至少三張圖，最多五張圖</div>
        <div class="row">
          <div class="col-sm-4" v-for="(item, index) in photofiles" :key="index">
            <div class="card">
              <img class="card-img-top" :src="$conf.FILE_URL + item.fileLocation + item.fileName" />
              <button
                type="button"
                class="btn btn-sm btn-danger btn-block m-0"
                @click="clickPhotoDelete(index, item.fileDbid)"
              >
                刪除
              </button>
            </div>
          </div>
        </div>
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
      <button type="button" class="btn btn-outline-dark ml-4" @click="clickBack">返回</button>
    </div>
  </form>
</template>

<script>
import {
  apiFilm,
  apiFilmKnd,
  apiFilmCat,
  apiFilmStyle,
  apiFilmTheme,
  apiFilmAudience,
  apiFilmPost,
  apiFilmPut,
  apiFilmStatus,
  apiFilmPhotoDelete,
} from '@/api/index'
import datePicker from 'vue-bootstrap-datetimepicker'
import { stateMerge } from 'vue-object-merge'
import { required, maxLength, requiredIf, numeric } from 'vuelidate/lib/validators'

export default {
  components: { datePicker },
  data() {
    return {
      isEdit: false,
      submitStatus: null,
      isFILMCAT0199: false,
      isFILMSTYLE99: false,
      isFILMTHEME99: false,
      isFILMAUDIENCE99: false,
      filmCats: [],
      filmKnds: [],
      filmStyles: [],
      filmThemes: [],
      filmAudiences: [],
      filmStatuss: [],
      isPickerProposal: true,
      isPickerPhotos: true,
      isPickerPhotoCount: 0,
      photofiles: [],
      forms: {
        title: '',
        etitle: '',
        filmCat: '',
        filmKnd: '',
        kndRemk: '',
        filmStatus: '',
        filmStyle: '',
        styleRemk: '',
        filmTheme: '',
        themeRemk: '',
        filmAudience: '',
        audienceRemk: '',
        ep: '',
        lenth: '',
        direc: '',
        edirec: '',
        actor: '',
        eactor: '',
        prodMonth: '',
        synop: '',
        esynop: '',
        award: '',
        eaward: '',
        actorRemk: '',
        eactorRemk: '',
        producer: '',
        eproducer: '',
        direcRemk: '',
        edirecRemk: '',
        writer: '',
        ewriter: '',
        video: '',
        imageLocation: '',
        imageName: '',
        proposal: '',
        proposalFile: '',
        photos: [],
      },
      basic: {
        filmKnd: [],
        filmStyle: [],
        filmTheme: [],
        filmAudience: [],
        photo: [],
      },
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
      filmCat: {
        checked(val) {
          return val
        },
      },
      filmKnd: {
        checked(val) {
          return val
        },
      },
      kndRemk: {
        required: requiredIf(function () {
          return this.forms.filmKnd.indexOf('FILMCAT0199') > -1 ? true : false
        }),
        maxLength: maxLength(50),
      },
      filmStatus: { required },
      filmStyle: {
        checked(val) {
          return val
        },
      },
      styleRemk: {
        required: requiredIf(function () {
          return this.forms.filmStyle.indexOf('FILMSTYLE99') > -1 ? true : false
        }),
        maxLength: maxLength(50),
      },
      filmTheme: {
        checked(val) {
          return val
        },
      },
      themeRemk: {
        required: requiredIf(function () {
          return this.forms.filmTheme.indexOf('FILMTHEME99') > -1 ? true : false
        }),
        maxLength: maxLength(50),
      },
      filmAudience: {
        checked(val) {
          return val
        },
      },
      audienceRemk: {
        required: requiredIf(function () {
          return this.forms.filmAudience.indexOf('FILMAUDIENCE99') > -1 ? true : false
        }),
        maxLength: maxLength(50),
      },
      ep: { required, numeric, maxLength: maxLength(6) },
      lenth: { required, numeric, maxLength: maxLength(6) },
      direc: { required },
      edirec: { required },
      actor: { required },
      eactor: { required },
      prodMonth: { required },
      synop: { required, maxLength: maxLength(200) },
      esynop: { required, maxLength: maxLength(8000) },
      award: { maxLength: maxLength(300) },
      eaward: { maxLength: maxLength(8000) },
      actorRemk: { required, maxLength: maxLength(300) },
      eactorRemk: { required, maxLength: maxLength(8000) },
      producer: { required, maxLength: maxLength(300) },
      eproducer: { required, maxLength: maxLength(8000) },
      direcRemk: { required, maxLength: maxLength(300) },
      edirecRemk: { required, maxLength: maxLength(8000) },
      writer: { required, maxLength: maxLength(300) },
      ewriter: { required, maxLength: maxLength(8000) },
      // video: {
      //   checked() {
      //     const v = this.forms.video
      //     return v.indexOf('youtube') >= 0 ? (v.indexOf('embed') >= 0 ? true : false) : true
      //   },
      // },
    },
  },
  methods: {
    async getFilm() {
      let loader = this.$loading.show()
      await apiFilm(this.$route.params.code).then(response => {
        stateMerge(this.forms, response.data)
        this.getfilmKnds(this.forms.filmCat)
        this.basic.filmKnd = this.forms.filmKnd.split(',')
        this.basic.filmStyle = this.forms.filmStyle.split(',')
        this.basic.filmTheme = this.forms.filmTheme.split(',')
        this.basic.filmAudience = this.forms.filmAudience.split(',')
        this.basic.photo = this.forms.photo.split(',')
        this.photofiles = response.data.files
        this.clickfilmKnd()
        this.clickfilmStyle()
        this.clickfilmTheme()
        this.clickfilmAudience()
        loader.hide()
      })
    },
    async getfilmStatus() {
      await apiFilmStatus().then(response => {
        this.filmStatuss = response.data
      })
    },
    async getfilmStyle() {
      await apiFilmStyle().then(response => {
        this.filmStyles = response.data
      })
    },
    async getfilmTheme() {
      await apiFilmTheme().then(response => {
        this.filmThemes = response.data
      })
    },
    async getfilmAudience() {
      await apiFilmAudience().then(response => {
        this.filmAudiences = response.data
      })
    },
    async getfilmCats() {
      await apiFilmCat().then(response => {
        this.filmCats = response.data
      })
    },
    async getfilmKnds(data) {
      let loader = this.$loading.show()
      this.filmKnd = []
      if (data != '') {
        await apiFilmKnd(data).then(response => {
          this.filmKnds = response.data
          loader.hide()
        })
      } else {
        this.filmKnds = []
        loader.hide()
      }
    },
    changeCat(event) {
      this.getfilmKnds(event.target.value)
      this.$v.forms.filmCat.$touch()
    },
    clickfilmKnd() {
      this.isFILMCAT0199 = this.basic.filmKnd.indexOf('FILMCAT0199') >= 0 ? true : false
      this.forms.filmKnd = this.basic.filmKnd.join(',')
      this.$v.forms.filmKnd.$touch()
    },
    clickfilmStyle() {
      this.isFILMSTYLE99 = this.basic.filmStyle.indexOf('FILMSTYLE99') >= 0 ? true : false
      this.forms.filmStyle = this.basic.filmStyle.join(',')
      this.$v.forms.filmStyle.$touch()
    },
    clickfilmTheme() {
      this.isFILMTHEME99 = this.basic.filmTheme.indexOf('FILMTHEME99') >= 0 ? true : false
      this.forms.filmTheme = this.basic.filmTheme.join(',')
      this.$v.forms.filmTheme.$touch()
    },
    clickfilmAudience() {
      this.isFILMAUDIENCE99 = this.basic.filmAudience.indexOf('FILMAUDIENCE99') >= 0 ? true : false
      this.forms.filmAudience = this.basic.filmAudience.join(',')
      this.$v.forms.filmAudience.$touch()
    },
    proposalFileChange(event) {
      let c = this.$refs.proposalFile.files
      if (0 >= c.length) this.isPickerProposal = false
      else this.isPickerProposal = true

      this.inputFile(event)
    },
    inputFile(event) {
      // if (this.$(event.target).val().length == 0) return
      var fileName = this.$(event.target).val().split('\\').pop(),
        btn = this.$(event.target).next('span')
      if (!btn.data('text')) btn.data('text', btn.html())
      if (!fileName) {
        fileName = btn.data('text')
      }
      btn.html(fileName)
      event.preventDefault()
    },
    photoChange(event) {
      this.checkPhotos()
      this.inputFile(event)
    },
    checkPhotos() {
      this.isPickerPhotoCount = this.photofiles.length
      let c = this.$refs.photo1.files
      if (0 < c.length) this.isPickerPhotoCount++
      c = this.$refs.photo2.files
      if (0 < c.length) this.isPickerPhotoCount++
      c = this.$refs.photo3.files
      if (0 < c.length) this.isPickerPhotoCount++
      c = this.$refs.photo4.files
      if (0 < c.length) this.isPickerPhotoCount++
      c = this.$refs.photo5.files
      if (0 < c.length) this.isPickerPhotoCount++

      if (3 > this.isPickerPhotoCount || 5 < this.isPickerPhotoCount) this.isPickerPhotos = false
      else this.isPickerPhotos = true
    },
    clickBack() {
      this.$router.push({ path: '/member/portfolio' })
    },
    clickSubmit() {
      this.submitStatus = 'PENDING'
      this.checkPhotos()
      this.$v.$touch()
      if (this.$v.$invalid || !this.isPickerPhotos) {
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
    Send() {
      var formData = new FormData()
      formData.append('title', this.forms.title)
      formData.append('etitle', this.forms.etitle)
      formData.append('filmCat', this.forms.filmCat)
      formData.append('filmKnd', this.forms.filmKnd)
      formData.append('kndRemk', this.forms.kndRemk)
      formData.append('filmStatus', this.forms.filmStatus)
      formData.append('filmStyle', this.forms.filmStyle)
      formData.append('styleRemk', this.forms.styleRemk)
      formData.append('filmTheme', this.forms.filmTheme)
      formData.append('themeRemk', this.forms.themeRemk)
      formData.append('filmAudience', this.forms.filmAudience)
      formData.append('audienceRemk', this.forms.audienceRemk)
      formData.append('ep', parseInt(this.forms.ep))
      formData.append('lenth', parseInt(this.forms.lenth))
      formData.append('direc', this.forms.direc)
      formData.append('edirec', this.forms.edirec)
      formData.append('actor', this.forms.actor)
      formData.append('eactor', this.forms.eactor)
      formData.append('prodMonth', this.forms.prodMonth)
      formData.append('synop', this.forms.synop)
      formData.append('esynop', this.forms.esynop)
      formData.append('award', this.forms.award)
      formData.append('eaward', this.forms.eaward)
      formData.append('actorRemk', this.forms.actorRemk)
      formData.append('eactorRemk', this.forms.eactorRemk)
      formData.append('producer', this.forms.producer)
      formData.append('eproducer', this.forms.eproducer)
      formData.append('direcRemk', this.forms.direcRemk)
      formData.append('edirecRemk', this.forms.edirecRemk)
      formData.append('writer', this.forms.writer)
      formData.append('ewriter', this.forms.ewriter)
      formData.append('video', this.forms.video)

      if (this.$refs.proposalFile) {
        for (let i = 0; i < this.$refs.proposalFile.files.length; i++) {
          let file = this.$refs.proposalFile.files[i]
          formData.append('proposalFile', file, file.name)
        }
      }

      for (let i = 0; i < this.$refs.photo1.files.length; i++) {
        let file = this.$refs.photo1.files[i]
        formData.append('photos', file, file.name)
      }

      for (let i = 0; i < this.$refs.photo2.files.length; i++) {
        let file = this.$refs.photo2.files[i]
        formData.append('photos', file, file.name)
      }

      for (let i = 0; i < this.$refs.photo3.files.length; i++) {
        let file = this.$refs.photo3.files[i]
        formData.append('photos', file, file.name)
      }

      for (let i = 0; i < this.$refs.photo4.files.length; i++) {
        let file = this.$refs.photo4.files[i]
        formData.append('photos', file, file.name)
      }

      for (let i = 0; i < this.$refs.photo5.files.length; i++) {
        let file = this.$refs.photo5.files[i]
        formData.append('photos', file, file.name)
      }

      if (this.isEdit) {
        this.UpdateData(formData)
      } else {
        this.AddData(formData)
      }
    },
    clickPhotoDelete(index, id) {
      this.$swal({
        title: '是否刪除?',
        text: '資料刪除後無法復原',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '確認刪除!',
        cancelButtonText: '保留',
        showCloseButton: true,
      }).then(result => {
        if (result.value) {
          let loader = this.$loading.show()
          apiFilmPhotoDelete(this.$route.params.code, id)
            .then(response => {
              this.photofiles.splice(index, 1)
              this.checkPhotos()
              loader.hide()
            })
            .catch(err => {
              loader.hide()
              this.$swal('', '檔案移除失敗', 'error')
            })
        }
      })
    },
    async UpdateData(formData) {
      formData.append('id', this.$route.params.code)
      let loader = this.$loading.show()
      await apiFilmPut(this.$route.params.code, formData)
        .then(response => {
          this.submitStatus = ''
          this.$swal('', '資料儲存完成。', 'success')
          loader.hide()
          this.$router.push({ path: '/member/portfolio' })
        })
        .catch(err => {
          this.errorCode(err)
          this.submitStatus = ''
        })
      loader.hide()
    },
    async AddData(formData) {
      let loader = this.$loading.show()
      await apiFilmPost(formData)
        .then(response => {
          this.submitStatus = ''
          this.$swal('', '資料儲存完成。', 'success')
          loader.hide()
          this.$router.push({ path: '/member/portfolio' })
        })
        .catch(err => {
          this.errorCode(err)
          this.submitStatus = ''
        })
      loader.hide()
    },
  },
  created() {
    this.getfilmStatus()
    this.getfilmStyle()
    this.getfilmTheme()
    this.getfilmAudience()
    this.getfilmCats()
  },
  mounted() {
    if (this.$store.state.auth.memberType === 'FILM') {
      // this.getfilmCats()
      if (this.$route.params.code) {
        this.isEdit = true
        this.getFilm()
      }
    }
  },
}
</script>

<style>
.form-row + .form-row {
  margin-top: 1rem;
}
.col-form-label .badge {
  white-space: normal;
}
</style>
