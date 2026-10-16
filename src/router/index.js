import Vue from 'vue'
import VueRouter from 'vue-router'
import UserManage from '../views/elment/UserManage.vue'
import QuestionManage from '../views/elment/QuestionManage.vue'

Vue.use(VueRouter)

const routes = [
  {
    // 根路径默认跳转到用户管理页
    path: '/',
    redirect: '/users'
  },
  {
    // 用户管理页
    path: '/users',
    name: 'userManage',
    component: UserManage
  },
  {
    // 题目管理页
    path: '/questions',
    name: 'questionManage',
    component: QuestionManage
  }
]

const router = new VueRouter({
  routes
})

export default router
