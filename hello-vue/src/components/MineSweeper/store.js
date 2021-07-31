import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export const START_GAME = 'START_GAME';
export const OPEN_CELL = 'OPEN_CELL';
export const CLICK_MINE = 'CLICK_MINE';
export const FALG_CELL = 'FALG_CELL';
export const QUESTION_CELL = 'QUESTION_CELL';
export const NORMALIZE_CELL = 'NORMALIZE_CELL';
export const INCREMENT_TIMER = 'INCREMENT_TIMER';

export const CODE = {
    MINE: -7,
    NORMAL: -1,
    QUESTION: -2,
    FLAG: -3,
    QUESTION_MINE: -4,
    FLAG_MINE: -5,
    CLICKED_MINE: -6,
    OPENED: 0, // 0 이상이면 다 opened
  };

const plantMine = (row, cell , mine) => {
    const candidate = Array(row * cell).fill().map((arr, i) => {
        return i;
    });

    const shuffle = []; // 지뢰를 심을 위치를 저장하는 배열
    while (candidate.length > row * cell - mine) { // 지뢰를 뽑음
        const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
        shuffle.push(chosen);
    }

    const data = []; // 지뢰찾기 배열 판
    for( let i = 0; i < row ; i++){
        const  rowData = [];
        data.push(rowData);
        for(let j = 0; j < cell; j++){
            rowData.push(CODE.NORMAL); // 모든칸을 -1 로 리셋
        }
    }

    for (let k = 0; k < shuffle.length; k++) { // 몇번째행, 몇변째열에 지뢰를 심음
        const ver = Math.floor(shuffle[k] / cell); // 행
        const hor = shuffle[k] % cell; // 열
        data[ver][hor] = CODE.MINE; 
    }
    
    console.log(data);
    return data;



};

export default new Vuex.Store({
    state: {
        tableData : [],
        data: {
            cell : 0,
            row : 0,
            mine : 0,
        },
        timer : 0,
        halted: true, // 중단된
        result : '',
        openedCount : 0,
    },
    getter: {

    },
    mutations: { // state 를 수정할경우 (동기적)
        [START_GAME](state, { row , cell , mine}) {
            state.data = {
                row,
                cell,
                mine,
            };
            state.tableData = plantMine(row, cell, mine);
            state.timer = 0;
            state.halted = false;
            state.openedCount = 0;
            state.result = '';
        },
        [OPEN_CELL](state, {row, cell}) {
            const checked = [];
            let openedCount = 0;
            function checkAround(row, cell) { // 주변 8칸이 지뢰인지 검색
                let checkRowOrCellIsUndefined = row < 0 || row >= state.tableData.length || cell < 0 || cell >= state.tableData[0].length;
                if( checkRowOrCellIsUndefined) return;
                if([CODE.OPENED, CODE.FLAG, CODE.FLAG_MINE, CODE.QUESTION_MINE, CODE.QUESTION ].includes(state.tableData[row][cell])){
                    return;
                }
                if(checked.includes(row + '/' + cell)){
                    return;
                }else {
                    checked.push(row + '/' + cell);
                }
                let around = [];
                if(state.tableData[row - 1]){
                    around = around.concat([
                        state.tableData[row - 1][cell -1], state.tableData[row - 1][cell], state.tableData[row - 1][cell + 1]
                    ]);
                }
                around = around.concat([
                    state.tableData[row][cell - 1], state.tableData[row][cell + 1]
                ]);
                if(state.tableData[row + 1]){
                    around = around.concat([
                        state.tableData[row + 1][cell -1], state.tableData[row + 1][cell], state.tableData[row + 1][cell + 1]
                    ]);
                }
                //filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
                //includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별합니다.
                const counted = around.filter(function(v) {
                    return [CODE.MINE, CODE.QUESTION_MINE, CODE.FLAG_MINE].includes(v);
                });
                if(counted.length === 0 && row > -1){ //주변칸에 지뢰가 없는경우
                    const near = [];
                    if( row -1 > -1) {
                        near.push([row -1, cell -1]);
                        near.push([row -1, cell]);
                        near.push([row -1, cell + 1]);
                    }
                    near.push([row, cell -1]);
                    near.push([row, cell +1]);
                    if( row + 1 < state.tableData.length) {
                        near.push([row + 1, cell - 1]);
                        near.push([row + 1, cell]);
                        near.push([row + 1, cell + 1]);
                    }
                    near.forEach( (n) => { // n => 현재 처리할 요소
                        if( state.tableData[n[0]][n[1]] !== CODE.OPENED){
                            checkAround(n[0], n[1]);
                        }
                    });
                }   
                if(state.tableData[row][cell] === CODE.NORMAL){
                    openedCount += 1;
                }
                Vue.set(state.tableData[row], cell, counted.length);
            }
            checkAround(row, cell);
            let halted = false;
            let result = '';
            if(state.data.row * state.data.cell - state.data.mine === state.openedCount + openedCount){
                result = `${state.timer} 으로 승리하셨습니다`;
                halted = true;
            }
            state.openedCount += openedCount;
            state.halted = halted;
            state.result = result;
        },
        [CLICK_MINE](state, { row, cell}) {
            state.halted = true;
            Vue.set(state.tableData[row], cell, CODE.CLICKED_MINE);
        },
        [FALG_CELL](state, {row, cell}) {
            if(state.tableData[row][cell] === CODE.MINE){
                Vue.set(state.tableData[row], cell, CODE.FLAG_MINE); // 순환관계에서 다시 노말로 돌아갔을 경우 그자리에 다시 지뢰를 심어주기 위함
            }else{
                Vue.set(state.tableData[row], cell, CODE.FLAG);
            }
        },
        [QUESTION_CELL](state, { row, cell}) {
            if(state.tableData[row][cell] === CODE.FLAG_MINE){
                Vue.set(state.tableData[row], cell, CODE.QUESTION_MINE); // 순환관계에서 다시 노말로 돌아갔을 경우 그자리에 다시 지뢰를 심어주기 위함
            }else{
                Vue.set(state.tableData[row], cell, CODE.QUESTION);
            }
        },
        [NORMALIZE_CELL](state, { row, cell}) {
            if(state.tableData[row][cell] === CODE.QUESTION_MINE){
                Vue.set(state.tableData[row], cell, CODE.MINE); // 순환관계에서 다시 노말로 돌아갔을 경우 그자리에 다시 지뢰를 심어주기 위함
            }else{
                Vue.set(state.tableData[row], cell, CODE.NORMAL);
            }
        },
        [INCREMENT_TIMER](state) {
            state.timer += 1;   
        },
    },
})