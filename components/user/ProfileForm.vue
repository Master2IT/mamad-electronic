<template>
  <div class="profile-form">
    <h2 class="form-title">اطلاعات فردی</h2>
    <p class="form-subtitle">هویت خود را تأیید کنید</p>

    <div class="form-grid">
      <!-- Name Field -->
      <div class="form-group">
        <label>نام نام</label>
        <div class="input-container">
          <input v-model="form.name" type="text" class="form-input" />
          <button class="edit-button">
            <Icon name="heroicons:pencil" class="edit-icon" />
          </button>
        </div>
      </div>

      <!-- Email Field -->
      <div class="form-group">
        <label>ایمیل</label>
        <div class="input-container">
          <input v-model="form.email" type="email" class="form-input" />
          <button class="edit-button">
            <Icon name="heroicons:pencil" class="edit-icon" />
          </button>
        </div>
      </div>

      <!-- Password Field -->
      <div class="form-group">
        <label>پسوورد</label>
        <div class="input-container">
          <input v-model="form.password" type="password" class="form-input" />
          <button class="view-password">
            <Icon name="heroicons:eye" class="view-icon" />
          </button>
        </div>
      </div>

      <!-- Phone Number Field -->
      <div class="form-group">
        <label>شماره همراه</label>
        <div class="input-container">
          <input v-model="form.phone" type="tel" class="form-input" />
          <button class="edit-button">
            <Icon name="heroicons:pencil" class="edit-icon" />
          </button>
        </div>
      </div>

      <!-- Address Field -->
      <div class="form-group">
        <label>آدرس</label>
        <div class="input-container">
          <input v-model="form.address" type="text" class="form-input" />
          <button class="edit-button">
            <Icon name="heroicons:home" class="edit-icon" />
          </button>
        </div>
      </div>

      <!-- Postal Code Field -->
      <div class="form-group">
        <label>کد پستی</label>
        <div class="input-container">
          <input v-model="form.postalCode" type="text" class="form-input" />
          <button class="edit-button">
            <Icon name="heroicons:map" class="edit-icon" />
          </button>
        </div>
      </div>
    </div>

    <div class="form-actions">
      <button class="submit-button" @click="saveProfile">ذخیره تغییرات</button>
    </div>
  </div>
</template>

<script setup>
const form = reactive({
  name: 'محمد عبدی',
  email: 'themohax@gmail.com',
  password: '***********',
  phone: '09155609909',
  address: 'مشهد.خیابان فلان',
  postalCode: '-'
});

const saveProfile = () => {
  // Handle form submission
  console.log('Profile data:', form);
  // You can add API call here to save the profile data
};
</script>

<style scoped>
.profile-form {
  max-width: 800px;
  margin: 0 auto;
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