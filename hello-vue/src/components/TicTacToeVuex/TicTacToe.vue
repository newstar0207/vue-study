<template>
    <div> 
      <div> {{ turn }} 턴 입니다.</div>
      <table>
          <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex" >
              <td @click="onClickTd(rowIndex, cellIndex)" v-for="(cellData, cellIndex) in rowData" :key="cellIndex">{{ cellData }}</td>
          </tr>
      </table>
      <div v-if="winner"> {{ winner }} 승리.</div>
    </div>  
</template>
<script>
import { mapState } from 'vuex';
import store, { CHANGE_TURN, CLICK_CELL, NO_WINNER, RESET_GAME, SET_WINNER } from './store'; // store 와 최상위 컴포넌트 ( tictactoe ) 연결

export default {
    store,
    computed: {
        ...mapState(['winner', 'turn', 'tableData']),
        // winner() {
        //     return this.$store.state.winner;
        // },
        // turn() {
        //     return this.$store.state.turn;
        // }
    },
    methods: {
        onClickTd(rowIndex, cellIndex){
            this.$store.commit(NO_WINNER);
            if (this.cellData) return;
            // this.$set(this.tableData[this.rowIndex], this.cellIndex, this.turn); // 배열의 index로 바꿀 경우 $set 사용
            this.$store.commit(CLICK_CELL, { row : rowIndex, cell: cellIndex}); // 뮤테이션을 사용할 경우 commit 으로 사용
 
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