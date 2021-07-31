<template>
    <div>
        <div v-if="currentGame === 'gugudan' ">
            <gugudan></gugudan>
        </div>
        <div v-else-if="currentGame === 'lotto-generator'"> 
            <lotto-generator></lotto-generator>
        </div>
        <div v-else-if="currentGame === 'response-check'">
            <response-check></response-check>
        </div>
        <div v-else>일치하는게임이 없습니다.</div>
    </div>
</template>
<script>
import Gugudan from '@/components/Gugudan.vue';
import LottoGenerator from '@/components/Lotto/LottoGenerator.vue'
import ResponseCheck from '@/components/ResponseCheck.vue'
// import WordRelay from '@/components/WordRelay.vue'

export default {
    components:{
        Gugudan,
        LottoGenerator,
        ResponseCheck,
        // WordRelay,
        // ResponseCheck,
    },
    mounted() {
        console.log(this.$router)
        console.log(this.$route)
    },
    computed:{
        currentGame() {
            return this.$route.params.name;
        }
    }

}
</script>
<style >
    
</style>