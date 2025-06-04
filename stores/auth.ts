import { defineStore } from "pinia";
import { login, verify } from "~/api/auth-api";
import { Storage } from "@/utils/storage"

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: null,
    isCodeSent: false
  }),
  actions: {
    async login({ mobile }: any) {
      try {
        const response = await login(mobile);
        this.user = response.user;
        this.token = response.token;
        this.isCodeSent = true
      } catch (error) {
        // Handle login error
        console.error('Login failed:', error);
        throw error;
      }
    },
    async onVerify(code: number) {
      try {
        const response = await verify({ verification_token: code, access_token: true });
        this.user = response.data
        window.location.href = "/panel/profile"

      } catch (error) {
        // Handle login error
        console.error('Login failed:', error);
        throw error;
      }
    },
    logout() {
      this.user = null;
      this.token = null;
    },
    setCodeSent(value: boolean) {
      this.isCodeSent = value;
    }
  },

  getters: {
    isAuthenticated: (state) => !!state.token,
    getUser: (state) => state.user,
    getToken: (state) => state.token,
  }
});
