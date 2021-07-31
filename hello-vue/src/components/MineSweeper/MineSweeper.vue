<template>
    <div>
        <mine-form></mine-form>
        <div>{{ timer }} </div>
        <table-component></table-component>
        <div>{{ result }}</div>
    </div>
</template>
<script> 
import store, { INCREMENT_TIMER } from './store';
import { mapState } from 'vuex';
import TableComponent from './TableComponent.vue';
import MineForm from './MineForm.vue';

let interval;
export default {
    store,
    components: {
        TableComponent,
        MineForm,
    },
    computed: {
        ...mapState(['timer', 'result', 'halted']),
    },
    watch: {
        halted(value) {
            if(value === false) { // false 일때 게임 시작
                interval = setInterval(() => { // interval 을 따로 써 메모리 누수를 막아줌
                    this.$store.commit(INCREMENT_TIMER);
                }, 1000);
            }else { // 게임 중단 
                clearInterval(interval);
            }
        }
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