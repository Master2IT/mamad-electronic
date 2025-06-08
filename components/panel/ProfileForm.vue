<template>
  <div class="profile-form">
    <form @submit.prevent="saveProfile">
      <div class="mb-6">
        <h2 class="text-xl font-bold">اطلاعات فردی</h2>
        <p class="text-gray-500 mt-1">هویت خود را تأیید کنید</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Name Field -->
        <UFormGroup label="نام نام" name="name" :required="true">
          <UInput v-model="form.name" type="text" :trailing="true">
            <template #trailing>
              <UButton color="gray" variant="ghost" icon="i-heroicons-pencil" square />
            </template>
          </UInput>
        </UFormGroup>

        <!-- Email Field -->
        <UFormGroup label="ایمیل" name="email" :required="true">
          <UInput v-model="form.email" type="email" :trailing="true">
            <template #trailing>
              <UButton color="gray" variant="ghost" icon="i-heroicons-pencil" square />
            </template>
          </UInput>
        </UFormGroup>

        <!-- Password Field -->
        <UFormGroup label="پسوورد" name="password">
          <UInput 
            v-model="form.password" 
            :type="showPassword ? 'text' : 'password'" 
            :trailing="true"
          >
            <template #trailing>
              <UButton 
                color="gray" 
                variant="ghost" 
                :icon="showPassword ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'" 
                square
                @click="showPassword = !showPassword"
              />
            </template>
          </UInput>
        </UFormGroup>

        <!-- Phone Number Field -->
        <UFormGroup label="شماره همراه" name="phone" :required="true">
          <UInput v-model="form.phone" type="tel" :trailing="true">
            <template #trailing>
              <UButton color="gray" variant="ghost" icon="i-heroicons-pencil" square />
            </template>
          </UInput>
        </UFormGroup>

        <!-- Address Field -->
        <UFormGroup label="آدرس" name="address" :required="true">
          <UInput v-model="form.address" type="text" :trailing="true">
            <template #trailing>
              <UButton color="gray" variant="ghost" icon="i-heroicons-home" square />
            </template>
          </UInput>
        </UFormGroup>

        <!-- Postal Code Field -->
        <UFormGroup label="کد پستی" name="postalCode" :required="true">
          <UInput v-model="form.postalCode" type="text" :trailing="true">
            <template #trailing>
              <UButton color="gray" variant="ghost" icon="i-heroicons-map" square />
            </template>
          </UInput>
        </UFormGroup>
      </div>

      <div class="flex justify-center mt-6">
        <UButton type="submit" color="purple" :loading="loading">
          ذخیره تغییرات
        </UButton>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const { user } = authStore
console.log(user);

const loading = ref(false)
const showPassword = ref(false)

const form = reactive({
  name: user?.name + user?.family|| '',
  email: user?.email || '',
  password: '',
  phone: user?.mobile || '',
  address: user?.address || '',
  postalCode: user?.postalCode || ''
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
      color: 'green'
    })
  } catch (error) {
    useToast().add({
      title: 'خطا',
      description: error.message || 'خطا در بروزرسانی پروفایل',
      color: 'red'
    })
  } finally {
    loading.value = false
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