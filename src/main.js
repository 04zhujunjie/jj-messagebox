import Vue from 'vue'
import App from './App.vue'

import jj_messagebox from './jj-messagebox/index.js'

Vue.use(jj_messagebox)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
