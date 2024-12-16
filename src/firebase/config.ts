import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBVhA5tbIZfFq9pYY5rxiWMzhnErlJu1lA",
  authDomain: "vue-todo-ff728.firebaseapp.com",
  projectId: "vue-todo-ff728",
  storageBucket: "vue-todo-ff728.firebasestorage.app",
  messagingSenderId: "746617777320",
  appId: "1:746617777320:web:7849454a8e7b75079aa69d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);