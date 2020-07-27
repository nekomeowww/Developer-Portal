import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import NewApp from '@/page/NewApplication.vue'
import App from '@/page/Application.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/newapp',
      name: 'NewApp',
      component: NewApp
    },
    {
      path: '/app',
      name: 'App',
      component: App
    }
  ]
})
