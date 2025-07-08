<template>
  <NuxtLayout name="shop">
    <div class="terms-page">
      <!-- Hero Section -->
      <section class="hero-section">
        <UContainer class="py-16">
          <div class="text-center">
            <h1 class="mb-6 text-4xl font-bold text-gray-800 md:text-6xl">
              قوانین و مقررات
            </h1>
            <p class="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
              با مطالعه این قوانین و مقررات، شما با شرایط استفاده از خدمات
              فروشگاه محمد الکترونیک آشنا خواهید شد
            </p>
          </div>
        </UContainer>
      </section>

      <!-- Terms Content -->
      <UContainer>
          <div class="mx-auto max-w-4xl">
            <!-- General Terms -->
            <UCard class="mb-12">
              <template #header>
                <h2 class="text-2xl font-bold text-gray-800">شرایط عمومی</h2>
              </template>

              <div class="prose prose-lg max-w-none text-gray-600">
                <p class="mb-4">
                  با استفاده از خدمات فروشگاه محمد الکترونیک، شما موافقت خود را
                  با تمامی قوانین و مقررات زیر اعلام می‌کنید. این قوانین در
                  راستای حفظ حقوق مشتریان و ارائه بهترین خدمات تنظیم شده‌اند.
                </p>
                <ul class="list-disc space-y-2 pr-6">
                  <li>تمامی اطلاعات ارائه شده باید صحیح و کامل باشد</li>
                  <li>مسئولیت حفظ اطلاعات کاربری بر عهده مشتری است</li>
                  <li>استفاده از خدمات فقط برای اهداف قانونی مجاز است</li>
                  <li>
                    فروشگاه حق تغییر قوانین را با اطلاع قبلی محفوظ می‌دارد
                  </li>
                </ul>
              </div>
            </UCard>

            <!-- Orders and Payments -->
            <UCard class="mb-12">
              <template #header>
                <h2 class="text-2xl font-bold text-gray-800">
                  سفارشات و پرداخت
                </h2>
              </template>

              <div class="space-y-6">
                <div>
                  <h3 class="mb-3 text-lg font-semibold text-gray-700">
                    ثبت سفارش
                  </h3>
                  <p class="text-gray-600">
                    پس از ثبت سفارش، یک ایمیل تأیید برای شما ارسال خواهد شد. در
                    صورت عدم دریافت ایمیل، لطفاً با پشتیبانی تماس بگیرید.
                  </p>
                </div>
                <div>
                  <h3 class="mb-3 text-lg font-semibold text-gray-700">
                    پرداخت
                  </h3>
                  <ul class="list-disc space-y-2 pr-6 text-gray-600">
                    <li>پرداخت از طریق درگاه‌های معتبر بانکی انجام می‌شود</li>
                    <li>امکان پرداخت نقدی هنگام تحویل کالا وجود دارد</li>
                    <li>
                      در صورت لغو سفارش، مبلغ حداکثر تا ۷۲ ساعت بازگردانده
                      می‌شود
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="mb-3 text-lg font-semibold text-gray-700">
                    قیمت‌گذاری
                  </h3>
                  <p class="text-gray-600">
                    قیمت‌های نمایش داده شده شامل مالیات بر ارزش افزوده است.
                    فروشگاه حق تغییر قیمت‌ها را محفوظ می‌دارد.
                  </p>
                </div>
              </div>
            </UCard>

            <!-- Delivery -->
            <UCard class="mb-12">
              <template #header>
                <h2 class="text-2xl font-bold text-gray-800">ارسال و تحویل</h2>
              </template>

              <div class="space-y-4">
                <UAlert
                  icon="i-heroicons-clock"
                  color="blue"
                  variant="soft"
                  title="زمان ارسال"
                  description="سفارشات معمولاً ظرف ۲۴ تا ۴۸ ساعت آماده ارسال می‌شوند."
                />
                <UAlert
                  icon="i-heroicons-truck"
                  color="green"
                  variant="soft"
                  title="ارسال در تهران"
                  description="ارسال رایگان برای سفارشات بالای ۵۰۰ هزار تومان در تهران."
                />
                <UAlert
                  icon="i-heroicons-map-pin"
                  color="orange"
                  variant="soft"
                  title="ارسال به شهرستان"
                  description="ارسال به شهرستان از طریق پست پیشتاز یا باربری معتبر."
                />
              </div>
            </UCard>

            <!-- Returns and Warranty -->
            <UCard class="mb-12">
              <template #header>
                <h2 class="text-2xl font-bold text-gray-800">
                  مرجوعی و گارانتی
                </h2>
              </template>

              <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h3 class="mb-3 text-lg font-semibold text-gray-700">
                    شرایط مرجوعی
                  </h3>
                  <ul class="list-disc space-y-2 pr-6 text-gray-600">
                    <li>حداکثر ۷ روز پس از خرید</li>
                    <li>کالا باید در بسته‌بندی اصلی باشد</li>
                    <li>فاکتور خرید الزامی است</li>
                    <li>کالا نباید استفاده شده باشد</li>
                  </ul>
                </div>
                <div>
                  <h3 class="mb-3 text-lg font-semibold text-gray-700">
                    گارانتی
                  </h3>
                  <ul class="list-disc space-y-2 pr-6 text-gray-600">
                    <li>گارانتی اصالت کلیه محصولات</li>
                    <li>گارانتی تعویض کالای معیوب</li>
                    <li>پشتیبانی فنی رایگان</li>
                    <li>خدمات پس از فروش</li>
                  </ul>
                </div>
              </div>
            </UCard>

            <!-- Privacy Policy -->
            <UCard class="mb-12">
              <template #header>
                <h2 class="text-2xl font-bold text-gray-800">حریم خصوصی</h2>
              </template>

              <div class="space-y-4 text-gray-600">
                <p>
                  فروشگاه محمد الکترونیک متعهد به حفظ حریم خصوصی مشتریان خود
                  است. اطلاعات شخصی شما محفوظ بوده و فقط برای بهبود خدمات
                  استفاده می‌شود.
                </p>
                <UCard
                  :ui="{ body: { padding: 'p-4' }, background: 'bg-gray-50' }"
                >
                  <h3 class="mb-2 font-semibold text-gray-800">
                    اطلاعات جمع‌آوری شده:
                  </h3>
                  <ul class="list-disc space-y-1 pr-6 text-sm">
                    <li>نام و نام خانوادگی</li>
                    <li>شماره تماس و آدرس ایمیل</li>
                    <li>آدرس پستی برای ارسال</li>
                    <li>تاریخچه خریدها</li>
                  </ul>
                </UCard>
                <p class="text-sm">
                  این اطلاعات هرگز به اشخاص ثالث فروخته یا واگذار نمی‌شود.
                </p>
              </div>
            </UCard>

            <!-- Support -->
            <!-- <UCard
              :ui="{
                body: {
                  background: 'bg-gradient-to-r from-blue-600 to-purple-600',
                  padding: 'p-8',
                },
              }"
            >
              <div class="text-center text-white">
                <h2 class="mb-4 text-2xl font-bold">سوالی دارید؟</h2>
                <p class="mb-6 text-lg opacity-90">
                  برای کسب اطلاعات بیشتر درباره قوانین و مقررات با ما تماس
                  بگیرید
                </p>
                <div class="flex flex-col justify-center gap-4 sm:flex-row">
                  <UButton
                    to="/contact"
                    color="white"
                    variant="solid"
                    size="lg"
                  >
                    تماس با ما
                  </UButton>
                  <UButton
                    href="tel:+982177889900"
                    color="white"
                    variant="outline"
                    size="lg"
                  >
                    ۰۲۱-۷۷۸۸۹۹۰۰
                  </UButton>
                </div>
              </div>
            </UCard> -->
          </div>
        </UContainer>
    </div>
  </NuxtLayout>
</template>

<script setup>
// Set page title and meta description
useHead({
  title: 'قوانین و مقررات - فروشگاه محمد الکترونیک',
  meta: [
    {
      name: 'description',
      content:
        'قوانین و مقررات فروشگاه محمد الکترونیک شامل شرایط خرید، ارسال، مرجوعی، گارانتی و حریم خصوصی. مطالعه شرایط استفاده از خدمات فروشگاه.',
    },
  ],
})
</script>
