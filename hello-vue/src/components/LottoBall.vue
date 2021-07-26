<template>
    <div>
        <div class="ball" :style="styleObject">{{ number }}</div>
    </div>
</template>
<script>
export default {

    props: { // 부모 컴포넌트가 자식 컴포넌트에게 값을 전달해 주는 것
        number: Number,
    },
    computed: {
        styleObject() {
            let background;
            if(this.number <= 10){
                background = 'red';
            }else if(this.number <= 20){
                background = 'orange';
            }else if(this.number  <= 30){
                background = 'yellow';
            }else if(this.number <= 40){
                background = 'blue';
            }else {
                background = 'green';
            }
            return {
                background,
            }
        }
    }
}
</script>
<style>
    .ball {
        display: inline-block;
        border: 1px solid black;
        border-radius: 20px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        text-align: center;
        margin-right: 20px;
    }
</style>