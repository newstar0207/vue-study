<template>
    <div id="app">
        <div>
            <button v-on:click="counter">Counter</button>
            <p>{{ count }} </p>
        </div>

        <div>
            <input type="text">
            <button v-on:click="reverseMessage">reverse</button>
            <p>{{ message }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            count: 0,
            string: "testtest",
            message: "",
        }
    },
    methods: {
        counter(){
            this.count += 1;
        },
    },
    computed: {
        reverseMessage(){
            return this.message.split('').reverse().join('');
        }
    }
}
</script>