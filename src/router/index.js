import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Xjxs from '../components/xinjianxs.vue'
import Teacher from '../components/teacher.vue'
import Join from '../components/createTeacher.vue'
import Jfgl from '../components/jfgl.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/xinjianxs',
      name: 'Xjxs',
      component: Xjxs
    },
    {
      path: '/createTeacher',
      name: 'Join',
      component: Join
    },
    {
      path: '/teacher',
      name: 'Teacher',
      component: Teacher
    },
    {
      path: '/jfgl',
      name: 'Jfgl',
      component: Jfgl
    }
  ]
})
