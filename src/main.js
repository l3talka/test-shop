import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Maska from 'maska'

Vue.config.productionTip = false
Vue.use(Maska)

Vue.filter('convertToRubles', function (value, course) {
  return `${parseFloat(value * course).toFixed(2)} ₽`;
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
