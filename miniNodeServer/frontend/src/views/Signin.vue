<template>
    <div>
        <h1>Signin</h1>
        <form @submit.prevent="onSubmit(userid, password)">
            <input type="text" v-model="userid" placeholder="User ID"/>
            <input type="password" v-model="password" placeholder="Password"/>
            <button type="submit" value="Signin">버튼</button>
        </form>
        <p><i>{{ message }}</i></p>
    </div>
</template>
<script>
export default {
    name: 'Singin',
    data() {
        return {
            userid: '',
            password: '',
            message: '',
        }
    },
    methods: {
        onSubmit(userid, password){
            this.$store.dispatch('signin', { userid, password })
            .then(() => {
                this.$router.push('/');
            })
            .catch(() => {
                this.message='Signin Failed'
            })
        }
    },
}
</script>
<style>
    
</style>