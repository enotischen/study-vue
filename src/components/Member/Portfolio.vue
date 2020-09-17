<template>
  <div class="col-md-9">
    <div class="card">
      <div class="card-body">
        <h2 class="form-title">作品集</h2>
        <button type="button" class="btn btn-link btn-add" @click="clickAdd">新增作品</button>

        <div class="alert alert-secondary text-center" role="alert" v-if="items.length === 0">
          尚無作品資料
        </div>

        <div v-if="items.length !== 0">
          <div class="search-area">
            <label for="keyword">作品查詢</label>
            <input
              type="text"
              name="keyword"
              id="keyword"
              class="form-control"
              placeholder="請輸入關鍵字"
              v-model.trim="search.keyword"
              @keyup.enter="clickSearch"
            />
            <button type="button" class="btn btn-outline-success mt-3" @click="clickSearch">
              搜尋
            </button>
          </div>

          <div class="table-responsive">
            <table class="table table-rwd">
              <thead>
                <tr>
                  <th>#</th>
                  <th>作品名稱</th>
                  <th>管理</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in items" :key="index">
                  <td data-th="#">{{ index + 1 }}</td>
                  <td class="text-left" data-th="作品名稱">{{ item.title }}</td>
                  <td data-th="表頭4">
                    <a :href="'/preview/c-' + item.id" class="btn btn-outline-dark" target="_blank">
                      預覽
                    </a>
                    <button
                      type="button"
                      class="btn btn-outline-info"
                      @click="clickEdit(item.id, item.mbrType)"
                    >
                      編輯
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      @click="clickDelete(index, item.mbrType + '/' + item.id)"
                    >
                      刪除
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiGuide, apiPortfolio, apiPortfolioDelete } from '@/api/index'

export default {
  data() {
    return {
      items: [],
      total: 0,
      perPage: 10,
      search: {
        keyword: '',
        currentPage: 1,
      },
      options: {
        format: 'YYYY-MM-DD',
        useCurrent: false,
      },
    }
  },
  methods: {
    async checkData() {
      let loader = this.$loading.show()
      await apiGuide()
        .then(response => {
          if (response.data.indexOf('NotFillBasicInfo') >= 0) {
            this.$swal(
              '',
              '您好，為能提高媒合需請您提供更多公司資訊，請先至「會員基本資料」填寫公司基本資料，完成填寫後即可新增作品集。',
              'error'
            )
            this.$router.push({ path: '/member/data' })
          } else {
            this.getList()
          }
          loader.hide()
        })
        .catch(err => {
          loader.hide()
        })
    },
    async getList() {
      let loader = this.$loading.show()
      await apiPortfolio(this.search)
        .then(response => {
          this.items = response.data.list
          this.total = response.data.total
        })
        .catch(err => {})
      loader.hide()
    },
    clickAdd() {
      this.$router.push({ path: '/member/portfolio/add' })
    },
    clickEdit(id, type) {
      this.$router.push({ path: '/member/portfolio/c-' + id })
    },
    clickDelete(index, id) {
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
          apiPortfolioDelete(id)
            .then(response => {
              this.items.splice(index, 1)
              loader.hide()
            })
            .catch(err => {
              loader.hide()
            })
        }
      })
    },
    clickSearch() {
      this.getList()
      this.scrollToTop()
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
    if (this.$store.state.auth.memberCategory !== 'CCT') {
      this.$router.push({ path: '/member/guide' })
      return
    }
    this.checkData()
  },
}
</script>
