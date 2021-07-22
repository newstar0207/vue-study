<template>
    <div>
        <input type="text" v-model="user">
        <input type="text" v-model="comment">
        <button v-on:click="save">Save</button>
        
        <div>
            <p v-for="(comment, index) in comments" v-bind:key="index">{{ comment.user}} : {{comment.comment }}</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user:null,
            comment:null,
            comments : [],
        }
    },
    methods: {
        save() {
            let comment = { user: this.user, comment: this.comment };
            this.comments.unshift(comment);
            this.user = null;
            this.comment = null;
        }
    }
}
</script>