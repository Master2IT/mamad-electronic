<template>
  <NuxtLayout name="shop">
    <div class="about-page">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container mx-auto px-4 py-16">
          <div class="text-center">
            <h1 class="mb-6 text-4xl font-bold text-gray-800 md:text-6xl">
              درباره ما
            </h1>
            <p class="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
              ما فروشگاه معتبر محمد الکترونیک هستیم که با بیش از ۱۰ سال تجربه در زمینه 
              فروش قطعات الکترونیکی و خدمات فنی به مشتریان عزیز خدمت‌رسانی می‌کنیم
            </p>
          </div>
        </div>
      </section>

      <!-- Mission Section -->
      <section class="mission-section bg-gray-50 py-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 class="mb-6 text-3xl font-bold text-gray-800">ماموریت ما</h2>
              <p class="mb-6 text-lg leading-relaxed text-gray-600">
                هدف ما ارائه باکیفیت‌ترین قطعات الکترونیکی و تجهیزات فنی همراه با 
                مشاوره تخصصی و خدمات پس از فروش بی‌نظیر است. ما بر کیفیت محصولات، 
                قیمت مناسب و رضایت مشتریان تمرکز داریم.
              </p>
              <div class="flex items-center space-x-4 space-x-reverse">
                <div class="rounded-lg bg-blue-500 px-6 py-3 text-white">
                  <span class="font-semibold">کیفیت</span>
                </div>
                <div class="rounded-lg bg-green-500 px-6 py-3 text-white">
                  <span class="font-semibold">تنوع</span>
                </div>
                <div class="rounded-lg bg-purple-500 px-6 py-3 text-white">
                  <span class="font-semibold">اعتماد</span>
                </div>
              </div>
            </div>
            <div class="relative">
              <div
                class="flex h-96 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600"
              >
                <div class="text-center text-white">
                  <div
                    class="bg-opacity-20 mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white"
                  >
                    <svg
                      class="h-12 w-12"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 class="text-2xl font-bold">بیش از ۵۰۰۰ مشتری راضی</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Values Section -->
      <section class="values-section py-16">
        <div class="container mx-auto px-4">
          <div class="mb-12 text-center">
            <h2 class="mb-4 text-3xl font-bold text-gray-800">ارزش‌های ما</h2>
            <p class="mx-auto max-w-2xl text-lg text-gray-600">
              این ارزش‌ها راهنمای ما در تمام خدمات و فعالیت‌های تجاری‌مان هستند
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div
              class="rounded-xl bg-white p-6 text-center shadow-lg transition-shadow hover:shadow-xl"
            >
              <div
                class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100"
              >
                <svg
                  class="h-8 w-8 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                  />
                </svg>
              </div>
              <h3 class="mb-3 text-xl font-semibold text-gray-800">اصالت کالا</h3>
              <p class="text-gray-600">
                تمام محصولات ما اصل و اورجینال بوده و از معتبرترین برندهای 
                جهانی تهیه و عرضه می‌شوند
              </p>
            </div>

            <div
              class="rounded-xl bg-white p-6 text-center shadow-lg transition-shadow hover:shadow-xl"
            >
              <div
                class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
              >
                <svg
                  class="h-8 w-8 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="mb-3 text-xl font-semibold text-gray-800">گارانتی معتبر</h3>
              <p class="text-gray-600">
                تمام محصولات دارای گارانتی معتبر و خدمات پس از فروش تخصصی 
                توسط کارشناسان مجرب ما هستند
              </p>
            </div>

            <div
              class="rounded-xl bg-white p-6 text-center shadow-lg transition-shadow hover:shadow-xl"
            >
              <div
                class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100"
              >
                <svg
                  class="h-8 w-8 text-purple-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"
                  />
                </svg>
              </div>
              <h3 class="mb-3 text-xl font-semibold text-gray-800">مشاوره رایگان</h3>
              <p class="text-gray-600">
                کارشناسان ما آماده ارائه مشاوره رایگان برای انتخاب بهترین 
                قطعات متناسب با نیازهای شما هستند
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="team-section bg-gray-50 py-16">
        <div class="container mx-auto px-4">
          <div class="mb-12 text-center">
            <h2 class="mb-4 text-3xl font-bold text-gray-800">تیم ما</h2>
            <p class="mx-auto max-w-2xl text-lg text-gray-600">
              تیمی از متخصصان باتجربه در زمینه الکترونیک که با دانش فنی روز 
              و تعهد کامل در خدمت شما هستند
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div
              class="rounded-xl bg-white p-6 text-center shadow-lg transition-shadow hover:shadow-xl"
            >
              <div
                class="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600"
              >
                <span class="text-2xl font-bold text-white">م</span>
              </div>
              <h3 class="mb-2 font-semibold text-gray-800">مدیر فنی</h3>
              <p class="text-sm text-gray-600">متخصص تعمیرات الکترونیک</p>
            </div>

            <div
              class="rounded-xl bg-white p-6 text-center shadow-lg transition-shadow hover:shadow-xl"
            >
              <div
                class="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600"
              >
                <span class="text-2xl font-bold text-white">ف</span>
              </div>
              <h3 class="mb-2 font-semibold text-gray-800">مسئول فروش</h3>
              <p class="text-sm text-gray-600">کارشناس قطعات الکترونیکی</p>
            </div>

            <div
              class="rounded-xl bg-white p-6 text-center shadow-lg transition-shadow hover:shadow-xl"
            >
              <div
                class="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-purple-600"
              >
                <span class="text-2xl font-bold text-white">ت</span>
              </div>
              <h3 class="mb-2 font-semibold text-gray-800">تکنسین</h3>
              <p class="text-sm text-gray-600">متخصص تست و آزمایش</p>
            </div>

            <div
              class="rounded-xl bg-white p-6 text-center shadow-lg transition-shadow hover:shadow-xl"
            >
              <div
                class="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600"
              >
                <span class="text-2xl font-bold text-white">پ</span>
              </div>
              <h3 class="mb-2 font-semibold text-gray-800">پشتیبانی</h3>
              <p class="text-sm text-gray-600">مسئول خدمات مشتریان</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact CTA Section -->
      <section class="cta-section py-16">
        <div class="container mx-auto px-4">
          <div
            class="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center text-white"
          >
            <h2 class="mb-4 text-3xl font-bold">برای خرید قطعات الکترونیکی با ما تماس بگیرید</h2>
            <p class="mb-8 text-xl opacity-90">
              برای مشاوره، سفارش و یا کسب اطلاعات بیشتر درباره محصولات ما با کارشناسان ما تماس بگیرید
            </p>
            <div class="flex flex-col justify-center gap-4 sm:flex-row">
              <NuxtLink
                to="/contact"
                class="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100"
              >
                تماس با ما
              </NuxtLink>
              <NuxtLink
                to="/products"
                class="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600"
              >
                مشاهده محصولات
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>
