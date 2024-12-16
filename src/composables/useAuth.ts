import { ref, onMounted, onUnmounted } from 'vue';
import { auth } from '../firebase/config';
import type { User } from 'firebase/auth';

export function useAuth() {
  const user = ref<User | null>(null);

  const unsubscribe = auth.onAuthStateChanged((currentUser) => {
    user.value = currentUser;
  });

  onUnmounted(() => {
    unsubscribe();
  });

  return {
    user,
  };
}