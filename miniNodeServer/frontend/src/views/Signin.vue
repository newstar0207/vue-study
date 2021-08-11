<template>
    <div>
        <h1>Signin</h1>
        <!-- <form @submit.prevent="onSubmit(userid, password)">
            <input type="text" v-model="userid" placeholder="User ID"/>
            <input type="password" v-model="password" placeholder="Password"/>
            <button type="submit" value="Signin">버튼</button>
        </form> -->
        <v-card class="mx-auto my-auto" max-width="400">    
            <v-text-field v-model="userid" class="mx-4 pt-8" label="ID" clearable required></v-text-field>
            <v-text-field v-model="password" type="password" class="mx-4" label="password" clearable required></v-text-field>
            <div class="d-flex justify-space-between">
                <v-btn @click="onSubmit(userid, password)" text class="mx-4 mb-5" color="blue">login</v-btn>
                <v-btn @click="signup" text class="mx-4 mb-5" color="blue">signup</v-btn>
                <v-btn @click="cancel" class="mx-4 mb-5" text color="blue">cancel</v-btn>
            </div>
        </v-card>

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
            this.$store.dispatch('user/signin', { userid, password })
            .then(() => {
                this.$router.push('/');
            })
            .catch(() => {
                this.message='Signin Failed'
            })
        },
        cancel(){
            this.$router.push('/');
        },
        signup(){
            this.$router.push('/signup');
        }
    },
}
</script>
<style>
    
</style>