<template>
  <form @submit.prevent="handleSubmit" class="login-form">
    <div class="form-group">
      <label for="email">Email</label>
      <input class="input" v-model="form.email" type="email" id="email" required @blur="v$.email.$touch">
      <span class="error" v-if="v$.email.$error">
        {{ v$.email.$errors[0].$message }}
      </span>
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input class="input" v-model="form.password" type="password" id="password" required minlength="6"
        @blur="v$.password.$touch">
      <span class="error" v-if="v$.password.$error">
        {{ v$.password.$errors[0].$message }}
      </span>
    </div>

    <button type="submit" class="btn btn-primary" :disabled="loading">
      {{ loading ? 'Logging in...' : 'Login' }}
    </button>

    <div class="form-footer">
      <NuxtLink to="/auth/register">Create account</NuxtLink>
      <NuxtLink to="/auth/forgot-password">Forgot password?</NuxtLink>
    </div>
  </form>
</template>

<script setup>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const loading = ref(false)

const form = reactive({
  email: '',
  password: ''
})

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(6) }
}

const v$ = useVuelidate(rules, form)

const handleSubmit = async () => {
  v$.value.$validate()
  if (!v$.value.$error) {
    loading.value = true
    try {
      await authStore.login(form)
      navigateTo('/user')
    } catch (error) {
      alert(error.message)
    } finally {
      loading.value = false
    }
  }
}
</script>

<style scoped>
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