import Vue from 'vue'
import App from './App.vue'
import { render } from 'omiv'
Vue.config.productionTip = false



render(App, '#app', new class {
  data = {
    count: 1
  }
  sub = () => {
    this.data.count--
  }
  add = () => {
    this.data.count++
  }

  getDoubleCount = () => {
    return this.data.count * 2
  }
})


