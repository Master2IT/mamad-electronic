import axios from 'axios'
import { Storage } from '@/utils/storage'
export default defineNuxtPlugin(() => {
    const instance = axios.create({
        baseURL: process.env.API_BASE_URL || "https://api.merqc.com/v1",
        headers:{
            "Authorization" : Storage.get("token")
        }
    })

    return {
        provide: {
            axios: instance
        }
    }
})
