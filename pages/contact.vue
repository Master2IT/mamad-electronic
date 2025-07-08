<template>
  <NuxtLayout name="shop">
    <div class="contact-page">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container mx-auto px-4 py-16">
          <div class="text-center">
            <h1 class="mb-6 text-4xl font-bold text-gray-800 md:text-6xl">
              تماس با ما
            </h1>
            <p class="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
              برای مشاوره، سفارش و یا کسب اطلاعات بیشتر درباره محصولات و خدمات
              ما با کارشناسان فروشگاه محمد الکترونیک در تماس باشید
            </p>
            <!-- Display discount information if available -->
            <div v-if="settings?.discount?.value && settings?.conditions?.status" class="mt-6 inline-block rounded-lg bg-green-100 px-6 py-3">
              <p class="text-lg font-semibold text-green-800">
                تخفیف ویژه {{ settings.discount.value }}{{ settings.discount.mode === 'percent' ? '%' : ' تومان' }}
                <span v-if="settings.conditions.specific_cities?.length" class="text-sm">
                  برای شهرهای {{ settings.conditions.specific_cities.join('، ') }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Information Section -->
      <section class="contact-info-section bg-gray-50 py-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <!-- Phone -->
            <div class="rounded-xl bg-white p-8 text-center shadow-lg">
              <div
                class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100"
              >
                <svg
                  class="h-8 w-8 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                  />
                </svg>
              </div>
              <h3 class="mb-3 text-xl font-semibold text-gray-800">
                تلفن تماس
              </h3>
              <p class="mb-2 text-gray-600">021-12345678</p>
              <p class="text-gray-600">09123456789</p>
            </div>

            <!-- Address -->
            <div class="rounded-xl bg-white p-8 text-center shadow-lg">
              <div
                class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
              >
                <svg
                  class="h-8 w-8 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 class="mb-3 text-xl font-semibold text-gray-800">
                آدرس فروشگاه
              </h3>
              <p class="text-gray-600">
                <span v-if="settings?.origin_cities?.length">
                  {{ settings.origin_cities.join('، ') }}، 
                </span>
                خیابان انقلاب، پلاک ۱۲۳ طبقه دوم، واحد ۵
              </p>
            </div>

            <!-- Email -->
            <div class="rounded-xl bg-white p-8 text-center shadow-lg">
              <div
                class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100"
              >
                <svg
                  class="h-8 w-8 text-purple-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  />
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  />
                </svg>
              </div>
              <h3 class="mb-3 text-xl font-semibold text-gray-800">ایمیل</h3>
              <p class="text-gray-600">info@mohammadelectronic.com</p>
              <p class="text-gray-600">support@mohammadelectronic.com</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Delivery Information Section -->
      <section v-if="settings?.origin_cities?.length || settings?.conditions?.specific_cities?.length" class="delivery-info-section py-16">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="mb-4 text-3xl font-bold text-gray-800">اطلاعات ارسال</h2>
          </div>
          
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <!-- Origin Cities -->
            <div v-if="settings?.origin_cities?.length" class="rounded-xl bg-blue-50 p-8">
              <h3 class="mb-4 text-xl font-semibold text-gray-800">شهرهای مبدا ارسال</h3>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="city in settings.origin_cities" 
                  :key="city"
                  class="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800"
                >
                  {{ city }}
                </span>
              </div>
            </div>

            <!-- Special Delivery Cities -->
            <div v-if="settings?.conditions?.specific_cities?.length" class="rounded-xl bg-green-50 p-8">
              <h3 class="mb-4 text-xl font-semibold text-gray-800">
                شهرهای دارای تخفیف ویژه
                <span v-if="settings?.discount?.value" class="text-green-600">
                  ({{ settings.discount.value }}{{ settings.discount.mode === 'percent' ? '%' : ' تومان' }})
                </span>
              </h3>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="city in settings.conditions.specific_cities" 
                  :key="city"
                  class="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800"
                >
                  {{ city }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Form Section -->
      <section class="contact-form-section py-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <!-- Contact Form -->
            <div>
              <h2 class="mb-6 text-3xl font-bold text-gray-800">فرم تماس</h2>
              <p class="mb-8 text-lg text-gray-600">
                پیام خود را برای ما ارسال کنید و در اسرع وقت پاسخ شما را خواهیم
                داد
              </p>

              <form class="space-y-6">
                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label class="mb-2 block text-sm font-medium text-gray-700"
                      >نام و نام خانوادگی</label
                    >
                    <input
                      type="text"
                      class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                      placeholder="نام خود را وارد کنید"
                    />
                  </div>
                  <div>
                    <label class="mb-2 block text-sm font-medium text-gray-700"
                      >شماره تلفن</label
                    >
                    <input
                      type="tel"
                      class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                      placeholder="شماره تلفن خود را وارد کنید"
                    />
                  </div>
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700"
                    >ایمیل</label
                  >
                  <input
                    type="email"
                    class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                    placeholder="ایمیل خود را وارد کنید"
                  />
                </div>

                <!-- City Selection -->
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700"
                    >شهر محل سکونت</label
                  >
                  <select
                    class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                  >
                    <option value="">شهر خود را انتخاب کنید</option>
                    <optgroup v-if="settings?.origin_cities?.length" label="شهرهای مبدا">
                      <option v-for="city in settings.origin_cities" :key="city" :value="city">
                        {{ city }}
                      </option>
                    </optgroup>
                    <optgroup v-if="settings?.conditions?.specific_cities?.length" label="شهرهای دارای تخفیف">
                      <option v-for="city in settings.conditions.specific_cities" :key="city" :value="city">
                        {{ city }} (تخفیف ویژه)
                      </option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700"
                    >موضوع</label
                  >
                  <select
                    class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                  >
                    <option value="">موضوع پیام خود را انتخاب کنید</option>
                    <option value="consultation">مشاوره خرید</option>
                    <option value="order">سفارش محصول</option>
                    <option value="support">پشتیبانی فنی</option>
                    <option value="complaint">شکایت</option>
                    <option v-if="settings?.discount?.value" value="discount">استعلام تخفیف</option>
                    <option value="other">سایر</option>
                  </select>
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700"
                    >پیام</label
                  >
                  <textarea
                    rows="6"
                    class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                    placeholder="پیام خود را بنویسید..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="w-full rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                >
                  ارسال پیام
                </button>
              </form>
            </div>

            <!-- Working Hours & Additional Info -->
            <div class="space-y-8">
              <!-- Working Hours -->
              <div
                class="rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 p-8"
              >
                <h3 class="mb-6 text-2xl font-bold text-gray-800">
                  ساعات کاری
                </h3>
                <div class="space-y-4">
                  <div class="flex justify-between">
                    <span class="font-medium text-gray-700"
                      >شنبه تا چهارشنبه:</span
                    >
                    <span class="text-gray-600">۹:۰۰ - ۱۸:۰۰</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="font-medium text-gray-700">پنج‌شنبه:</span>
                    <span class="text-gray-600">۹:۰۰ - ۱۴:۰۰</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="font-medium text-gray-700">جمعه:</span>
                    <span class="text-red-500">تعطیل</span>
                  </div>
                </div>
              </div>

              <!-- Quick Contact -->
              <div
                class="rounded-xl bg-gradient-to-br from-green-50 to-blue-50 p-8"
              >
                <h3 class="mb-6 text-2xl font-bold text-gray-800">تماس سریع</h3>
                <div class="space-y-4">
                  <div class="flex items-center space-x-3 space-x-reverse">
                    <div
                      class="flex h-10 w-10 items-center justify-center rounded-full bg-green-100"
                    >
                      <svg
                        class="h-5 w-5 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p class="text-sm text-gray-500">تماس فوری</p>
                      <p class="font-semibold text-gray-800">09123456789</p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-3 space-x-reverse">
                    <div
                      class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100"
                    >
                      <svg
                        class="h-5 w-5 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                        />
                        <path
                          d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p class="text-sm text-gray-500">ایمیل سریع</p>
                      <p class="font-semibold text-gray-800">
                        support@mohammadelectronic.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Services -->
              <div
                class="rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 p-8"
              >
                <h3 class="mb-6 text-2xl font-bold text-gray-800">خدمات ما</h3>
                <ul class="space-y-3">
                  <li class="flex items-center space-x-3 space-x-reverse">
                    <svg
                      class="h-5 w-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="text-gray-700">مشاوره تخصصی رایگان</span>
                  </li>
                  <li class="flex items-center space-x-3 space-x-reverse">
                    <svg
                      class="h-5 w-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="text-gray-700">
                      ارسال سریع 
                      <span v-if="settings?.origin_cities?.length">
                        از {{ settings.origin_cities.join('، ') }}
                      </span>
                    </span>
                  </li>
                  <li class="flex items-center space-x-3 space-x-reverse">
                    <svg
                      class="h-5 w-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="text-gray-700">گارانتی اصالت کالا</span>
                  </li>
                  <li class="flex items-center space-x-3 space-x-reverse">
                    <svg
                      class="h-5 w-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="text-gray-700">پشتیبانی پس از فروش</span>
                  </li>
                  <li v-if="settings?.discount?.value && settings?.conditions?.specific_cities?.length" class="flex items-center space-x-3 space-x-reverse">
                    <svg
                      class="h-5 w-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="text-gray-700">
                      تخفیف ویژه {{ settings.discount.value }}{{ settings.discount.mode === 'percent' ? '%' : ' تومان' }}
                      برای {{ settings.conditions.specific_cities.join('، ') }}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Map Section -->
      <section class="map-section bg-gray-50 py-16">
        <div class="container mx-auto px-4">
          <div class="mb-12 text-center">
            <h2 class="mb-4 text-3xl font-bold text-gray-800">
              موقعیت فروشگاه
            </h2>
            <p class="text-lg text-gray-600">
              فروشگاه محمد الکترونیک 
              <span v-if="settings?.origin_cities?.length">
                در {{ settings.origin_cities.join('، ') }}
              </span>
              واقع شده است
            </p>
          </div>

          <div class="overflow-hidden rounded-2xl shadow-lg">
            <div class="flex h-96 items-center justify-center bg-gray-300">
              <div class="text-center text-gray-600">
                <svg
                  class="mx-auto mb-4 h-16 w-16"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p class="text-lg font-medium">
                  نقشه در اینجا نمایش داده خواهد شد
                </p>
                <p class="text-sm">
                  <span v-if="settings?.origin_cities?.length">
                    {{ settings.origin_cities.join('، ') }}، 
                  </span>
                  خیابان انقلاب، پلاک ۱۲۳
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup>
import settingsApi from '~/api/settings-api';

const { data: settings } = await useAsyncData('settings', () =>
  settingsApi.getSettingById(1)
)
useHead({
  title: 'تماس با ما - فروشگاه محمد الکترونیک',
  meta: [
    {
      name: 'description',
      content:
        'برای مشاوره، سفارش و کسب اطلاعات بیشتر درباره محصولات الکترونیکی با فروشگاه محمد الکترونیک تماس بگیرید. ارائه مشاوره رایگان و خدمات پس از فروش.',
    },
  ],
})
</script>
