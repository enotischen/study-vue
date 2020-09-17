import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

// vuelidate
import { Vuelidate } from 'vuelidate'
Vue.use(Vuelidate)

import Lightbox from 'vue-easy-lightbox'
Vue.use(Lightbox)

Vue.config.productionTip = false

import { CONFIG as SiteConfig } from './config'
Object.defineProperty(Vue.prototype, '$conf', { value: SiteConfig })

import '@/mixins/errorCode'

import $ from 'jquery'
Vue.prototype.$ = $

import VueSweetalert2 from 'vue-sweetalert2'
Vue.use(VueSweetalert2)

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

Vue.directive('title', el => {
  if (el.dataset.title === undefined) {
    document.title = '等待中...'
  } else {
    document.title = el.dataset.title
  }
})

import loading from 'vue-loading-overlay' //component
import 'vue-loading-overlay/dist/vue-loading.css' //style
Vue.component('loading', loading)
Vue.use(loading, {
  canCancel: false,
  color: '#000000',
  loader: 'dots', //spinner/dots/bars
  width: 50,
  height: 50,
  backgroundColor: '#ffffff',
  isFullPage: true,
  opacity: 0.8,
})

// import VueAnalytics from 'vue-analytics'
// Vue.use(VueAnalytics, {
//   id: 'UA-xxxxxxxxx-x',
//   router,
//   disableScriptLoader: true,
//   autoTracking: {
//     pageviewOnLoad: false,
//   },
// })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
