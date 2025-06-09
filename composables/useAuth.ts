export const useAuth = () => {
  const hasToken = computed(() => CookieStorage.get('token'))

  return { hasToken }
}
