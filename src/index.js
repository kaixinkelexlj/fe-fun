import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import VueHighlightJS from 'vue-highlightjs'
import iView from 'iview'
import 'highlight.js/styles/tomorrow.css'
import 'iview/dist/styles/iview.css'

import App from './app.vue'
import FunView from './views/fun_page.vue'
import TestView from './views/test_page.vue'
import IndexView from './views/index.vue'

Vue.use(VueRouter)
Vue.use(VueHighlightJS)
Vue.use(iView)

new Vue({
  el: '#app',
  template: '<App/>',
  router: new VueRouter({
    routes: [
      {path: '/', name: 'index', component: IndexView},
      {path: '/fun', name: 'fun', component: FunView},
      {path: '/test', name: 'test', component: TestView}
    ],
  }),
  components: {App},
})
