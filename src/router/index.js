import Vue from 'vue'
import Router from 'vue-router'
import TDTVDataMonitor from '@/views/TDTVDataMonitor/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TDTVDataMonitor',
      component: TDTVDataMonitor
    }
  ]
})
