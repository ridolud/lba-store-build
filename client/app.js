import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'

const LbaConfig = require('../lba-config.js')
Vue.use(LbaConfig.theme_config.theme_pack)

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
