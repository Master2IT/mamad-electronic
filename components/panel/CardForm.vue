<template>
  <div class="card-form">
    <h2 class="form-title">کارت ها</h2>
    <p class="form-subtitle">مدیریت روش های پرداخت</p>
    
    <div class="flex flex-col">
      <!-- Name Field -->
      <div class="form-group">
        <label>کارت بانکی اول</label>
        <div class="input-container">
          <input v-model="form.firstCard" type="text" class="form-input" />
          <button class="edit-button" @click="editCard('first')">
            <Icon name="heroicons:pencil" class="edit-icon" />
          </button>
        </div>
      </div>
      
      <!-- Email Field -->
      <div class="form-group">
        <label>کارت بانکی دوم</label>
        <div class="input-container">
          <input v-model="form.secondCard" type="text" class="form-input" />
          <button class="edit-button" @click="editCard('second')">
            <Icon name="heroicons:pencil" class="edit-icon" />
          </button>
        </div>
      </div>
    </div>
    <h2 class="form-title">کیف پول</h2>
    <p class="form-subtitle">موجودی فعلی</p>
    <input v-model="form.inventory" type="number" class="form-input" readonly />
  </div>
</template>

<script setup>
const form = reactive({
  firstCard: '****/****/****/****',
  secondCard: '****/****/****/****',
  inventory: 0
});

const editCard = (cardType) => {
  // Handle card editing
  console.log(`Editing ${cardType} card`);
};


</script>

<style scoped>
.card-form {

  max-width: 800px;
  padding: 20px;
  direction: rtl;
  font-family: 'Vazirmatn', sans-serif;
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

.edit-button, .view-password {
  background: none;
  border: none;
  cursor: pointer;
  color: #6b46c1;
}

.edit-icon, .view-icon {
  width: 20px;
  height: 20px;
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>