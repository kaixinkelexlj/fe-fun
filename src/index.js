import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import VueHighlightJS from 'vue-highlightjs'
import iView from 'iview'
import 'highlight.js/styles/tomorrow.css'
import 'iview/dist/styles/iview.css'

import App from './app.vue'
import FunView from './views/fun_page.vue'

Vue.use(VueRouter)
Vue.use(VueHighlightJS)
Vue.use(iView)

new Vue({
  el: '#app',
  template: '<App/>',
  router: new VueRouter({
    routes: [
      {path: '/', name: 'fun', component: FunView}
    ],
  }),
  components: {App},
})
