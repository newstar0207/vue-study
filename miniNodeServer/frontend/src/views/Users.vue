<template>
    <v-data-table :headers="headers" :items="users" class="mx-10 my-10">
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>Users</v-toolbar-title> <!-- main title -->
                <v-dialog v-model="dialogDelete" max-width="500px"> <!-- 삭제시 다이어로그 -->
                    <v-card>
                        <v-card-title class="text-h5">delete this user?</v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue" text @click="dialogCancel">Cancel</v-btn>
                            <v-btn color="blue" text @click="dialogOK">OK</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
            <v-btn color="blue" text @click="clickActions(item)">delete</v-btn>
        </template>

    </v-data-table>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return{
            dialogDelete: false,
            search: '',
            userid: '',
            name: '',
            password: '',
            users: [],
            headers: [
                { text: 'userID', align: 'start', value: 'userid' },
                { text: 'name', value: 'name'},
                { text: 'password', value: 'password'},
                { text: 'Actions', value: 'actions'},
            ],
            editedIndex: -1,
        }
    },
    mounted() {
        axios.get('/api/admin/users')
        .then((response) => {
            this.users = response.data;
            console.log(this.users);
        }).catch((err) => {
            console.log(err);
        }); 
    },
    methods:{
        dialogCancel(){
            this.dialogDelete = false
        },
        dialogOK(){
            axios.delete('/api/admin/users/' + this.userid)
            .then(() => {
                // this.$router.push('/admin/users').catch((err) => {console.log(err)});
                this.dialogDelete = false;
                localStorage.accessToken = null;
                location.reload();
            })
            .catch(err => {
                console.log(err);
            })
        },
        clickActions(item){
            console.log(item);
            this.editedIndex = this.users.indexOf(item);
            this.userid = item.userid;
            this.dialogDelete = true;
        }
    }
}
</script>
<style>
    
</style>