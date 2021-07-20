Vue.component ('comments', {
    template: `
    <div>
        <input type='text' v-model='user'>
        <input type='text' v-model='comment'>
        <button @click='save'>Save</button>
        <ul>
            <li v-for='message in messages'>
                <p>{{message.user}}: {{message.comment}}</p>
            </li>
        </ul>
     </div>`,
     data(){
         return {
            user:null,
            comment:null,
            messages: [],
         };
     },
     methods:{
        save(){
            const message= {
                user:this.user,
                comment:this.comment,
            };
            this.messages.unshift(message);
            this.user=null;
            this.comment=null;
        },
     },
})

let app = new Vue({
    el:'#app'
})