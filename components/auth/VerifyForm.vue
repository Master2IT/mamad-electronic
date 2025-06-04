<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col space-y-6 p-4 sm:p-6 max-w-md mx-auto">
    <!-- Logo and title -->
    <div class="flex flex-col items-center mb-4">
      <img src="/logo.svg" alt="محمد الکترونیک" class="h-10 mb-2" />
      <p class="text-sm text-gray-600">الکترونیک</p>
      <h2 class="text-xl font-bold text-primary-500 mt-6 mb-4">ورود/ثبت نام</h2>
    </div>

    <!-- Verification code input -->
    <div class="w-full justify-center items-center flex flex-col">
      <p class="text-right mb-2 text-sm">کد تایید را وارد کنید</p>
      <div class="flex justify-center gap-2 mt-4 w-full">
        <UPinInput v-model="verificationCode" :length="4" autofocus class="ltr" :ui="{
          wrapper: 'flex gap-2',
          input: 'w-12 h-12 rounded-lg text-center text-xl'
        }" />
      </div>
      <p class="text-sm text-gray-500 mt-2 text-center">
        زمان باقی مانده تا ارسال مجدد: {{ remainingTime }} ثانیه
      </p>
      <UButton variant="link" @click="setCodeSent(false)" class="text-sm mt-2 text-center">
        ویرایش شماره موبایل
      </UButton>
    </div>

    <!-- Submit button -->
    <UButton type="submit" :loading="loading" :disabled="loading || !isCodeComplete" block color="primary"
      variant="solid" class="rounded-lg bg-purple-700 hover:bg-purple-800">
      ورود
    </UButton>
  </form>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const { setCodeSent } = authStore

const loading = ref(false)
const verificationCode = ref([])
const inputRefs = ref([])
const remainingTime = ref(120)
const timer = ref(null)

const isCodeComplete = computed(() => {
  return verificationCode.value.length == 4
})

const startTimer = () => {
  timer.value = setInterval(() => {
    if (remainingTime.value > 0) {
      remainingTime.value--
    } else {
      clearInterval(timer.value)
    }
  }, 1000)
}

// Handle form submission
const handleSubmit = async () => {
  if (isCodeComplete.value) {
    loading.value = true

    try {
      await authStore.onVerify(+Object.values(verificationCode.value).join(""))
    } catch (error) {
      alert(error.message)
    } finally {
      loading.value = false
    }
  }
}

// Start timer on component mount
onMounted(() => {
  // Focus on first input
  inputRefs.value[0]?.focus()
  // Start countdown timer
  startTimer()
})

// Clean up timer on component unmount
onUnmounted(() => {
  if (timer.value) {
    clearInterval(timer.value)
  }
})
</script>

<style scoped>
/* Add any additional styling here */
:deep(.u-input) {
  direction: rtl;
}

:deep(.u-button) {
  font-weight: bold;
}
</style>