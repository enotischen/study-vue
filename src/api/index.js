import axios from 'axios'
import router from '../router'
import store from '../store/index'
import { CONFIG as SiteConfig } from '../config'

// API Server
const apiServer = axios.create({
  baseURL: SiteConfig.API_SERVER,
})

// request bind jwt
apiServer.interceptors.request.use(
  config => {
    const token = store.state.auth.token
    token && (config.headers.Authorization = 'Bearer ' + token)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response
apiServer.interceptors.response.use(
  response => {
    return response
  },
  error => {
    const { response } = error
    if (response) {
      errorHandle(response)
      return Promise.reject(response)
    }
  }
)

const errorHandle = response => {
  switch (response.status) {
    case 401:
      store.dispatch('auth/setAuth', {
        token: '',
        isLogin: false,
        memberCategory: '',
        memberKind: '',
        memberType: '',
      })
      router.push('/')
      break

    default:
    // return Promise.reject(response)
  }
}

// 相關的 api
export const apiLogin = data => apiServer.post('login', data)
export const apiRegister = data => apiServer.post('register', data)
export const apiValidateMail = data => apiServer.post('register/validatemail', data)
export const apiValidate = data => apiServer.post('register/validate', data)
export const apiForget = data => apiServer.post('login/forgetpwd', data)
export const apiGuide = () => apiServer.get('member/guide')
export const apiInfo = () => apiServer.get('member/info')
export const apiInfoSend = data => apiServer.put('member/info', data)
export const apiCity = () => apiServer.get('commonoption/city')
export const apiZip = () => apiServer.get('commonoption/zip')
export const apiIndustry = () => apiServer.get('commonoption/industry')
export const apiBusiness = () => apiServer.get('commonoption/business')
export const apiPortfolio = data => apiServer.post('portfolio/list', data)
export const apiPortfolioDelete = data => apiServer.delete('portfolio/' + data)
export const apiFilm = data => apiServer.get('portfolio/film/' + data)
export const apiFilmPost = data => apiServer.post('portfolio/film', data)
export const apiFilmPut = (id, data) => apiServer.put('portfolio/film/' + id, data)
export const apiFilmCat = () => apiServer.get('portfolio/contentType')
export const apiFilmKnd = data => apiServer.get('portfolio/contentType/' + data)
export const apiFilmStyle = () => apiServer.get('portfolio/style')
export const apiFilmTheme = () => apiServer.get('portfolio/theme')
export const apiFilmAudience = () => apiServer.get('portfolio/audience')
export const apiFilmStatus = () => apiServer.get('portfolio/filmstatus')
export const apiFilmPhotoDelete = (code, id) =>
  apiServer.delete('portfolio/filmphoto/' + code + '/' + id)

export const apiIdentification = () => apiServer.get('idcard')
export const apiIdentificationDetail = data => apiServer.get('idcard/' + data)
export const apiIdentificationPost = data => apiServer.post('idcard', data)
export const apiIdentificationPut = (id, data) => apiServer.put('idcard/' + id, data)
export const apiIdentificationDelete = id => apiServer.delete('idcard/' + id)
