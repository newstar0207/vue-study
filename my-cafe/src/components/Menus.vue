<template>
    <div>
        <h1>Menus</h1>    
        <ul>
            <li v-for="(list, index) in lists" v-bind:key="index"><a v-bind:href="'/menus/' + (index + 1)">{{ list }}</a></li>
        </ul>
        
    </div>
</template>
<script>
export default {
    name: 'Menus',
    data(){
        return {
            lists : [
                '아이스 아메리카노',
                '청포도 에이드',
                '치킨',
                '마라탕',
                '찹살탕수육'
            ],
        }
    },
}
</script>