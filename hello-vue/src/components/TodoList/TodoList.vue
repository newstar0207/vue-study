<template>
    <div>
        <BaseInputText v-model="newTodoText" placeholder="New todo" v-on:keydown.enter="addTodo"></BaseInputText>
        <ul v-if='todos.length'>
            <TodoListItem v-for='todo in todos' v-bind:key='todo.id' v-bind:todo="todo" v-on:remove='removeTodo'></TodoListItem>
        </ul>
        <p v-else>Add a new todo in the input above</p>
    </div>
</template>

<script>
import BaseInputText from './TodoList/BaseInputText.vue';
import TodoListItem from './TodoListItem.vue';

let nextTodoId = 1

export default {
    components: {
        BaseInputText, TodoListItem
    },    
    data() {
        return {
            newTodoText: '',
            todos: []
        }
    },
    methods: {
        addTodo() {
            const trimmedText = this.newTodoText.trim()
            if( trimmedText) {
                this.todos.push({
                    id: nextTodoId++,
                    text: trimmedText
                })
                this.newTodoText = ''
            }
        },
        removeTodo (idToRemove) {
            this.todos = this.todos.filter(todo => {
                return todo.id !== idToRemove
            })
        }
    }
}
</script>