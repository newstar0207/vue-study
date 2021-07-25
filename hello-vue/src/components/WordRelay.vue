<template>
    <div>
        <form v-on:submit="WordRelay">
            <p>{{ word }}</p>
            <input type="text" v-model="value" ref="answer">
            <button type="submit">입력</button>
        </form>
        <p>{{ result }}</p>

    </div>
</template>

<script>
export default {
    props : [
        'startWord',
    ],
    data() {
        return {
            word: this.startWord,
            result : '',
            value : '',
        }
    },
    methods : {
        WordRelay(e) {
            e.preventDefault(); // form 의 자동 새로고침ㄴㄴ
            if(this.value.startsWith(this.word[this.word.length - 1])){
                this.word = this.value;
                this.value = '';
                this.$refs.answer.focus();
                this.result = 'next!';
            }else {
                this.result = 'fail';
                this.value = '';
                this.$refs.answer.focus();
            }   
        },
    }
}
</script>