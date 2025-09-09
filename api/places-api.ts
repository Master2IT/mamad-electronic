const placesApi = {
    getProvinces: async () => {
        const { $axios } = useNuxtApp()
        const res = await $axios.get('/general/places/provinces')

        return res.data.data
    },

    getCities: async (provinceId: string) => {
        const { $axios } = useNuxtApp()
        const res = await $axios.get('/general/places/cities', {
            params: {
                search: {
                    ["province_id"]: provinceId
                }
            }
        })

        return res.data.data
    }
}

export default placesApi
