<script setup lang="ts">
import TodoList from './components/TodoList.vue'
import AuthButton from './components/AuthButton.vue'
import { useAuth } from './composables/useAuth'

const { user } = useAuth()
</script>

<template>
  <div class="app-container">
    <AuthButton />
    <TodoList v-if="user" />
    <div v-else class="sign-in-prompt">
      <h2>Please sign in to use the Todo App</h2>
    </div>
  </div>
</template>

<style>
.app-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.sign-in-prompt {
  text-align: center;
  margin-top: 50px;
  color: #666;
}
</style>