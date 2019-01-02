import Vue from 'vue'
import Router from 'vue-router'
import Live from '@/Live'
import HelloWorld from '@/components/HelloWorld'
import player from '@/Player'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Live',
        component: Live
    },
    {
        path: '/Player',
        name: 'player',
        component: player
    },
    {
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorld
    }
  ]
})
