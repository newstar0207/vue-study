<template>
    <div id=computer :style="computedStyleObject">
        <div>
            <button @click="onClickButton('scissors')">가위</button>
            <button @click="onClickButton('rock')">바위</button>
            <button @click="onClickButton('paper')">보</button>
        </div>
        <div>{{ result }}</div>
        <div>점수 {{ score }}</div>
        
    </div>
</template>
<script>
    let interver = null;
    const rspCoord = {
        rock : '0',
        paper : '-284px',
        scissors : '-142px',
    };

    const scores = {
        'scissors' : 1,
        'rock' : 0,
        'paper' : -1,
    };
    // Object.entries =>  key ,value 값 반환
    // find(function (v)) => key, value 쌍 v[1] => value 값, 마지막 [0] => 해당 값의 key 값
   const computerChoice = (imgCoord) => {
    return Object.entries(rspCoord).find(function (v) { 
      return v[1] === imgCoord;
    })[0];
  };

    export default {
        data() {
            return {
                result : '',
                score : 0,
                imgCoord : rspCoord.rock,
            }
        },

        methods: {
            onClickButton(choice){
                this.result = choice;
                clearInterval(interver);
                const myScore = scores[choice];
                const cpuScore = scores[computerChoice(this.imgCoord)];
                console.log(cpuScore);
                const diff = myScore - cpuScore;
                if(diff === 0 ){
                    this.result = '비겼습니다';
                }else if([-1, 2].includes(diff)){
                    this.result = '이겼습니다';
                    this.score += 1;
                }else {
                    this.result = '졌습니다';
                    this.score -= 1;
                }
                setTimeout(() => {
                    this.changeHand();
                }, 1000);
            
            },

            changeHand() {
                interver = setInterval(() => {
                    if (this.imgCoord === rspCoord.rock){
                        this.imgCoord = rspCoord.scissors;
                    }else if(this.imgCoord === rspCoord.scissors){
                        this.imgCoord = rspCoord.paper;
                    }else if(this.imgCoord === rspCoord.paper){
                        this.imgCoord = rspCoord.rock;
                    }
                }, 100);  // 변수를 이용해 멈춰주기위해 변수 사용
            },
        },

        computed: {
            computedStyleObject() {
                return {background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${ this.imgCoord} 0`,};
            },     
        },

        mounted() {
            console.log('mounted'); // 화면에 나타난 후
            this.changeHand();
        },

        created() {
            console.log('created'); // 컴포넌트가 보여지게 될 때(화면에 나타나기전)
        },
        updated() {
            console.log('updated'); // 화면이 바뀔때
        },
        beforeDestroy(){
            clearInterval(interver);
        },
        destroyed() {
            console.log('destroyed'); // 컴포넌트가 화면에 있다가 사라질때
        },

    }
</script>
<style>
    #computer {
        width : 142px;
        height : 200px;
        background-position: 0 0;
    }
</style>