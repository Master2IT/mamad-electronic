const settingsApi = {
    getSettingById: async (id: string) => {
        const { $axios } = useNuxtApp()
        const res = await $axios.get(`general/settings/show/${id}`)

        return res.data.data.value
    },

    getAllSettings: async () => {
        const { $axios } = useNuxtApp()
        const res = await $axios.get('general/settings')

        return res.data.data;
    }

}

export default settingsApi
