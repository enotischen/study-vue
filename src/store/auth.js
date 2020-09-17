export default {
  namespaced: true,
  state: {
    token: '',
    isLogin: false,
    memberCategory: '',
    memberKind: '',
    memberType: '',
  },
  mutations: {
    SET_AUTH(state, options) {
      state.token = options.token
      state.isLogin = options.isLogin
      state.memberCategory = options.memberCategory
      state.memberKind = options.memberKind
      state.memberType = options.memberType
    },
  },
  actions: {
    setAuth(context, options) {
      context.commit('SET_AUTH', {
        token: options.token,
        isLogin: options.isLogin,
        memberCategory: options.memberCategory,
        memberKind: options.memberKind,
        memberType: options.memberType,
      })
    },
  },
}
