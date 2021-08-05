<template>
    <div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            memos : [],
            message : '',
        }
    },
    methods: {
        getMemos(){
            this.$store.dispatch()
            .then((response) => {
                this.memos = response.data;
            })
            .catch(() => {
                this.message = 'getmemos error';
            })
        }
    },
}
</script>
<style>
    
</style>