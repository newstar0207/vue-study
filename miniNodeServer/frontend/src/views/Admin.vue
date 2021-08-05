<template>
    <div>
        <h1 >{{$store.state.admin.users}}</h1>
        <button @click="getUser">qqqq</button>
    </div>
</template>
<script>

export default {
    data(){
        return {
           users: [],
        }
    },
    methods: {
       getUser(){
           this.$store.dispatch('getUser');
       }
    },
}
</script>
<style>
    
</style>