import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Addmemo from '../views/Addmemo.vue'
import Read from '../views/ReadMemo.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home, meta: { requiresAuth: true} /*props:(route) => ({memoId: route.query.memoId})*/},
  { path: '/add', name: 'Add', component: Addmemo, meta: { requiresAuth: true}},  
  { path: '/memos/:memoId', name: 'Read', component: Read, meta: { requiresAuth: true}, props : true},
  { path: '/signin', name:'Signin', component: Signin},
  { path: '/signup', name: 'Signup', component: Signup},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// to 라우트 - 대상 route 객체로 이동, from  라우트- 현재 라우트로 오기전 라우트, next 함수 - 훅을 해결하기 위해 호출 
router.beforeEach((to, from, next) => { // 전역가드
  if(to.matched.some((record) => record.meta.requiresAuth)){
    if(localStorage.getItem('accessToken') == null){
      alert('Signin please') // meta 필드가 requiresAuth 이면..
      next('/signin'); // 다른 위치로 리다이렉션 함.
    }
  }
  next(); // 원래 가려던 곳으로 감..
});

export default router
