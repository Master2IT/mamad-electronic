import axios from 'axios'

export default defineNuxtPlugin(() => {
    const instance = axios.create({
        baseURL: process.env.API_BASE_URL,
    })

    return {
        provide: {
            axios: instance
        }
    }
})
