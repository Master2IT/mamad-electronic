<template>
  <div class="mx-auto flex max-w-md flex-col space-y-6 p-4 sm:p-6">
    <!-- Logo and title -->
    <div class="mb-4 flex items-center justify-center gap-1">
      <img src="/logo.svg" alt="محمد الکترونیک" class="mt-1 h-10" />
      <div class="flex flex-col">
        <span class="text-secondary text-2xl font-bold">محمد</span>
        <span class="text-sm text-gray-700">الکترونیک</span>
      </div>
    </div>
    <h2 class="text-primary-500 mt-6 mb-4 text-center text-xl font-bold">ورود/ثبت نام</h2>

    <!-- Mobile input -->
    <div class="flex w-full flex-col items-center justify-center">
      <p class="mb-2 text-right text-sm">شماره موبایل خود را وارد نمایید</p>
      <UInput
        v-model="mobile"
        type="tel"
        variant="soft"
        placeholder="09xxxxxxxxx"
        size="xl"
        class="h-[72px] bg-[#F9F9F9] !text-left"
        icon="i-heroicons-user"
      />
    </div>

    <!-- Terms checkbox -->
    <div class="flex items-center justify-end gap-2">
      <UCheckbox size="xl" v-model="termsAccepted" name="terms" />
      <p class="text-right text-sm">با ورود و ثبت‌نام در سایت، با قوانین تکنوشاپ موافقت می‌کنم.</p>
    </div>

    <!-- Submit button -->
    <UButton
      type="button"
      @click="handleSubmit"
      :loading="loading"
      :disabled="loading || !termsAccepted"
      block
      color="primary"
      variant="solid"
      class="rounded-lg bg-purple-700 hover:bg-purple-800"
    >
      تایید
    </UButton>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'

const toast = useToast()

const authStore = useAuthStore()
const loading = ref(false)
const termsAccepted = ref(false)
const mobile = ref('')

const handleSubmit = async () => {
  if (!mobile.value) {
    toast.add({
      title: 'خطا',
      description: 'شماره موبایل الزامی است',
      color: 'error',
    })
    return
  }

  if (!/^09\d{9}$/.test(mobile.value) || mobile.value.length !== 11) {
    toast.add({
      title: 'خطا',
      description: 'شماره موبایل نامعتبر است',
      color: 'error',
    })
    return
  }

  loading.value = true
  try {
    await authStore.loginAction({ mobile: mobile.value })
  } catch (error) {
    toast.error(error.message)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Add any additional styling here */
:deep(.u-input) {
  direction: rtl;
}

:deep(.u-button) {
  font-weight: bold;
}

.login-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.error {
  color: red;
  font-size: 0.8rem;
}

.form-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
