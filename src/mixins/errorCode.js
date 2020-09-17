import Vue from 'vue'

Vue.mixin({
  data() {
    return {
      errorMessage: {
        NotFound: '找不到資料，請確認您所輸入的資訊是否正確。<BR>',
        ErrorFail: '失敗，發生錯誤<BR>',
        CreateFail: '新增失敗<BR>',
        UpdateFail: '編輯失敗<BR>',
        DeleteFail: '刪除失敗<BR>',
        NotEventTime: '非活動期間<BR>',
        NoPermission: '無此操作權限<BR>',
        EmailBeenUsed: '您輸入的EMail帳號已使用。<BR>',
        BeenValidated: '帳號已被驗證<BR>',
        NotRegisterTime: '非可註冊時段<BR>',
        ExistMember: '您輸入的EMail帳號已具會員身分，無法再次註冊。<BR>',
        ValidateCodeError: '驗證碼解析錯誤<BR>',
        ValidateFail: '驗證失敗<BR>',
        AccountNotFound: '帳號不存在或密碼錯誤<BR>',
        AccountInvalid: '帳號尚未驗證<BR>',
        Required: '欄位必填<BR>',
        EmailAddress: '非Email格式<BR>',
        PwdPattern: '不符合密碼規則(8~14英數字)<BR>',
        CheckPwd: '確認密碼與密碼不一致<BR>',
        NotFillBasicInf:
          '您好，為能提高媒合需請您提供更多公司資訊，請先至「會員基本資料」填寫公司基本資料，完成填寫後即可新增作品集。<BR>',
        NotApplyIDCard: '尚未申請識別證<BR>',
        NotFillPreference: '尚未填寫買家喜好問卷<BR>',
        NotUpPortfolio: '作品集沒有資料<BR>',
        MBRPwrd: '密碼格式需為8~14個英數字元<BR>',
        MBRCompany: '公司名稱必填<BR>',
        MBRDcompany: '公司名稱英文必填<BR>',
        MBRZipID: '請選擇縣市區域<BR>',
        MBRAddr: '公司地址必填<BR>',
        MBREaddr: '公司地址英文必填<BR>',
        MBROwner: '公司負責人必填<BR>',
        MBREowner: '公司負責人英文必填<BR>',
        MBRPName: '參展聯絡人必填<BR>',
        MBREpname: '參展聯絡人英文必填<BR>',
        MBRPTitle: '參展聯絡人職稱必填<BR>',
        MBREptitle: '參展聯絡人職稱英文必填<BR>',
        MBRTel: '你所輸入的電話號碼僅限輸入 0 至 9 或 #-。<BR>',
        MBRWebsite: '您所輸入的公司網站必須為https://開頭。<BR>',
        MBRIntro: '公司簡介必填<BR>',
        MBREintro: '公司簡介英文必填<BR>',
        MBRIndustry: '公司行業別必選<BR>',
        MBRIndremk: '其他行業別必填<BR>',
        MBRService: '公司主要業務必選<BR>',
        MBRCXTPname: '姓名必填<BR>',
        MBRCXTCell: '手機必填且需符合格式<BR>',
        MBRCXTCompany: '服務單位必填<BR>',
        MBRPtitle: '職稱必填<BR>',
        MBRCXTIndRemk: '產業別必選<BR>',
        IsMaxQuantity: '新增失敗，已經到達新增數量上限。<BR>',
        Video: '片花必須為https://開頭<BR>',
        OverSize: '上傳圖檔單張不可以超過2M，建議解析度72dpi<BR>',
        PDFOverSize: '上傳的PDF檔不可超過30MB<BR>',
      },
    }
  },
  methods: {
    errorCode(err) {
      let msg = ''
      if (err.data.errors) {
        const list = err.data.errors.messageCode
        if (err.data.errors.messageCode) {
          for (let i = 0; i < list.length; i++) {
            const v = list[i].toString()
            msg += this.errorMessage[v]
          }
        }
        if (err.data.errors.Video) msg += this.errorMessage['Video']
        if (err.data.errors.Pwd) msg += this.errorMessage['PwdPattern']
      }
      if (msg === '') msg += '發生錯誤，請重新執行。'
      this.$swal('', msg, 'error')
    },
  },
})
