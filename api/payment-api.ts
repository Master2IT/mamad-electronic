const paymentApi = {
  
    createPayment: async (payment: any) => {
        const { $axios } = useNuxtApp()
        const res = await $axios.post('/customer/invoices/pay', payment)
        return res.data
    },
}

export default paymentApi
