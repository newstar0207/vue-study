<template>
    <td v-on:click="onClickTd">{{ cellData }}</td>
</template>
<script>

import { mapState } from 'vuex';
import { CLICK_CELL , SET_WINNER, CHANGE_TURN, RESET_GAME, NO_WINNER} from './store';
 
export default {
    props : {
        cellIndex : Number,
        rowIndex : Number,
    },
    computed: {
        ...mapState({
            tableData : state => state.tableData,
            turn : state => state.turn,
            cellData(state) {
                return state.tableData[this.rowIndex][this.cellIndex];
            },
        }),
        // cellData() { // o, x , ' '
        //     return this.$store.state.tableData[this.rowIndex][this.cellIndex];
        // },
        // tableData(){
        //     return this.$store.state.tableData; // vuex 의 state 의 데이터를 사용하기 위해서 반드시 computed를 사용해야함
        // },
        // turn(){
        //     return this.$store.state.turn;
        // }
    },
    methods:{
        onClickTd(){
            this.$store.commit(NO_WINNER);
            if (this.cellData) return;
            // this.$set(this.tableData[this.rowIndex], this.cellIndex, this.turn); // 배열의 index로 바꿀 경우 $set 사용
            this.$store.commit(CLICK_CELL, { row : this.rowIndex, cell: this.cellIndex}); // 뮤테이션을 사용할 경우 commit 으로 사용
 
            let win = false;
            if (this.tableData[this.rowIndex][0] === this.turn && this.tableData[this.rowIndex][1] === this.turn && this.tableData[this.rowIndex][2] === this.turn) {
                win = true;
            }
            if (this.tableData[0][this.cellIndex] === this.turn && this.tableData[1][this.cellIndex] === this.turn && this.tableData[2][this.cellIndex] === this.turn) {
                win = true;
            }
            if (this.tableData[0][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][2] === this.turn) {
                win = true;
            }
            if (this.tableData[0][2] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][0] === this.turn) {
                win = true;
            }

            if(win) {
                // this.winner = this.turn;                
                this.$store.commit(SET_WINNER, this.turn);
                this.$store.commit(RESET_GAME);
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
                    this.$store.commit(NO_WINNER);
                    this.$store.commit(RESET_GAME);
                }else {
                    this.$store.commit(CHANGE_TURN);        
                }
            }
        },
    },   
}
</script>
<style>
    
</style>