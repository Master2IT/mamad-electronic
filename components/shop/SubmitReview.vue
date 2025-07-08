<template>
  <UModal v-model="isOpen" title="ثبت نظر" description="نظر خود را ثبت کنید">
    <UButton v-if="hasToken" size="xl" @click="isOpen = true"> نظر خود را ثبت کنید </UButton>
    <template #body>
      <UForm :validate="validate" :state="review" class="grid grid-cols-1 gap-4">
        <div class="grid grid-cols-2 items-center gap-4">
          <UFormField label="امتیاز" name="rating">
            <div>
              <UButton
                type="button"
                block
                size="xs"
                variant="subtle"
                class="flex items-center justify-center bg-yellow-50 py-1 ring-yellow-200 hover:bg-yellow-50"
              >
                <NuxtRating
                  :read-only="false"
                  border-color="#F0B100"
                  active-color="#ffa41c"
                  inactive-color="#fff"
                  :rating-step="1"
                  rounded-corners
                  :border-width="3"
                  :rating-size="20"
                  :rating-value="review.rating"
                  @rating-selected="setRating"
                />
              </UButton>
            </div>
          </UFormField>

          <UFormField label="ارسال ناشناس" name="send_anonymously">
            <UButton
              @click="review.send_anonymously = !review.send_anonymously"
              block
              variant="outline"
              size="xl"
            >
              <UCheckbox
                size="lg"
                v-model="review.send_anonymously"
                :label="review.send_anonymously ? 'بله' : 'خیر'"
              />
            </UButton>
          </UFormField>
        </div>

        <UFormField label="نظر شما" name="description" required>
          <UTextarea
            size="lg"
            class="w-full"
            v-model="review.description"
            :rows="4"
            placeholder="نظر خود را در مورد این محصول بنویسید..."
          />
        </UFormField>

        <div class="flex justify-end gap-2">
          <!-- <UButton type="button" variant="soft" @click="closeModal">انصراف</UButton> -->
          <UButton
            size="xl"
            type="button"
            color="primary"
            @click="onSubmitReview"
            :loading="loading"
            >ثبت نظر</UButton
          >
        </div>
      </UForm>
    </template>
  </UModal>
</template>

<script setup lang="ts">
import type { FormError } from '@nuxt/ui'
import { submitReview } from '~/api/product-api'
import { reviewSchema, type ReviewFormData } from '~/shared/utils/submit-review-validate'
import { useAuth } from '~/composables/useAuth'

const { hasToken } = useAuth()

const route = useRoute()

const toast = useToast()
const isOpen = ref(false)
const loading = ref(false)

const emit = defineEmits(['submited'])

const review = reactive<ReviewFormData>({
  rating: 3,
  description: '',
  send_anonymously: false,
})

const validate = (state: ReviewFormData): FormError[] => {
  const result = reviewSchema.safeParse(state)

  if (!result.success) {
    return result.error.issues.map((issue) => ({
      path: issue.path.join('.'),
      message: issue.message,
    }))
  }

  return []
}

const closeModal = () => {
  isOpen.value = false
  Object.assign(review, {
    rating: 3,
    description: '',
    send_anonymously: false,
  })
}

const onSubmitReview = async () => {
  // Form validation
  const errors = validate(review)
  if (errors.length) {
    toast.add({
      title: 'خطا',
      description: 'لطفا فرم را به درستی تکمیل کنید',
      color: 'error',
    })
    return
  }

  const result = reviewSchema.safeParse(review)

  if (!result.success) {
    toast.add({
      title: 'خطا',
      description: 'لطفا فرم را به درستی تکمیل کنید',
      color: 'error',
    })
    return
  }

  try {
    loading.value = true
    await submitReview({
      body: review.description,
      // mode: 'text',
      send_anonymously: review.send_anonymously ? 1 : 0,
      section: 'product',
      section_id: route.params.slug,
    })
    toast.add({
      title: 'موفق',
      description: 'نظر شما با موفقیت ثبت شد',
      color: 'success',
    })
    closeModal()
    emit('submited')
  } catch (error) {
    console.error(error)
    toast.add({
      title: 'خطا',
      description: 'لطفا دوباره تلاش کنید',
      color: 'error',
    })
  } finally {
    loading.value = false
  }
}

const setRating = (rating: number) => {
  review.rating = rating
}
</script>
