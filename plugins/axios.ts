import axios from 'axios'
import CookieStorage from '~/utils/CookieStorage'
export default defineNuxtPlugin(() => {
    const instance = axios.create({
        baseURL: process.env.API_BASE_URL || "https://api.merqc.com/v1",
        headers: {
            "Authorization": "Bearer " + CookieStorage.get("token"),
            "Content-Type": "application/json",
            "Accept": "application/json"

        }
    })

    return {
        provide: {
            axios: instance
        }
    }
})
