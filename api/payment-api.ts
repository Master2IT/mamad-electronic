const paymentApi = {

    pay: async (payment: any) => {
        const { $axios } = useNuxtApp()
        const res = await $axios.post('/customer/invoices/pay', payment)
        return res.data.data;
    },
}

export default paymentApi
