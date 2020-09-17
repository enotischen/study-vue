<template>
  <div class="col-md-9">
    <div class="card">
      <div class="card-body">
        <h2 class="form-title">會員基本資料填寫</h2>
        <cct-form v-if="isCCT" />
        <cxt-form v-if="!isCCT" />
      </div>
    </div>
  </div>
</template>

<script>
import CctForm from '@/components/Member/Basic/CCT.vue'
import CxtForm from '@/components/Member/Basic/CXT.vue'

export default {
  data() {
    return {
      isCCT: true,
    }
  },
  components: {
    CctForm,
    CxtForm,
  },
  mounted() {
    this.isCCT = this.$store.state.auth.memberCategory === 'CCT' ? true : false
  },
}
</script>
