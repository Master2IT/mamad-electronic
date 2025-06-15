<template>
  <div class="p-5">
    <div class="mb-6">
      <h2 class="text-xl font-bold">اطلاعات فردی</h2>
      <p class="text-gray-500">هویت خود را تأیید کنید</p>
    </div>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <!-- Name Field -->
      <UFormField label="نام و نام خانوادگی" name="name">
        <UInput
          v-model="form.name"
          type="text"
          :trailing="true"
          size="xl"
          class="w-[300px] !pl-2"
          :disabled="!editableFields.name"
          placeholder="نام شما"
        >
          <template #trailing>
            <UButton
              variant="ghost"
              icon="i-lucide-square-pen"
              size="sm"
              class="hover:bg-neutral-100"
              square
              @click="editableFields.name = !editableFields.name"
            />
          </template>
        </UInput>
      </UFormField>

      <!-- Email Field -->
      <UFormField label="ایمیل" name="email">
        <UInput
          v-model="form.email"
          type="email"
          :trailing="true"
          size="xl"
          class="w-[300px] !pl-2"
          :disabled="!editableFields.email"
          placeholder="youremail@gmail.com"
        >
          <template #trailing>
            <UButton
              variant="ghost"
              icon="i-lucide-square-pen"
              size="sm"
              class="hover:bg-neutral-100"
              square
              @click="editableFields.email = !editableFields.email"
            />
          </template>
        </UInput>
      </UFormField>

      <!-- Phone Number Field -->
      <UFormField label="شماره همراه" name="phone">
        <UInput 
          v-model="form.phone" 
          type="tel" 
          :trailing="true" 
          size="xl" 
          class="w-[300px] !pl-2"
          :disabled="!editableFields.phone"
          placeholder="09120000000"
        >
          <template #trailing>
            <UButton
              variant="ghost"
              icon="i-lucide-square-pen"
              size="sm"
              class="hover:bg-neutral-100"
              square
              @click="editableFields.phone = !editableFields.phone"
            />
          </template>
        </UInput>
      </UFormField>

      <!-- Password Field -->
      <UFormField label="رمز عبور" name="password">
        <UInput
          v-model="form.password"
          :type="showPassword ? 'text' : 'password'"
          :trailing="true"
          size="xl"
          class="w-[300px] !pl-2"
          :disabled="!editableFields.password"
          placeholder="********"
        >
          <template #trailing>
            <UButton
              variant="ghost"
              icon="i-lucide-square-pen"
              size="sm"
              class="hover:bg-neutral-100"
              square
              @click="editableFields.password = !editableFields.password"
            />
          </template>
        </UInput>
      </UFormField>

      <!-- Address Field -->
      <UFormField label="آدرس" name="address">
        <UInput
          v-model="form.address"
          type="text"
          :trailing="true"
          size="xl"
          class="w-[300px] !pl-2"
          :disabled="!editableFields.address"
          placeholder="تهران، خیابان آزادی، پلاک 123"
        >
          <template #trailing>
            <UButton
              variant="ghost"
              icon="i-lucide-square-pen"
              size="sm"
              class="hover:bg-neutral-100"
              square
              @click="editableFields.address = !editableFields.address"
            />
          </template>
        </UInput>
      </UFormField>

      <!-- Postal Code Field -->
      <UFormField label="کد پستی" name="postalCode">
        <UInput
          v-model="form.postalCode"
          type="text"
          :trailing="true"
          size="xl"
          class="w-[300px] !pl-2"
          :disabled="!editableFields.postalCode"
          placeholder="1234567890"
        >
          <template #trailing>
            <UButton
              variant="ghost"
              icon="i-lucide-square-pen"
              size="sm"
              class="hover:bg-neutral-100"
              square
              @click="editableFields.postalCode = !editableFields.postalCode"
            />
          </template>
        </UInput>
      </UFormField>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const { user } = authStore

const loading = ref(false)
const showPassword = ref(false)

const form = reactive({
  name: user?.name + user?.family || '',
  email: user?.email || '',
  password: '',
  phone: user?.mobile || '',
  address: user?.address || '',
  postalCode: user?.postalCode || '',
})

const editableFields = ref({
  name: false,
  email: false,
  password: false,
  phone: false,
  address: false,
  postalCode: false,
})

const validateForm = () => {
  if (!form.name || !form.email || !form.phone || !form.address || !form.postalCode) {
    throw new Error('Please fill in all required fields')
  }

  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    throw new Error('Please enter a valid email address')
  }
}

const saveProfile = async () => {
  try {
    loading.value = true
    validateForm()

    // Only include password in update if it was changed
    const updateData = { ...form }
    if (!updateData.password) {
      delete updateData.password
    }

    await authStore.updateProfile(updateData)

    useToast().add({
      title: 'موفقیت',
      description: 'پروفایل با موفقیت بروزرسانی شد',
      color: 'green',
    })
  } catch (error) {
    useToast().add({
      title: 'خطا',
      description: error.message || 'خطا در بروزرسانی پروفایل',
      color: 'red',
    })
  } finally {
    loading.value = false
  }
}
</script>

<style scoped></style>
