<template>
    <div id="app">
         <div>
            <router-link to="/game/index">게임매쳐</router-link>
            <router-link to="/game/gugudan">구구단</router-link>
            <router-link to="/game/lotto-generator">로또</router-link>
            <router-link to="/game/response-check">반응체크</router-link>
            <router-link to="/game/word-relay">끝말잇기</router-link>
         </div>
         <router-view></router-view>
    </div>              
</template>
<script>
// import router from './vue-router/router';

export default {
    // router,
}
</script>
<style>
    table {
        border-collapse: collapse;
    }

    td{
        border: 1px solid black;
        width:  40px;
        height: 40px;
        text-align: center;
    }
</style>