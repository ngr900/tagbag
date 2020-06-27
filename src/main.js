import Vue from 'vue'
import App from './App.vue'
import {TagBagApp} from './tagbag.js'


// const bag = new TagBagApp();
// window.bag = bag;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
