const invoiceApi = {
    getInvoices: async (params?: any) => {
        const { $axios } = useNuxtApp()
        const res = await $axios.get('/customer/invoices', { params })
        return res.data.data
    }
}

export default invoiceApi