import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import LbaHermes from '../../storeage/themes/hermes/dist/lba-theme-hermes.js'

Vue.use(LbaHermes)

sync(store, router)
 
const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
