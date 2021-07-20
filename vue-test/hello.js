Vue.component('hello', {
    props:['name'],
    template:'<p>{{message}}</p>',
    data() {
        return { message: 'hello!!!!!!' + this.name }
    }
});

Vue.component('add', {
    template:'<button @click="add"> {{count}} </button>',
    data() { // 함수형식
        return {count:0}
    },
    methods: {
        add(){
            this.count  += 1;
            this.$emit('event-add', 1); // 외부로 이벤트를 발생시킴 ($emit).
        }
    }
});

let app = new Vue({
    el: '#app', // el 에서 지정한 태그 및 그 자식 태그만 할당됨. 
    // html 의 attribute 에는 {{}} 불가능함. v-bind 써야함
    data: {
        totalCount:0,
        address:'https://naver.com',
        // message: {
        //     greetings: 'hello',
        //     name: 'world',
        // },
        message: 'hi~',
        age:20,
        todos:[
            {text:'learn javascirpt'},
            {text:'learn vue'},
            {text:'learn node.js'}
        ],

        user:{
            userId: 'user123',
            name: 'jane vue',
            email: 'user123@email.com'
        },
        counter:0,

        users:[
            {name: 'user1'} , {name: 'admin'}
        ],

        comment:'',

        value:false,
        values:[true, true, false],

        value2:'hello',
        value3:'hello',

        user_id:'user1234',
        user_grade:"diamond",   
        
    },

    methods:{
        addCounter(){
            this.counter += 1
        },

        removeCounter(){
            this.counter -= 1
        },

        sayHi(name) {
            this.message = "hello" + name
        },
        updateTotal(count){
            this.totalCount += count;
        }
    },

    computed:{
        user_info(){
            return this.user_id + "(" + this.user_grade + ")"
        },

        user_age(){

            if(this.age >= 20) return 'adult';
            else if(this.age >= 13) return 'teenager'
            else return 'kid';

            // let str = 'adult' 
            // if (this.age < 20) str= 'not adult'
            // return str
        }
    },

    components:{
        'local-hello':{
            template:'<p> this is local component</p>'
        }
    }

    
});


