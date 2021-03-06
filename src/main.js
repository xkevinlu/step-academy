import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import Waltz from './Waltz.vue'
import Player from './components/NextPrevFigures.vue'
//
Vue.use(VueRouter)

Vue.use(Vuetify, {
 iconfont: 'fa'
})
Vue.config.productionTip = false

const routes = [
  { path: '/waltz', component: Waltz },
  { path: '/bar', component: Player }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
