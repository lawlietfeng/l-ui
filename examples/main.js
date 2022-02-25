import Vue from 'vue'
import App from './App.vue'
import LUI from '../src/index'
import router from './router'
import hljs from 'highlight.js'
import demoBlock from './components/demo-block.vue'
import 'highlight.js/styles/stackoverflow-light.css'
Vue.component('demo-block', demoBlock)
Vue.use(LUI)
Vue.config.productionTip = false

router.afterEach(() => {
  Vue.nextTick(() => {
    const blocks = [...document.querySelectorAll('pre code:not(.hljs)')]
    blocks.forEach(hljs.highlightBlock)
  })
  document.title = 'l-ui'
})
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
