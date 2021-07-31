<template>
    <table>
        <tr v-for="(rowData , rowIndex) in tableData" :key="rowIndex">
            <td 
                v-for="(cellData, cellIndex) in rowData" :key="cellIndex" 
                :style="cellDataStyle(rowIndex, cellIndex)"
                @click="onClickTd(rowIndex, cellIndex)"
                @contextmenu.prevent='onRightClickTd(rowIndex, cellIndex)' 
            >{{ cellDataText(rowIndex, cellIndex) }}</td> 
            <!-- contextmenu.prevent => 왼쪽마우스클릭시 콘텍스트 메뉴 안뜨게 함(prevent) -->
        </tr>
    </table>
</template>

<script>
import { mapState } from 'vuex'
import { CLICK_MINE, CODE, FALG_CELL, NORMALIZE_CELL, OPEN_CELL, QUESTION_CELL } from './store'
export default {
    computed: {
        ...mapState([ 'tableData', 'halted']),
        cellDataStyle() {
            return (row, cell) => {
                switch (this.$store.state.tableData[row][cell]){
                    case CODE.NORMAL:
                    case CODE.MINE:
                        return {
                            background: '#444',
                        };
                    case CODE.CLICKED_MINE:
                    case CODE.OPENED:
                        return {
                            background: 'white',
                        };
                    case CODE.FLAG:
                    case CODE.FLAG_MINE:
                        return {
                            background: 'red',
                        };
                    case CODE.QUESTION:
                    case CODE.QUESTION_MINE:
                        return {
                            background: 'yellow',
                        };

                    default: return {};
                }
            }
        },
        cellDataText() { 
            return (row, cell) => {
                switch (this.$store.state.tableData[row][cell]){
                    case CODE.MINE:
                        return 'X';
                    case CODE.NORMAL:
                        return '';
                    case CODE.FLAG:
                    case CODE.FLAG_MINE:
                        return '!';
                    case CODE.QUESTION:
                    case CODE.QUESTION_MINE:
                        return '?';
                    case CODE.CLICKED_MINE:
                        return '펑';
                    default: 
                        return this.$store.state.tableData[row][cell] || ''; // || '' => 0인경우 빈칸
                }
            };
        }
    },
    methods: {
        onClickTd(row, cell){
            if(this.halted){
                return;
            }
            switch( this.tableData[row][cell]){
                case CODE.NORMAL:
                    this.$store.commit(OPEN_CELL, { row , cell });
                    return;
                case CODE.MINE: 
                    this.$store.commit(CLICK_MINE, { row , cell });
                    return;    
                default:
                    return;
            }
        },
        onRightClickTd(row, cell) {
            if(this.halted){
                return;
            }
            switch( this.tableData[row][cell]){
                case CODE.NORMAL:
                case CODE.MINE:
                    this.$store.commit(FALG_CELL, { row, cell});
                    return;
                case CODE.FLAG:
                case CODE.FLAG_MINE:
                    this.$store.commit(QUESTION_CELL, { row, cell});
                    return;
                case CODE.QUESTION_MINE:        
                case CODE.QUESTION:        
                    this.$store.commit(NORMALIZE_CELL,  {row, cell});
                    return;
                default: 
                    return;    
            }
        }
    }
}
</script>