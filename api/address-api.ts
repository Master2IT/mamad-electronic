const addressApi = {
    getAddresses: async () => {
        const { $axios } = useNuxtApp()
        const res = await $axios.get('/customer/addresses')
        return res.data.data
    },

    getAddress: async (addressId: string) => {
        const { $axios } = useNuxtApp()
        const res = await $axios.get(`/customer/addresses/show/${addressId}`)
        return res.data
    },

    createAddress: async (address: any) => {
        const { $axios } = useNuxtApp()
        const res = await $axios.post('/customer/addresses/create', address)
        return res.data
    },

    updateAddress: async (address: any) => {
        const { $axios } = useNuxtApp()
        const res = await $axios.put(`/customer/addresses/update/${address.id}`, address)
        return res.data
    },

    deleteAddress: async (addressId: string) => {
        const { $axios } = useNuxtApp()
        const res = await $axios.delete(`/customer/addresses/delete/${addressId}`)
        return res.data
    }
}

export default addressApi
