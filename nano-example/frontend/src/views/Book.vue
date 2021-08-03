<template>
    <div>
        <div class="d-flex">
            <h1>{{this.book.title}}</h1>
            <h2>{{this.book.subtitle}}</h2>
        </div>
        <img v-bind:src="this.book.cover" width="150" height="220"><br>
        <div>
            <h6 v-if="true">작가: {{this.book.author}},</h6>
            <h6 v-if="true">번역: {{this.book.translator}},</h6>
        </div>
        <div>
            <div>페이지: {{this.book.page}}</div>
            <div>가격: {{this.book.price}}</div>
            <div>ISBN: {{this.book.ISBN}}</div>
        </div>
        <p>{{this.book.info}}</p>

    </div>
</template>
<script>
import axios from 'axios';

export default {
    props: ['bookId'],
    data(){
        return{
            book : [],
        }
    },
    mounted(){
        console.log(this.bookId);
        axios.get('/api/books/' + this.bookId)
        .then((response) => {
            this.book = response.data;
        });
    },
}
</script>
<style>
</style>