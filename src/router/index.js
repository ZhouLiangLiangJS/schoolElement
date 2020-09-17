import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Xjxs from '../components/xinjianxs.vue'
import Teacher from '../components/teacher.vue'
import Join from '../components/createTeacher.vue'
import Jfgl from '../components/jfgl.vue'
import AJF  from '../components/allJF.vue'
import JFXQ from '../components/JFXQ.vue'
import CGL from '../components/classGL.vue'
import SetTab from '../components/setTable.vue'
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
    },
    {
      path: '/AJF',
      name: 'AJF',
      component: AJF
    },
    {
      path: '/JFXQ',
      name: 'JFXQ',
      component: JFXQ
    },
    {
      path: '/CGL',
      name: 'CGL',
      component: CGL
    },
    {
      path: '/SetTab',
      name: 'SetTab',
      component: SetTab
    },
    
  ]
})
