<template>
    <div>
      <table-component :table-data="tableData"></table-component>  
      <div> {{ turn }} 턴 입니다.</div>
      <div v-if="winner"> {{ winner }} 승리.</div>
    </div>  
</template>
<script>
import TableComponent from './TableComponent';
import EventBus from './EventBus';

export default {
    components : {
        TableComponent,
    },
    data() {
        return {
            // this.tableData[0][1] = 'x'; => 작동하지 않음
            tableData: [

                ['', '', ''],
                ['', '', ''],
                ['', '', ''],     
            ],
            turn: 'O',
            winner: '',
        };
    },
    methods: {
        onClickTd(rowIndex, cellIndex){
            // const this = this.$root.$data;  
            // console.log(this.turn , '--------------------------');
            this.$set(this.tableData[rowIndex], cellIndex, this.turn); // 배열의 index로 바꿀 경우 $set 사용
 
            let win = false;
            if (this.tableData[rowIndex][0] === this.turn && this.tableData[rowIndex][1] === this.turn && this.tableData[rowIndex][2] === this.turn) {
                win = true;
            }
            if (this.tableData[0][cellIndex] === this.turn && this.tableData[1][cellIndex] === this.turn && this.tableData[2][cellIndex] === this.turn) {
                win = true;
            }
            if (this.tableData[0][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][2] === this.turn) {
                win = true;
            }
            if (this.tableData[0][2] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][0] === this.turn) {
                win = true;
            }

            if(win) {
                this.winner = this.turn;
                this.turn = 'O';
                this.tableData = [ ['','',''], ['','',''], ['','','']];
            }else {
                let all = true;
                this.tableData.forEach((row) => { // 무승부 검사
                    row.forEach((cell) => {
                        if(!cell){
                            all = false;
                        }
                    })
                });
                if(all){ // 무승부
                    this.winner = '';
                    this.turn = 'O';
                    this.tableData = [ ['','',''], ['','',''], ['','','']];
                }else {
                this.turn = this.turn === 'O' ? 'X' : 'O';
                }
            }
        }
    },
    created() {
        EventBus.$on('clickTd', this.onClickTd);
    }
}
</script>
<style>
    table {
        border-collapse: collapse;
    }
    td {
        border: 1px solid black;
        width : 40px;
        height: 40px;
        text-align: center;
    }
</style>