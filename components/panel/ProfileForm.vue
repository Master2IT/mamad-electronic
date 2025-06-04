<template>
  <div class="profile-form">
    <div>
      <div class="mb-6">
        <h2 class="text-xl font-bold">اطلاعات فردی</h2>
        <p class="text-gray-500 mt-1">هویت خود را تأیید کنید</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Name Field -->
        <UFormGroup label="نام نام">
          <UInput v-model="form.name" type="text" :trailing="true">
            <template #trailing>
              <UButton color="gray" variant="ghost" icon="i-heroicons-pencil" square />
            </template>
          </UInput>
        </UFormGroup>

        <!-- Email Field -->
        <UFormGroup label="ایمیل">
          <UInput v-model="form.email" type="email" :trailing="true">
            <template #trailing>
              <UButton color="gray" variant="ghost" icon="i-heroicons-pencil" square />
            </template>
          </UInput>
        </UFormGroup>

        <!-- Password Field -->
        <UFormGroup label="پسوورد">
          <UInput v-model="form.password" type="password" :trailing="true">
            <template #trailing>
              <UButton color="gray" variant="ghost" icon="i-heroicons-eye" square />
            </template>
          </UInput>
        </UFormGroup>

        <!-- Phone Number Field -->
        <UFormGroup label="شماره همراه">
          <UInput v-model="form.phone" type="tel" :trailing="true">
            <template #trailing>
              <UButton color="gray" variant="ghost" icon="i-heroicons-pencil" square />
            </template>
          </UInput>
        </UFormGroup>

        <!-- Address Field -->
        <UFormGroup label="آدرس">
          <UInput v-model="form.address" type="text" :trailing="true">
            <template #trailing>
              <UButton color="gray" variant="ghost" icon="i-heroicons-home" square />
            </template>
          </UInput>
        </UFormGroup>

        <!-- Postal Code Field -->
        <UFormGroup label="کد پستی">
          <UInput v-model="form.postalCode" type="text" :trailing="true">
            <template #trailing>
              <UButton color="gray" variant="ghost" icon="i-heroicons-map" square />
            </template>
          </UInput>
        </UFormGroup>
      </div>

      <div class="flex justify-center mt-6">
        <UButton color="purple" @click="saveProfile">
          ذخیره تغییرات
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup>

import { useAuthStore } from '~/stores/auth'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

const form = reactive({
  name: user.value?.name || '',
  email: user.value?.email || '',
  password: '***********',
  phone: user.value?.phone || '',
  address: user.value?.address || '',
  postalCode: user.value?.postalCode || ''
})

const saveProfile = async () => {
  try {
    await authStore.updateProfile(form)
    // Show success notification
    useToast().add({
      title: 'Success',
      description: 'Profile updated successfully',
      color: 'green'
    })
  } catch (error) {
    // Show error notification
    useToast().add({
      title: 'Error',
      description: error.message || 'Failed to update profile',
      color: 'red'
    })
  }
}
</script>

<style scoped>
.profile-form {
  max-width: 800px;
  padding: 20px;
  direction: rtl;
}

.form-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: right;
}

.form-subtitle {
  color: #666;
  margin-bottom: 2rem;
  text-align: right;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #666;
}

.input-container {
  position: relative;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 0 10px;
}

.form-input {
  width: 100%;
  padding: 12px;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  direction: rtl;
}

.edit-button,
.view-password {
  background: none;
  border: none;
  cursor: pointer;
  color: #6b46c1;
}

.edit-icon,
.view-icon {
  width: 20px;
  height: 20px;
}

.form-actions {
  margin-top: 2rem;
  text-align: center;
}

.submit-button {
  background-color: #6b46c1;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #553c9a;
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>