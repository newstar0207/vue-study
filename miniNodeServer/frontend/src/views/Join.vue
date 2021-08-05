<template>
    <div>
        <v-form ref="form">
            <v-text-field v-model="userId" :counter="10" label="userID" required></v-text-field>
            <v-text-field v-model="name" label="name" required></v-text-field>
            <v-text-field v-model="password" label="password" required></v-text-field>
            <v-btn @click="addUser" color="success" class="mr-4">등록</v-btn>
        </v-form>
    </div>
</template>
<script>

export default {
    data(){
        return {
            userId: '',
            name: '',
            password: '',
        }
    },
    methods: {
        addUser(){
            this.$store.dispatch('user/addUser', { userId: this.userId, name: this.name, password: this.password });
        }
    },
}
</script>
<style>
    
</style>