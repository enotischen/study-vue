import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
    meta: {
      title: '台北電視內容交易及創投媒合會',
      keepAlive: true,
    },
  },
  {
    path: '/registered',
    component: () => import('../views/Registered.vue'),
    meta: {
      title: '註冊 - 台北電視內容交易及創投媒合會',
      keepAlive: true,
    },
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: '登入 - 台北電視內容交易及創投媒合會',
      keepAlive: false,
    },
  },
  {
    path: '/verify',
    component: () => import('../views/Verify.vue'),
    children: [
      {
        path: '',
        redirect: '/login',
      },
      {
        path: '/verify/:mail/:code*',
        meta: {
          title: '信箱驗證 - 台北電視內容交易及創投媒合會',
          keepAlive: true,
        },
      },
    ],
  },
  {
    path: '/forgetpw',
    name: 'ForgetPW',
    component: () => import('../views/Password.vue'),
    meta: {
      title: '忘記密碼 - 台北電視內容交易及創投媒合會',
      keepAlive: true,
    },
  },
  {
    path: '/member',
    redirect: '/member/guide',
    component: () => import('../views/Member.vue'),
    children: [
      {
        path: 'guide',
        component: () => import('../components/Member/Guide.vue'),
        meta: {
          title: '會員導引 - 台北電視內容交易及創投媒合會',
          keepAlive: false,
        },
      },
      {
        path: 'data',
        component: () => import('../components/Member/Basic.vue'),
        meta: {
          title: '會員基本資料 - 台北電視內容交易及創投媒合會',
          keepAlive: false,
        },
      },
      {
        path: 'portfolio',
        component: () => import('../components/Member/Portfolio.vue'),
        meta: {
          title: '作品集 - 台北電視內容交易及創投媒合會',
          keepAlive: false,
        },
      },
      {
        path: 'portfolio/add',
        component: () => import('../components/Member/PortfolioForm.vue'),
        meta: {
          title: '新增作品集 - 台北電視內容交易及創投媒合會',
          keepAlive: false,
        },
      },
      {
        path: 'portfolio/c-:code',
        component: () => import('../components/Member/PortfolioForm.vue'),
        meta: {
          title: '作品集 - 台北電視內容交易及創投媒合會',
          keepAlive: false,
        },
      },
      {
        path: 'identification',
        component: () => import('../components/Member/Identification.vue'),
        meta: {
          title: '參展證管理 - 台北電視內容交易及創投媒合會',
          keepAlive: false,
        },
      },
      {
        path: 'identification/add',
        component: () => import('../components/Member/IdentificationForm.vue'),
        meta: {
          title: '參展證管理 - 台北電視內容交易及創投媒合會',
          keepAlive: false,
        },
      },
      {
        path: 'identification/c-:code',
        component: () => import('../components/Member/IdentificationForm.vue'),
        meta: {
          title: '參展證管理 - 台北電視內容交易及創投媒合會',
          keepAlive: false,
        },
      },
    ],
  },
  {
    path: '/preview',
    component: () => import('../components/Portfolio/Preview.vue'),
    meta: {
      keepAlive: true,
    },
    children: [
      {
        path: '',
        redirect: '/login',
      },
      {
        path: 'c-:code',
        meta: {
          title: '參展證管理 - 台北電視內容交易及創投媒合會',
          keepAlive: false,
        },
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: routes,
})

export default router
