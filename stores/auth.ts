import { CookieStorage } from "#imports";
import { defineStore } from "pinia";
import { login, verify } from "~/api/auth-api";
import { Storage } from '~/utils/storage'

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null,
        isCodeSent: false
    }),

    getters: {
        isAuthenticated: (state) => !!state.user,
        getUser: (state) => state.user,
        getToken: () => CookieStorage.get('token')
    },

    actions: {
        async loginAction({ mobile }: { mobile: string }) {
            try {
                await login(mobile);

                this.isCodeSent = true;
            } catch (error) {
                console.error('Login failed:', error);
                throw error;
            }
        },

        async onVerify(code: number) {
            try {
                const response = await verify({ verification_token: code, access_token: true });
                this.user = response.data.user;
                CookieStorage.set("token", response.data.token)
                window.location.href = "/panel/profile";
            } catch (error) {
                console.error('Login failed:', error);
                throw error;
            }
        },

        logout() {
            this.$reset();
            Storage.clear()
            window.location.href = "/";
        },

        setCodeSent(value: boolean) {
            this.isCodeSent = value;
        }
    },

    persist: true
});
