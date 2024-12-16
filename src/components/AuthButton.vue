<script setup lang="ts">
import { ref } from 'vue';
import { auth } from '../firebase/config';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useAuth } from '../composables/useAuth';

const { user } = useAuth();

const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error('Error signing in with Google:', error);
  }
};

const handleSignOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out:', error);
  }
};
</script>

<template>
  <div class="auth-container">
    <button v-if="!user" @click="signInWithGoogle" class="google-btn">
      Sign in with Google
    </button>
    <div v-else class="user-info">
      <img :src="user.photoURL" alt="Profile" class="profile-pic" />
      <span>{{ user.displayName }}</span>
      <button @click="handleSignOut" class="signout-btn">Sign Out</button>
    </div>
  </div>
</template>

<style scoped>
.auth-container {
  margin-bottom: 20px;
  text-align: right;
}

.google-btn {
  background-color: #4285f4;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.google-btn:hover {
  background-color: #357abd;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;
}

.profile-pic {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.signout-btn {
  background-color: #dc3545;
  color: white;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.signout-btn:hover {
  background-color: #c82333;
}
</style>