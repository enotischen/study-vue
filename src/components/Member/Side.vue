<template>
  <div class="col-md-3">
    <div class="card side">
      <nav class="nav flex-column">
        <router-link to="/member/guide" class="nav-link">會員導引</router-link>
        <router-link to="/member/data" class="nav-link">會員基本資料</router-link>
        <router-link to="/member/portfolio" class="nav-link" v-if="isCCT">作品集</router-link>
        <router-link to="/member/identification" class="nav-link">參展證管理</router-link>
        <a href="#" class="nav-link" @click="logout">登出</a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCCT: false,
    }
  },
  methods: {
    checkMember() {
      this.isCCT = this.$store.state.auth.memberCategory === 'CCT' ? true : false
      this.isCCT = this.$store.state.auth.memberKind.indexOf('MBRKND01') >= 0 ? true : false
    },
    logout(event) {
      this.$store.dispatch('auth/setAuth', {
        token: '',
        isLogin: false,
        memberCategory: '',
        memberKind: '',
        memberType: '',
      })
      this.$router.push({ path: '/' })
      event.preventDefault()
    },
  },
  mounted() {
    this.checkMember()
  },
}
</script>
