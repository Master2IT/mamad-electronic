<template>
  <div class="p-5">
    <div class="mb-6">
      <h2 class="text-xl font-bold">اطلاعات فردی</h2>
      <p class="text-gray-500">هویت خود را تأیید کنید</p>
    </div>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <!-- First Name Field -->
      <UFormField label="نام" name="first_name">
        <UInput
          v-model="form.first_name"
          type="text"
          :trailing="true"
          size="xl"
          class="w-[300px] !pl-2"
          :disabled="!editableFields.first_name || loading"
          placeholder="نام"
        >
          <template #trailing>
            <UButton
              :loading="loading"
              variant="ghost"
              :icon="editableFields.first_name ? 'i-lucide-check' : 'i-lucide-square-pen'"
              size="sm"
              class="hover:bg-neutral-100"
              square
              @click="handleSaveData('first_name')"
            />
          </template>
        </UInput>
      </UFormField>
      
      <!-- Last Name Field -->
      <UFormField label="نام خانوادگی" name="last_name">
        <UInput
          v-model="form.last_name"
          type="text"
          :trailing="true"
          size="xl"
          class="w-[300px] !pl-2"
          :disabled="!editableFields.last_name || loading"
          placeholder="نام خانوادگی"
        >
          <template #trailing>
            <UButton
              :loading="loading"
              variant="ghost"
              :icon="editableFields.last_name ? 'i-lucide-check' : 'i-lucide-square-pen'"
              size="sm"
              class="hover:bg-neutral-100"
              square
              @click="handleSaveData('last_name')"
            />
          </template>
        </UInput>
      </UFormField>
      
      <!-- Username Field -->
      <!-- <UFormField label="نام کاربری" name="username">
        <UInput
          v-model="form.username"
          type="text"
          :trailing="true"
          size="xl"
          class="w-[300px] !pl-2"
          :disabled="!editableFields.username || loading"
          placeholder="نام کاربری"
        >
          <template #trailing>
            <UButton
              :loading="loading"
              variant="ghost"
              :icon="editableFields.username ? 'i-lucide-check' : 'i-lucide-square-pen'"
              size="sm"
              class="hover:bg-neutral-100"
              square
              @click="handleSaveData('username')"
            />
          </template>
        </UInput>
      </UFormField> -->

      <!-- Email Field -->
      <UFormField label="ایمیل" name="email">
        <UInput
          v-model="form.email"
          type="email"
          :trailing="true"
          size="xl"
          class="w-[300px] !pl-2"
          :disabled="!editableFields.email || loading"
          placeholder="youremail@gmail.com"
        >
          <template #trailing>
            <UButton
              :loading="loading"
              variant="ghost"
              :icon="editableFields.email ? 'i-lucide-check' : 'i-lucide-square-pen'"
              size="sm"
              class="hover:bg-neutral-100"
              square
              @click="handleSaveData('email')"
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
          :disabled="!editableFields.phone || loading"
          placeholder="09120000000"
        >
          <template #trailing>
            <UButton
              :loading="loading"
              variant="ghost"
              :icon="editableFields.phone ? 'i-lucide-check' : 'i-lucide-square-pen'"
              size="sm"
              class="hover:bg-neutral-100"
              square
              @click="handleSaveData('phone')"
            />
          </template>
        </UInput>
      </UFormField>

      <!-- Password Field -->
      <UFormField class="col-span-2" label="رمز عبور" name="password">
        <UInput
          v-model="form.password"
          :type="showPassword ? 'text' : 'password'"
          :trailing="true"
          size="xl"
          class="w-full !pl-2"
          :disabled="!editableFields.password || loading"
          placeholder="********"
        >
          <template #trailing>
            <UButton
              :loading="loading"
              variant="ghost"
              :icon="editableFields.password ? 'i-lucide-check' : 'i-lucide-square-pen'"
              size="sm"
              class="hover:bg-neutral-100"
              square
              @click="handleSaveData('password')"
            />
          </template>
        </UInput>
      </UFormField>

      <!-- Address Field -->
      <!-- <UFormField label="آدرس" name="address">
        <UInput
          v-model="form.address"
          type="text"
          :trailing="true"
          size="xl"
          class="w-[300px] !pl-2"
          :disabled="!editableFields.address || loading"
          placeholder="تهران، خیابان آزادی، پلاک 123"
        >
          <template #trailing>
            <UButton
              :loading="loading"
              variant="ghost"
              :icon="editableFields.address ? 'i-lucide-check' : 'i-lucide-square-pen'"
              size="sm"
              class="hover:bg-neutral-100"
              square
              @click="handleSaveData('address')"
            />
          </template>
        </UInput>
      </UFormField> -->

      <!-- Postal Code Field -->
      <!-- <UFormField label="کد پستی" name="postalCode">
        <UInput
          v-model="form.postalCode"
          type="text"
          :trailing="true"
          size="xl"
          class="w-[300px] !pl-2"
          :disabled="!editableFields.postalCode || loading"
          placeholder="1234567890"
        >
          <template #trailing>
            <UButton
              :loading="loading"
              variant="ghost"
              :icon="editableFields.postalCode ? 'i-lucide-check' : 'i-lucide-square-pen'"
              size="sm"
              class="hover:bg-neutral-100"
              square
              @click="handleSaveData('postalCode')"
            />
          </template>
        </UInput>
      </UFormField> -->
    </div>
  </div>
</template>

<script setup>
import { updateProfile } from '~/api/auth-api'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const { user } = authStore

const loading = ref(false)
const showPassword = ref(false)

const form = reactive({
  // username: user?.username || '',
  first_name: user?.name ?? '',
  last_name: user?.family ?? '',
  email: user?.email ?? '',
  password: '',
  phone: user?.mobile ?? '',
  // address: user?.address || '',
  // postalCode: user?.postalCode || '',
})

const editableFields = ref({
  // username: false,
  first_name: false,
  last_name: false,
  email: false,
  password: false,
  phone: false,
  // address: false,
  // postalCode: false,
})

const handleSaveData = (field) => {
  editableFields.value[field] = !editableFields.value[field]

  if (!editableFields.value[field]) {
    saveProfile(field)
  }
}

const saveProfile = async (field) => {
  try {
    loading.value = true

    // Only include the specific field that was edited
    const updateData = {}
    updateData[field] = form[field]

    // Special handling for password if it's being updated and has a value
    if (field === 'password' && form.password) {
      updateData.password = form.password
    }

    await updateProfile(updateData)

    useToast().add({
      title: 'موفقیت',
      description: 'پروفایل با موفقیت بروزرسانی شد',
      color: 'green',
    })

    authStore.loadProfile()
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