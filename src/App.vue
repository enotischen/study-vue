<template>
  <div id="app">
    <router-view />
    <loading></loading>
  </div>
</template>

<script>
import '../public/utcCore/bootstrap/bootstrap.min.css'
import '../public/utcCore/fontawesome/css/fontawesome.min.css'
import '../public/utcCore/ciaoyukit/css/ciaoyu.css'
import '../public/utcCore/ciaoyukit/css/package.css'
import '../public/utcCore/uDefault/css/uDefault.css'
import '@/assets/css/registered.css'
import '@/assets/css/style.css'

export default {
  name: 'App',
}
</script>
