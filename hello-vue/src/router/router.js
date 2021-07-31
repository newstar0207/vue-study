import Vue from 'vue';
import VueRouter from 'vue-router';

import Gugudan from '@/components/Gugudan.vue';
import LottoGenerator from '@/components/Lotto/LottoGenerator.vue'
import ResponseCheck from '@/components/ResponseCheck.vue'
import WordRelay from '@/components/WordRelay.vue'
import GameMatcher from '@/components/GameMatcher.vue'

Vue.use (VueRouter);

export default new VueRouter({
    mode : 'history',
    routes: [
        {path: '/gugudan' , component: Gugudan},
        {path: '/lotto-generator' , component: LottoGenerator },
        {path: '/response-check' , component: ResponseCheck},
        {path: '/word-relay' , component: WordRelay},
        {path: '/game/:name' , component: GameMatcher},

    ]
});