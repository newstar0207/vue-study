<template>
    <div>
        {{menu_name}}
    </div>
</template>
<script>
export default {
    computed: {
        menu_name() {
            const id = this.$route.params.showmenu;
            if (id == '1') 
                return '아이스아메리카노';
            else if(id == '2')
                return '청포도에이드';
            return id;
        },
    }
    
}
</script>
<style lang="">
</style>