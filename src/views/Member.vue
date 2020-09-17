<template>
  <main role="main" class="cp">
    <div class="container">
      <logo />
      <div class="row">
        <side />
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </div>
    </div>
  </main>
</template>

<script>
import Logo from '@/components/Common/Logo.vue'
import Side from '@/components/Member/Side.vue'

export default {
  components: {
    Logo,
    Side,
  },
}
</script>
