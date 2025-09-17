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
    },
    getFooter: async () => {
        const { $axios } = useNuxtApp();
        const res = await $axios.get('/general/settings/show/14');

        return res.data.data.value;
    },
    getHeader: async () => {
        const { $axios } = useNuxtApp()
        const res = await $axios.get('general/settings/show/15')

        return res.data.data.value
    },
    getContact: async () => {
        const { $axios } = useNuxtApp()
        const res = await $axios.get('general/settings/show/1')

        return res.data.data.value
    },
    getAbout: async () => {
        const { $axios } = useNuxtApp()
        const res = await $axios.get('general/settings/show/16')

        return res.data.data.value
    }

}

export default settingsApi
