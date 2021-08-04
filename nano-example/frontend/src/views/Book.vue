<template>
    <div class="text-center">
        <div class="align">
            <h1>{{this.book.title}}</h1>
            <h1 class="subtitle">{{this.book.subtitle}}</h1>
        </div>
        <img v-bind:src="this.book.cover" width="150" height="220"><br>
        <div class="align">
            <h4 v-if="true">작가: {{this.book.author}},</h4>
            <h4 v-if="this.book.translator">&nbsp;번역: {{this.book.translator}},</h4>
        </div>
        <div class="align">
            <div>페이지: {{this.book.page}},&nbsp;</div>
            <div>가격: {{this.book.price}},&nbsp;</div>
            <div> ISBN: {{this.book.ISBN}}</div>
        </div>
        <br>    
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
    .align {
        display: flex;
        justify-content: center;
    }
    .subtitle {
        color : gray;
    }
</style>