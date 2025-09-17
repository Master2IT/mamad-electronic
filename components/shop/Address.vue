<template>
  <div class="my-5 grid w-full grid-cols-1 gap-5 sm:grid-cols-7">
    <!-- Address details -->
    <div class="col-span-1 sm:col-span-5">
      <UCard class="shadow-sm">
        <template #header>
          <div class="mb-2 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-map-pin" class="text-primary" />
              <h2 class="text-lg font-bold">آدرس تحویل سفارش</h2>
            </div>
            <UButton
              color="primary"
              variant="soft"
              icon="i-lucide-plus"
              @click="
                () => {
                  editMode = false
                  isOpen = true
                }
              "
              :ui="{ rounded: 'rounded-full' }"
            >
              افزودن آدرس جدید
            </UButton>
          </div>
          <UDivider />
        </template>

        <div v-if="loading" class="flex items-center justify-center p-12">
          <UIcon
            name="i-lucide-loader-2"
            class="text-primary h-8 w-8 animate-spin"
          />
        </div>

        <div
          v-else-if="!savedAddresses.length"
          class="flex flex-col items-center justify-center p-10 text-center"
        >
          <UIcon name="i-lucide-map-off" class="mb-4 h-16 w-16 text-gray-400" />
          <p class="text-lg font-medium text-gray-500">
            هنوز آدرسی ثبت نکرده‌اید
          </p>
          <UButton
            color="primary"
            variant="soft"
            class="mt-4"
            @click="
              () => {
                editMode = false
                isOpen = true
                resetForm()
              }
            "
            :ui="{ rounded: 'rounded-full' }"
          >
            افزودن آدرس جدید
          </UButton>
        </div>

        <div v-else>
          <URadioGroup
            :items="savedAddresses"
            v-model="selectedId"
            value-key="id"
            :ui="{ item: 'flex items-center gap-2' }"
          >
            <template #label="{ item: addressItem }">
              <div class="border border-neutral-200 p-3 mb-2 rounded-lg shadow-sm">
                <div class="mb-3 flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-user"  class="text-primary" />
                    <span class="text-gray-600"
                      >{{ addressItem.name }} {{ addressItem.family }}</span
                    >
                    <!-- <UBadge color="primary" variant="subtle">پیش‌فرض</UBadge> -->
                  </div>
                  <div class="flex gap-2">
                    <UButton
                      color="gray"
                      variant="ghost"
                      size="xs"
                      icon="i-lucide-edit"
                      @click="
                        () => {
                          selectedId = addressItem.value
                          getAddress()
                          editMode = true
                          isOpen = true
                        }
                      "
                    />
                    <UButton
                      color="red"
                      variant="ghost"
                      size="xs"
                      icon="i-lucide-trash-2"
                      @click="
                        () => {
                          selectedId = addressItem.value
                          confirmDelete = true
                        }
                      "
                    />
                  </div>
                </div>

                <div
                  class="grid grid-cols-1 gap-3 text-sm text-gray-600 sm:grid-cols-2"
                >
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-phone" class="text-gray-400" />
                    <span>{{ addressItem.mobile }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-map" class="text-gray-400" />
                    <span
                      >{{ addressItem.province.title }} -
                      {{ addressItem.city.title }}</span
                    >
                  </div>
                </div>

                <div class="mt-3 flex items-start gap-2">
                  <UIcon name="i-lucide-home" class="text-gray-400" />
                  <p class="text-gray-600">{{ addressItem.address }}</p>
                </div>

                <div class="mt-3 flex items-center gap-2">
                  <UIcon name="i-lucide-mail" class="text-gray-400" />
                  <span class="text-gray-600"
                    >کد پستی: {{ addressItem.postal_code }}</span
                  >
                </div>
              </div>
            </template>
          </URadioGroup>
        </div>
      </UCard>
    </div>

    <!-- Cart summary -->
    <UCard class="col-span-1 sm:col-span-2">
      <template #header>
        <div class="mb-2 flex items-center gap-2">
          <UIcon name="i-lucide-shopping-cart" class="text-primary" />
          <h2 class="text-lg font-bold">خلاصه سفارش</h2>
        </div>
        <UDivider />
      </template>

      <div v-if="loading" class="space-y-4 p-2">
        <div class="flex justify-between">
          <USkeleton class="h-5 w-1/3" />
          <USkeleton class="h-5 w-1/3" />
        </div>
        <div class="flex justify-between">
          <USkeleton class="h-5 w-1/3" />
          <USkeleton class="h-5 w-1/3" />
        </div>
        <div class="flex justify-between">
          <USkeleton class="h-5 w-1/3" />
          <USkeleton class="h-5 w-1/3" />
        </div>
        <USkeleton class="mt-4 h-10 w-full" />
      </div>

      <div class="space-y-2" v-else>
        <div class="mb-4 flex justify-between">
          <span>قیمت کالاها ({{ cart?.length || 0 }})</span>
          <p class="font-medium text-gray-500">
            {{ total?.toLocaleString() || '0' }}
            <span class="text-xs text-gray-500">تومان</span>
          </p>
        </div>
        <div class="mb-4 flex justify-between">
          <span>سود شما</span>
          <p class="font-medium text-gray-500">
            {{ totalDiscount?.toLocaleString() || '0' }}
            <span class="text-xs text-gray-500">تومان</span>
          </p>
        </div>
        <div class="mb-4 flex justify-between">
          <span class="font-bold">جمع سبد خرید</span>
          <p class="font-medium">
            {{ ((total || 0) - (totalDiscount || 0)).toLocaleString() }}
            <span class="text-xs text-gray-500">تومان</span>
          </p>
        </div>
        <div class="mb-4 flex justify-between">
          <span class="font-bold text-red-500">هزینه ارسال</span>
          <p class="font-medium text-red-500">
            <!-- {{ (totalDiscount || 0).toLocaleString() }}
               -->
            0
            <span class="text-xs">تومان</span>
          </p>
        </div>
        <div class="my-4 border border-dashed border-gray-300" />
        <div class="mb-4 flex justify-between">
          <span class="font-bold">مبلغ قابل پرداخت</span>
          <p class="font-medium">
            {{ (total || 0).toLocaleString() }}
            <span class="text-xs text-gray-500">تومان</span>
          </p>
        </div>
        <UButton
          color="primary"
          class="mt-4 w-full justify-center p-3"
          :loading="loading"
          @click="confirmOrder"
          :disabled="!savedAddresses.length"
          to="/checkout"
          external
        >
          تایید و پرداخت سفارش
        </UButton>
      </div>
    </UCard>
  </div>

  <!-- Address Modal -->
  <UModal
    :title="editMode ? 'ویرایش آدرس' : 'افزودن آدرس جدید'"
    v-model:open="isOpen"
    :ui="{ width: 'sm:max-w-xl' }"
  >
    <template #body>
      <UForm
        :validate="validate"
        :state="addressForm"
        @submit="onSubmit"
        class="space-y-6"
      >
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <UFormField label="نام" name="name">
            <UInput class="w-full" size="lg" v-model="addressForm.name" />
          </UFormField>
          <UFormField label="نام خانوادگی" name="family">
            <UInput class="w-full" size="lg" v-model="addressForm.family" />
          </UFormField>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <UFormField label="شماره موبایل" name="mobile">
            <UInput
              class="w-full"
              size="lg"
              v-model="addressForm.mobile"
              placeholder="09xxxxxxxxx"
              type="tel"
            />
          </UFormField>
          <UFormField label="کد پستی" name="postal_code">
            <UInput
              class="w-full"
              size="lg"
              v-model="addressForm.postal_code"
              placeholder="کد پستی 10 رقمی"
            />
          </UFormField>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <UFormField label="استان" name="province_id">
            <USelect
              class="w-full"
              size="lg"
              v-model="addressForm.province_id"
              :items="provinces"
              label-key="title"
              value-key="id"
              placeholder="استان خود را انتخاب کنید"
              @update:model-value="getCities"
            />
          </UFormField>
          <UFormField label="شهر" name="city_id">
            <USelect
              class="w-full"
              size="lg"
              v-model="addressForm.city_id"
              :items="cities"
              label-key="title"
              value-key="id"
              placeholder="شهر خود را انتخاب کنید"
              :disabled="!addressForm.province_id"
            />
          </UFormField>
        </div>

        <UFormField label="آدرس کامل" name="user_address">
          <UTextarea
            class="w-full"
            size="lg"
            v-model="addressForm.user_address"
            placeholder="آدرس دقیق خود را وارد کنید"
            rows="3"
          />
        </UFormField>

        <UFormField label="پلاک" name="number">
          <UInput
            class="w-full"
            size="lg"
            v-model="addressForm.number"
            placeholder="شماره پلاک"
          />
        </UFormField>

        <div class="flex items-center">
          <UCheckbox
            v-model="addressForm.im_owner"
            name="save-address"
            label="گیرنده سفارش خودم هستم؟"
          />
        </div>

        <div class="flex w-full justify-end gap-2">
          <UButton
            type="button"
            color="gray"
            variant="soft"
            @click="isOpen = false"
            >انصراف</UButton
          >
          <UButton type="submit" color="primary" :loading="loading">
            {{ editMode ? 'ویرایش آدرس' : 'ثبت آدرس' }}
          </UButton>
        </div>
      </UForm>
    </template>
  </UModal>

  <!-- Delete Confirmation Modal -->
  <UModal v-model:open="confirmDelete" title="حذف آدرس">
    <template #body>
      <div class="p-4 text-center">
        <UIcon
          name="i-lucide-alert-triangle"
          class="mx-auto mb-4 h-12 w-12 text-red-500"
        />
        <p class="mb-4 text-gray-600">آیا از حذف این آدرس اطمینان دارید؟</p>
      </div>
    </template>
    <template #footer>
      <div class="flex w-full justify-end gap-3">
        <UButton
          color="neutral"
          variant="soft"
          :disabled="loading"
          @click="confirmDelete = false"
          >انصراف</UButton
        >
        <UButton color="error" @click="deleteAddress" :loading="loading"
          >حذف</UButton
        >
      </div>
    </template>
  </UModal>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import addressApi from '~/api/address-api'
import placesApi from '~/api/places-api'
import { fetchCart } from '~/api/product-api'
const { addAddress } = useCartStore()
const onSubmit = () => {
  if (editMode.value) {
    editAddress()
  } else {
    saveAddress()
  }
}

const validate = (state) => {
  const errors = []

  if (!state.name) errors.push({ name: 'name', message: 'نام الزامی است' })
  if (!state.family)
    errors.push({ name: 'family', message: 'نام خانوادگی الزامی است' })
  if (!state.mobile)
    errors.push({ name: 'mobile', message: 'شماره موبایل الزامی است' })
  if (!state.province_id)
    errors.push({ name: 'province_id', message: 'استان الزامی است' })
  if (!state.city_id)
    errors.push({ name: 'city_id', message: 'شهر الزامی است' })
  if (!state.user_address)
    errors.push({ name: 'user_address', message: 'آدرس الزامی است' })
  if (!state.number) errors.push({ name: 'number', message: 'پلاک الزامی است' })
  if (!state.postal_code)
    errors.push({ name: 'postal_code', message: 'کد پستی الزامی است' })
  return errors
}

const loading = ref(false)
const isOpen = ref(false)
const confirmDelete = ref(false)
const editMode = ref(false)

// Form data
const addressForm = reactive({
  user_address: '',
  number: '',
  postal_code: '',
  im_owner: true,
  name: '',
  family: '',
  mobile: '',
  province_id: '',
  city_id: '',
})

// Cart data (example data)
const cart = ref([])
const total = ref(0)
const totalDiscount = ref(0)
const cities = ref([])
const provinces = ref([])
const savedAddresses = ref([])
const selectedId = ref(null)

const loadCart = async () => {
  try {
    const response = await fetchCart()
    cart.value = response.items
    total.value = response.total
    totalDiscount.value = response.total_discount
    // total_discount_price.value = response.prices.total_discount_price
    // stepped_dicounts.value.push(response.items.map(item => item.prices.stepped_discount));
  } catch (error) {
    console.error('Error loading cart:', error)
  }
}
// Methods
const getAddresses = async () => {
  // loading.value = true
  try {
    const res = await addressApi.getAddresses()
    savedAddresses.value = res
    selectedId.value = res[0].id
  } catch (error) {
    console.error(error)
  }
}

const saveAddress = async () => {
  loading.value = true
  try {
    await addressApi.createAddress({
      ...addressForm,
      address_id: selectedId.value
    })
    getAddresses()
    toast.add({
      title: 'آدرس با موفقیت ثبت شد',
      icon: 'i-heroicons-check-circle',
      color: 'success',
    })
    resetForm()
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
    isOpen.value = false
  }
}

const getAddress = async () => {
  const res = await addressApi.getAddress(selectedId.value)
  addressForm.name = res.data.name
  addressForm.family = res.data.family
  addressForm.mobile = res.data.mobile
  addressForm.province_id = res.data.province.id
  addressForm.city_id = res.data.city.id
  addressForm.user_address = res.data.address
  addressForm.number = res.data.number
  addressForm.postal_code = res.data.postal_code
  addressForm.im_owner = res.data.im_owner
  addressForm.id = res.data.id
}
const editAddress = async () => {
  try {
    await addressApi.updateAddress(addressForm)
    isOpen.value = false
    getAddresses()
    toast.add({
      title: 'آدرس با موفقیت ویرایش شد',
      icon: 'i-heroicons-check-circle',
      color: 'success',
    })
    resetForm()
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}

const deleteAddress = async () => {
  loading.value = true
  try {
    await addressApi.deleteAddress(selectedId.value)
    confirmDelete.value = false
    getAddresses()
    toast.add({
      title: 'آدرس با موفقیت حذف شد',
      icon: 'i-heroicons-check-circle',
      color: 'success',
    })
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}

const resetForm = () => {
  addressForm = {
    user_address: '',
    number: '',
    postal_code: '',
    im_owner: true,
    name: '',
    family: '',
    mobile: '',
  }
  editMode.value = false
  cities.value = []
}

const getProvinces = async () => {
  const res = await placesApi.getProvinces()
  provinces.value = res
}

const getCities = async (provinceId) => {
  cities.value = []
  addressForm.city_id = ''
  const res = await placesApi.getCities(provinceId)
  cities.value = res
}

// Simulate loading
onMounted(async () => {
  await getAddresses()
  await getProvinces()
  await loadCart()

  loading.value = false
})

const confirmOrder = async () => {
  // try {
  //   await addressApi.confirmOrder(selectedId.value)
  // } catch (error) {
  //   console.error(error)
  // }
}
</script>

<style scoped>
.animate-bounce-slow {
  animation: bounce 2s infinite;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(-5%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }

  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>
