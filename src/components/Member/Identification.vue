<template>
  <div class="col-md-9">
    <div class="card">
      <div class="card-body">
        <h2 class="form-title">參展證管理</h2>
        <button type="button" class="btn btn-link btn-add" @click="clickAdd">新增參展證</button>

        <div class="alert alert-secondary text-center" role="alert" v-if="items.length === 0">
          尚無參展證資料
        </div>

        <div class="table-responsive" v-if="items.length > 0">
          <table class="table table-rwd">
            <thead>
              <tr>
                <th>#</th>
                <th>參展證</th>
                <th>管理</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in items" :key="index">
                <td data-th="#">{{ index + 1 }}</td>
                <td class="text-left" data-th="識別證">{{ item.name }}</td>
                <td data-th="管理">
                  <button
                    type="button"
                    class="btn btn-outline-info"
                    @click="clickEdit(item.passID, item.mbrType)"
                  >
                    編輯
                  </button>
                  <button type="button" class="btn btn-outline-success d-none" disabled>
                    下載
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    @click="clickDelete(index, item.passID)"
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
</template>

<script>
import { apiIdentification, apiIdentificationDelete } from '@/api/index'

export default {
  data() {
    return {
      items: [],
    }
  },
  methods: {
    async getList() {
      let loader = this.$loading.show()
      await apiIdentification()
        .then(response => {
          this.items = response.data
        })
        .catch(err => {})
      loader.hide()
    },
    clickAdd() {
      this.$router.push({ path: '/member/identification/add' })
    },
    clickEdit(id, type) {
      this.$router.push({ path: '/member/identification/c-' + id })
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
          apiIdentificationDelete(id)
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
  },
  mounted() {
    this.getList()
  },
}
</script>
