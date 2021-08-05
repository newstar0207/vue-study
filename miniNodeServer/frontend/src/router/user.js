import Vue from 'vue'
import VueRouter from 'vue-router'

import Join from '../views/Join.vue'
import Admin from '../views/Admin.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/users', component: Join},
        // { path: '/users/:userid', compon  ent: userInfo },
        { path: '/admin/users', component: Admin},
    ]
})