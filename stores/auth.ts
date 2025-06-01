import { defineStore } from "pinia";
import { login, verify } from "~/api/auth-api";
import { Storage } from "@/utils/storage"

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    async login({ mobile, password }: any) {
      try {
        const response = await login({ mobile, password });
        this.user = response.user;
        this.token = response.token;

      } catch (error) {
        // Handle login error
        console.error('Login failed:', error);
        throw error;
      }
    },
    async verify(code: number) {
      try {
        const response = await verify({ verification_token: code, access_token: this.token });
        Storage.set("permissions", response.permissions)
        window.location.href = "/portal"

      } catch (error) {
        // Handle login error
        console.error('Login failed:', error);
        throw error;
      }
    },

    logout() {
      this.user = null;
      this.token = null;
    }
  },

  getters: {
    isAuthenticated: (state) => !!state.token,
    getUser: (state) => state.user,
    getToken: (state) => state.token,
  }
});
