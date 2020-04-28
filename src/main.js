import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import toast from '@/assets/js/toast'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'


Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
Vue.use(toast)
Vue.use(VueLazyLoad,{
  loading:require('@/assets/img/汉堡_SVG.png')
})
fastclick.attach(document.body)

new Vue({
  render: h => h(App),
  toast,
  router,
  mode:'history',
  store
}).$mount('#app')



