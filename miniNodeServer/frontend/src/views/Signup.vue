<template>
    <div class="black-bg">
        <h1>signUP</h1>
        <v-card class="mx-auto my-auto" max-width="400">    
            <v-text-field v-model="userid" class="mx-4 pt-8" label="ID" clearable required></v-text-field>
            <v-text-field v-model="password" class="mx-4" label="password" clearable required></v-text-field>
            <v-text-field v-model="name" class="mx-4" label="name" clearable required></v-text-field>
            <div class="d-flex">
                <v-btn @click="onSubmit(userid, password, name)" text class="mx-4 mb-5" color="blue">signup</v-btn>
                <v-spacer></v-spacer>
                <v-btn @click="cancel" class="mx-4 mb-5" text color="blue">cancel</v-btn>
            </div>
        </v-card>
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
            this.$store.dispatch('user/signup', { userid, password, name })
            .then(() => {
                this.$router.push('/signin');
            })
            .catch(() => {
                this.message = 'Signup Failed'
            })
        },
        cancel(){
            this.$router.push('/');
        }
    }
}
</script>
<style>
    .blakc-bg{
        width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.01);
        position: fixed; padding: 20px;
    }
    
</style>