<template>
    <footer class="bg-[#1F032F] text-white">
      <!-- Social Media Bar -->
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
     
        <div class="flex flex-col items-center gap-2">
            <p class="text-white w-[400px] ">برای دریافت آخرین اخبار و تخفیف های جدید، ایمیل خود را وارد نمایید</p>
          <form class="flex gap-2 items-center" @submit.prevent="subscribeNewsletter">
            <input 
              v-model="email"
              type="email" 
              placeholder="ایمیل شما" 
              class="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none w-96"
            />
            <button 
              type="submit" 
              class="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-md transition duration-300"
            >
              ثبت
            </button>
          </form>
       
        </div>
        <div class="flex flex-col items-center space-x-2 rtl:space-x-reverse">
          <h3 class="text-white">شبکه های اجتماعی</h3>
          <div class="flex space-x-2 rtl:space-x-reverse">
            <NuxtLink to="https://twitter.com" class="bg-gray-700 p-2 rounded-md hover:bg-gray-600">
                <Twitter class="size-5 text-white"/>
            </NuxtLink>
            <NuxtLink to="https://instagram.com" class="bg-gray-700 p-2 rounded-md hover:bg-gray-600">
                <Instagram />
            </NuxtLink>
            <NuxtLink to="https://telegram.org" class="bg-gray-700 p-2 rounded-md hover:bg-gray-600">
                <Send />
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- Main Footer Content -->
      <div class="bg-white text-gray-800 py-8">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            
            <!-- Services Column -->
            <div>
              <h3 class="text-xl font-bold mb-4 text-purple-800">خدمات</h3>
              <ul class="space-y-2">
                <li>
                  <NuxtLink to="/services/price" class="text-gray-700 hover:text-purple-600">
                    قیمت آی سی
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services/selection" class="text-gray-700 hover:text-purple-600">
                    انتخاب هوشمند آی سی
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services/selection" class="text-gray-700 hover:text-purple-600">
                    انتخاب هوشمند آی سی
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services/selection" class="text-gray-700 hover:text-purple-600">
                    انتخاب هوشمند آی سی
                  </NuxtLink>
                </li>
              </ul>
            </div>
            
            <!-- IC Purchase Column -->
            <div>
              <h3 class="text-xl font-bold mb-4 text-purple-800">خرید آی سی</h3>
              <ul class="space-y-2">
                <li>
                  <NuxtLink to="/ic/price" class="text-gray-700 hover:text-purple-600">
                    قیمت آی سی
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/ic/price" class="text-gray-700 hover:text-purple-600">
                    قیمت آی سی
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/ic/warranty" class="text-gray-700 hover:text-purple-600">
                    گارانتی
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/ic/installment" class="text-gray-700 hover:text-purple-600">
                    خرید اقساطی
                  </NuxtLink>
                </li>
              </ul>
            </div>
            
            <!-- Online Store Column -->
            <div>
              <h3 class="text-xl font-bold mb-4 text-purple-800">فروشگاه اینترنتی</h3>
              <ul class="space-y-2">
                <li>
                  <NuxtLink to="/store/about" class="text-gray-700 hover:text-purple-600">
                    درباره ما
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/store/contact" class="text-gray-700 hover:text-purple-600">
                    تماس با ما
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/store/terms" class="text-gray-700 hover:text-purple-600">
                    شرایط و قوانین
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/store/comments" class="text-gray-700 hover:text-purple-600">
                    نظرات کاربران
                  </NuxtLink>
                </li>
              </ul>
            </div>
            
            <!-- Support Column -->
            <div>
              <h3 class="text-xl font-bold mb-4 text-purple-800">پشتیبانی</h3>
              <p class="text-gray-700 mb-2">شنبه تا پنجشنبه ۹ الی ۱۸:۳۰</p>
              <div class="mb-2">
                <a href="mailto:Merqc.Shop@Gmail.Com" class="text-gray-700 hover:text-purple-600 flex items-center justify-center gap-2">
                  <Icon name="lucide:mail" class="text-purple-600" />
                  <span>Merqc.Shop@Gmail.Com</span>
                </a>
              </div>
              <div class="mb-2">
                <a href="tel:+989123456789" class="text-gray-700 hover:text-purple-600 flex items-center justify-center gap-2">
                  <Icon name="lucide:phone" class="text-purple-600" />
                  <span>تلفن امور مشتریان: ۰۹۱۲۳۴۵۶۷۸۹</span>
                </a>
              </div>
              <h4 class="text-lg font-bold mt-4 mb-2 text-purple-800">آدرس فروشگاه</h4>
              <p class="text-gray-700">
                اصفهان، خیابان هاتف، بازار بزرگ، پاساژ صنف الکترونیک، مجتمع الکترونیک
              </p>
            </div>
          </div>
          
          <!-- Trust Badges -->
          <div class="flex justify-center items-center mt-8 space-x-4 rtl:space-x-reverse">
            <div class="bg-gray-100 p-2 rounded-lg">
              <img src="" alt="E-Namad" class="h-16 w-auto" />
            </div>
            <div class="bg-gray-100 p-2 rounded-lg">
              <img src="" alt="Samandehi" class="h-16 w-auto" />
            </div>
            <div class="bg-gray-100 p-2 rounded-lg">
              <img src="" alt="Electronic Union" class="h-16 w-auto" />
            </div>
          </div>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="bg-purple-950 py-4 text-center">
        <p class="text-gray-300">
          تمامی حقوق محفوظ و متعلق به این سایت محفوظ می‌باشد © {{ new Date().getFullYear() }}
        </p>
      </div>
    </footer>
  </template>
  
  <script setup>
  import Instagram from "lucide-vue-next"
  import Twitter from "lucide-vue-next"
  import Send from "lucide-vue-next"
  const email = ref('');
  
  const subscribeNewsletter = () => {
    // Handle newsletter subscription logic here
    console.log('Subscribing email:', email.value);
    // Reset the form
    email.value = '';
  }
  </script>