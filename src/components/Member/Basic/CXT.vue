<template>
  <form>
    <div class="form-group row">
      <label for="account-example" class="col-sm-2 col-form-label">帳號</label>
      <div class="col-sm-10">
        <input
          type="email"
          class="form-control"
          id="account-example"
          name="x"
          placeholder="請輸入Email Address"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="password-example" class="col-sm-2 col-form-label"
        >密碼<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <input type="password" class="form-control" id="password-example" placeholder="Password" />
      </div>
    </div>
    <div class="form-group row">
      <label for="password-example" class="col-sm-2 col-form-label"
        >再次確認密碼<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <input type="password" class="form-control" id="password-example" placeholder="Password" />
      </div>
    </div>
    <div class="form-group row">
      <label for="name-example" class="col-sm-2 col-form-label"
        >姓名<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="name-example"
          name="x"
          placeholder="請輸入姓名"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="phone-example" class="col-sm-2 col-form-label"
        >手機<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <input
          type="tel"
          class="form-control"
          id="phone-example"
          name="x"
          placeholder="請輸入手機"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="tel-example" class="col-sm-2 col-form-label">電話</label>
      <div class="col-sm-10">
        <input type="tel" class="form-control" id="tel-example" name="x" placeholder="請輸入電話" />
      </div>
    </div>
    <div class="form-group row">
      <label for="service-example" class="col-sm-2 col-form-label"
        >服務單位<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="service-example"
          name="x"
          placeholder="請輸入服務單位"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="job-example" class="col-sm-2 col-form-label"
        >職稱<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="job-example"
          name="x"
          placeholder="請輸入職稱"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="job-example" class="col-sm-2 col-form-label"
        >產業別<span class="text-danger">*</span></label
      >
      <div class="col-sm-10">
        <select class="form-control">
          <option>I</option>
          <option>LOVE</option>
          <option>U</option>
        </select>
      </div>
    </div>
    <div class="form-group row">
      <label for="other-example" class="col-sm-2 col-form-label">其他</label>
      <div class="col-sm-10">
        <textarea class="form-control" id="other-example" rows="3" placeholder="200字"></textarea>
      </div>
    </div>
    <div class="btn-area">
      <button type="button" class="btn btn-system">確認送出</button>
    </div>
  </form>
</template>

<script>
export default {}
</script>
