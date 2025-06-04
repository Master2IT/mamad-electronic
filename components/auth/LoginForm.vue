<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col space-y-6 p-4 sm:p-6 max-w-md mx-auto">
    <!-- Logo and title -->
    <div class="flex flex-col items-center mb-4">
      <img src="/logo.svg" alt="محمد الکترونیک" class="h-10 mb-2" />
      <p class="text-sm text-gray-600">الکترونیک</p>
      <h2 class="text-xl font-bold text-primary-500 mt-6 mb-4">ورود/ثبت نام</h2>
    </div>

    <!-- Mobile input -->
    <div class="w-full justify-center items-center flex flex-col">
      <p class="text-right mb-2 text-sm">شماره موبایل خود را وارد نمایید</p>
      <UInput v-model="mobile" type="tel" placeholder="09xxxxxxxxx"
        :ui="{ base: 'w-full', input: 'rounded-lg text-right pr-10' }" icon="i-heroicons-user"
        @blur="v$.mobile.$touch" />
      <p v-if="v$.mobile.$error" class="text-red-500 text-sm mt-1 text-right">
        {{ v$.mobile.$errors[0].$message }}
      </p>
    </div>

    <!-- Terms checkbox -->
    <div class="flex items-center justify-end gap-2">
      <UCheckbox v-model="termsAccepted" name="terms" />
      <p class="text-sm text-right">با ورود و ثبت‌نام در سایت، با قوانین تکوشاپ، موافقت می‌کنم.</p>
    </div>

    <!-- Submit button -->
    <UButton type="submit" :loading="loading" :disabled="loading || !termsAccepted" block color="primary"
      variant="solid" class="rounded-lg bg-purple-700 hover:bg-purple-800">
      تایید
    </UButton>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const loading = ref(false)
const termsAccepted = ref(false)
const mobile = ref('')

const rules = {
  mobile: {
    required,
    validMobile: (value) => /^09\d{9}$/.test(value) || 'شماره موبایل نامعتبر است'
  }
}

const v$ = useVuelidate(rules, { mobile })

const handleSubmit = async () => {
  const isValid = await v$.value.$validate()
  if (isValid && termsAccepted.value) {
    loading.value = true
    try {

      await authStore.login({ mobile: mobile.value })
    } catch (error) {
      alert(error.message)
    } finally {
      loading.value = false
    }
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
