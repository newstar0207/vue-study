<template>
    <div>
        <p>{{num1}} * {{num2}} 의 값?</p>
        <!-- form 의 기본 기능으로써 입력 버튼 누를때마다 화면을 새로고침 해줌 -->
        <form v-on:submit="multiply"> 
            <input type="text" v-model="value" ref="answer" >
            <button type="submit">입력!</button>
        </form>
        <div>{{ result }} </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num1 : Math.floor(Math.random() * 9 + 1),
            num2 : Math.floor(Math.random() * 9 + 1),
            value: '',
            result: '',
        }
    },
    methods: {
        multiply(e) {    
            e.preventDefault(); // form 이 하는 페이지 새로고침을 없에줌
            if(parseInt(this.value) === this.num1 * this.num2){
                this.result = true;
                this.num1 =  Math.floor(Math.random() * 9 + 1);
                this.num2 =  Math.floor(Math.random() * 9 + 1);
                this.value = '';
                this.$refs.answer.focus();
            }else {
                this.result = false;
                this.value = '';
            }
            console.log(this.value)

        } 
    }
}
</script> 