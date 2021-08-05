<template>
    <div>
        <h1>Signup</h1>
        <form @submit.prevent="onSubmit(userid, password, name)">
            <input type="text" v-model="userid" placeholder="UserId">
            <input type="password" v-model="password" placeholder="Password">
            <input type="text" v-model="name" placeholder="Name">
            <button type="submit" value="Signup">버튼</button>
        </form>
        <p><i> {{ message }}</i></p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            userid: '',
            password: '',
            name: '',
            message: '',
        }
    },
    methods: {
        onSubmit(userid, password, name){
            this.$store.dispatch('signup', { userid, password, name })
            .then(() => {
                this.$router.push('/signin');
            })
            .catch(() => {
                this.message = 'Signup Failed'
            })
        }
    }
}
</script>
<style>
    
</style>