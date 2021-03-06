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
import GLXQ from '../components/GLXQ.vue'
import SSGL from '../components/shuSheGL.vue'
import setSS from '../components/setShuShe.vue'
import SSXQ from '../components/shuSheXQ.vue'
import CreateSS from '../components/createShuShe.vue'
import sedTZ from '../components/sedTongZhi.vue'
import sendLS from '../components/sendLS.vue'
import TZXQ from '../components/TZXQ.vue'
import CJWT from '../components/CJWT.vue'
import TJCJWT from '../components/TJCJWT.vue'
import XTGL from '../components/xitongGL.vue'

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
    {
      path: '/GLXQ',
      name: 'GLXQ',
      component: GLXQ
    },
    {
      path: '/SSGL',
      name: 'SSGL',
      component: SSGL
    },
    {
      path: '/setSS',
      name: 'setSS',
      component: setSS
    },
    {
      path: '/SSXQ',
      name: 'SSXQ',
      component: SSXQ
    },
    {
      path: '/CreateSS',
      name: 'CreateSS',
      component: CreateSS
    },
    {
      path: '/sedTZ',
      name: 'sedTZ',
      component: sedTZ
    },
    {
      path: '/sendLS',
      name: 'sendLS',
      component: sendLS
    },
    {
      path: '/TZXQ',
      name: 'TZXQ',
      component: TZXQ
    },
    {
      path: '/CJWT',
      name: 'CJWT',
      component: CJWT
    },
    {
      path: '/TJCJWT',
      name: 'TJCJWT',
      component: TJCJWT
    },
    {
      path: '/XTGL',
      name: 'XTGL',
      component: XTGL
    }
  ]
})
