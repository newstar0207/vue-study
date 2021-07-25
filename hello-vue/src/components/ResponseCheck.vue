<template>
    <div>
        <div id="screen" v-bind:class="state" @click="onClickScreen">{{ message }}</div>
        <div v-show="result.length"> <!-- v-show="" / "" 부분이 false 경우 display: none -->
            <div>평균 시간 : {{ average }} </div>
            <button @click="onReset">reset</button>
        </div>
    </div>
</template>
<script>
let startTime = 0;
let endTime = 0;
let timeOut = null;
export default {
    data() {
        return {
            message : '클릭해서 확인하세요',
            result : [],
            state: 'waiting',
            
        }
    },
    computed: {
        average(){
            return  this.result.reduce((a,c) => a + c , 0) / this.result.length  || 0
        }
    },
    methods : {
        onReset() {
            this.result = [];
        },
        onClickScreen() {
            if(this.state === 'waiting'){
                this.state = 'ready';
                this.message = '초록색이 되면 클릭하세요';
                timeOut = setTimeout(() => {
                    this.state = 'now';
                    this.message = '클릭';
                    startTime = new Date();
                }, Math.floor(Math.random() * 1000) + 2000); // 2~3초
            }else if(this.state === 'ready'){
                clearTimeout(timeOut);
                this.state = 'waiting';
                this.message = '너무 성급하시군요';
            }else {
                endTime = new Date();
                this.state = 'waiting';
                this.message = '시작하세요';
                this.result.push(endTime - startTime);
            }
        },

    }
}
</script>
<style scoped>
    #screen {
        width: 300px;
        height: 200px;
        text-align: center;
        user-select: none
    }
    #screen.waiting {
        background-color: aqua;
    }
    #screen.ready {
        background-color: red;
        color: white;
    }
    #screen.now {
        background-color: greenyellow;
    }
</style>