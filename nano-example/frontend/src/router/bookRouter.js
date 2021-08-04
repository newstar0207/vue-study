import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Book from '../views/Book.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/' , component: Home, props:(route) => ({bookId: route.query.bookId})},
        { path: '/:bookId', component: Book, props:true},
    ]
});