<template>
    <td v-on:click="onClickTd">{{ cellData }}</td>
</template>
<script>
import EventBus from './EventBus';

export default {
    props : {
        cellData: String,    // o, x , ' '
        cellIndex : Number,
        rowIndex : Number,
    },
    methods:{
        onClickTd(){
            if (this.cellData) return;
            EventBus.$emit('clickTd', this.rowIndex, this.cellIndex); // emit 은 on 과 대응되어 emit clickTd 시 on clickTd 가 실행됨
        },
    },
}
</script>
<style>
    
</style>