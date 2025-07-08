import { useNuxtApp } from '#app'

export const login = async (mobile: string) => {
  const { $axios } = useNuxtApp()
  const res = await $axios.post('/general/auth', {
    type: 'Sms',
    value: mobile,
    otp: true,
  })

  return res.data.data
}

export const fetchProfile = async () => {
  const { $axios } = useNuxtApp()
  const res = await $axios.get('/customer/profile/show')

  return res.data.data
}

export const logout = async () => {
  const { $axios } = useNuxtApp()
  const res = await $axios.post('/general/logout')

  return res.data.data
}

export const verify = async (data: any) => {
  const { $axios } = useNuxtApp()
  const res = await $axios.post('/general/verify', data)

  return res.data
}

export const updateProfile = async (data: any) => {
  const { $axios } = useNuxtApp()
  const res = await $axios.post('/customer/profile/update', data)

  return res.data
}
