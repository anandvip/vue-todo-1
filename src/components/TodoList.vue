<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useAuth } from '../composables/useAuth'

interface Todo {
  id: number
  text: string
  completed: boolean
  userId: string
}

const { user } = useAuth()
const newTodo = ref('')
const todos = ref<Todo[]>([])

const addTodo = () => {
  if (newTodo.value.trim() && user.value) {
    todos.value.push({
      id: Date.now(),
      text: newTodo.value,
      completed: false,
      userId: user.value.uid
    })
    newTodo.value = ''
  }
}

const toggleTodo = (id: number) => {
  const todo = todos.value.find(t => t.id === id)
  if (todo) {
    todo.completed = !todo.completed
  }
}

const removeTodo = (id: number) => {
  todos.value = todos.value.filter(t => t.id !== id)
}
</script>

<template>
  <div class="todo-container">
    <h1>Todo App</h1>
    
    <div class="add-todo">
      <input 
        v-model="newTodo"
        @keyup.enter="addTodo"
        type="text"
        placeholder="Add a new todo"
      />
      <button @click="addTodo">Add</button>
    </div>

    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.id" :class="{ completed: todo.completed }">
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="toggleTodo(todo.id)"
        />
        <span>{{ todo.text }}</span>
        <button @click="removeTodo(todo.id)" class="delete-btn">×</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.todo-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

.add-todo {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.add-todo input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.add-todo button {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.todo-list {
  list-style: none;
  padding: 0;
}

.todo-list li {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f9f9f9;
  margin-bottom: 8px;
  border-radius: 4px;
  gap: 10px;
}

.todo-list li.completed span {
  text-decoration: line-through;
  color: #888;
}

.delete-btn {
  margin-left: auto;
  background-color: #ff4444;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: #cc0000;
}
</style>