<template>
    <div>
        <div>당첨 숫자</div>
        <div id="result">
            <Lotto-Ball v-for="ball in winBalls" :key="ball" :number="ball"></Lotto-Ball>
        </div>
        <div v-if="bonus">보너스</div>
        <Lotto-Ball v-if="bonus" :number='bonus'></Lotto-Ball>
        <button v-if="redo" @click='onClickRedo'>한번더!</button>
    </div>
</template> 
<script>
import LottoBall from './LottoBall.vue';

function getWinNumbers() {
    console.log('getWinNumbers');
    // Array(45) 의 배열을 만듬
    // fill(value) value 의 값으로 채움
    // map -> 새로운 배열을 반환 map(v,i) v : 현재값 i : 현제 인덱스 
    const candidate = Array(45).fill().map((v,i) => i + 1); 
    const shuffle = [];
    while (candidate.length > 0 ) {
        // splice는 배열을 반환함으로 [0] 을 사용하여 값을 push 함
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length) , 1)[0]);
    }
    const bonuseNumber = shuffle[shuffle.length -1];
    const winNumbers = shuffle.slice(0,6).sort((p,c) => p - c);
    return [...winNumbers, bonuseNumber];
}   

const timeouts = [];
export default {
    components: {
        LottoBall,
    },
    data() {
        return {
            winNumbers: getWinNumbers(),
            winBalls: [],
            bonus : null,
            redo: false,
        }
    },
    methods: {
        onClickRedo(){
            this.winNumbers = getWinNumbers();
            this.winBalls = [];
            this.bonus = null;
            this.redo = false;
            this.showBalls();
        },
        showBalls() {
            for(let i = 0; i < this.winNumbers.length - 1 ; i++){
                timeouts[i] = setTimeout(() => {
                    this.winBalls.push(this.winNumbers[i]); 
                }, (i + 1) * 1000);
            }
            timeouts[6] = setTimeout(() => {
                this.bonus = this.winNumbers[6]; 
                this.redo = true;
            }, 7000) 
        },
    },
    mounted() {
        this.showBalls();
    },
    beforeDestroy() {
        timeouts.forEach((t) => {
            clearTimeout(t);
        })
    },

};
</script>
<style lang="">
    
</style>