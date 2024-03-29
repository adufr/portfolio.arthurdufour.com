import VueLazyload from 'vue-lazyload'
import globalDirectives from './globalDirectives'

import '@/assets/vendor/nucleo/css/nucleo.css'
import '@/assets/vendor/font-awesome/css/font-awesome.css'
import '@/assets/scss/argon.scss'

export default {
  install (Vue) {
    Vue.use(VueLazyload)
    Vue.use(globalDirectives)
  }
}
