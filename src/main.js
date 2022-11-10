import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Vuex)
Vue.use(Element)
Vue.config.productionTip = false

const store = new Vuex.Store()
console.log(store, 'store')



new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
