<template>
  <div class="p-5">
    <h2 class="text-xl font-bold">کارت ها</h2>
    <p class="text-gray-500">مدیریت روش های پرداخت</p>

    <div class="mt-5 mb-8 flex flex-col gap-4">
      <UFormField label="کارت بانکی" v-for="(card, index) in cards" :key="index">
        <UInput
          variant="subtle"
          v-model="card.cardNumber"
          type="text"
          :trailing="true"
          size="xl"
          class="w-[300px] !pl-2"
          disabled
          :maxlength="19"
          v-maska="'#### #### #### ####'"
        >
          <template #trailing>
            <UButton
              variant="ghost"
              icon="i-lucide-square-pen"
              size="sm"
              class="hover:bg-neutral-100"
              square
              @click="toggleCard(index)"
            />
          </template>
        </UInput>
      </UFormField>
    </div>

    <h2 class="text-xl font-bold">کیف پول</h2>
    <p class="text-gray-500">موجودی فعلی</p>
    <UInput
      v-model="balance"
      type="number"
      variant="subtle"
      size="xl"
      class="mt-3 w-[300px]"
      disabled
    />
  </div>
  <UModal
    v-model:open="showModal"
    title="روش پرداخت خود را اضافه کنید"
    description="کارت های اعتباری یا نقدی"
  >
    <template #body>
      <div class="grid grid-cols-2 gap-x-4 gap-y-2">
        <UFormField label="شماره کارت">
          <UInput
            v-model="cards[selectedCardIndex].cardNumber"
            type="text"
            size="xl" 
            class="w-full"
            :ui="{
              base: 'ltr',
              trailing: 'right-1 left-unset'
            }"
          >
            <template v-if="cards[selectedCardIndex].cardNumber?.length" #trailing>
              <UButton
                color="neutral"
                variant="link"
                size="sm"
                icon="i-lucide-x"
                aria-label="Clear input"
                @click="cards[selectedCardIndex].cardNumber = ''"
              />
            </template>
          </UInput>
        </UFormField>
        <UFormField label="شماره شبا">
          <UInput :ui="{
              base: 'ltr',
              trailing: 'right-1 left-unset',
            }" v-model="cards[selectedCardIndex].shebaNumer" type="text" size="xl" class="w-full">
            <template v-if="cards[selectedCardIndex].shebaNumer?.length" #trailing>
              <UButton
                color="neutral"
                variant="link"
                size="sm"
                icon="i-lucide-x"
                aria-label="Clear input"
                @click="cards[selectedCardIndex].shebaNumer = ''"
              />
            </template>
          </UInput>
        </UFormField>
        <div class="flex items-center justify-end gap-2 col-span-2 mt-5">
          <UButton variant="subtle" size="lg" @click="showModal = false" label="انصراف" icon="i-lucide-x" />
          <UButton size="lg" @click="showModal = false" label="ذخیره" icon="i-lucide-save" />
        </div>
      </div>
    </template>
  </UModal>
</template>

<script setup>
import { vMaska } from 'maska/vue'
const showModal = ref(false)
const selectedCardIndex = ref(null)
const balance = ref(0)

const cards = ref([
  {
    cardNumber: '',
    shebaNumer: '',
  },
  {
    cardNumber: '',
    shebaNumer: '',
  },
])

const toggleCard = (index) => {
  selectedCardIndex.value = index
  showModal.value = !showModal.value
}

const editCard = (cardType) => {
  // Handle card editing
  console.log(`Editing ${cardType} card`)
}
</script>

<style scoped></style>
