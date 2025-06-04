import { defineStore } from "pinia";
import { login, verify } from "~/api/auth-api";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const token = ref(null);
  const isCodeSent = ref(false);

  async function loginAction({ mobile }: { mobile: string }) {
    try {
      const response = await login(mobile);
      user.value = response.user;
      token.value = response.token;
      isCodeSent.value = true;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }

  async function onVerify(code: number) {
    try {
      const response = await verify({ verification_token: code, access_token: true });
      user.value = response.data;
      window.location.href = "/panel/profile";
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }

  function logout() {
    user.value = null;
    token.value = null;
    isCodeSent.value = false;
  }

  function setCodeSent(value: boolean) {
    isCodeSent.value = value;
  }

  const isAuthenticated = computed(() => !!token.value);
  const getUser = computed(() => user.value);
  const getToken = computed(() => token.value);

  return {
    user,
    token,
    isCodeSent,
    loginAction,
    onVerify,
    logout,
    setCodeSent,
    isAuthenticated,
    getUser,
    getToken
  };
}, {
  persist: true
});
