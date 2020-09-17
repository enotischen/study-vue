import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import auth from './auth.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
  },
  plugins: [
    createPersistedState({
      storage: window.localStorage,
      reducer(val) {
        return {
          auth: val.auth,
        }
      },
    }),
  ],
})

export default store
